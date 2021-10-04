const fs = require('fs');
const util = require('util');
const path = require('path');

const readDir = util.promisify(fs.readdir);
const stat = util.promisify(fs.stat); 

const traverseDir = async ( dirname ) => {
  try { 
    const files = await readDir(dirname);
    files.forEach(async file => {
      const filePath = path.join(dirname, file);
      const status = await stat(filePath);

      if(status.isDirectory()) traverseDir(filePath);
      else if(path.extname(file) === ".js") console.log(filePath);
    })
    
  } catch (err) {
    console.log(err);
  }
};

traverseDir("test");
