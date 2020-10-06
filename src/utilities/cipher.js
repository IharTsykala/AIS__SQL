const chalk = require('chalk');
const {
  upperCaseFirstLatter,
  upperCaseLastLatter,
  lowerCaseFirstLatter,
  lowerCaseLastLatter,
  numbersOfLattersInAlphabet,
} = require('./config');

const doCipherText = (string, shift) => {
  if (typeof shift !== 'number') {

    process.stderr.write(chalk.red.bold('fix data type\n'));
    process.exit(400);
  }

  if (shift < 0)
    return doCipherText(string, shift + numbersOfLattersInAlphabet);

  let output = '';

  for (let i = 0; i < string.length; i++) {
    let letter = string[i];

    if (letter.match(/[a-z]/i)) {
      const charCode = string.charCodeAt(i);

      if (charCode >= upperCaseFirstLatter && charCode <= upperCaseLastLatter) {

        letter = String.fromCharCode(

          ((charCode - upperCaseFirstLatter + shift) % numbersOfLattersInAlphabet) +
            upperCaseFirstLatter
        );

      } else if (charCode >= lowerCaseFirstLatter && charCode <= lowerCaseLastLatter) {

        letter = String.fromCharCode(

          ((charCode - lowerCaseFirstLatter + shift) % numbersOfLattersInAlphabet) +
            lowerCaseFirstLatter
        );
      }
    }

    output += letter;
  }

  return output;
};

module.exports = doCipherText;
