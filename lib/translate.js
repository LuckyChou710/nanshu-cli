const axios = require('axios').default;

/**
 * @description translate
 * @param {string} value target
 * @link https://libretranslate.com/
 */
module.exports = async function translate(value = process.argv[3].trim()) {
  const pattern = /^[a-zA-Z]+$/;
  let target = 'zh';
  let source = 'en';
  if (!pattern.test(value)) {
    target = 'en';
    source = 'zh';
  }
  axios
    .post('https://libretranslate.de/translate', {
      Headers: { 'Content-Type': 'application/json' },
      q: value,
      source,
      target,
      format: 'text',
    })
    .then((res) => console.log(res.data));
};
