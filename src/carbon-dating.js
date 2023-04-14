const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;
const K = 0.693 / HALF_LIFE_PERIOD;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 *
 * @param {String} sampleActivity string representation of current activity
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 *
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  if (!sampleActivity || typeof sampleActivity !== 'string') {
    return false;
  }

  const numberSampleActivity = Number(sampleActivity);
console.log(numberSampleActivity)


  if (numberSampleActivity === Infinity || isNaN(numberSampleActivity) || numberSampleActivity > MODERN_ACTIVITY || numberSampleActivity <= 0) {
    return false;
  }

  return Math.abs(Math.ceil(Math.log(MODERN_ACTIVITY / numberSampleActivity) / K));
}

module.exports = {
  dateSample
};
