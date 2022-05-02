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
  let domain;
  for(let i = 0 ; i < domains.length ; i++){
    domain = domains[i].split('.').reverse()
    if(domain.length === 2){
      result['.'+ domain[0]] = domains.length
      result['.' + domain.join('.')] = domains.length
    }else{
      result['.' + domain.join('.')] = 1
    }
    
  }
  return result
}


module.exports = {
  getDNSStats
};
