/* eslint-disable no-console */
import express, { Request, Response } from 'express';
import next from 'next';
import { NotionDB } from './lib/NotionDB';

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

const notionDb = new NotionDB(process.env.NOTION_API_KEY, process.env.NOTION_DATABASE_ID);

export const server = async () => {
  await app.prepare();

  const expressServer = express();

  expressServer.get('/api/notiondb', async (req: Request, res: Response) => {
    const results = await notionDb.queryDatabase();
    res.json(results);
  });

  expressServer.get('*', (req: Request, res: Response) => handle(req, res));

  expressServer.listen(process.env.PORT || 3000, (err?: any) => {
    if (err) throw err;
    console.log('> Ready on http://localhost:3000');
  });
};

// start the server if this file is executed directly
if (require.main === module) {
  server();
}
