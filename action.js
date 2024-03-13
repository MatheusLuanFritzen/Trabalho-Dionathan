function generatePassword() {
    var lowercase = document.getElementById("lowercase").checked;
    var uppercase = document.getElementById("uppercase").checked;
    var numbers = document.getElementById("numbers").checked;
    var symbols = document.getElementById("symbols").checked;
    var length = document.getElementById("length").value;

    var charset = "";
    var password = "";

    if (lowercase) {
        charset += "abcdefghijklmnopqrstuvwxyz";
    }
    if (uppercase) {
        charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }
    if (numbers) {
        charset += "0123456789";
    }
    if (symbols) {
        charset += "!@#$%^&*()_-+=<>?/{}[]";
    }

    for (var i = 0; i < length; i++) {
        password += charset.charAt(Math.floor(Math.random() * charset.length));
    }

    document.getElementById("output").textContent = password;
}

//copiar pra área de transferência

function copyPassword() {
    var output = document.getElementById("output");
    var range = document.createRange();
    range.selectNode(output);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);
    document.execCommand("copy");
    window.getSelection().removeAllRanges();
}

document.addEventListener("DOMContentLoaded", function () {

    // botão gerar senha

    document.getElementById("generate").addEventListener("click", generatePassword);

    //botão copiar senha

    document.getElementById("copy").addEventListener("click", copyPassword);
});
