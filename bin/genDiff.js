#!/usr/bin/env node
import genDiff from '../src/index.js'
import { Command } from 'commander/esm.mjs';
import path from 'path';
import { readFileSync } from 'fs';

const packageConfig = JSON.parse(readFileSync(path.resolve('./package.json')))

const program = new Command();
program
  .description(packageConfig.description)
  .version(packageConfig.version)
  .option('-f, --format [type]', 'output format')
  .argument('<filepath1>')
  .argument('<filepath2>')
  .action((filepath1, filepath2) => {
    const absPath1 = path.resolve(filepath1);
    const absPath2 = path.resolve(filepath2);
    const file1 = JSON.parse(readFileSync(absPath1, 'UTF-8'));
    const file2 = JSON.parse(readFileSync(absPath2, 'UTF-8'));
    genDiff(file1, file2)
  })
program.parse();