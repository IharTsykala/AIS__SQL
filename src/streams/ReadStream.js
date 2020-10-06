const fs = require('fs');
const chalk = require('chalk');

const ReadStream = (input) => {
  if (fs.existsSync(input)) return fs.createReadStream(input);
  else if (!input) {
    process.stdout.write(chalk.blue('fill input'));
    return process.stdin;
  } else {
    process.stderr.write(chalk.red('Check file\n'));
    process.exit(1);
  }
};

module.exports = ReadStream;
