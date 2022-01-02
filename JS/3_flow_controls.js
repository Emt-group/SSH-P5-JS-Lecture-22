// Javascript 사용하기 예제 코드
// 3. 조건문과 반복문
/*
 * 조건문과 for 문을 활용하여 구구단을 출력할 수 있다.
 * while 문을 활용하여 확률을 계산할 수 있다.
 */

function flowControls() {
    console.log('3. 조건문과 반복문 사용해보기');

    console.log('[구구단 출력해보기 (for 사용)]');

    // dan 변수를 이용해 출력할 구구단 설정하기
    let dan = 2;

    // 2-9단이 아닌 구구단 거르기
    if (!(2 <= dan && dan <= 9)) {
        console.log('올바르지 않은 범위입니다.');
    } else {
        // 반복문을 이용해 특정 구구단 출력하기 (for)
        for (let i = 1; i < 9; i++) {
            // 출력으로 포멧 문자열 사용
            console.log(`${dan} * ${i} = ${dan * i}`);
        }
    }
    console.log(' ');

    console.log('[확률 계산해보기 (while 사용)]');

    // 아래의 변수를 사용하여 어떤 일이 일어날 확률을 계산해보기
    let odds = 0.9;     // 확률 설정
    let count = 0;      // 확률을 뚤은 횟수를 기록할 변수
    let prob = 1;       // count 만큼 확률을 뚫을 확률 계산

    // 확률을 뚫으면 반복
    while (Math.random() < odds) {
        count = count + 1;      // 확률을 뚫은 횟수 증가
        prob = prob * odds;     // 확률 계산
    }

    // 확률을 뚫은 횟수가 0일 때의 확률 구하기
    if (count === 0) {
        prob = 1 - odds;
    }

    // 결과 출력
    console.log(`${odds}의 확률을 ${count}번 뚫었습니다!`);
    console.log(`총 확률: ${prob}`);
    console.log(' ');
}

flowControls();