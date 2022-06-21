const figlet = require('figlet');
const chalk = require('chalk');

/**
 * @description show signature
 * @param {string} signature
 * @param {boolean} output
 */
module.exports = function showSignature(output = true, signature = 'RICK') {
  return new Promise((resolve, reject) => {
    figlet.text(
      signature,
      {
        font: 'Larry 3D', // Larry 3D | Larry 3D 2
        horizontalLayout: 'fitted',
        verticalLayout: 'default',
        width: 120,
        whitespaceBreak: true,
      },
      (err, data) => {
        if (err) {
          reject(err);
        }
        output && console.log(chalk.blueBright(data));
        resolve(chalk.blueBright(data));
      }
    );
  });
};
