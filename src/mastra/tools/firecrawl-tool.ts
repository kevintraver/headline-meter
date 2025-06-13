import { createTool } from '@mastra/core'
import { z } from 'zod'
import FirecrawlApp from '@mendable/firecrawl-js'

const firecrawlApp = new FirecrawlApp({ apiKey: process.env.FIRECRAWL_API_KEY })

export const firecrawlTool = createTool({
  id: 'firecrawl',
  description:
    'Scrapes article content and metadata from a URL using Firecrawl',
  inputSchema: z.object({
    url: z.string().url().describe('The URL of the article to scrape')
  }),
  outputSchema: z.object({
    title: z.string().describe('The title of the article'),
    content: z.string().describe('The markdown content of the article')
  }),
  execute: async ({ context }) => {
    const results = await firecrawlApp.scrapeUrl(context.url, {
      formats: ['json'],
      jsonOptions: {
        schema: z.object({
          full_article_body: z.string()
        })
      }
    })
    if (!results.success) {
      throw new Error(`Failed to scrape: ${results.error}`)
    }
    return {
      title: results.metadata?.title || '',
      content: results.json?.full_article_body || ''
    }
  }
})
