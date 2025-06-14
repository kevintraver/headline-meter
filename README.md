# Headline Meter

A AI content analysis tool that evaluates how well an article's content matches its title. Built with [Mastra](https://mastra.ai)

## Overview

Headline Meter analyzes the alignment between article titles and their content using the following scoring framework:

- **Sentence Coverage (50%)**: Percentage of sentences directly related to the title's topic
- **Topic Alignment (35%)**: Whether the article's main focus matches what the title promises
- **Content Match (15%)**: Alignment of subject matter, themes, and key points with reader expectations

## Features

- **Web Scraping**: Automatically extracts article content from URLs using Firecrawl
- **AI-Powered Analysis**: Uses Anthropic Claude for intelligent content evaluation
- **Detailed Scoring**: Provides scores from 0-100 with detailed explanations
- **Sentence-Level Analysis**: Counts and analyzes individual sentences for relevance
- **Workflow Automation**: Built-in workflow for end-to-end analysis

## Installation

```bash
# Clone the repository
git clone <repository-url>
cd headline-meter

# Install dependencies
pnpm install
```

## Configuration

Create a `.env` file in the root directory:

```env
FIRECRAWL_API_KEY=key
ANTHROPIC_API_KEY=key
```

## Usage

### Development

```bash
pnpm dev
```

### Build

```bash
pnpm build
```

### Start

```bash
pnpm start
```

## Scoring System

| Score Range | Description         | Sentence Coverage         |
| ----------- | ------------------- | ------------------------- |
| 90-100      | Excellent alignment | 80%+ relevant sentences   |
| 80-89       | Good alignment      | 65-79% relevant sentences |
| 70-79       | Adequate alignment  | 45-64% relevant sentences |
| 60-69       | Moderate alignment  | 30-44% relevant sentences |
| 40-59       | Poor alignment      | 15-29% relevant sentences |
| 0-39        | Very poor alignment | <15% relevant sentences   |

## Architecture

The project is built using Mastra's agent and workflow system:

- **Agent**: `headline-agent.ts` - The AI agent that performs content analysis
- **Workflow**: `headline-workflow.ts` - Orchestrates scraping and analysis
- **Tool**: `firecrawl-tool.ts` - Handles web scraping functionality

## Requirements

- Node.js
- npm
- Firecrawl API key
- Anthropic (or OpenAI) API key
