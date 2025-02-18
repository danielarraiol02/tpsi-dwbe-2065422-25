var ArrayUtils = {
  boolean: function isEmpty(array) {
    if (array.length == 0) {
      // return array.length == 0;
      return true;
    } else {
      return false;
    }
  },
  max: function maxArray(array) {
    if (this.boolean(array)) {
      return 0;
    } else {
      max = array[0];

      for (let i = 0; i < array.length; i++) {
        if (array[i] > max) {
          max = array[i];
        }
      }
      return max;
    }
  },
  min: function minArray(array) {
    min = array[0];

    for (let i = 0; i < array.length; i++) {
      if (array[i] < min) {
        min = array[i];
      }
    }
    return min;
  },
  sum: function sumArray(array) {
    var res = 0;
    for (let i = 0; i < array.length; i++) {
      res += array[i];
    }
    return res;
  },
  average: function avgArray(array) {
    var sum = this.sum(array);
    var avg = sum / array.length;
    return avg;
  },
  indexOf: function indexOfArray(array, index) {
    return array[index];
  },
  subArray: function subArray(array, start, end) {
    var newArray = [];
    for (let i = 0; i < array.length; i++) {
      if (i >= start && i <= end) {
        // start <= i <= end
        newArray.push(array[i]);
      }
    }
    return newArray;
  },
  compareLength: function isSameLength(array, array_to_compare) {
    if (array.length == array_to_compare.length) return true;
    else return false;
  },
  reverse: function reverseArray(array) {
    var newArray = [];
    for (let i = array.length - 1; i >= 0; i--) {
      newArray.push(array[i]);
    }
    return newArray;
  },
  swap: function swapArray(array, index, index_to_swap) {
    const temp = array[index];
    array[index] = array[index_to_swap];
    array[index_to_swap] = temp;
    return array;
  },
  contains: function (array, value_to_search) {
    for (let i = 0; i < array.length; i++) {
      if (array[i] == value_to_search) {
        return true;
      } else {
        return false;
      }
    }
  },
  concatenate: function (array, array_to_add) {
    for (let i = 0; i < array_to_add.length; i++) {
      array.push(array_to_add[i]);
    }
    return array;
  },
};

module.exports = ArrayUtils;
