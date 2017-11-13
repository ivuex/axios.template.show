const fs = require('fs');
const path = require('path');
const hotMiddlewareScript = 'webpack-hot-middleware/client?reload=true'

function handelJsFile(pathname) {

    const reg = /(^.+[^\/]\/)([\w-]+)\.(?:js|vue|less|sass|jpeg|jpg|gif|ttf|eot|woff|woff2)$/;
    if (!reg.test(pathname)) return void 0;
    const arySubMatchedStr = pathname.match(reg);
    oneJsObj = {
        path: arySubMatchedStr[0],
        entryKey: arySubMatchedStr[1],
        filename: arySubMatchedStr[2],
    };
    oneJsObj.entryKey = oneJsObj.entryKey.replace(/\/$/, '');
    oneJsObj.entryKey = oneJsObj.entryKey.replace(/src\//, '');
    if(oneJsObj.entryKey === 'src') {
        oneJsObj.entryKey = 'index';
    }
    console.log(oneJsObj.entryKey);
    console.log('15, entryObj.js, above is the oneJsObj.entryKey');

    if (!entryObj.hasOwnProperty(oneJsObj.entryKey)) {
        entryObj[oneJsObj.entryKey] = [];
    }
    entryObj[oneJsObj.entryKey].push('./' + oneJsObj.path);

}

function travel(dir, callback) {

    let pathname;
    fs.readdirSync(dir).forEach(function (file) {
        pathname = path.join(dir, file);
        if (fs.statSync(pathname).isDirectory()) {
            travel(pathname, callback);
        } else {
            callback(pathname);
        }
    });
}


const srcRoot = './src';
let entryObj = {};

travel(srcRoot, handelJsFile); //handle the assert, registry into the entryObj;

module.exports = entryObj;
