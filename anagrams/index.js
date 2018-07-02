// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False


// .sort() method
anagrams = (stringA, stringB) => {
    console.log(helperfunction(stringA) === helperfunction(stringB))
}

helperfunction = str => {
    return str.replace(/[^\w]/g, "").toLowerCase().split('').sort().join('')
}

anagrams('rail safety', 'fairy tales')
anagrams('RAIL! SAFETY!', 'fairy tales')
anagrams('Hi there', 'Bye there')




anagrams1 = (stringA, stringB) => {
    const charMapA = helper(stringA);
    const charMapB = helper(stringB)
    if (Object.keys(charMapA).length !== Object.keys(charMapB).length) {
        console.log("false")
    }
    for (let char in charMapA) {
        if (charMapA[char] !== charMapB[char]){
            console.log("false")
        }
    }
    console.log("true")
}

helper = str => {
    const charMap = {};
    for (let char of str.replace(/[^\w]/g, "").toLowerCase()) {
        charMap[char] = charMap[char] + 1 || 1;
    }
    return charMap;
}

anagrams1('rail safety', 'fairy tales')
anagrams1('RAIL! SAFETY!', 'fairy tales')
anagrams1('Hi there', 'Bye there')