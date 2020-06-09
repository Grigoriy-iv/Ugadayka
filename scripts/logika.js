let cards = document.querySelectorAll(".card");
let openedOneCard;

(function mix() {
    for (let i = 0; i < cards.length; i++) {
        let card = cards[i];
        card.style.order = Math.floor(Math.random() * 20);
    }
})();

for (let i = 0; i < cards.length; i++) {
    let card = cards[i];
    card.addEventListener("click", rotate);
    function rotate() {
        card.classList.add("rotate");
        if (!openedOneCard) {
            openedOneCard = card;
        }
        else {
            setTimeout(() => {
                if (openedOneCard.className !== card.className) {
                    openedOneCard.classList.remove("rotate");
                    card.classList.remove("rotate");
                }
                openedOneCard = null;
            }, 1300);
        }
    }
}