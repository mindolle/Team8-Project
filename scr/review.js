import { showReview, submitBtn, removeReview, modifyReview, modifySubmit } from "./review_btnController.js";

const movie = JSON.parse(localStorage.getItem("movie"));

let reviewForm = document.getElementsByClassName("reviewForm")[0];
let sendBtn = reviewForm[3];

let movieposter = document.getElementsByClassName("poster")[0];
let moviesummary = document.getElementsByClassName("movieDetail")[0];
let change = `<img src="${movie.img}">
    <strong>${movie.title}</strong>`;
let summary = `<p>${movie.summary}</br></br>
                <strong>${movie.rating}</strong></p>`;

movieposter.innerHTML = change;
moviesummary.innerHTML = summary;
let reviewArray = showReview();

// 리뷰 제출버튼 클릭 이벤트
sendBtn.addEventListener("click", (event) => {
    // event.preventDefault();
    submitBtn();
});

// 리뷰 삭제버튼 클릭 이벤트
let remove = document.getElementsByClassName("delete-button");
for (let i = 0; i < remove.length; i++) {
    remove[i].addEventListener("click", (e) => {
        removeReview(i, reviewArray);
        location.reload();
    });
}

// 리뷰 수정버튼 클릭 이벤트
let modify = document.getElementsByClassName("modify-button");
for (let i = 0; i < remove.length; i++) {
    modify[i].addEventListener("click", () => {
        modifyReview(i);
    });

    let modifyBtn = modify[i].parentElement.parentElement.children[4].children[1];
    modifyBtn.addEventListener("click", () => {
        modifySubmit(i);
        location.reload();
    });
}