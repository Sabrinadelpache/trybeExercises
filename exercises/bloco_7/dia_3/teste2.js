const assert = require('assert');

function myRemove(arr, item) {
  let newArr = [];
  for (let i = 0; i < arr.length; i += 1) {
    if (item !== arr[i]) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

let expected = myRemove([1, 2, 3, 4], 3)

assert.deepStrictEqual(expected, [1, 2, 3, 4], 'Re')