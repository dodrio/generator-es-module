# generator-nm

[![Travis Build Status](https://img.shields.io/travis/2players/generator-nm/master.svg)]()
[![Dependency Status](https://img.shields.io/david/2players/generator-nm.svg)]()
[![DevDependency Status](https://img.shields.io/david/2players/generator-nm.svg)]()
[![NPM Downloads](https://img.shields.io/npm/dm/@2players/generator-nm.svg)]()

Features:
+ Optional [CLI](http://en.wikipedia.org/wiki/Command-line_interface).
+ [JavaScript Standard Style](https://standardjs.com/)

## Install

```
$ npm install -g yo @2players/generator-nm
```

## Usage

With [yo](https://github.com/yeoman/yo):

```
$ yo nm
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
        --coveralls     # Upload coverage to coveralls.io (implies coverage)
```

The `--org` option takes a string value (i.e. `--org=avajs`). All others are boolean flags and can be negated with the `no` prefix (i.e. `--no-coveralls`). You will be prompted for any options not passed on the command-line.

## Tip

Use [chalk](https://github.com/sindresorhus/chalk) if you want colors in your CLI.

* * *

<p align="center">Made with ❤ by <a href="https://2players.studio">2Players Studio</a></p>
