#!/usr/bin/env node

import clear from 'clear';
import { Command } from 'commander';
import chalk from 'chalk';
import figlet from 'figlet';
import ClassificationPipeline from './classificationPipeline.js';
import SummarizationPipeline from './summarizationPipeline.js';

clear();
console.log(
  chalk.red(
    figlet.textSync('cli summarize', { horizontalLayout: 'full' })
  )
);

const command = new Command();
command
  .version('1.0.0')
  .description("An mini-CLI for summarizing text input")
  .usage('[OPTIONS]...')
  .option('-s, --summarize <text>', 'create summary of text input')
  .option('-S, --score <text>', 'create sentiment score of text input')
  .parse(process.argv);


if (!process.argv.slice(2).length) {
  command.outputHelp();
}

const options = command.opts();

if (options.score) {
  getClassification(options.score);
}

if (options.summarize) {
  getSummary(options.summarize);
}

async function getClassification(input) {
  const classifier = await ClassificationPipeline.getInstance();
  const response = await classifier(input);
  console.log(`input: ${input} \n score: ${JSON.stringify(response)}`);
}

async function getSummary(input) {
  const summarizer = await SummarizationPipeline.getInstance();
  const response = await summarizer(input);

  console.log(`input: ${input} \n summary: ${JSON.stringify(response)}`);
}

