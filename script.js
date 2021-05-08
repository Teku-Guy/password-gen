// Assignment code here
var userInput = "";
var arrySplit = "";

//generator Functions
function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);  //generates a lowercase letter.
}

function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);  //generates an uppercase letter.
}

function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);  //generates a random number.
}

function getRandomSymbol() {
  var symbols = "!\"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~";
  return symbols[Math.floor(Math.random() * symbols.length)]; //generates random symbol from const symbols array.
}
//end generator functions



//password generator function
function generatePassword() {

  alert("The criteria for password generator are lowercase, uppercase, numeric, and/or special characters.");

  userInput = prompt("Select criteria for password (you can select more than one) (use space): 1=lowercase 2=uppercase 3=numeric 4=special characters.\n");
  userInput = userInput.split(" ");
  arrySplit = userInput.slice(0, userInput.length); // this will store our user input paramiters and create and array for us to access later on.

  return getRandomLower() + getRandomUpper() + getRandomNumber() + getRandomSymbol();
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
