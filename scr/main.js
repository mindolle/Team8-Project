import { getData } from "./movies.js";
import { getSearch } from "./search.js";

getData();

let handleSearch = document.getElementsByClassName("search")[0];
handleSearch.addEventListener("submit", (event) => {
    event.preventDefault();
    getSearch();
    console.log(event);
});


let cardData = document.getElementsByClassName("card");

// let sendData = cardData.querySelectorAll("div.card");
setTimeout(() => {
    let sendData = Array.from(cardData).map(node => node);
    for (let i = 0; i < sendData.length; i++) {
        sendData[i].addEventListener("click", () => {
            let data = {
                id: sendData[i].id,
                img: sendData[i].querySelector('.image').src,
                rating: sendData[i].querySelector('.text').childNodes[6].innerHTML,
                title: sendData[i].querySelector('.text').childNodes[1].innerHTML,
                summary: sendData[i].querySelector('.text').childNodes[3].innerHTML,
            }
            localStorage.setItem("movieId", JSON.stringify(data));
            location.href = 'review.html';
            console.log(sendData[i]);
        });
    }
    console.log(sendData[0].querySelector('.image').src);
    console.log(sendData[0].querySelector('.text').childNodes[6].innerHTML);
    console.log(sendData[0].querySelector('.text').childNodes[1].innerHTML);
    console.log(sendData[0].querySelector('.text').childNodes[3].innerHTML);
}, 300);




