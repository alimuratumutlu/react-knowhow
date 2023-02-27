/* eslint-disable consistent-return */
export class NotionDB {
  apiKey: any;
  databaseId: any;
  baseUrl: string;
  constructor(apiKey: any, databaseId: any) {
    this.apiKey = apiKey;
    this.databaseId = databaseId;
    this.baseUrl = `https://api.notion.com/v1/databases/${this.databaseId}/query`;
  }

  async queryDatabase() {
    try {
      const response = await fetch(this.baseUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Notion-Version': '2021-08-16',
          Authorization: `Bearer ${this.apiKey}`,
        },
        body: JSON.stringify({
          filter: {},
          sorts: [
            {
              property: 'Last Modified',
              direction: 'descending',
            },
          ],
        }),
      });

      if (!response.ok) {
        throw new Error('Error querying Notion database');
      }

      const data = await response.json();
      return data.results;
    } catch (error) {
      console.error(error);
    }
  }
}
