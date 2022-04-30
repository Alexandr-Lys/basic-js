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
  let result = {}
  for(let i = 0 ; i < domains.length ; i++){
    domains[i] = domains[i].split('.').reverse().map(element => {
      return '.'+element
    }).join('');
    if(!'domains[i]' in result){
      console.log(result+'a')
      //result.domains[i] = 1
    }
  }
  console.log(domains[0])
  return result
}
console.log(getDNSStats(['code.yandex.ru', 'music.yandex.ru', 'yandex.ru']))
module.exports = {
  getDNSStats
};
