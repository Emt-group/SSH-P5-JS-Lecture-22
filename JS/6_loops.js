// 6. for 문
/*
 * for 문의 초기식, 조건식, 증감식을 설명할 수 있다.
 * while 문의 조건식을 설명할 수 있다.
 * for 문와 while 문의 차이를 설명할 수 있다.
 */

function forLoop() {
    console.log('6. 반복문');

    // 마스크를 써주세요!
    console.log('[마스크를 써주세요!]');
    var i = 0;
    for (i = 0; i < 10; i++) {
        console.log('마스크를 써주세요!');
    }
    console.log(' ');

    // i의 값 변화 살펴보기
    console.log('[i의 값 변화 살펴보기 - for 문 사용]');

    for (i = 0; i < 10; i++) {
        console.log(i);
    }
    console.log(' ');

    // while 문 살펴보기
    console.log('[while 문 살펴보기]');

    i = 0;
    while (i < 10) {
        console.log(i);
        i = i + 1;
    }
    console.log(' ');
}

forLoop();
