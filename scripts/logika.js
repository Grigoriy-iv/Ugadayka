let cards = document.querySelectorAll(".card");
let btn_play = document.querySelector(".btn_play");
btn_play.addEventListener("click", startGame);
let time = document.querySelector(".time");
let openedOneCard;
let block = false;
let seconds = 0;
let minutes = 0;
let lock_time = false;

(function mix() {
    for (let i = 0; i < cards.length; i++) {
        let card = cards[i];
        card.style.order = Math.floor(Math.random() * 20);
    }
})();

function startGame() {
    setTimeout(() => {
        if (lock_time === false) {
            lock_time = true;
            setInterval(timer, 1000);
        }
        for (let i = 0; i < cards.length; i++) {
            let card = cards[i];
            card.addEventListener("click", rotate);
            function rotate() {
                if (block === true) {
                    return;
                }
                card.classList.add("rotate");
                if (!openedOneCard) {
                    openedOneCard = card;
                }
                else {
                    if (openedOneCard === card) {
                        return;
                    }
                    block = true;
                    setTimeout(() => {
                        if (openedOneCard.className !== card.className) {
                            openedOneCard.classList.remove("rotate");
                            card.classList.remove("rotate");
                        }
                        openedOneCard = null;
                        block = false;
                    }, 1300);
                }
            }
        }
    }, 3000);
}

function timer() {
    seconds ++;
    if (seconds >= 60) {
        minutes++;
        seconds = 0;
    }
    if (seconds < 10) {
        if (minutes < 10) {
            time.innerHTML = "0" + minutes + ":0" + seconds;
        }
        else {
            time.innerHTML = "" + minutes + ":0" + seconds;
        }
    }
    else {
        if (minutes < 10) {
            time.innerHTML = "0" + minutes + ":" + seconds;
        }
        else {
            time.innerHTML = "" + minutes + ":" + seconds;
        }
    }
}


// function stopGame() {
//     if
// }