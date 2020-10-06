const fs = require('fs');
const chalk = require('chalk');

const WriteStream = (output) => {
  
  if (fs.existsSync(output))
    return fs.createWriteStream(output, { flags: 'a' });
  else if (!output) {
    return process.stdout;
  } else {
    process.stderr.write(chalk.red('Check file\n'));
    process.exit(1);
  }
};

module.exports = WriteStream;
