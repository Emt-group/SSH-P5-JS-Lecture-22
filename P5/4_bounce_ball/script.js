// p5.js 사용하기 예제 코드
// 4. 바운스볼 만들기
/* 
 * 속도 벡터의 성분을 분석하여 공의 움직임을 조작할 수 있다.
 * 중력 시뮬레이션 프로그램을 수정하여 탄성체를 만들 수 있다.
 */

let g, gravity;     // 중력 관련 변수
let wind;           // 바람 관련 변수
let b;              // 공에 대한 변수

function setup() {
    createCanvas(400, 400);

    g = 0.8;        // 중력 가속도 상수 설정
    gravity = createVector(0, g);       // 중력 설정 (벡터)
    wind = createVector(-1, 0);         // 바람 설정 (벡터)

    b = new Ball(width / 2, height / 2, 12.5);       // 새로운 공 생성 (초기 위치와 반지름 필요)
    //b.vel = createVector(10, 20);                    // 공의 초기 속도 설성 (옵션)
}

function draw() {
    background(50);

    b.applyForce(gravity);    // 중력 적용
    //b.applyForce(wind);       // 바람 힘 적용 (옵션)

    b.update();               // 공 상태 업데이트 (위치, 속도, 가속도)
    b.edge();                 // 공이 화면 밖으로 나갔을 때의 예외 처리

    b.show();                 // 공 그리기
}

class Ball {
    constructor(x, y, radius) {
        // 공에 대한 위치, 속도, 가속도 벡터 설정
        this.pos = createVector(x, y);
        this.vel = createVector(0, 0);
        this.acc = createVector(0, 0);

        // 공의 크기 설정
        this.radius = radius;

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

    // 공 그리기
    show() {
        fill(255);      // 공 색상 설정
        noStroke();     // 공 테두리 설정
        ellipse(this.pos.x, this.pos.y, this.radius * 2, this.radius * 2);      // 공 그리기
    }
}