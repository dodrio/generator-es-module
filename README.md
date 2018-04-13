# generator-nm

[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
[![Dependency Status](https://img.shields.io/david/m31271n/generator-es-module.svg)](#)
[![DevDependency Status](https://img.shields.io/david/m31271n/generator-es-module.svg)](#)
[![Travis Build Status](https://img.shields.io/travis/m31271n/generator-es-module/master.svg)](#)
[![NPM Downloads](https://img.shields.io/npm/dm/m31271n/generator-es-module.svg)](#)

Features:

* [Prettier](https://prettier.io/) code formatter
* Optional [CLI](http://en.wikipedia.org/wiki/Command-line_interface).

## Install

```
$ npm install -g yo generator-es-module
```

## Usage

With [yo](https://github.com/yeoman/yo):

```
$ yo es-module
```

There are multiple command-line options available:

```
$ yo nm --help

Usage:
  yo nm [options]

Options:
  -h,   --help          # Print the generator's options and usage
        --skip-cache    # Do not remember prompt answers                      Default: false
        --skip-install  # Do not automatically install dependencies           Default: false
        --org           # Publish to a GitHub organization account
        --cli           # Add a CLI
        --coverage      # Add code coverage with nyc
        --codecov     # Upload coverage to codecov.io (implies coverage)
```

The `--org` option takes a string value (i.e. `--org=2players`). All others are boolean flags and can be negated with the `no` prefix (i.e. `--no-codecov`). You will be prompted for any options not passed on the command-line.

## Tip

Use [chalk](https://github.com/sindresorhus/chalk) if you want colors in your CLI.

## License

[MIT](https://stack.m31271n.com/licenses/MIT.txt) © [m31271n](http://stack.m31271n.com)
