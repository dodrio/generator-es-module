#!/usr/bin/env node

'use strict';

const yargs = require('yargs');
const <%= camelModuleName %> = require('.');

const argv = yargs.usage('Usage: <%= repoName %> -w [word]').help('h').argv;
process.stdout.write(`${<%= camelModuleName %>(argv.w || 'unicorns')}\n`);
