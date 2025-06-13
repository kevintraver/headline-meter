import { Mastra } from '@mastra/core/mastra'
import { PinoLogger } from '@mastra/loggers'
import { LibSQLStore } from '@mastra/libsql'
import { headlineAgent } from './agents/headline-agent'
import { headlineMeterWorkflow } from './workflows/headline-workflow'

export const mastra = new Mastra({
  agents: { headlineAgent },
  workflows: { headlineMeterWorkflow },
  storage: new LibSQLStore({
    url: ':memory:'
  }),
  logger: new PinoLogger({
    name: 'Mastra',
    level: 'info'
  })
})
