// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // define what the original alphabet is so it can be used/referenced in the function (but not as the 'alphabet' argument)
  const originalAlphabet = "abcdefghijklmnopqrstuvwxyz";

  function substitution(input, alphabet, encode = true) {
    // if the alphabet argument was not used OR if the alphabet argument does not have a length of 26, then return the whole function as false. 
    if (!alphabet || alphabet.length !== 26) return false;
    // define a variable to be used to store the final result/output that will be returned in the end
    let result = "";
    // a for loop to go through the entire input alphabet
    for (let i = 0; i < alphabet.length; i++) {
      // checks to see if there is an instance of the alphabet that matches the lastIndexOf that same item, checking to see if there are any duplicates that exist in the alphabet that was input by seeing if the first occurance and the last occurance are the same number or not.
      if (alphabet.indexOf(alphabet[i]) !== alphabet.lastIndexOf(alphabet[i])) {
        // if the indexOf and lastIndexOf do not return the same number, then return back false, as there is a duplicate somewhere.
        return false;
      }
    }
    // define a variable to take the input and make it lower case, negating the need to check for upper case letters
    let lowerInput = input.toLowerCase();
    // define the variable of i that will be used for a while loop below
    let i = 0;
    // if encode is passed in as true, the below code will occur
    if (encode) {
      // this will run a while loop, saying that while i is less than the length of the input, continue looping
      while (i < lowerInput.length) {
        // define the variable of the index used while encoding, having it set to the original alphabet declared above, finding where it matches with the index of the lowerInput as it loops through
        let indEncode = originalAlphabet.indexOf(lowerInput[i]);
        // if the index encoding loop does not find the item in the originalAlphabet (therefore equaling to negative 1 as its 'found' value)...
        if (indEncode === -1) {
          // then the result will return the same original input, unchaged (this is useful for spaces)
          result += lowerInput[i];
          // else if the indEncode value does not equal -1 (meaning it was found in the originalAlphabet)...
        } else {
          // then the result will be to add on the newly found encode item that matches with the argument value of 'alphabet'
          result = result + alphabet[indEncode];
        }
        // after each loop is done, add one more to the variable i, until the while loop is no longer true
        i++;
      }
      // if encode is passed in as false, the below code will occur
    } else if (!encode) {
      // this will run a while loop, saying that while i is less than the length of the input, continue looping
      while (i < lowerInput.length) {
        // define the variable of the index used while decoding, having it set to the argument alphabet entered when the function is run, finding where it matches with the index of the lowerInput as it loops through
        let indDecode = alphabet.indexOf(lowerInput[i]);
        // if the index decoding loop does not find the item in the argument alphabet (therefore equaling to negative 1 as its 'found' value)...
        if (indDecode === -1) {
          // then the result will return the same original input, unchaged (this is useful for spaces)
          result += lowerInput[i];
          // else if the indDecode value does not equal -1 (meaning it was found in the argument alphabet)...
        } else {
          // then the result will be to add on the newly found decode item that matches with the originalAlphabet variable
          result = result + originalAlphabet[indDecode];
        }
        // after each loop is done, add one more to the variable i, until the while loop is no longer true
        i++;
      }
    }
    // return the final results back from the entire substitution function so that the system can read the ouput/result
    return result;
  }
  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
