// p5.js 사용하기 예제 코드
// 12. p5.js로 할 수 있는 다양한 것들

// 이미지 관련 변수
var img;
var size, delteSiza, sign;

function preload() {
    img = loadImage('./img/sample.png');
}

function setup() {
    createCanvas(400, 400);

    // 이미지 크기 조정 변수 설정
    size = 200;
    deltaSize = 1;
    sign = 1;

    // 이미지 크기 설정
    img.resize(size, size);
}

function draw() {
    background(50);

    // translate, ratate 등 좌표계에 영향을 주는 오소 변화 저장 (pop 함수 이후에 초기화됨)
    push();

    // 좌표계 수정
    translate(width / 2, height / 2);       // 원점 이동
    rotate(frameCount * 0.05);              // 회전 (이미지 회전을 하기 위함)

    img.resize(size, size);     // 이미지 크기 변경
    image(img, -img.width / 2, -img.height / 2);    // 이미지 그리기

    // 이미지 크기 변경 (변화량만큼 증감)
    size += sign * deltaSize;

    // 증감 부호 설정 (매 100 프레임마다 변경)
    if (frameCount % 100 === 0) {
        sign *= -1;
    }

    // 이미지 화질 저하 방지 (매 20 프레임마다 이미지 다시 로드)
    if (frameCount % 20 === 0) {
        img = loadImage('./img/sample.png');
    }

    // 좌표계 영향 요소 초기화 (push 함수 이전으로 돌림)
    pop();

    // 좌표계 초기화 확인용
    noStroke();
    rect(width / 2 - 50, height - 40, 100, 40);
}