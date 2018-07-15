function fizzBuzz(n) {
  let display = ''
  for (let i = 1; i <= n; i++) {
    display = i;
    if(i % 3 == 0 || i % 5 == 0) {
      if(i % 3 != 0) {
        display = 'buzz';
      } else if(i % 5 != 0) {
        display = 'fizz';
      } else {
        display = 'fizzbuzz';
      }
    }
    console.log(display);
  }
}

fizzBuzz(100);