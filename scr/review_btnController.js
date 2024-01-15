const movie = JSON.parse(localStorage.getItem("movie"));

// 영화별로 리뷰 전체 출력하는 함수
export let showReview = () => {
    let reviewArea = document.querySelector(".reviewArea");
    let count = 0;
    let text = '';
    let reviewArray = [];
    while (1) {
        if (JSON.parse(localStorage.getItem(`${movie.id}review${count}`)) !== null) {
            let reviewData = JSON.parse(localStorage.getItem(`${movie.id}review${count}`));
            reviewArray.push(reviewData);
            text += `<div class="reviewCard">
            <h4>${reviewData.review}</h4>
            <a style="font-size: 12px; display: grid;
            justify-content: right;"></t>작성자 : ${reviewData.userId}</a>
                    <div class="modifyBtn">
                        <button class="modify-button">수정</button>
                        <button class="delete-button")">삭제</button>
                    </div>
                <a style="justify-content: left; font-size: 10px;">${reviewData.nowDate}</a>
                <div class="modifyText" style="display: none;">
                    <input type="text"><button>제출</button></input>
                </div>
            </div>`;
            count++;
        }
        else {
            break;
        }
    }
    reviewArea.innerHTML = text;
    console.log(reviewArray);
    return reviewArray;
}

// 리뷰 작성 후 제출하는 함수
export let submitBtn = () => {
    const movie = JSON.parse(localStorage.getItem("movie"));
    let reviewForm = document.getElementsByClassName("reviewForm")[0];
    let count = 0;
    const reviewValue = reviewForm[0].value;
    const userIdValue = reviewForm[1].value;
    const userPwValue = reviewForm[2].value;

    let reviewData = {
        review: reviewValue,
    };

    let userData = {
        userId: userIdValue,
        userPw: userPwValue,
        nowDate: new Date().toLocaleString()
    };

    // 객체 병합
    let data = { ...reviewData, ...userData };

    // 유효성 검사
    if (data.review === "")
        alert("리뷰를 작성해주세요!");
    else if (data.userId === "")
        alert("작성자명을 작성해주세요.");
    else if (data.userPw === "")
        alert("비밀번호 입력은 필수입니다.");
    else {
        // movieId를 구분하여 count값을 증가시키며 리뷰를 저장한다.
        // localstorage 안에 데이터가 없을 때 까지 증가시키고, null이면 while문이 종료되며 localstorage에 저장
        while (JSON.parse(localStorage.getItem(`${movie.id}review${count}`)) !== null)
            count++;
        localStorage.setItem(`${movie.id}review${count}`, JSON.stringify(data));
    }
}

// 리뷰 삭제하는 함수
export let removeReview = (index, array) => {
    let reviewArray = array
    let remove = document.getElementsByClassName("delete-button");
    let isName = remove[index].parentElement.parentElement.children[1].innerText.substr(6);
    console.log(isName);
    let count = 0;
    while (JSON.parse(localStorage.getItem(`${movie.id}review${count}`)) !== null) {
        let isReview = JSON.parse(localStorage.getItem(`${movie.id}review${count}`));
        //비밀번호 검증 과정 필요.
        if (isReview.userId === isName) {
            let checkPw = prompt('비밀번호를 입력하세요.');
            if (checkPw === isReview.userPw) {
                alert("삭제되었습니다.");
                // 배열의 count번째에 있는 index값 삭제
                reviewArray.splice(count, 1);
                // 삭제된 배열로 로컬스토리지 재구성. 삭제된 지점부터 한 칸씩 앞으로 땡겨짐
                for (let i = count; i < reviewArray.length; i++) {
                    localStorage.setItem(`${movie.id}review${i}`, JSON.stringify(reviewArray[i]));
                }
                // 다 땡겨지고 난 뒤 마지막 인덱스에 있는 로컬스토리지 삭제
                localStorage.removeItem(`${movie.id}review${reviewArray.length}`);
            }
            else if (checkPw === null) { }
            else {
                alert("비밀번호가 일치하지 않습니다.");
                console.log(checkPw);
            }
            break;
        }
        count++;
    }
}

// 리뷰 수정 버튼 클릭 시 동작하는 함수
export let modifyReview = (index) => {
    const modify = document.getElementsByClassName("modify-button");
    let isName = modify[index].parentElement.parentElement.children[1].innerText.substr(6);
    console.log(isName);
    let count = 0;
    while (JSON.parse(localStorage.getItem(`${movie.id}review${count}`)) !== null) {
        let isReview = JSON.parse(localStorage.getItem(`${movie.id}review${count}`));
        //비밀번호 검증 과정 필요.
        if (isReview.userId === isName) {
            let checkPw = prompt('비밀번호를 입력하세요.');
            if (checkPw === isReview.userPw)
                modify[index].parentElement.parentElement.children[4].style.display = "grid";
            else if (checkPw === null) { }
            else
                alert("비밀번호가 일치하지 않습니다.");
            break;
        }
        count++;
    }
}

// 리뷰 수정 클릭 후 제출 시 동작하는 함수
export let modifySubmit = (index) => {
    const modify = document.getElementsByClassName("modify-button");
    let reviewValue = modify[index].parentElement.parentElement.children[4].children[0].value;
    if (reviewValue === "") {
        alert("리뷰를 작성해주세요.");
    } else {
        let isName = modify[index].parentElement.parentElement.children[1].innerText.substr(6);
        let count = 0;
        while (JSON.parse(localStorage.getItem(`${movie.id}review${count}`)) !== null) {
            let isReview = JSON.parse(localStorage.getItem(`${movie.id}review${count}`));
            if (isReview.userId === isName) {
                let data = {
                    review: reviewValue,
                    userId: isReview.userId,
                    userPw: isReview.userPw,
                    nowDate: new Date().toLocaleString(),
                }
                localStorage.setItem(`${movie.id}review${count}`, JSON.stringify(data));
                alert("수정되었습니다.");
                break;
            }
            count++;
        }
    }
}