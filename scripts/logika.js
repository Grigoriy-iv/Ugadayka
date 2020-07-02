let cards = document.querySelectorAll(".card");
let btn_play = document.querySelector(".btn_play");
btn_play.addEventListener("click", startGame);
let openedOneCard;
let lock = false;
let lock_time = false;
let clock;

(function mix() {
    for (let i = 0; i < cards.length; i++) {
        let card = cards[i];
        card.style.order = Math.floor(Math.random() * cards.length);
    }
})();

function startGame() {
    setTimeout(() => {
        if (!lock_time) {
            lock_time = true;
            clock = setInterval(timer, 1000);
        }
        for (let i = 0; i < cards.length; i++) {
            let card = cards[i];
            card.addEventListener("click", rotate);
            function rotate() {
                if (lock) {
                    return;
                }
                if (card.classList.contains("rotate")) {
                    return;
                }
                card.classList.add("rotate");
                if (!openedOneCard) {
                    openedOneCard = card;
                }
                else{
                    if (openedOneCard === card) {
                        return;
                    }
                    lock = true;
                    setTimeout(() => {
                        if (openedOneCard.className !== card.className) {
                            openedOneCard.classList.remove("rotate");
                            card.classList.remove("rotate");
                        }
                        openedOneCard = null;
                        lock = false;
                    }, 1300);
                }
            }
        }
    }, 3000);
}

let time = document.querySelector(".time");
let seconds = 0;
let minutes = 0;
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

function stop_timer() {
    clearInterval(clock);
}

// _______________Создаем в нашем HTML-файле блоки для сохранения списка результатов__________________________

let num = 0;
function recordResult() {
    let create_result = document.createElement("div");
    create_result.className = "result";
    let create_number = document.createElement("div");
    create_number.className = "number";
    let create_total_time = document.createElement("div");
    create_total_time.className = "total_time";
    list_results.append(create_result);
    create_result.append(create_number);
    create_result.append(create_total_time);
    create_total_time.setAttribute("style", "border-bottom: 3px dotted #BF4949");
    if (num >= 0) {
        num++;
        create_number.innerHTML = num + ".";
        create_total_time.innerHTML = time.innerHTML;
    }
}

let btn_clear = document.querySelector(".btn_clear");
btn_clear.addEventListener("click", clearResult);
let list = document.querySelector(".list_results")
function clearResult() {
    list.innerHTML = null;
    num = 0;
}