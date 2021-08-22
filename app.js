const h2 = document.querySelector("#score");
const p1 = document.querySelector('#p1');
const p2 = document.querySelector('#p2');
const reset = document.querySelector('#reset');
const towin = document.querySelector('#towin');
const winnerh2 = document.querySelector("#winner");

var p1Score = 0;
var p2Score = 0;
var towinInt = 0;
towin.addEventListener('input', function () {
    towinInt = parseInt(towin.value);
})



p1.addEventListener("click", function () {
    p1Score += 1;
    h2.innerText = `${p1Score} to ${p2Score}`;

    if (p1Score == towinInt && towinInt !== 0) {
        winnerh2.innerText = 'Congratulations Player 1!';
        p1.disabled = "true";
        p2.disabled = "true";
    }

    else if (p2Score == towinInt && towinInt !== 0) {
        winnerh2.innerText = 'Congratulations Player 2!';
        p1.disabled = "true";
        p2.disabled = "true";
    }

})



p2.addEventListener("click", function () {
    p2Score += 1;
    h2.innerText = `${p1Score} to ${p2Score}`;
    if (p1Score == towinInt && towinInt !== 0) {
        winnerh2.innerText = 'Congratulations Player 1!';
        p1.disabled = "true";
        p2.disabled = "true";
    }

    else if (p2Score == towinInt && towinInt !== 0) {
        winnerh2.innerText = 'Congratulations Player 2!';
        p1.disabled = "true";
        p2.disabled = "true";
    }

})



reset.addEventListener('click', function () {
    p1.disabled = "false";
    p2.disabled = "false";
    p1Score = 0;
    p2Score = 0;
    towinInt = 0;
    h2.innerText = "0 to 0";

    towin.value = 0;
})