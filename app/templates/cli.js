#!/usr/bin/env node

'use strict'

const yargs = require('yargs')
const <%= camelModuleName %> = require('.')

const argv = yargs
      .usage('Usage: <%= repoName %> -w [word]')
      .help('h')
      .argv

console.log(<%= camelModuleName %>(argv.w || 'unicorns'))
