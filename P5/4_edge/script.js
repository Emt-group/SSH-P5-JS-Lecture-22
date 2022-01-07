// p5.js 사용하기 예제 코드
// 4. 모서리 예외 처리하기
/* 
 * 상자가 화면 밖을 나갔을 때 반대변 화면으로 나올 수 있도록 한다.
 */

let boxSize;        // 상자의 크기
let boxX, boxY;     // 상자의 위치

let boxSpeed;       // 상자의 속력
let boxDirection;   // 상자의 방향

function setup() {
    createCanvas(400, 400);

    // 상자 관련 변수 초기화
    boxSize = 20;

    boxX = width / 4 - boxSize / 2;
    boxY = height / 4 - boxSize / 2;

    boxSpeed = 5;
    boxDirection = 0;       // 상자의 방향, 0: 우하단, 1: 좌상단
}

function draw() {
    background(50);

    // 상자 그리기
    drawBox();

    // 상자 움직이기
    moveBox(boxSpeed, boxSpeed * 2);

    // 상자가 오른쪽 벽면을 넘어서면
    if (boxX > width) {
        boxX = -boxSize;
    }
    
    // 상자가 왼쪽 벽면을 넘어서면
    else if (boxX + boxSize < 0) {
        boxX = width;
    }

    // 상자가 아래쪽 벽면을 넘어서면
    if (boxY > height) {
        boxY = -boxSize;
    }
    
    // 상자가 위쪽 벽면을 넘어서면
    else if (boxY + boxSize < 0) {
        boxY = height;
    }

    // 모서리 예외 처리하기 함수화
    handleBoxEdge();
}

// 상자를 그려주는 함수
function drawBox() {
    rect(boxX, boxY, boxSize, boxSize);
}

// 상자의 위치를 amount만큼 움직이는 함수
function moveBox(amountX, amountY) {
    boxX += amountX;
    boxY += amountY;
}

// 상자가 모서리에 다다랐을 때의 예외 처리
function handleBoxEdge() {
    if (boxX > width) {
        boxX = -boxSize;
    } else if (boxX + boxSize < 0) {
        boxX = width;
    }

    if (boxY > height) {
        boxY = -boxSize;
    } else if (boxY + boxSize < 0) {
        boxY = height;
    }
}