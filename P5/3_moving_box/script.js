// p5.js 사용하기 예제 코드
// 3. 상자 움직이기
/* 
 * 자신이 원하는 위치에 상자를 그리고 이를 움직일 수 있다.
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

    rect(boxX, boxY, boxSize, boxSize);     // (boxX, boxY)위치에 boxSize 크기의 사각형을 그린다

    // 상자 그리기의 함수화
    // drawBox();

    // 상자의 방향이 우하단이면
    if (boxDirection === 0) {
        // 상자의 위치를 boxSpeed만큼 조정
        // +x, +y 방향이므로 우하단
        boxX += boxSpeed;
        boxY += boxSpeed;
    }
    
    // 상자의 방향이 좌상단이면
    else if (boxDirection === 1) {
        // 상자의 위치를 boxSpeed만큼 조정
        // -x, -y 방향이므로 좌상단
        boxX -= boxSpeed;
        boxY -= boxSpeed;
    }

    // 상자 이동의 함수화
    // if (boxDirection === 0) {
    //     moveBox(boxSpeed, boxSpeed);
    // } else if (boxDirection === 1) {
    //     moveBox(-boxSpeed, boxSpeed);
    // }

    // 상자의 위치가 특정 좌표 이상이면 방향을 바꾼다 (우하단 -> 좌상단)
    if (boxX >= width * (3 / 4) - boxSize / 2) {
        boxDirection = 1;

    }

    // 상자의 위치가 특정 좌표 이상이면 방향을 바꾼다 (좌상단 -> 우하단)
    else if (boxX <= width / 4 - boxSize / 2) {
        boxDirection = 0;
    }

    // 방향 전환의 함수화
    // switchBoxDirectionIfNeeded();
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

// 방향 전환이 필요하다면 상자의 방향을 전환하는 함수
function switchBoxDirectionIfNeeded() {
    if (boxX >= width * (3 / 4) - boxSize / 2) {
        boxDirection = 1;
    } else if (boxX <= width / 4 - boxSize / 2) {
        boxDirection = 0;
    }

    console.log(boxDirection);
}