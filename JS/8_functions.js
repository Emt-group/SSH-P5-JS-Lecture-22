// 8. 함수
/*
 * 함수의 역할을 설명할 수 있다.
 * 앞선 예제로부터 배열의 총합을 구하는 함수를 작성할 수 있다.
 */

function functions() {
    console.log('8. 함수');

    // 곱하기 함수
    console.log('[함수 만들어보기]');

    var mult23 = mult(2, 3);
    console.log(mult23);
    console.log(' ');

    // 배열의 합 구하기
    console.log('[배열의 합 구하기]');

    var scores = [100, 98, 72, 64, 62, 50];

    var sum = getSum(scores);
    console.log(sum);
    console.log(' ');
}

functions();

function mult(a, b) {
    var result = a + b;
    return result;
}

function getSum(scores) {
    var sum = 0;
    for (var i = 0; i < scores.length; i++) {
        sum = sum + scores[i];
    }
    return sum;
}
