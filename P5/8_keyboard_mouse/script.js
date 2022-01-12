// p5.js 사용하기 예제 코드
// 8. 키보드와 마우스 입력 제어하기
/* 
 * 키보드와 마우스 입력을 통해 움직이는 상자를 조종할 수 있다.
 */

var boxSize;        // 상자의 크기
var boxX, boxY;     // 상자의 위치

var boxSpeed;       // 상자의 속력
var boxDirection;   // 상자의 방향

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

    // 모서리 예외 처리하기
    handleBoxEdge();
}

// 마우스 조작 제어
function mousePressed() {
    if (mouseButton === LEFT) {
        boxSpeed += 2;
    }
    
    else if (mouseButton === CENTER) {
        boxSpeed -= 2;

        if (boxSpeed < 0)
            boxSpeed = 0;
    }
}

// 키보드 조작 제어
function keyPressed() {
    if (keyCode === UP_ARROW) {
        moveBox(0, -boxSpeed);
    }

    else if (keyCode === DOWN_ARROW) {
        moveBox(0, boxSpeed);
    }

    else if (keyCode === LEFT_ARROW) {
        moveBox(-boxSpeed, 0);
    }

    else if (keyCode === RIGHT_ARROW) {
        moveBox(boxSpeed, 0);
    }
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