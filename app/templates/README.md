# <%= repoName %>

[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
[![Dependency Status](https://img.shields.io/david/<%= githubUsername %>/<%= repoName %>.svg)](#)
[![DevDependency Status](https://img.shields.io/david/<%= githubUsername %>/<%= repoName %>.svg)](#)
[![NPM Downloads](https://img.shields.io/npm/dm/<%= repoName %>.svg)](#)
[![Travis Build Status](https://img.shields.io/travis/<%= githubUsername %>/<%= repoName %>.svg)](#)
<% if (codecov) { %>[![Codecov branch](https://img.shields.io/codecov/c/github/<%= githubUsername %>/<%= repoName %>.svg)](#)<% } %>

> <%= moduleDescription %>

## Install

```
$ npm install <%= moduleName %>
```

## Usage

```js
const <%= camelModuleName %> = require('<%= moduleName %>');

<%= camelModuleName %>('unicorns');
//=> 'unicorns & rainbows'
```

## API

### <%= camelModuleName %>(input, [options])

#### input

Type: `string`

Lorem ipsum.

#### options

##### foo

Type: `boolean`<br>
Default: `false`

Lorem ipsum.<% if (cli) { %>

## CLI

```
$ npm install --global <%= moduleName %>
```

```
$ <%= repoName %> --help

  Usage
    <%= repoName %> [input]

  Options
    --foo  Lorem ipsum [Default: false]

  Examples
    $ <%= repoName %>
    unicorns & rainbows
    $ <%= repoName %> ponies
    ponies & rainbows
```<% } %>
