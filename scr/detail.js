const movieId = JSON.parse(localStorage.getItem("movieId"));

console.log(movieId);
console.log(movieId.title);
console.log(movieId.img);

//review 창에서 영화 포스터, 제목, 개요 저장할 공간 가져옴
const reviewPoster = document.getElementById("pt");
const reviewTitle = document.getElementById("tt");
const reviewOverview = document.querySelector('.movieDetail');

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
const formReview = document.querySelector(".reviewForm");
formReview.addEventListener('submit', function (event) {
    event.preventDefault();
    showReview();
})

//----------------------리뷰작성--------------------------//

document.addEventListener('DOMContentLoaded', function () {
    const reviewForm = document.querySelector('.reviewForm');
    const reviewInput = document.getElementById('review-input');
    const userInput = document.getElementById('user-input');
    const passwordInput = document.getElementById('password-input');
    const reviewList = document.querySelector('.reviewArea');

    // 리뷰 제출 시 이벤트 처리
    reviewForm.addEventListener('submit', function (e) {
        e.preventDefault();

        // 사용자 입력 가져오기
        const reviewContent = reviewInput.value.trim();
        const userName = userInput.value.trim();
        const password = passwordInput.value;

        // 폼이 모두 채워져 있는지 확인
        if (reviewContent === '' || userName === '' || password === '') {
            alert('모든 필드를 작성하세요.');
            return;
        }

        // 리뷰 객체 생성
        const review = {
            content: reviewContent,
            author: userName,
            password: password,
            time: new Date().toLocaleString(),
        };

        // 리뷰를 localStorage에 저장
        saveReviewToLocalStorage(review);

        // 리뷰 목록을 갱신하고 입력 필드 초기화
        displayReviews();
        reviewInput.value = '';
        userInput.value = '';
        passwordInput.value = '';
    });

    // localStorage에서 리뷰를 불러와 화면에 표시
    function displayReviews() {
        reviewList.innerHTML = '';

        const reviews = getReviewsFromLocalStorage();
        reviews.forEach(review => {
            const listItem = document.createElement('li');
            listItem.textContent = `${review.author}: ${review.content} (${review.time})`;
            reviewList.appendChild(listItem);
        });
    }

    // localStorage에 리뷰를 저장
    function saveReviewToLocalStorage(review) {
        const reviews = getReviewsFromLocalStorage();
        reviews.push(review);
        localStorage.setItem('reviews', JSON.stringify(reviews));
    }

    // localStorage에서 리뷰 목록을 가져옴
    function getReviewsFromLocalStorage() {
        return JSON.parse(localStorage.getItem('reviews')) || [];
    }

    // 페이지 로드 시 저장된 리뷰를 표시
    displayReviews();
});

