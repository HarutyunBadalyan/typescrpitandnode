'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
const express_1 = __importDefault(require('express'));
const helper_1 = __importDefault(require('../helper/helper'));
const jshelper_1 = require('../helper/jshelper');
const tiny_1 = __importDefault(require('@bamblehorse/tiny'));
const some_json_1 = __importDefault(require('./some.json'));
const route = express_1.default.Router();
route.get('/about', (req, res) => {
  console.log('session', req.session.userId);
  (0, helper_1.default)();
  console.log(some_json_1.default);
  console.log((0, tiny_1.default)('asfdsfsdf sdfsdf'));
  let f = (0, jshelper_1.jscout)();
  let i = (0, jshelper_1.jsReturnTwo)();
  console.log(f, typeof f);
  console.log(i);
  res.send('about');
});
exports.default = route;
