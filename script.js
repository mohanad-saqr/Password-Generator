// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Function to generate a random password
function generatePassword() {
  var length = "8";
  var charsetlowercase = "abcdefghijklmnopqrstuvwxyz";
  var charsetuppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var digits = "0123456789";
  var specialChars = "!@#$%^&*()_+{}[]|?/<>,.";
  
  // This indicates that the password MUST contain one of each of these requirments:
  var password = getRandomChar(charsetlowercase) + getRandomChar(charsetuppercase) + getRandomChar(digits) + getRandomChar(specialChars);


  var remainingLength = 4; 
  var allChars = charsetlowercase + charsetuppercase + digits + specialChars;

  for (var i = 0; i < remainingLength; i++) {
    var randomChar = allChars.charAt(Math.floor(Math.random() * allChars.length));
    password += randomChar;
  }
  
  // This is to shuffle the password generated and rearange the characters, there is no pattern.
  password = shuffleString(password);
  
  return password;
}

// This is to get random characters pulled for the password, can be pulled from all the functions listed above.
function getRandomChar(str) {
  return str.charAt(Math.floor(Math.random() * str.length));
}

function shuffleString(str) 
{
    var array = str.split('');
    var len = array.length;
    
    while (len) {
        var i = Math.floor(Math.random() * len--);
        var temp = array[len];
        array[len] = array[i];
        array[i] = temp;
    }

    return array.join('');
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);