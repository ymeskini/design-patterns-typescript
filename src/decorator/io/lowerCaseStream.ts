import { Transform } from 'stream';

export const LowerCaseStream = new Transform({
  transform(chunk, encoding, callback) {
    callback(null, chunk.toString().toLowerCase());
  },
});
