// Javascript 사용하기 예제 코드
// 5. 함수
/*
 * 함수를 사용하여 코드를 구조화할 수 있다.
 */

function functions() {
    console.log('5. 함수 사용해보기')

    // 첫 함수 작성해보기
    printHi();
    printNum(10);
    console.log(' ');

    // 점수 배열로부터 장학생 선발하기
    let scores = [96, 59, 28, 58, 28, 100, 49, 50, 20, 93];

    // 주의: 배열의 복사본을 전달해야 함
    let goodStudent1 = getGoodStudent(scores.slice(), 50);
    let goodStudent2 = getGoodStudent(scores.slice(), 70);

    console.log(scores);
    console.log(goodStudent1);
    console.log(goodStudent2);
}

function printHi() {
    console.log('안녕하세요, 저는 printHi예요.');
}

function printNum(num) {
    console.log(`입력하신 숫자가 ${num}인가요?`)
}

// 장학생의 점수를 반환하는 함수
function getGoodStudent(scores, goodScore) {
    for (let i = 0; i < scores.length; i++) {
        if (scores[i] < goodScore) {
            scores.splice(i, 1);
            i--;
        }
    }

    return scores;
}

functions();