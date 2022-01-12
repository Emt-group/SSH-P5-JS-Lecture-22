// p5.js 사용하기 예제 코드
// 11. 충돌 판정 예제

// 공 객체 변수
var b1, b2;

function setup() {
    createCanvas(400, 400);

    // 공 객체 생성
    b1 = new Ball(width / 4, height / 2, 25, color(127));
    b2 = new Ball(width * (3 / 4), height / 2, 25, color(255));

    // 초기 속도 설정
    b1.vel = createVector(10, 0);
    b2.vel = createVector(-10, 0);
}

function draw() {
    background(50);
    noStroke();

    // 공 그리기
    b1.show();
    b2.show();

    // 공 움직이기
    b1.move();
    b2.move();

    // 모서리 확인하기
    b1.edge();
    b2.edge();

    // 충돌 판정하기
    b1.collision(b2);
    b2.collision(b1);
}

class Ball {
    constructor(x, y, radius, color) {
        // 위치, 속도, 크기(반지름), 색상
        this.pos = createVector(x, y);
        this.vel = createVector(0, 0);
        this.radius = radius;
        this.color = color;
    }

    show() {
        fill(this.color);
        ellipse(this.pos.x, this.pos.y, this.radius, this.radius);
    }

    move() {
        this.pos.add(this.vel);
    }

    edge() {
        // 왼쪽 또는 오른쪽 벽면에 닿으면 x 성분 반전
        if (this.pos.x <= 0 || this.pos.x >= width) {
            this.vel.x *= -1;
        }

        // 위쪽 또는 아래쪽 벽면에 닿으면 y 성분 반전
        if (this.pos.y <= 0 || this.pos.y >= height) {
            this.vel.y *= -1;
        }
    }

    collision(other) {
        // 두 공 간의 거리 계산
        var distance = dist(this.pos.x, this.pos.y, other.pos.x, other.pos.y);

        // 두 공이 가장 가까워질 수 있는 거리
        var limit = this.radius + other.radius;

        // 공의 거리가 너무 가까우면 충돌로 판정, 속도 반전
        if (distance <= limit) {
            this.vel.mult(-1);
        }
    }
}