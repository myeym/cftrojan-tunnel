// npm install js-sha256
const sha224 = require('js-sha256').sha224;

/**
 * 使用SHA-224算法对字符串进行加密
 * 
 * @param {string} str 需要加密的原始字符串。
 * @return {string} 返回使用SHA-224算法加密后的散列字符串。
 */
function hash224encrypt(str) {
  return sha224(str);
}

module.exports = {
  hash224encrypt
};