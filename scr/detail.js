// function setScreenSize() {
//     let vh = window.innerHeight * 0.01;
//     let vw = window.innerWidth * 0.01;
//     document.documentElement.style.setProperty("--vh", `${vh}px`);
//     document.documentElement.style.setProperty("--vw", `${vw}px`);
// }

// window.addEventListener('resize', () => setScreenSize());

export const resultData = (sendData) => {
    let data = {
        id: sendData.id,
        img: sendData.querySelector('.image').src,
        rating: sendData.querySelector('.text').childNodes[6].innerHTML,
        title: sendData.querySelector('.text').childNodes[1].innerHTML,
        summary: sendData.querySelector('.text').childNodes[3].innerHTML,
    }
    localStorage.setItem("movie", JSON.stringify(data));
    localStorage.setItem(`movie${sendData.id}`, JSON.stringify(data));
    
    location.href = 'review.html';
}