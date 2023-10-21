function saveToJSON(object, fileName) {
    const fs = require('fs');
    
    let data = JSON.stringify(object, null, 2);

    // fs.writeFileSync(`${__dirname}/${fileName}.json`, data);
    
    fs.writeFile(`${__dirname}/${fileName}.json`, data, (err)=>{
        if(err) throw err;
        console.log('Data witten to file.');
    })
}