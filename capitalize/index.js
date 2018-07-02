// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

capitalize = str => {
    let words = [];
    
    for (let word of str.split(" ")){
        words.push(word[0].toUpperCase() + word.slice(1))
    }
    return console.log(words.join(" "))
}
  capitalize('a short sentence') 
  capitalize('a lazy fox') 
  capitalize('look, it is working!') 