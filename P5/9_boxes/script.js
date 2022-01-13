// p5.js 사용하기 예제 코드
// 9. 상자 여러 개 만들기
/* 
 * 배열과 함수를 사용해서 여러 개의 상자를 제어할 수 있다.
 */

// 박스에 대한 정보를 저장할 변수 (배열로 사용할 것임)
var boxSizes;
var boxColors;
var boxX, boxY;
var velX, velY;

function setup() {
    createCanvas(400, 400);

    // 박스에 대한 정보를 배열에 저장하므로 빈 배열로 초기화
    boxSizes = [];
    boxColors = [];
    boxX = [];
    boxY = [];
    velX = [];
    velY = [];

    for (var i = 0; i < 10; i++) {
        // 빈 배열에 push하여 박스 속성 설정
        // 모든 값은 random 함수를 이용함

        /* push가 뭔가요?
         * push는 자바스크립트에서 제공하는 배열 함수로, 배열의 끝에 새로운 원소를 추가해줍니다.
         * push와 반대로 pop은 배열의 마지막 요소를 제거합니다.
         * 참고: https://gent.tistory.com/295
         */

        boxSizes.push(random(50));      // 배열에 랜덤 상자 크기 push
        boxColors.push(color(random(127, 255), random(127, 255), random(127, 255), random(127, 255)));      // 배열에 랜덤 색상 push

        // 상자가 캔버스 내에 있도록 랜덤 좌표 할당
        boxX.push(random(width));           // 배열에 상자의 x 정보 push
        boxY.push(random(height));          // 배열에 상자의 y 정보 push

        // 상자에 랜덤 속도 할당
        velX.push(random(10));              // 배열에 상자의 x 속도 push
        velY.push(random(20));              // 배열에 상자의 y 속도 push
    }
}

function draw() {
    background(50);
    noStroke();
    
    // 배열에 있는 모든 상자를 그려하 하므로 반복문 사용
    for (var i = 0; i < boxSizes.length; i++) {
        // 상자 그리기
        fill(boxColors[i]);
        rect(boxX[i], boxY[i], boxSizes[i], boxSizes[i]);

        // 상자 움직이기
        boxX[i] = boxX[i] + velX[i];
        boxY[i] = boxY[i] + velY[i];

        // 모서리에 닿으면 방향 전환 (x 방향)
        if (boxX[i] < 0 || boxX[i] > width) {
            velX[i] = -velX[i];
        }

        // 모서리에 닿으면 방향 전환 (y 방향)
        if (boxY[i] < 0 || boxY[i] > width) {
            velY[i] = -velY[i];
        }
    }
}