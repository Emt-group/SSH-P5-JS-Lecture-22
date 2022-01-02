// Javascript 사용하기 예제 코드
// 4. 배열
/*
 * 배열을 사용하여 비슷한 종류의 자료를 분류하여 저장할 수 있다.
 * 배열을 순회하여 배열의 원소의 합과 평균을 구할 수 있다.
 */

function arrays() {
    console.log('4. 배열 사용해보기');

    // 학생의 점수를 저장하는 배열을 만들 수 있다
    let scores = [96, 59, 28, 58, 28, 100, 49, 50, 20, 93];

    let sumOfScore = 0;     // 점수의 합을 구하기 위한 변수
    for (let i = 0; i < scores.length; i++) {
        sumOfScore = sumOfScore + scores[i];        // 모든 점수를 더하기
    }

    // 결과 출력
    for (let i = 0; i < scores.length; i++) {
        console.log(`${i + 1}번째 학생의 점수: ${scores[i]}`);
    }
    console.log(`합계: ${sumOfScore} | 평균: ${sumOfScore / scores.length}`);        // 평균을 위한 변수를 사용할 수도 있다
    console.log(' ');

    // 유용한 배열 함수들
    /*
     * 배열 정렬: sort()
     * 배열 반전: reverse()
     * 요소 찾기: includes(), indexOf()
     * 요소 삽입 및 삭제: push(), pop(), unshift(), shift()
     * 특정 요소 삭제: splice()
     */

    // 배열의 오름차순 정렬
    console.log('[배열을 오름차순으로 정렬하기]');

    let ascendingScores = scores.sort((i, j) => { return i - j })
    for (let i = 0; i < scores.length; i++) {
        console.log(`${i + 1}등 학생의 점수: ${ascendingScores[i]}`);
    }
    console.log(' ');

    // 배열의 내림차순 정렬
    console.log('[배열을 내림차순으로 정렬하기]');

    let descendingScores = ascendingScores.reverse();
    for (let i = 0; i < scores.length; i++) {
        console.log(`${scores.length - i}등 학생의 점수: ${descendingScores[i]}`);
    }
    console.log(' ');

    // 요소 찾기: 만점자 찾아보기
    console.log('[배열에 특정 요소가 있는지 검사하기]');

    let hasPerfectScore = scores.includes(100);

    if (hasPerfectScore === true) {
        console.log('만점자가 있습니다!');
    } else {
        console.log('만점자가 없습니다...');
    }
    console.log(' ');
    
    // 요소 삽입: 전입생 다루기
    console.log('[배열에 요소 삽입하기');
    
    console.log(`요소 삽입 전 배열의 길이: ${scores.length}`);
    scores.push(50);
    console.log(`요소 삽입 후 배열의 길이: ${scores.length}`);
    console.log(' ');

    // 요소 삭제: 전출생 다루기
    console.log('[배열에서 요소 삭제하기');
    
    console.log(`요소 삭제 전 배열의 길이: ${scores.length}`);
    scores.pop();
    console.log(`요소 삭제 후 배열의 길이: ${scores.length}`);
    console.log(' ');

    // 특정 요소 삭제: 장학생 선발하기
    console.log('[배열에서 특정 요소 삭제하기]');

    for (let i = 0; i < scores.length; i++) {
        if (scores[i] < 80) {
            scores.splice(i);
        }
    }

    for (let i = 0; i < scores.length; i++) {
        console.log(`장학금을 받는 학생의 점수: ${scores[i]}`);
    }
    console.log(' ');
}

arrays();