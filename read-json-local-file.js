function readJSON_localFile(fileName) {
    const fs = require('fs');
    
    let rawdata = fs.readFileSync(`${__dirname}/${fileName}`);
    let file = JSON.parse(rawdata);
    console.log(file);
}