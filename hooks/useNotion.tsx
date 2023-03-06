import { useState, useEffect } from 'react';
import { Client } from '@notionhq/client';

const notion = new Client({
  auth: 'secret_fEpq9U3i2fo1XhxHHr0Ud705pYH7KQ0QuHpY6Uiwl3Y',
});

export const useNotionDatabase = (databaseId: string) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const getDatabase = async () => {
      const response = await notion.databases.query({
        database_id: databaseId,
      });

      setData(response.results);
    };

    getDatabase();
  }, [databaseId]);

  return data;
};

export const useNotionPage = (pageId: any) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const getPage = async () => {
      const response = await notion.pages.retrieve({
        page_id: pageId,
      });

      setData(response);
    };

    getPage();
  }, [pageId]);

  return data;
};

export const useNotionBlockChildren = (blockId: any) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const getBlockChildren = async () => {
      const response = await notion.blocks.children.list({
        block_id: blockId,
      });

      setData(response.results);
    };

    getBlockChildren();
  }, [blockId]);

  return data;
};
