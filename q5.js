function findWord(string) {
    const word = [...string]
    for (let i = 0, j = word.length-1; j>=i;i++,j--) {
        if (word[i]!==word[j]) {
            return false
        } else {
            return true
        }
    }
}

console.log(findWord('radar'));