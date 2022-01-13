// p5.js 사용하기 예제 코드
// 7. 모서리 예외 처리하기
/* 
 * 상자가 화면 경계에 닿았을 때 방향을 반전할 수 있다.
 */

var boxSize;        // 상자의 크기
var boxX, boxY;     // 상자의 위치
var velX, velY;     // 상자의 속도

function setup() {
    createCanvas(400, 400);

    // 상자 관련 변수 초기화
    boxSize = 20;

    boxX = width / 4;
    boxY = height / 4;

    // 초기 속도 설정
    velX = 5;
    velY = 2;
}

function draw() {
    background(50);

    rect(boxX, boxY, boxSize, boxSize);     // (boxX, boxY)위치에 boxSize 크기의 사각형을 그린다

    // 상자 움직이기
    boxX = boxX + velX;
    boxY = boxY + velY;

    // 박스가 벽에 닿았을 때 방향 바꾸기
    // 왼쪽 또는 오른족 벽에 닿았을 때
    if (boxX <= 0 || boxX > width) {
        velX = -velX;
    }

    // 위쪽 또는 아래쪽 벽에 닿았을 때
    if (boxY <= 0 || boxY > width) {
        velY = -velY;
    }
}