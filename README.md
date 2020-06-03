express
=======

An opinionated lightning-fast approach to building robust web applications 

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/express.svg)](https://npmjs.org/package/express)
[![Downloads/week](https://img.shields.io/npm/dw/express.svg)](https://npmjs.org/package/express)
[![License](https://img.shields.io/npm/l/express.svg)](https://github.com/alphaolomi/express/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g express
$ express COMMAND
running command...
$ express (-v|--version|version)
express/0.0.0 linux-x64 node-v13.14.0
$ express --help [COMMAND]
USAGE
  $ express COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`express hello [FILE]`](#express-hello-file)
* [`express help [COMMAND]`](#express-help-command)

## `express hello [FILE]`

describe the command here

```
USAGE
  $ express hello [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print

EXAMPLE
  $ express hello
  hello world from ./src/hello.ts!
```

_See code: [src/commands/hello.ts](https://github.com/alphaolomi/express/blob/v0.0.0/src/commands/hello.ts)_

## `express help [COMMAND]`

display help for express

```
USAGE
  $ express help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v3.0.1/src/commands/help.ts)_
<!-- commandsstop -->
