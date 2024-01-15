// 카드를 클릭하면 해당 영화의 정보를 localStorage에 저장하고 페이지 이동.
// 카드를 클릭할 때 마다 movie라는 key값의 Value는 계속 변경된다.
// 이를 가지고 영화 상세정보 및 영화별 리뷰 구분을 한다.
export const resultData = (sendData) => {
    let data = {
        id: sendData.id,
        img: sendData.querySelector('.image').src,
        rating: sendData.querySelector('.text').childNodes[6].innerHTML,
        title: sendData.querySelector('.text').childNodes[1].innerHTML,
        summary: sendData.querySelector('.text').childNodes[3].innerHTML,
    }
    localStorage.setItem("movie", JSON.stringify(data));
    // localStorage.setItem(`movie${sendData.id}`, JSON.stringify(data));
    
    location.href = 'review.html';
}