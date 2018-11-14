'use strict'

const Generator = require('yeoman-generator')
const _s = require('underscore.string')
const utils = require('./utils')

module.exports = class extends Generator {
  constructor(...args) {
    super(...args)

    this.option('org', {
      type: String,
      description: 'Publish to a GitHub organization account',
    })

    this.option('transpile', {
      type: Boolean,
      description: 'Enable transpile',
    })

    this.option('coverage', {
      type: Boolean,
      description: 'Add code coverage with nyc',
    })

    this.option('codecov', {
      type: Boolean,
      description: 'Upload coverage to codecov.io (implies coverage)',
    })
  }

  init() {
    return this.prompt([
      {
        name: 'moduleName',
        message: 'Name:',
        default: _s.slugify(this.appname),
        filter: x => utils.slugifyPackageName(x),
      },
      {
        name: 'moduleDescription',
        message: 'Description:',
        default: 'A mediocre module.',
      },
      {
        name: 'githubName',
        message: 'GitHub username:',
        store: true,
        validate: x => (x.length > 0 ? true : 'You have to provide a username'),
        when: () => !this.options.org,
      },
      {
        name: 'transpile',
        message: 'Enable transpile?',
        type: 'confirm',
        default: Boolean(this.options['transpile']),
        when: () => this.options['transpile'] === undefined,
      },
      {
        name: 'nyc',
        message: 'Enable code coverage with nyc?',
        type: 'confirm',
        default: Boolean(this.options.codecov || this.options.coverage),
        when: () =>
          this.options.coverage === undefined &&
          this.options.codecov === undefined,
      },
      {
        name: 'codecov',
        message: 'Upload coverage to codecov.io?',
        type: 'confirm',
        default: false,
        when: x =>
          (x.nyc || this.options.coverage) &&
          this.options.codecov === undefined,
      },
    ])
      .then(props => {
        const or = (option, prop) =>
          this.options[option] === undefined
            ? props[prop || option]
            : this.options[option]

        const transpile = or('transpile')
        const codecov = or('codecov')
        const nyc = codecov || or('coverage', 'nyc')
        const repoName = utils.repoName(props.moduleName)

        const tpl = {
          moduleName: props.moduleName,
          moduleDescription: props.moduleDescription,
          camelModuleName: _s.camelize(repoName),
          githubName: this.options.org || props.githubName,
          repoName,
          name: this.user.git.name(),
          transpile,
          nyc,
          codecov,
        }
        return tpl
      })
      .then(tpl => {
        const mv = (from, to) => {
          this.fs.move(this.destinationPath(from), this.destinationPath(to))
        }

        this.fs.copyTpl(
          [
            `${this.templatePath()}/**`,
            '!**/_register.js',
            '!**/esm.js',
            '!**/main.js',
            '!**/babel.config.js',
          ],
          this.destinationPath(),
          tpl
        )

        if (tpl.transpile) {
          this.fs.copyTpl(
            this.templatePath('src/main.js'),
            this.destinationPath('src/index.js'),
            tpl
          )

          this.fs.copyTpl(
            this.templatePath('babel.config.js'),
            this.destinationPath('babel.config.js'),
            tpl
          )

          this.fs.copyTpl(
            this.templatePath('test/_register.js'),
            this.destinationPath('test/_register.js'),
            tpl
          )
        } else {
          this.fs.copyTpl(
            this.templatePath('src/esm.js'),
            this.destinationPath('src/index.js'),
            tpl
          )
          this.fs.copyTpl(
            this.templatePath('src/main.js'),
            this.destinationPath('src/main.js'),
            tpl
          )
        }

        mv('editorconfig', '.editorconfig')
        mv('gitattributes', '.gitattributes')
        mv('gitignore', '.gitignore')
        mv('eslintrc.yml', '.eslintrc.yml')
        mv('eslintrc.test.yml', 'test/.eslintrc.yml')
        mv('prettierrc.yml', '.prettierrc.yml')
        mv('travis.yml', '.travis.yml')
        mv('npmrc', '.npmrc')
        mv('_package.json', 'package.json')
      })
  }

  git() {
    this.spawnCommandSync('git', ['init'])
  }
}
