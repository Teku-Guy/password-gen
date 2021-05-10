var finalPassword = "";
var hasLower;
var hasUpper;
var hasNumber;
var hasSymbol;

var randomFunc = {  //stores are random generated characters
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

var validateType = function() {
  //debugger;
  let passwordLength = prompt("Choose how many characters long you'd like your password to be (between 8-128 characters): ");
  if(typeof passwordLength === "string"){
    var parsedChar = parseInt(passwordLength);
    if(isNaN(parsedChar)){
      alert("You have entered a word must be a number.");
      return validateType();
    } else {
      return parsedChar;
    }
  }
}

var getlength = function() {
  let validLength = validateType();
  //debugger;
  console.log(validLength);
  if(validLength >= 8 && validLength <= 128){
    alert("You have selected a valid length: " + validLength + "\n");
  } else {
    alert("Password length must be a number between 8-128 characters");
    return getlength();
  }

  return validLength;
};

function setOptions(){
  hasLower = confirm("Would you like to use Lowercase letters" + "\n" + "Press 'OK' to include.");
  hasUpper = confirm("Would you like to use Uppercase letters?" + "\n" + "Press 'OK' to include.");
  hasNumber = confirm("Would you like to use Numbers?" + "\n" + "Press 'OK' to include.");
  hasSymbol = confirm("Would you like to use Special characters?" + "\n" + "Press 'OK' to include.");
}

function generatePassword() {
	let generatedPassword = '';
  let length = getlength();
  setOptions(); //set are criteria for pass
	var typesCount = hasLower + hasUpper + hasNumber + hasSymbol; //here we how manny criteria we have selected
	var typesArr = [{ hasLower }, { hasUpper }, { hasNumber }, { hasSymbol }].filter(item => Object.values(item)[0]);
	
  // if criteria = 0 means none selected and restart proccess
  if(typesCount === 0) {
    alert('Must Select atleast One option. Try again!'); //Must Select atleast One option. Press the button to try again!
    return generatePassword(); //restart the function
  }

  // create the gen loop
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
