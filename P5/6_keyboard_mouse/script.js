// p5.js 사용하기 예제 코드
// 5. 충돌 판정
/* 
 * 히트 박스에 대한 개념을 설명할 수 있다.
 * 두 개 이상의 공에 대한 충돌 판정을 수행할 수 있다.
 */

let g, gravity;     // 중력 관련 변수
let windForce, wind;           // 바람 관련 변수
let balls;          // 공에 대한 변수

function setup() {
    createCanvas(400, 400);

    g = 0.8;        // 중력 가속도 상수 설정
    gravity = createVector(0, g);       // 중력 설정 (벡터)

    windForce = 0.5;  // 바람 가속도 상수 설정
    wind = createVector(0, 0);          // 바람 설정 (벡터)

    balls = [];     // 공을 저장할 빈 배열 생성
}

function draw() {
    background(50);

    console.log(wind);

    // balls에 저장된 공에 대한 물리 연산
    for (let i = 0; i < balls.length; i++) {
        balls[i].applyForce(gravity);
        balls[i].applyForce(wind);

        balls[i].update();

        // 다른 공들과의 충돌 판정
        for (let j = 0; j < balls.length; j++) {
            // 자기 자신과의 충돌 판정은 하지 않는다
            if (i === j) {
                continue;
            }

            balls[i].collide(balls[j]);
        }

        balls[i].edge();
        balls[i].show();
    }
}

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

    // 32: 스페이스바
    if (keyCode === 32) {
        wind = createVector(0, 0);
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

class Ball {
    constructor(x, y, radius, color) {
        // 공에 대한 위치, 속도, 가속도 벡터 설정
        this.pos = createVector(x, y);
        this.vel = createVector(0, 0);
        this.acc = createVector(0, 0);

        // 공의 크기 설정
        this.radius = radius;

        // 공의 색상 설정
        this.color = color;

        // 공의 속력 제한
        this.speedLimit = 20;
    }

    // 공에 특정 힘 적용하기
    applyForce(force) {
        this.acc.add(force);        // 외력을 가속도에 적용
    }

    // 공의 상태 업데이트하기
    update() {
        this.vel.add(this.acc);                 // 가속도를 속도에 적용
        this.vel.limit(this.speedLimit);        // 공의 속력 제한
        this.pos.add(this.vel);                 // 속도를 위치에 적용
        this.acc.mult(0);                       // 가속도 초기화 (외력의 충첩 방지)
    }

    // 화면 밖으로 나갔을 때의 예외 처리
    edge() {
        // x 혹은 y축 방향에 대해서 벽과 충돌했는지 확인
        // 충돌했다면 충돌하지 않도록 위치 조정 후 해당 축 방향의 속도를 반전
        // 소수점 오차를 감안하여 +/- 1 오차 조정

        // x 성분을 반전
        if (this.pos.x - this.radius < 0) {
            this.pos.x = this.radius + 1;
            this.vel.x *= -1;
        } else if (this.pos.x + this.radius > width) {
            this.pos.x = width - this.radius - 1;
            this.vel.x *= -1;
        } 

        // y 성분을 반전
        if (this.pos.y - this.radius < 0) {
            this.pos.y = this.radius + 1;
            this.vel.y *= -1;
        } else if (this.pos.y + this.radius > height) {
            this.pos.y = height - this.radius - 1;
            this.vel.y *= -1;
        } 
    }
    
    // 다른 공에 대한 충돌 판정하기
    collide(other) {
        let threshold = this.radius + other.radius;         // 다른 공과 가까워질 수 있는 최소 거리 (이보다 거리가 작으면 충돌로 간주)
        let distance = dist(this.pos.x, this.pos.y, other.pos.x, other.pos.y);           // 다른 공과의 실제 거리

        if (distance < threshold) {
            this.vel.mult(-1);          // 탄성 충돌이므로 속도 반전
            other.vel.mult(-1);

            this.pos.add(this.vel);     // 두 공의 위치가 충돌하지 않도록 위치 재조정
            other.pos.add(other.vel);
        }
    }

    // 공 그리기
    show() {
        fill(this.color);      // 공 색상 설정
        noStroke();     // 공 테두리 설정
        ellipse(this.pos.x, this.pos.y, this.radius * 2, this.radius * 2);      // 공 그리기
    }
}