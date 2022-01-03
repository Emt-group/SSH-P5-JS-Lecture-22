// p5.js 사용하기 예제 코드
// 1. 캔버스 이해하기 
/* 
 * p5.js에서 캔버스의 좌표계를 설명할 수 있다.
 */

let trans;

function setup() {
    createCanvas(400,400);      // 400 * 400 크기의 캔버스 생성

    trans = false;
}

function draw() {
    if (trans === true) {
        translate(width / 2, height / 2);
    }

    // 배경색을 50으로 설정 (회색조)
    background(50);

    stroke(127);        // 획의 색상을 127로 설정
    strokeWeight(50);   // 획의 굵기를 50으로 설정

    // 선 그리기
    line(0, 0, width, 0);       // x축 방향 선
    line(0, 0, 0, height);      // y축 방향 선

    if (frameCount % 100 === 0) {
        trans = !trans;
    }

    // 원점 표시
    textSize(28);
    fill(255);
    noStroke();
    if (trans === true) {
        text('재설정된 원점', 0, 32);
    } else {
        text('원점', 0, 32);
    }
}