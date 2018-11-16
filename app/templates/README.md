# <%= repoName %>

[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
[![Module System](https://img.shields.io/badge/module%20system-ES%20Module-brightgreen.svg)](#)
[![Dependency Status](https://img.shields.io/david/<%= githubName %>/<%= repoName %>.svg)](#)
[![Travis Build Status](https://img.shields.io/travis/<%= githubName %>/<%= repoName %>.svg)](#)
[![NPM Downloads](https://img.shields.io/npm/dm/<%= moduleName %>.svg)](#)
<% if (codecov) { %>[![Codecov branch](https://img.shields.io/codecov/c/github/<%= githubName %>/<%= repoName %>.svg)](#)<% } %>

> <%= moduleDescription %>

## Install

```
$ npm install <%= moduleName %>
```

## Usage

```js
import <%= camelModuleName %> from '<%= moduleName %>'

<%= camelModuleName %>('unicorns')
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

Lorem ipsum.
