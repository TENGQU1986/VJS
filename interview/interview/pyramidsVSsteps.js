const num = 5;
function pyramid(n) {
  const midpoint = Math.floor((2 * n - 1) / 2);

  for(let row = 0; row < n; row++) {
    let stair = '';
    
    for(let column = 0; column < 2 * n - 1; column++) {
      // console.log(Math.abs(column - 2), column);
      if(Math.abs(column - n + 1) <= row) {
        stair += '#';
      } else {
        stair += ' ';
      }
    }

    console.log(stair);
    
  }
}

pyramid(num);