/**
 * Copyright 2017, Google, Inc.
 * Licensed under the Apache License, Version 2.0 (the "License")
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict';

require('colors');

const EXAMPLES = require('../../examples');

const COMMAND = `functions logs ${'<command>'.yellow} ${'[options]'.yellow}`;
const DESCRIPTION = 'Manages Emulator logs access.';
const USAGE = `Usage:
  ${COMMAND.bold}

Description:
  ${DESCRIPTION} Run ${('functions logs ' + '<command>'.yellow + ' --help').bold} to print additional help for a command.

Positional arguments:
  ${'command'.bold}
    The ${'logs'.bold} command to execute.`;

/**
 * http://yargs.js.org/docs/#methods-commandmodule-providing-a-command-module
 */
exports.command = 'logs <command>';
exports.description = DESCRIPTION;
exports.builder = (yargs) => {
  yargs
    .usage(USAGE)
    .demand(1)
    .command(require('./clear'))
    .command(require('./read'))
    .epilogue('For more information, see https://github.com/GoogleCloudPlatform/cloud-functions-emulator/wiki/Viewing-logs');

  EXAMPLES['logs'].forEach((e) => yargs.example(e[0], e[1]));
};
exports.handler = () => {};
