import { getData } from "./movies.js";
import { getSearch } from "./search.js";
import { resultData } from "./detail.js";

getData();

let handleSearch = document.getElementsByClassName("search")[0];
handleSearch.addEventListener("submit", (event) => {
    event.preventDefault();
    getSearch();
    console.log(event);
});

let cardData = document.getElementsByClassName("card");

setTimeout(() => {
    let sendData = Array.from(cardData).map(node => node);
    for (let i = 0; i < sendData.length; i++) {
        sendData[i].addEventListener("click", () => {
            resultData(sendData[i]);
        });
    }
}, 50);




