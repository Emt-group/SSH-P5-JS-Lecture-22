// 7. 배열
/*
 * 배열을 이해하고 이를 설명할 수 있다.
 * 배열이 시작하는 인덱스를 이야기할 수 있다.
 * 배열과 반복문을 사용해서 총합과 평균을 구할 수 있다.
 */

function arrays() {
    console.log('7. 배열');

    // 배열을 사용해 학급 정보 출력하기
    console.log('[배열을 사용해 학급 정보 출력하기]');

    // 배열에 이름 저장하기
    var studentNames = ['홍길동', '성춘향', '이몽룡', '김첨지'];

    // 출력하기
    for (var i = 0; i < studentNames.length; i++) {
        console.log((i + 1) + '번째 학생은 ' + studentNames[i] + '입니다.');
    }
    console.log(' ');

    // 배열과 반복문을 사용해 총합과 평균 구하기
    console.log('[배열과 반복문을 사용해 총합 구하기]');

    var scores = [100, 98, 72, 64, 62, 50];
    var sum = 0;

    for (var i = 0; i < 6; i++) {
        sum = sum + scores[i];
    }

    console.log('총합: ' + sum);
    console.log(' ');

    console.log('[배열과 반복문을 사용해 평균 구하기]');
    var avg = 0;

    for (var i = 0; i < 6; i++) {
        avg = avg + scores[i];
    }

    avg /= scores.length;

    console.log('평균: ' + avg);
    console.log(' ');
}

arrays();
