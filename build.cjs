// Package the supplied logo into a portable, single-file HTML application.
const fs=require('fs');
const path=require('path');
const logo=fs.readFileSync(path.join(__dirname,'src/logo.jpg'));
const source=fs.readFileSync(path.join(__dirname,'src/app.template.html'),'utf8');
if(!source.includes('__EA_LOGO_DATA_URI__'))throw new Error('Missing logo placeholder');
const result=source.replaceAll('__EA_LOGO_DATA_URI__','data:image/jpeg;base64,'+logo.toString('base64'));
fs.writeFileSync(path.join(__dirname,'EA-Beff-Calculator.html'),result,'utf8');
console.log('Built EA-Beff-Calculator.html with embedded company logo.');
