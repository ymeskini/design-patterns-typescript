import fs from 'fs';
import path from 'path';

import { LowerCaseStream } from './lowerCaseStream';

const filePath = path.resolve(__dirname, 'test.txt');

async function main() {
  const fileStream = fs.createReadStream(filePath);
  const inStream = fileStream.pipe(LowerCaseStream);
  try {
    for await (const chunk of inStream) {
      console.log(chunk.toString());
    }
  } catch (e) {
    console.error(e);
  } finally {
    if (inStream) {
      inStream.destroy();
    }
  }
}

main();
