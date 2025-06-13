import { createStep, createWorkflow } from '@mastra/core/workflows'
import { z } from 'zod'
import { headlineAgent } from '../agents/headline-agent'
import { firecrawlTool } from '../tools/firecrawl-tool'

const scrapeStep = createStep(firecrawlTool)

const analyzeHeadlineStep = createStep({
  id: 'analyze-headline',
  description: 'Analyzes how well an article content matches its title',
  inputSchema: z.object({
    title: z.string(),
    content: z.string()
  }),
  outputSchema: z.object({
    output: z.string()
  }),
  execute: async ({ inputData }) => {
    const { title, content } = inputData
    const prompt = `Analyze the following:
                    Title: ${title}
                    Article Content: ${content}`

    const { text } = await headlineAgent.generate([
      { role: 'user', content: prompt }
    ])

    return {
      output: text
    }
  }
})

export const headlineMeterWorkflow = createWorkflow({
  id: 'headline-meter-workflow',
  description: 'Evaluates how well an article content matches its title',
  inputSchema: z.object({
    url: z.string().describe('The URL of the article to analyze')
  }),
  outputSchema: z.object({
    output: z.string()
  })
})
  .then(scrapeStep)
  .then(analyzeHeadlineStep)
  .commit()
