let passwordEl = document.getElementById("password-el");
let passwords = [];

function generateRandomLetter() {
  let password = "";
  let characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let charactersLength = characters.length;
  for (var i = 0; i < 8; i++) {
    password += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return password;
}
console.log(generateRandomLetter());

function generatePassword() {
  console.log("this works")
}
