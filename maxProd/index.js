// Given an array of integers, find the pair of adjacent elements that has the largest product and return that product
//Guaranteed extreems  -1000 <= max <= 1000

adjacentElemeentProduct = inputArray => {
    let prodMap = [];
    let max = -1001;

    for( let i = 0; i < inputArray.length - 1; i++){
        prodMap.push(inputArray[i] * inputArray[i+1])
    }
    console.log(prodMap)
    for ( let j = 0; j < prodMap.length; j++){
        if(prodMap[j] > max){
            max =prodMap[j]
        }
    }
   return console.log(max)
}

adjacentElemeentProduct([3, 6, -2, -5, 7, 3])
adjacentElemeentProduct([3, -4, 4, -9])
