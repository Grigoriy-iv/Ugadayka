
let btn_4x3 = document.querySelector("#btn_4x3");
btn_4x3.addEventListener("click", _area_4x3);
let btn_burg_4x3 = document.querySelector("#btn_burg_4x3");
btn_burg_4x3.addEventListener("click", _area_4x3);
let btn_4x4 = document.querySelector("#btn_4x4");
btn_4x4.addEventListener("click", _area_4x4);
let btn_burg_4x4 = document.querySelector("#btn_burg_4x4");
btn_burg_4x4.addEventListener("click", _area_4x4);
let btn_4x5 = document.querySelector("#btn_4x5");
btn_4x5.addEventListener("click", _area_4x5);
let btn_burg_4x5 = document.querySelector("#btn_burg_4x5");
btn_burg_4x5.addEventListener("click", _area_4x5);

let playing_area_4x5 = document.querySelector(".playing_area_4x5");
let playing_area_4x4 = document.querySelector(".playing_area_4x4");
let playing_area_4x3 = document.querySelector(".playing_area_4x3");
let game_container = document.querySelector(".game_container");
let rules = document.querySelector(".rules_of_the_game");

function _area_4x3() {
    playing_area_4x3.classList.remove("hidden");
    game_container.classList.remove("hidden");
    playing_area_4x4.classList.add("hidden");
    playing_area_4x5.classList.add("hidden");
    rules.classList.add("hidden");
    showBurger();
}
function _area_4x4() {
    playing_area_4x4.classList.remove("hidden");
    game_container.classList.remove("hidden");
    playing_area_4x3.classList.add("hidden");
    playing_area_4x5.classList.add("hidden");
    rules.classList.add("hidden");
    showBurger();
}
function _area_4x5() {
    playing_area_4x5.classList.remove("hidden");
    game_container.classList.remove("hidden");
    playing_area_4x3.classList.add("hidden");
    playing_area_4x4.classList.add("hidden");
    rules.classList.add("hidden");
    showBurger();
}

let button_burger = document.querySelector(".btn_burger");
button_burger.addEventListener("click", showBurger);
let list_burger = document.querySelector(".list_burger");
function showBurger() {
    list_burger.classList.toggle("hidden");
}

let btn_results = document.querySelector(".btn_results");
btn_results.addEventListener("click", tableResults);
let results = document.querySelector(".results");
function tableResults() {
    results.classList.remove("hidden");
    results.classList.add("active");
    rules.classList.add("hidden");
    game_container.classList.add("hidden");
    showBurger();
}

let btn_close_results = document.querySelector(".btn_close_results");
btn_close_results.addEventListener("click", closeTableResults);
function closeTableResults() {
    results.classList.remove("active");
    // _area_4x3();
    // list_burger.classList.toggle("hidden");
}

let close_rules = document.querySelector(".btn_close");
close_rules.addEventListener("click", closeRules);
function closeRules() {
    rules.classList.add("hidden");
    // _area_4x3();
    // list_burger.classList.toggle("hidden");
}

let info = document.querySelector(".btn_info");
info.addEventListener("click", showRules);
function showRules() {
    // game_container.classList.remove("hidden");
    rules.classList.remove("hidden");
    results.classList.remove("active");
    playing_area_4x3.classList.add("hidden");
    playing_area_4x4.classList.add("hidden");
    playing_area_4x5.classList.add("hidden");
}


// function _area_4x3() {
//     setAreaVisibility("playing_area_4x3");
// }
// function _area_4x4() {
//     setAreaVisibility("playing_area_4x4");
// }
// function _area_4x5() {
//     setAreaVisibility("playing_area_4x5");
// }

// function setAreaVisibility(visibleArea) {
//     let buttons = ["playing_area_4x3", "playing_area_4x4", "playing_area_4x5"];
//     for (let i = 0; i < buttons.length; i++) {
//         let playing_area = buttons[i];
//         document.querySelector(`.${playing_area}`).classList.add("hidden");
//     }
//     document.querySelector(`.${visibleArea}`).classList.remove("hidden");
// }