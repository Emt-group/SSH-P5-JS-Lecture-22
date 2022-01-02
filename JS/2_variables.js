// Javascript 사용하기 예제 코드
// 2. 변수 사용하기
/*
 * 변수를 초기화하여 값을 할당하고 이를 조작하여 출력할 수 있다.
 */

function variables() {
    console.log('2. 변수 사용해보기')
    
    // 변수 선언하기
    let numberOfStudents = 20;      // 선언 및 초기화
    let numberOfAttendance = 0;     // 변수의 초기값을 지정할 수 있다
    let numberOfAbsent;             // 변수 정의

    // 변수 조작하기
    numberOfAttendance = 5;         // 변수에 값 대입하기
    numberOfAbsent = numberOfStudents - numberOfAttendance;     // 식을 시용해 변수 조작하기

    /*
    * 연산자 목록:
    * +: 더하기
    * -: 빼기
    * *: 곱하기
    * /: 나누기
    * %: 나머지
    * 
    * ++: 1 더하기
    * --: 1 빼기
    * 
    * x === y: x와 y가 같다
    * x < y: x보다 y가 작다
    * x <= y: x보다 y가 작거나 같다
    * x > y: x보다 y가 크다
    * x >= y: x보다 y가 크거나 같다
    * 
    * &&: 그리고
    * ||: 또는
    * !: 부정 (아니다)
    */

    // 변수 출력하기
    // 방법 1: + 연산자 사용하기
    console.log('방법 1: + 연산자 이용하기');
    console.log('전체 인원: ' + numberOfStudents);
    console.log('출석 인원: ' + numberOfAttendance);
    console.log('결석 인원: ' + numberOfAbsent);
    console.log(' ');

    // 방법 2: 포멧 문자열 사용하기
    console.log('방법 2: 포멧 문자열 이용하기')
    console.log(`전체 인원: ${numberOfStudents}`);
    console.log(`출석 인원: ${numberOfAttendance}`);
    console.log(`결석 인원: ${numberOfAbsent}`);
    console.log(' ');
}

variables();