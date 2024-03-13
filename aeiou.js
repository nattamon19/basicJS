function findVowels(word) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    const result = {};
  
    for (let i = 0; i < word.length; i++) {
      const char = word[i].toLowerCase();
  
      if (vowels.includes(char)) {
        if (result[char]) {
          result[char].push((i).toString());
        } else {
          result[char] = [(i).toString()];
        }
      }
    }
  
    return result;
  }
  
  console.log(findVowels("Heleelaeiouo"));
  // Output
  // {
  //   e: [ '1', '3', '4', '7' ],
  //   a: [ '6' ],
  //   i: [ '8' ],
  //   o: [ '9', '11' ],
  //   u: [ '10' ]
  // }
