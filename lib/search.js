const open = require('open');

/**
 * @description search
 * @param {Object} options search engine
 */
module.exports = async function search(options) {
  const engine = Object.keys(options)[0] || 'google';
  const q = process.argv.slice(3).join(' ');
  console.log(process.argv);
  let url = `https://www.${engine}.com/search?q=${q}`;
  if (engine === 'baidu') {
    url = `https://www.baidu.com/s?wd=${q}`;
  }
  await open(url, {
    app: {
      name: open.apps.chrome,
    },
  });
};
