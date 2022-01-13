// p5.js 사용하기 예제 코드
// 6. 상자 움직이기
/* 
 * 자신이 원하는 위치에 상자를 그리고 이를 움직일 수 있다.
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
}