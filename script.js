let userInputField = document.getElementById("text-input")
let resultField = document.getElementById("result")

function checkButton() {
  let userInput = userInputField.value;
  let cleanUserInput = cleanInputString(userInput).toLowerCase();
  console.log("userInput: ", userInput);
  console.log("cleanUserInput: ", cleanUserInput);
  if (cleanUserInput === "") {
    alert("Please input a value");
    result.innerText = "";
  }
  else if (isPalindrome(cleanUserInput)) {
    result.innerText = `${userInput} is a palindrome`;
  }
  else {
    result.innerText = `${userInput} is not a palindrome`
  }
}

function isPalindrome(str) {
  return str === str.split('').reverse().join('');
}

function cleanInputString(str) {
  const regex = /[^0-9a-z]/gi;
  let test = str.replace(regex, '');
  return str.replace(regex, '');
}