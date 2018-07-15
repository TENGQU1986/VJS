const num = 3;
function printSteps(n) {
  for(let row = 0; row < n; row++) {
    let stair = '';
    
    for(let column = 0; column < n; column++) {
      if(column <= row) {
        stair += '#';
      } else {
        stair += ' ';
      }
    }

    console.log(stair);
  }
}

printSteps(num);

