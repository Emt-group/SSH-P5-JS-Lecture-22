// 3. 계산기 만들어보기
/*
 * 앞서 배운 console.log와 var 등을 사용해서 계산기를 만들 수 있다.
 */

function calculator() {
    console.log('3. 계산기 만들어보기');

    var a = 10;
    var b = 6;
    var result = 0;

    result = a + b;
    console.log(a + ' + ' + b + ' = ' + result);

    result = a - b;
    console.log(a + ' - ' + b + ' = ' + result);

    result = a * b;
    console.log(a + ' * ' + b + ' = ' + result);

    result = a / b;
    console.log(a + ' / ' + b + ' = ' + result);

    result = a % b;
    console.log(a + ' % ' + b + ' = ' + result);
    console.log(' ');
}

calculator();
