function orderString(arrayStrings) {
  let tempCounterArray = [];
  let tempOrderedArray = [];
  let length = arrayStrings.length;

  for(let i = 0; i < length; i++){
    let counter = 0;
    for(let j = 0; j < length; j++ ){
      if(arrayStrings[i] !== arrayStrings[j]){
        if(arrayStrings[i].localeCompare(arrayStrings[j]) === 1){
          counter++;
        }
      } 
    }
    tempCounterArray.push(counter);
  }
  console.log(tempCounterArray)

  for(let i = 0; i < length; i++){
    tempOrderedArray.push(arrayStrings[tempCounterArray.findIndex(item => item === i)]);
  }
  
  return tempOrderedArray;
}

console.log(orderString(['zebra', 'cálice', 'borboleata']));