const word1 = 'rail! safety!!!';
const word2 = 'fairy tales';

// function anagrams(str1, str2) {
//   const str1Map = buildStrMap(str1);
//   const str2Map = buildStrMap(str2);

//   if(Object.keys(str1Map).length !== Object.keys(str2Map).length) {
//     return false;
//   }
//   for(let char in str1Map) {
//     if(str1Map[char] !== str2Map[char]) {
//       return false;
//     } else {
//       return true;
//     }
//   }

  
// }

// function buildStrMap(str) {
//   let strMap = {};
//   const clearStr = str.replace(/[^\w]/g, "").toLowerCase();
//   for(let char of clearStr) {
//     strMap[char] = strMap[char] + 1 || 1;
//   }
//   return strMap;
// }

// console.log(anagrams(word1, word2));

// More straight forward method

function anagrams(str1, str2) {
  return cleanString(str1) === cleanString(str2);
}

function cleanString(str) {
  return str.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('');
}

console.log(anagrams(word1, word2));