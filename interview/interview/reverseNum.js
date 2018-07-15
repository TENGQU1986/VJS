
const num = 532130;

function reverseNum(num) {
  const numToArr = num.toString().split('');
  // function ifContainsZero() {
  //   numToArr.every((char) => {
  //     return char !== 0;
  //   })
  // }
  
  if(Math.sign(num) === 1 && numToArr.every(char => char !== 0)) {
    return num.toString().split('').reverse().join('');
  } else {
    return 123;
  }
  
}

console.log(reverseNum(num));