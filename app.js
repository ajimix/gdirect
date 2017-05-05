#!/usr/bin/env node
const copyPaste = require('copy-paste');
const args = process.argv.slice(2);
var url = args[0];
var newUrl = 'https://drive.google.com/uc?export=download&id=';

if (url === undefined) {
  console.error('Please provide a Google Drive shareable url as the first parameter:\nExample: gdirect https://drive.google.com/file/d/XYZ/view?usp=sharing');
  process.exit(1);
}

url = url.replace('https://drive.google.com/file/d/', '');
url = url.replace('/view?usp=sharing', '');

newUrl += url;

copyPaste.copy(newUrl, function () {
  console.log('URL pasted to your clipboard');
  process.exit(0);
});
