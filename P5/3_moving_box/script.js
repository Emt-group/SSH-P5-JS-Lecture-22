// p5.js 사용하기 예제 코드
// 3. 상자 움직이기
/* 
 * 자신이 원하는 위치에 상자를 그리고 이를 움직일 수 있다.
 */

let boxX, boxY;
let boxSize;

let speed;

function setup() {
    createCanvas(400, 400);

    boxX = width / 2;
    boxY = height / 2;
    boxSize = 20;

    speed = 5;
}

function draw() {
    background(50);

    rect(boxX, boxY, boxSize, boxSize);
}