function findDup(array) {
  var dup = [];
  var obj = {};
  for(var i = 0; i < array.length; i++) {
    if(!obj[array[i]]) {
      obj[array[i]] = 1;
    } else {
      dup.push(array[i]);
    }
  }
  return dup;
}

console.log(findDup([1, 2, 3, 3, 4, 5, 4]));