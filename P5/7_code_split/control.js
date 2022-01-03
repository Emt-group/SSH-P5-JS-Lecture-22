// 마우스 클릭 시에 실행될 함수
function mousePressed() {
    let newBall = new Ball(mouseX, mouseY, 12.5, color(random(127, 255)));      // 새로운 공 객체 생성
    newBall.vel = createVector(random(-5, 5), random(-10, 10));                 // 공의 초기 속도 설정
    balls.push(newBall);        // 공 추가
}

// 키보드 입력 시에 실행될 함수
function keyPressed() {
    // 스페이스바 입력 시 바람 제거
    // 방향키 입력 시 바람 생성 (방향키 방향의 힘 생성)

    if (keyCode === ' ') {
        wind.mult(0);
    } else if (keyCode === LEFT_ARROW) {
        wind = createVector(-windForce, 0);
    } else if (keyCode === RIGHT_ARROW) {
        wind = createVector(windForce, 0);
    } else if (keyCode === DOWN_ARROW) {
        wind = createVector(0, windForce);
    } else if (keyCode === UP_ARROW) {
        wind = createVector(0, -windForce);
    }
}