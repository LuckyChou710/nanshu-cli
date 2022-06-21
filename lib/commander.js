const { program } = require('commander');
const { version } = require('./utils/const');
const translate = require('./translate');
const search = require('./search');
const showSignature = require('./utils/signature');

module.exports = async function init() {
  const signature = await showSignature(false);
  program.name('RICK-CLI').description(signature).version(version);

  // program
  //   .command('translate')
  //   .description('translate cn | en')
  //   .action(() => translate());

  program
    .command('search')
    .description('search')
    .option('--google')
    .option('--bing')
    .option('--baidu')
    .action((options) => search(options));

  program.parse(process.argv);
};
