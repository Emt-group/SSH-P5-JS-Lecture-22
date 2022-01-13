// p5.js 사용하기 예제 코드
// 8. 키보드와 마우스 입력 제어하기
/* 
 * 키보드 또는 마우스 입력을 받았을 때 방향을 바꿀 수 있다.
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

/*
 * keyPressed와 mousePressed 그리고 keyCode와 mouseButton는 p5.js에서 제공하는 함수와 변수이므로 임의로 이름을 변경할 수 없다.
 * darw, keyPressed, mousePressed 함수는 각각 따로 동작하므로 keyPressed, mousePressed 함수를 darw에서 실행할 필요는 없다.
 * 마우스 코드는 LEFT, CENTER, RIGHT가 있다.
 * 키보드 코드는 keycode.info에서 확인할 수 있다.
 */

// 키보드 입력 처리
function keyPressed() {
    if (keyCode === 32) {
        velX = -velX;
        velY = -velY;
    }
}

// 마우스 입력 처리
function mousePressed() {
    if (mouseButton === LEFT) {
        velX = -velX;
        velY = -velY;
    }
}