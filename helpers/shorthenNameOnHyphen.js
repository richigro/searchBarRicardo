//change to a more descriptive name function
export default function shortenNameOnHyphen(name){
    //shorten the name of a prodcut on second shortenNameOnHyphen
    const maxAcceptableLength = 20;
    if(name.length < maxAcceptableLength){
      return name;
    }
    let hyphenCounter = 0;
    let currentChar;
    let index;
    for(let i = 0; i < name.length; i++){
      currentChar = name[i];
      if(currentChar === '-'){
        // add to the counnter
        hyphenCounter++;
      }
      //if we reach second hyphen
      if(hyphenCounter === 1){
       // exit the counnter
       index = i;
      }
    }
  
    return name.slice(0, index + 1);
  
  }
