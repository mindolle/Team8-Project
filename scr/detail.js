const movieId = JSON.parse(localStorage.getItem("movieId"));
console.log(movieId);
console.log(movieId.title);
console.log(movieId.img);

//review 창에서 영화 포스터, 제목, 개요 저장할 공간 가져옴
const reviewPoster = document.getElementById("pt");
const reviewTitle = document.getElementById("tt");
const reviewOverview = document.querySelector('.movieDetail');

//저장되어 있는 영화 정보 가져옴
const movieId = JSON.parse(localStorage.getItem("movieId"));

//저장된 정보 리뷰 창에 반영함
reviewPoster.src = movieId.img;
reviewTitle.textContent = movieId.title;
reviewOverview.textContent = movieId.summary;


// 사용자 이름, 비밀번호, 리뷰 내용 보여주는 함수
function showReview() { 
    const reviewArea = document.querySelector(".reviewArea");
    //let reviewer = {};
    const review = document.getElementById("review-input").value;
    const user = document.getElementById("user-input").value;
    const pw = document.getElementById("password-input").value;
    // reviewer.user = user;
    // reviewer.pw = pw;
    // reviewer.review = review;
    reviewArea.innerHTML = `<li>이름 : ${user}</li>
    <li>비밀번호 : ${pw}</li>
    <li>리뷰 : ${review}</li>`;
}

//form 태그 내에서 입력한 내용 제출하면 showReview함수 실행
const formReview = document.querySelector("#form");
formReview.addEventListener('submit', function (event) {
    event.preventDefault();
    showReview();
})