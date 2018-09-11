// complete the solution by transforming the 
// string roman numeral into an integer  
solution = roman =>{
    let sum = 0;
    const split = roman.split('')
    console.log(split)
    const numbers = [];
    for (let i = 0; i < split.length; i++){
      if (split[i] === 'M'){
      numbers.push(1000);
      }
      else if(split[i] === 'D'){
      numbers.push(500);
      }
      else if(split[i] === 'C'){
      numbers.push(100);
      }
      else if(split[i] === 'L'){
      numbers.push(50);
      }
      else if(split[i] === 'X'){
      numbers.push(10);
      }
      else if(split[i] === 'V'){
      numbers.push(5);
      }
      else{
      numbers.push(1);
      }
    }
    console.log(numbers)
    for (let j = 0; j < numbers.length; j++){
     if(numbers[j] < numbers[j + 1]){
       sum += (numbers[j + 1] - numbers[j])
       j = j + 2
     }
     else {
       sum += numbers[j]
     }
    }
    console.log(sum);
    // return sum;
  }

  solution('XV');
  solution('MDCXVII');
  solution('XIX');
  solution('MCM')