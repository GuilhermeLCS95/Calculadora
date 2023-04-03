// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

function insert(num) {
   var num2 = window.document.getElementById('result').innerHTML;
    window.document.getElementById('result').innerHTML = num2 + num;
}
function clean() {
    window.document.getElementById('result').innerHTML = "";
}
function backspace() {
    var lastChar = window.document.getElementById('result').innerHTML;
    window.document.getElementById('result').innerHTML = lastChar.substring(0, lastChar.length - 1);
}
function calc() {
    var outcome = window.document.getElementById('result').innerHTML;

    if (outcome) {
        document.getElementById('result').innerHTML = eval(outcome);
    }
    else {
        window.document.getElementById('result').innerHTML = "It's impossible to calculate.";
    }
}