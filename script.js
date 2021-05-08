// Assignment code here
function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getRandomSymbol() {
  const symbols = ' !"#$%&()*+,-./:;<=>?@[\]^_`{|}~';
  return symbols[Math.floor(Math.random() * symbols.length)];
}

function generatePassword() {
  console.log(getRandomLower());
  console.log(getRandomUpper());
  console.log(getRandomNumber());
  console.log(getRandomSymbol());
  return "check console log";
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
