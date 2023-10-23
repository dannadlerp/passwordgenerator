// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var length = password.length + 1
  passwordcompilation = ""
  const lowerCase = "abcdefghijklmnopqrstuvwxyz";
  const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numeric = "0123456789"
  const specialChar = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~"
  prompt("Please select number of characters between 8 - 128")
  if (length < 8 > 128) {
    alert("please select between 8 to 128")
    return;
  }
  
  if (password < 8 > 128) {
    alert("Password must be between 8 and 128 characters")
    return;
  }
  
var wantslowercase = confirm("Would you like you use lower case letters?");
  if (wantslowercase) {
    console.log("lowercase confirmed");
    passwordcompilation.concat(self, lowerCase)
  }

var wantsuppercase = confirm("Would you like you use upper case letters?");
  if (wantsuppercase) {
    console.log("uppercase confirmed");
    passwordcompilation.concat(self, upperCase)
  }

var wantsnumeric = confirm("Would you like you use numbers?");
  if (wantsnumeric) {
    console.log("numeric confirmed");
    passwordcompilation.concat(self, numeric)
  }

var wantsspecialchar = confirm("Would you like you use special characters?");
  if (wantsspecialchar) {
    console.log("special characters confirmed");
    passwordcompilation.concat(self, specialChar)
  }
    console.log("The password input is done")
}

document.getElementById("password").textContent = "password"
var passwordsplit = passwordcompilation.split(' ', length);
console.log(passwordsplit)

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
