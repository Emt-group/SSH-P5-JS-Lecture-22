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

// 상자가 모서리를 넘으면 제거
function deleteWhenOverWall() {
    for (var i = 0; i < boxSizes.length; i++) {
        if (X[i] > width || X[i] + boxSizes[i] < 0 || Y[i] > height || Y[i] + boxSizes[i] < 0) {
            boxSizes.splice(i, 1);
            boxColors.splice(i, 1);
            X.splice(i, 1);
            Y.splice(i, 1);
            sX.splice(i, 1);
            sY.splice(i, 1);
        }
    }
}