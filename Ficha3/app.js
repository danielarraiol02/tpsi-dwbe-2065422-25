function started() {
  console.log("Download Started");
}

function update(value) {
  console.log("" + value + "% " + "of " + "Download");
}
function completed() {
  console.log("Download Completed!");
}

function performDownload(started, update, completed) {
  started();
  for (let i = 0; i <= 5; i++) {
    update(i);
  }
  completed();
}

//performDownload(started, update, completed);

var array = [3, 5, 3, 12];
var array2 = [1, 2, 7];

var ArrayUtils = require("./ArrayUtils.js");
// console.log(ArrayUtils.boolean(array));
// console.log(ArrayUtils.max(array));
// console.log(ArrayUtils.min(array));
// console.log(ArrayUtils.sum(array));
// console.log(ArrayUtils.average(array));
// console.log(ArrayUtils.indexOf(array, 1));
// console.log(ArrayUtils.subArray(array, 1, 2));
// console.log(ArrayUtils.compareLength(array, array2));
// console.log(ArrayUtils.reverse(array));
// console.log(ArrayUtils.swap(array, 0, 3));
console.log(ArrayUtils.concatenate(array, array2));
