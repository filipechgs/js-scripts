const FS = require('fs');
const PATH = require('path');
const LOCAL_PATH = process.cwd();
const SAVE_FOLDER = '/';

function findUserFileByEmail (emailStr) {
    let files = FS.readdirSync('./');
    let file;

    for (let i = 0; i < files.length; i++) {
        
        if ( files[i].includes('user.json') ) {
           
           let filesIndxAsarray = String(files[i]).split('.');
           file = loadJSON(filesIndxAsarray[0]);

           if (file.hasOwnProperty('email') && file.email === emailStr) return file;      
        }
    }
    return 'User not found.';
}

function loadJSON(fileName) {    
    let rawdata = FS.readFileSync(PATH.join(LOCAL_PATH, `${SAVE_FOLDER}${fileName}.json`));
    let file = JSON.parse(rawdata);
    return file;
};

console.log(findUserFileByEmail('filipe@chagas'))