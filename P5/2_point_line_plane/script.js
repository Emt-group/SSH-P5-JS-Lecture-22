// p5.js 사용하기 예제 코드
// 2. 점, 선, 면
/* 
 * translate를 사용하지 않고 원하는 위치에 점, 선, 면을 그릴 수 있다.
 */

function setup() {
    createCanvas(400, 400);
}

function draw() {
    background(50);

    stroke(255);        // 획 색상 설정
    strokeWeight(10);   // 획 굵기 설정

    // 점 찍어보기
    point(width / 4, height / 4);       // 2사분면 중앙에 점 찍기

    // 선 그려보기
    line(0, height / 2, width, height / 2);     // x축 그리기
    line(width / 2, 0, width / 2, height);      // y축 그리기

    // 면 그려보기
    let rectSize = 100;     // 사각형의 크기 설정

    fill(127, 127);     // 채우는 색상 설정 (회색조, 알파)
    rect(width / 2 - rectSize / 2, height / 2 - rectSize / 2, rectSize);        // 사각형 그리기
}