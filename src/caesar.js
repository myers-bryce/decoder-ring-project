// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6 

const caesarModule = (function () {
  //define the alphabet variable to be used in the test, something to go through in a loop later on
  const alphabet = "abcdefghijklmnopqrstuvwxyz";

function caesar(input, shift, encode = true) {
//start right away with a guard clause to make sure that the parameters input are valid
if (!shift || shift === 0 || shift < -25 || shift > 25) return false
//define a variable, reworking the 'input' argument to get rid of all upper case characters
let lowerInput = input.toLowerCase()
// define a variable that will invert the shift code if false/decoding, allowing the shift to work in the similar direction as encoding
const shiftCode = encode ? shift : -(shift)
// define a variable to later on feed the information into as the result
let output = ""
// loop through the inputted word for the entire length of the input value
for (let i = 0; i < lowerInput.length; i++) {
  // assign a variable that will hold the index value/placement of the input word, in relation to its place in the above alphabet variable
  let current = alphabet.indexOf(lowerInput[i])
  // assign a variable to use for storing the newly shifted letters into during the loop
  let newLetter
  // if statement to check if the index of the checked letter exists in the alphabet variable, which if it does not, returns back a value of -1
  if (current === -1) {
    // if the current checked letter does not exist in the alphabet variable, therefore not being a letter, then keep the original value
    newLetter = input[i]
    // if the above if statement of current === -1 does not happen to be true, get ready to do the following
  } else {
    // create a new variable that will take the numerical value of the letter's index placement, and combines it with the inputted shiftcode
    let newPosition = current + shiftCode
    // if statement to check if the newly created number in the newPosition variable is greater than 25 (larger than a traditional alphabet when including 0)
    if (newPosition > 25) {
      //if the newPosition number is larger than 25, take away 26 from that number so that it will be within the contained, normal length of the alphabet.
      newPosition -= 26
      // if statement to check if the above statement is not true, then check if the newPosition number is smaller than 0, meaning a negative number.
    } else if (newPosition < 0) {
      // if the newPosition is below 0 increase it by 26 so that it will be a number between 0 and 25, allowing for the alphabet info to be checked. 
      newPosition += 26
    }
    // as each of the above checks finishes, then take the letter from its newPosition and assign it to the newLetter variable
    newLetter = alphabet[newPosition]
  }
  //take both of the newLetter instances from above, and put them together in a final output, adding each letter/space/character one at a time, finishing the loop
  output += newLetter
}
//return the final output to be read by the system as the solution for the function running
return output
}

return {
  caesar,
};
})();

module.exports = { caesar: caesarModule.caesar };
