const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  if (!Array.isArray(members)) {
    return false;
  }
  let arr = members.filter(item => typeof item === 'string');

  
//   console.log(arr);
  let newArr = arr.map((item) => item.trim());
//   console.log(newArr);
  newArr = newArr.map((item) => item[0]);
  newArr = newArr.map((item) => item.toUpperCase());
  newArr.sort();
  // console.log(newArr);
  let team = newArr.join('');
  // team.trim();
  return team;
}

module.exports = {
  createDreamTeam
};
