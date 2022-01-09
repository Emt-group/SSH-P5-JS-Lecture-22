// 5. 조건문
/*
 * 조건문을 설명할 수 있다.
 * 조건문을 사용해 나이를 구분할 수 있다.
 */

function conditional() {
    console.log('5. 조건문');

    // 나이 계산기 만들어보기
    console.log('[나이 계산기 만들어보기]');

    var age = 12;

    if (age >= 20) {
        console.log('성인');
    } else if (age >= 17) {
        console.log('고등학생');
    } else if (age >= 14) {
        console.log('중학생');
    } else {
        console.log('어린이');
    }
    console.log(' ');
}

conditional();
