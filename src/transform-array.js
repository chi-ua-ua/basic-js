const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (!Array.isArray(arr)){
    throw new Error("'arr' parameter must be an instance of the Array!");
  }
  if (arr.length === 0) {
    return arr;
  }
  if (!arr.includes('--discard-next') && !arr.includes('--discard-prev') && !arr.includes('--double-next') && !arr.includes('--double-prev')) {
    return arr;
  }

  let finishArr = [];
  

  if (arr.includes('--discard-next')  && (arr.includes('--double-prev') || arr.includes('--discard-prev'))) {
      if (arr.indexOf('--discard-next') < arr.indexOf('--discard-prev') || arr.indexOf('--discard-next') < arr.indexOf('--double-prev')) {
        let index = arr.indexOf('--discard-next');
        let newArr1 = arr.slice(0, index);
        let newArr2 = arr.slice(index + 3);
        finishArr = finishArr.concat(newArr1, newArr2);
      }
      return finishArr;
  }
  if (arr.includes('--double-next') && arr.includes('--double-prev')) {
    if (arr.indexOf('--double-next') < arr.indexOf('--double-prev')) {
      let index = arr.indexOf('--double-next');
      let newArr1 = arr.slice(0, index);
      let newArr2 = arr.slice(index + 1, index + 2);
      let newArr3 = arr.slice(index + 3);
      finishArr = finishArr.concat(newArr1, newArr2, newArr2, newArr2, newArr3);
    }
    return finishArr;
  }

  if (arr.includes('--double-next') && arr.includes('--discard-prev')) {
    if (arr.indexOf('--double-next') < arr.indexOf('--discard-prev')) {
      let index = arr.indexOf('--double-next');
      let newArr1 = arr.slice(0, index);
      let newArr2 = arr.slice(index + 1, index + 2);
      let newArr3 = arr.slice(index + 3)
      finishArr = finishArr.concat(newArr1, newArr2, newArr3);
    } 
    if (arr.indexOf('--discard-prev') < arr.indexOf('--double-next')) {
      let index = arr.indexOf('--discard-prev');
      let newArr1 = arr.slice(0, index - 1);
      let newArr2 = arr.slice(index + 1, index + 2);
      let newArr3 = arr.slice(index + 3, index + 4);
      let newArr4 = arr.slice(index + 3);
      finishArr = finishArr.concat(newArr1, newArr2, newArr3, newArr4);
    }
    return finishArr;
    }

  if (arr.includes('--double-next')) {
    let index = arr.indexOf('--double-next');
    if (index === arr.length + 1) {
      finishArr = arr.slice(0, index);
    } else {
      let newArr1 = arr.slice(0, index);
      let newArr2 = arr.slice(index + 1, index + 2);
      let newArr3 = arr.slice(index + 1);
      finishArr = finishArr.concat(newArr1, newArr2, newArr3);
    }
  }
  if (arr.includes('--discard-prev'))   {
    let index = arr.indexOf('--discard-prev');
    if (index === 0) {
      finishArr = arr.slice(index + 1);
    } else {
      let newArr1 = arr.slice(0, index);
      let newArr2 = arr.slice(index + 1);
      finishArr = finishArr.concat(newArr1, newArr2); 
    }
  }

  if (arr.includes('--double-prev')) {
    let index = arr.indexOf('--double-prev');
    if (index === 0) {
      finishArr = arr.slice(index + 1);
    } else {
      let newArr1 = arr.slice(0, index);
      let newArr2 = arr.slice(index - 1, index);
      let newArr3 = arr.slice(index + 1);
      finishArr = finishArr.concat(newArr1, newArr2, newArr3);
    }
  }

  if (arr.includes('--discard-next')) {
    let index = arr.indexOf('--discard-next');
    if (index === arr.length + 1) {
      finishArr = arr.slice(0, index);
    } else {
      let newArr1 = arr.slice(0, index);
      let newArr2 = arr.slice(index + 2);
      finishArr = finishArr.concat(newArr1, newArr2);
    }
  }
  return finishArr;
}

module.exports = {
  transform
};

