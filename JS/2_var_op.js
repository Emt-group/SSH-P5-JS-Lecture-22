// Javascript 사용하기 예제 코드
// 2. 변수 사용하기
/*
 * 변수를 초기화하여 값을 할당하고 이를 조작하여 출력할 수 있다.
 */

function variables() {
    console.log('2. 변수 사용해보기')

    var abc = 10;
    console.log(abc);
    console.log(' ');

    console.log('[교실 안 의자 개수 출력하기]');

    // 교실 안 의자 개수
    var chair = 30;

    // 사람 수
    var people = 5;

    // 교실 안 의자 개수 출력
    console.log('전체 의자 수: ' + chair);
    console.log(' ');

    console.log('[연산자를 이용해 남은 의자 출력하기]');

    /*
     * [기본적인 연산자들]
     * =, +, -, *, /, %
     */

    // 교실에 있는 사람 수 출력
    console.log('교실에 있는 사람 수: ' + people);

    // 남은 의자 수 출력
    var remain = chair - people;
    console.log('남은 의자 수: ' + remain);
    console.log(' ');
}

variables();
