let passwordEl = document.getElementById("password-el");
let passwords = [];

function generateRandom() {
  let password = "";
  let characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let charactersLength = characters.length;
  for (var i = 0; i < 8; i++) {
    password += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return password;
}

function generatePassword(){
    for(let i = 0; i < 4; i++){
    passwords[i] = generateRandom()
}
    document.getElementById('password-el').innerHTML =
    '<li>' + passwords.join('</li><li>') + '</li>'
}

