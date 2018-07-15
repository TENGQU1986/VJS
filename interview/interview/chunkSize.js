function chunkSize(arr, cs) {
  let subArrs = [];
  for(let i = 0; i < Math.ceil(arr.length / cs); i++){
    let subArr = [];
    subArr[i] = arr.slice(2 * i, 2 * i + 2);
    // subArrs += subArr[i];
    console.log(subArr[i]);
    // console.log(subArr[0].concat(subArr[1]));
  }
  // console.log(subArrs);
}

chunkSize([1, 2, 3, 4, 5], 2);