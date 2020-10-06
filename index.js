const program = require('./src/utilities/program');
const chalk = require('chalk');
const { pipeline } = require('stream');
const ReadStream = require('./src/streams/ReadStream');
const TransformStream = require('./src/streams/TransformStream');
const WriteStream = require('./src/streams/WriteStream');

const readStream = ReadStream(program.input);
const transformStream = TransformStream(program.action, program.shift);
const writeStream = WriteStream(program.output);

pipeline(readStream, transformStream, writeStream, (error) => {
  if (error) {
    console.log(chalk.red(error));
  } else {
    console.log(chalk.blue('Ended'));
  }
});
