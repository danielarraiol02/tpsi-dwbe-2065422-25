var ArrayUtils = {
  boolean: function (array) {
    if (array.length == 0) {
      // return array.length == 0;
      return true;
    } else {
      return false;
    }
  },
  max: function (array) {
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
  min: function (array) {
    min = array[0];

    for (let i = 0; i < array.length; i++) {
      if (array[i] < min) {
        min = array[i];
      }
    }
    return min;
  },
  sum: function (array) {
    var res = 0;
    for (let i = 0; i < array.length; i++) {
      res += array[i];
    }
    return res;
  },
  average: function (array) {
    var sum = this.sum(array);
    var avg = sum / array.length;
    return avg;
  },
  indexOf: function (array, valor) {
    for (let i = 0; i < array.length; i++) {
      if (array[i] == valor) {
        return i;
      }
    }
    return -1;
  },
  // subArray: function (array, start, end) {
  //   var newArray = [];
  //   for (let i = 0; i < array.length; i++) {
  //     if (i >= start && i <= end) {
  //       // start <= i <= end
  //       newArray.push(array[i]);
  //     }
  //   }
  //   return newArray;
  // },
  subArray: function (array, start, end) {
    var sub = [];
    for (let i = start; i <= end; i++) {
      sub.push(array[i]);
    }
    return sub;
  },
  compareLength: function (array, array_to_compare) {
    // if (array.length == array_to_compare.length) return true;
    // else return false;
    return array.length == array_to_compare.length;
  },
  reverse: function (array) {
    var newArray = [];
    for (let i = array.length - 1; i >= 0; i--) {
      newArray.push(array[i]);
    }
    return newArray;
  },
  swap: function (array, index, index_to_swap) {
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
  contains2: function (array, value_to_search) {
    return this.indexOf(array, value_to_search) != -1;
  },
  concatenate: function (array, array_to_add) {
    var copy = array.copyWithin(0);
    for (let i = 0; i < array_to_add.length; i++) {
      copy.push(array_to_add[i]);
    }
    return copy;
  },
};

module.exports = ArrayUtils;
