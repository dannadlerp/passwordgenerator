// Assignment Code
var generateBtn = document.querySelector("#generate");
var generatedPassword = document.getElementById("password")
// Write password to the #password input
function writePassword() {
  passwordcompilation = ""
  const lowerCase = "abcdefghijklmnopqrstuvwxyz";
  const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numeric = "0123456789"
  const specialChar = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~"
  var criteriaAmount = (0)
  length = prompt("Please select number of characters between 8 - 128");
  // character length limiter
  if (length < 8 || length > 128) {
    alert("please select between 8 to 128");
    console.log("password length must be between 8 and 128 characters");
    return;
  }
   //criteria for password questions 
var wantslowercase = confirm("Would you like you use lower case letters?");
  if (wantslowercase) {
    criteriaAmount++
    console.log("lowercase confirmed");
     passwordcompilation += lowerCase;
  }

var wantsuppercase = confirm("Would you like you use upper case letters?");
  if (wantsuppercase) {
    criteriaAmount++
    console.log("uppercase confirmed");
    passwordcompilation += upperCase;
  }

var wantsnumeric = confirm("Would you like you use numbers?");
  if (wantsnumeric) {
    criteriaAmount++
    console.log("numeric confirmed");
    passwordcompilation += numeric;
  }

var wantsspecialchar = confirm("Would you like you use special characters?");
  if (wantsspecialchar) {
    criteriaAmount++
    console.log("special characters confirmed");
    passwordcompilation += specialChar;
  }
    console.log("The password input is done")
    document.getElementById("password").textContent = "password"
    var splitPassword = passwordcompilation.split("");
    var passwordLength = splitPassword.length
    generatedPassword = "" //assign to empty string before adding random characters otherwise HTML textareaelement appears
      
    for (i = 0; i < length; i++) {
      var randomChar = splitPassword[Math.floor(passwordLength * Math.random())];
      generatedPassword += randomChar;
    }
    //if all criteria is left blank, an error message is displayed
    if (criteriaAmount === 0) {
      console.log("password criteria is blank");
        alert("Password cannot be blank");
        generatedPassword = []
        return;
      }

    //pass final password to html file
    console.log(splitPassword)
    password.textContent = generatedPassword
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
