//          При нажатии на карточку, она переворачивается

let cards = document.querySelectorAll(".card");
(function mix() {
    for (let i = 0; i < cards.length; i++) {
        let card = cards[i];
        card.style.order = Math.floor(Math.random() * 20);
        card.addEventListener("click", rotate);
            function rotate() {
                card.classList.add("rotate");
            }
    }
})()

//                     Массив из случайных чисел --> Math.floor

// (function mix() {
//     for (let i = 0; i < cards.length; i++) {
//         let card = cards[i];
//         card.style.order = Math.floor(Math.random() * 20);
//     }
// })();

//                      Проверяем на совпадение

