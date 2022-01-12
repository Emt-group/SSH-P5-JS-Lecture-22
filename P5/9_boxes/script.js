// p5.js 사용하기 예제 코드
// 9. 상자 여러 개 만들기
/* 
 * 배열과 함수를 사용해서 여려 개의 상자를 제어할 수 있다.
 */

// 박스에 대한 정보를 저장할 변수 (배열로 사용할 것임)
var boxSizes;
var boxColors;
var X, Y;
var sX, sY;

function setup() {
    createCanvas(400, 400);

    // 박스에 대한 정보를 배열에 저장하므로 빈 배열로 초기화
    boxSizes = [];
    boxColors = [];
    X = [];
    Y = [];
    sX = [];
    sY = [];

    for (var i = 0; i < 10; i++) {
        // 빈 배열에 push하여 박스 속성 설정
        // 모든 값은 random 함수를 이용함
        boxSizes.push(random(50));
        boxColors.push(color(random(127, 255), random(127, 255), random(127, 255), random(127, 255)));
        X.push(random(width));
        Y.push(random(height));
        sX.push(random(10));
        sY.push(random(20));
    }
}

function draw() {
    background(50);
    noStroke();
    
    // 모든 상자 그리기
    drawBoxes();

    // 모든 상자 움직이기
    moveBoxes();

    // 모서리 예외 처리하기
    handleBoxEdges();
}

// 모든 상자 그리기
function drawBoxes() {
    for (var i = 0; i < boxSizes.length; i++) {
        fill(boxColors[i]);
        rect(X[i] - boxSizes[i] / 2, Y[i] - boxSizes[i] / 2, boxSizes[i], boxSizes[i]);
    }
}

// 모든 상자 움직이기
function moveBoxes() {
    for (var i = 0; i < boxSizes.length; i++) {
        X[i] += sX[i];
        Y[i] += sY[i];
    }
}

// 모든 상자에 대한 모서리 예외 처리
function handleBoxEdges() {
    for (var i = 0; i < boxSizes.length; i++) {
        if (X[i] > width) {
            X[i] = -boxSizes[i];
        } else if (X[i] + boxSizes[i] < 0) {
            X[i] = width;
        }

        if (Y[i] > height) {
            Y[i] = -boxSizes[i];
        } else if (Y[i] + boxSizes[i] < 0) {
            Y[i] = height;
        }
    }
}