var password = document.getElementById("password");
function genPassword() {
  var chars =
    "0123456789abcdefghijkklmnopqrstuvwxyz!@#$%ˆ&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var passwordLenght = 12;
  var password = "";
  for (var i = 0; i < passwordLenght; i++) {
    var randomNumber = Math.floor(Math.random() * chars.length);
    password += chars.substring(randomNumber, randomNumber + 1);
  }
  document.getElementById("password").value = password;
}
function copyPassword() {
  var copyText = document.getElementById("password");
  copyText.select();
  copyText.setSelectionRange(0, 999);
  document.execCommand("copy");
}
