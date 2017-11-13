#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
var argv = require('yargs').argv;

console.log('hello ', argv['root']);
let thatRoot = argv['root'];
thatRoot = thatRoot.replace(path.resolve(__dirname, '..') + '/', '');
console.log(thatRoot);
console.log('above is the thatRoot is it right?');

const entryFileBase = thatRoot.replace(/^.+\/([^\/]+)$/g, function () {
  console.log(arguments[1]);
  return arguments[1];
});

function computeNames(passInName) {
  let kebabCaseName = '';
  let pascalCaseName = '';
  let camelCaseName = '';
  let tmpCamelCase = '';
  if (/-/.test(passInName)) {
    kebabCaseName = passInName;
    tmpCamelCase = passInName.replace(/-([a-z])/g, function () {
      return arguments[1].toUpperCase();
    });
  } else {
    kebabCaseName = passInName.replace(/([A-Z])/g, function () {
      return '-' + arguments[1].toLowerCase();
    });
    tmpCamelCase = passInName;
  }
  pascalCaseName = tmpCamelCase.replace(/^([a-zA-Z])/, function () {
    return arguments[1].toUpperCase()
  });
  camelCaseName = tmpCamelCase.replace(/^([a-zA-Z])/, function () {
    return arguments[1].toLowerCase()
  });
  return {
    passInName,
    kebabCaseName,
    pascalCaseName,
    camelCaseName,
  }
}

const names = computeNames(entryFileBase);

const thatRootDir = './config/that-root-data.js';
fs.writeFileSync(thatRootDir, `module.exports="${thatRoot}/${names.camelCaseName}.js"`);
console.log(fs.readFileSync(thatRootDir, 'utf-8'));
const shell = require("shelljs")
shell.exec("echo hello shelljs outputed.");
// shell.exec("npm start --config=that.webpack.config.js");
shell.exec("webpack-dev-server --config=that.webpack.config.js");