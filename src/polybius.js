// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // define a variable with the data needed to encode polybius style, with a key of letters and value of that key's corresponding numbers
  const lookUpEncode = {
    'a': '11',
    'b': '21',
    'c': '31',
    'd': '41',
    'e': '51',
    'f': '12',
    'g': '22',
    'h': '32',
    'i': '42',
    'j': '42',
    'k': '52',
    'l': '13',
    'm': '23',
    'n': '33',
    'o': '43',
    'p': '53',
    'q': '14',
    'r': '24',
    's': '34',
    't': '44',
    'u': '54',
    'v': '15',
    'w': '25',
    'x': '35',
    'y': '45',
    'z': '55'
  }
  // define a variable with the data needed to decode polybius style, with a key of numbers and value of that key's corresponding letters
  const lookUpDecode = {
    '11': 'a',
    '21': 'b',
    '31': 'c',
    '41': 'd',
    '51': 'e',
    '12': 'f',
    '22': 'g',
    '32': 'h',
    '42': '(i/j)',
    '52': 'k',
    '13': 'l',
    '23': 'm',
    '33': 'n',
    '43': 'o',
    '53': 'p',
    '14': 'q',
    '24': 'r',
    '34': 's',
    '44': 't',
    '54': 'u',
    '15': 'v',
    '25': 'w',
    '35': 'x',
    '45': 'y',
    '55': 'z'
  }
function polybius(input, encode = true) {
  // define a variable that will be rid of spaces, replacing all spaces with "", or no space (nothing), pushing the input into one continuous item
const noSpaces = input.replace(/\s/g, "")
  // If the encode argument is false AND the length of noSpaces is not divisible by 2, then the function returns false. 
  if (!encode && noSpaces.length % 2 !== 0) return false
  // define a variable to check if the lookUpEncode object or the lookUpDecode object will be needed, based on the status of the encode argument
  const direction = encode ? lookUpEncode : lookUpDecode
  // return the input argument in lowercase where applicable, bypassing the need for both upper and lower case letters to be read/used
  return input.toLowerCase()
  // check the above input item, going through and checking numbers, categorized in pairs {2}, checking the alphabet, and then checking for spaces '\s', while looping through it globally (g) for the characters in the words/numbers, not just stopping for the first instance that it would occur.
    .match(/[0-9]{2}|[a-z]|\s/g)
    //take the information from the above found matches and map them into a new array, with each character going into a new index number, going through the applicable lookUpEncode or lookUpDecode objects and assigning those matching keys to their values, or if that key is not found, then just map out the character as is.
    .map(character => direction[character] || character)
    //take the above mapped array and join them together with no spaces in between, creating the new output, being numbers or letters based on it being encoded or decoded, respectfully. 
    .join('')
  }
  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
