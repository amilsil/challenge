import {readFile} from 'fs';

export function readJsonFile(fileName: string): Promise<any[]> {
  return new Promise((resolve, reject) => {
    readFile(`./data/${fileName}.json`, (err, buffer) => {
      if (err) {
        reject(err);
      } else {
        const json = JSON.parse(buffer.toString());
        resolve(json);
      }
    });
  });
}
