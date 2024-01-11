import {getData} from "./movies.js";
import {getSearch} from "./search.js";

getData();

let handleSearch = document.getElementsByClassName("search")[0];
handleSearch.addEventListener("submit", (event) => {
    event.preventDefault();
    getSearch();
    console.log(event);
});

let sendData = document.getElementsByClassName("card");
console.log(sendData);
for(let i = 0; i < sendData.length; i++) {
    sendData[i].addEventListener("click", () => {
        localStorage.setItem("movieId", JSON.stringify(sendData[i].id));
        location.href='review.html';
    });
}

