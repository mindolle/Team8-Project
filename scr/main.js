import {getData} from "./movies.js";
import {getSearch} from "./search.js";

getData();

let handleSearch = document.getElementsByClassName("search")[0];
handleSearch.addEventListener("submit", (event) => {
    event.preventDefault();
    getSearch();
    console.log(event);
});

/* 검색 버튼 클릭시 호출되는 함수. */
