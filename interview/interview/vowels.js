const vowels = ['a', 'e', 'i', 'o', 'u'];

function findVowels(str) {
  let count = 0;

  for(let char of str.toLowerCase()) {
    if(vowels.includes(char)) {
      count++;
    }
  }  

  return count;
}

console.log(findVowels('why do you ask'));