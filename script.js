var passwordLength = "";
var finalPassword = "";
var hasLower;
var hasUpper;
var hasNumber;
var hasSymbol;

var randomFunc = {
  hasLower: getRandomLower,
	hasUpper: getRandomUpper,
	hasNumber: getRandomNumber,
	hasSymbol: getRandomSymbol
}

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
  var symbols = "!@#$%^&*()_-+={}[];:'`~<,>.?/|";
  return symbols[Math.floor(Math.random() * symbols.length)]; //generates random symbol from var symbols array.
}
//end generator functions

var getlength = function() {
  passwordLength = prompt("Choose how many characters long you'd like your password to be (between 8-128 characters): ");

  if(passwordLength < 8){
    alert("Password length must be a number between 8-128 characters");
    getlength();
  } else if(passwordLength > 128) {
    alert("Password length must be a number between 8-128 characters");
    getlength();
  } else {
    alert("You have selected a valid length: " + passwordLength + "\n");
  }

  return parseInt(passwordLength);
};

function setOptions(){
  hasLower = confirm("want lowercan letters?");
  hasUpper = confirm("want uppercase letters?");
  hasNumber = confirm("Want numbers?");
  hasSymbol = confirm("want special characters?");
}

function generatePassword() {
	let generatedPassword = '';
  var length = getlength();
  setOptions();
	var typesCount = hasLower + hasUpper + hasNumber + hasSymbol;
  console.log(typesCount);
	var typesArr = [{ hasLower }, { hasUpper }, { hasNumber }, { hasSymbol }].filter(item => Object.values(item)[0]);
  console.log(typesArr);
	
  // Doesn't have a selected type
  if(typesCount === 0) {
    alert('Must Select atleast One option. Try again!');
    return '';
  }

  // create a loop
  for(let i=0; i<length; i+=typesCount) {
    typesArr.forEach(type => {
      var funcName = Object.keys(type)[0];
      generatedPassword += randomFunc[funcName]();
    });
  }
  finalPassword = generatedPassword.slice(0, length);
  return finalPassword;
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
