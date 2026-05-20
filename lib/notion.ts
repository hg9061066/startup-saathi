import { Client } from '@notionhq/client';

// Initialize the Notion client
const notion = new Client({ auth: process.env.NOTION_API_KEY });

export const getPublishedArticles = async () => {
  // We keep the .env variable name the same so you don't have to change it!
  const dataSourceId = process.env.NOTION_DATABASE_ID;
  
  if (!dataSourceId) {
    console.warn("Missing NOTION_DATABASE_ID in environment variables.");
    return [];
  }

  try {
    // UPDATED: Using dataSources instead of databases for SDK v5+
    const response = await notion.dataSources.query({
      data_source_id: dataSourceId,
      filter: {
        property: 'Published',
        checkbox: {
          equals: true,
        },
      },
      sorts: [
        {
          property: 'Date',
          direction: 'descending',
        },
      ],
    });

    // Map the raw Notion data safely
    return response.results.map((rawPost: any) => {
      const properties = rawPost.properties;

      return {
        id: rawPost.id,
        title: properties?.Name?.title?.[0]?.plain_text || 'Untitled',
        slug: properties?.Slug?.rich_text?.[0]?.plain_text || rawPost.id,
        date: properties?.Date?.date?.start || 'No Date',
        category: properties?.Category?.select?.name || 'Uncategorized',
        excerpt: properties?.Excerpt?.rich_text?.[0]?.plain_text || '',
      };
    });
  } catch (error) {
    console.error("Error fetching articles from Notion:", error);
    return []; // Return an empty array so the website keeps running
  }
};