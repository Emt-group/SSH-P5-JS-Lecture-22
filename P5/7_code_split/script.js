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

// 키보드 마우스 조작 관련 함수는 control.js에 포함됨
// Ball 클래스에 대한 정보는 ball.js에 포함됨