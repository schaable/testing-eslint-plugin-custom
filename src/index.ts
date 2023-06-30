import type {} from './foo';

import 'dotenv';
import { chunk } from 'lodash';
import { EventEmitter } from 'node:events';
import * as inspector from 'inspector';
import scopedModule from '@nomicFoundation/scopedModule';
import foo from './foo';
import bar from './bar';
const { yellow } = require('chalk');
const fs = require('fs');

const myVar = foo();

async function sarasa() {
  const http = require('dontCatchMe');
  const axios = await import('axios');
  const axios = await import('./libs/qux');
}

export const USER_ID = 123123;
export default sarasa;
