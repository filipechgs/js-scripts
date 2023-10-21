const readline = require('readline');
const { EventEmitter } = require('stream');
const emitter = new EventEmitter();


readline.emitKeypressEvents(process.stdin);

if (process.stdin.isTTY) process.stdin.setRawMode(true);

process.stdin.on('keypress', (chunk, key) => {
    if (key.ctrl && key.name === 'c') {
        process.exit();
    } else {
        console.log(`You pressed the "${chunk}" key`);
        console.log(process.stdin.emit(key.name));
        console.log(key);
        console.log(emitter);
    }
});
console.log('Press any key...');


