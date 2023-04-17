const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const result = {};
  let splitDomains = [];
  for (let i = 0; i < domains.length; i++) {
    let splitDomain = domains[i].split('.').reverse();

    for (let j = 0; j < splitDomain.length; j++) {
      if (j > 0) {
        splitDomain[j] = `${splitDomain[j - 1]}.${splitDomain[j]}`
      } else {
        splitDomain[j] = `.${splitDomain[j]}`
      }
    }

    splitDomains.push(splitDomain);
  }

  for (let i = 0; i < splitDomains.length; i++) {
    for (let j = 0; j < splitDomains[i].length; j++) {
      if (result.hasOwnProperty(splitDomains[i][j])) {
        result[`${splitDomains[i][j]}`]++;
      } else {
        result[`${splitDomains[i][j]}`] = 1;
      }
    }
  }

  return result;
}

getDNSStats(['epam.com', 'info.epam.com']);

module.exports = {
  getDNSStats
};
