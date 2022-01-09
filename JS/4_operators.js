// 4. 연산자
/*
 * 연산자를 사용해서 다양한 연산을 수행할 수 있다.
 */

function operators() {
    console.log('4. 연산자');

    // 비교 연산자
    console.log('[비교 연산자들]');
    console.log('3 == 3:\t' + (3 == 3));
    console.log('5 == 5.0:\t' + (5 == 5.0));
    console.log('true == false:\t' + (true == false));
    console.log('42 == 10:\t' + (42 == 10));
    console.log('42 >= 10:\t' + (42 >= 10));
    console.log('10 != 20:\t' + (10 != 20));
    console.log(' ');

    // ==와 ===의 차이
    console.log('[==와 ===의 차이]');
    console.log('3 == \'3\':\t' +  (3 == '3'));
    console.log('3 === \'3\':\t' + (3 === '3'));
    console.log(' ');
}

operators();
