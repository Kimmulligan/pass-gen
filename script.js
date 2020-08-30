//get this from user

const textArea = document.getElementById("password")
const generateButton = document.getElementById("generate")
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specials = ["!", '"', "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "0", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "/", "]", "^", "_", "`", "{", "|", "}", "~"];

var options = [lowercase, specials, numbers, uppercase]
// this is the password we will return to user, it has to be between 8-20 random characters from the options array

//make the password 
function generate() {
  var passwordLength = parseInt(window.prompt("Please enter how many characters you would like your password to be"));
  let setsUsed = [0, 0, 0, 0]
  setsUsed[0] = (!window.confirm("lowercase")) ? 1 : 0
  setsUsed[1] = (!window.confirm("specials")) ? 1 : 0
  setsUsed[2] = (!window.confirm("numbers")) ? 1 : 0
  setsUsed[3] = (!window.confirm("uppercase")) ? 1 : 0
  var password = ""
  function getString () {
    password = ""
    //loop until passwrod_length >8 and less than 120
    for (let i = 0; i < passwordLength; i++) {
      let random_option = Math.floor(Math.random() * options.length)
      if (setsUsed[random_option]) {
        i--
        continue
      }
      let character_set = options[random_option]
      let randomCharacter = Math.floor(Math.random() * character_set.length)
      password += character_set[randomCharacter]
    }
    if (passwordLength.length < 8 || passwordLength.length > 128) {
      window.alert("Please enter a length between 8 and 128.");
    } else {
    passwordLength
      // add passwordLength input to the object you're storing your password information
    }
  }
  let usedSets = [...setsUsed]
  while(usedSets.reduce(function (acc, cur) {
    return acc + cur
  }, 0) < 4) {
    usedSets = [...setsUsed]
    getString()
    for (let char = 0; char < password.length; char++) {
      for (let i = 0; i < options.length; i++) {
        if (options[i].includes(password[char])) {
          usedSets[i] = 1
        }
      }
    }
  
  } 
  textArea.innerHTML = password
}
generateButton.addEventListener(
  "click",
  generate
)
//add password to textbox/display area

//show the password on log
console.log("Password: " + password)
