const movie = JSON.parse(localStorage.getItem("movie"));
// console.log(movie);
// console.log(movie.title);
// console.log(movie.img);


let reviewForm = document.getElementsByClassName("reviewForm")[0];

let sendBtn = reviewForm[3];

console.log(document.getElementsByClassName("poster")[0].innerHTML);
console.log(document.getElementsByClassName("movieDetail"));

let change = `<img src="${movie.img}">
    <strong>${movie.title}</strong>`;

let movieposter = document.getElementsByClassName("poster")[0];
movieposter.innerHTML = change;


sendBtn.addEventListener("click", (event) => {
    // event.preventDefault();
    const reviewValue = reviewForm[0].value;
    const userIdValue = reviewForm[1].value;
    const userPwValue = reviewForm[2].value;
    console.log(sendBtn);
    let data = {
        review: reviewValue,
        userId: userIdValue,
        userPw: userPwValue,
    }
    localStorage.setItem(`${userPwValue}`, JSON.stringify(data));
});