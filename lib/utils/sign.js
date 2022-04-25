const figlet = require('figlet');
const chalk = require('chalk');

/**
 * @description show YepGym
 * @param {boolean} show
 */
module.exports = function showSign(show = false) {
  return new Promise((resolve, reject) => {
    figlet.text(
      'NANSHU!',
      {
        font: 'Slant', // Big / Doom / Slant / Small Slant
        horizontalLayout: 'default',
        verticalLayout: 'default',
        width: 80,
        whitespaceBreak: true,
      },
      (err, data) => {
        if (err) {
          reject(err);
        }
        show && console.log(data);
        resolve(chalk.blueBright(data));
      }
    );
  });
};
