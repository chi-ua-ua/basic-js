const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  if (date === undefined) {
    return 'Unable to determine the time of year!';
  }

  let score = new Date(date);
  if (score === 'undefined') {
    throw new Error('Invalid date!');
  }

  
  if (Object.prototype.toString.call(date) !== '[object Date]') {
    throw new Error('Invalid date!');
  }
  
  if (date[Symbol.toStringTag] === 'Date') {
    throw new Error('Invalid date!');
  }
  const monthsArray = ['winter', 'winter', 'spring', 'spring', 'spring', 'summer', 'summer', 'summer', 'autumn', 'autumn', 'autumn', 'winter'];
 
  let month = date.getMonth();
  console.log(month);
  return monthsArray[month];

}

module.exports = {
  getSeason
};
