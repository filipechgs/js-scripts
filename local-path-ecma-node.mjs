import {dirname} from 'path';
import {fileURLToPath} from 'url';

const LOCAL_PATH = dirname(fileURLToPath(import.meta.url));
const LOCAL_PATH_Str =`${LOCAL_PATH}`

console.log(LOCAL_PATH_Str);

export {LOCAL_PATH, LOCAL_PATH_Str};