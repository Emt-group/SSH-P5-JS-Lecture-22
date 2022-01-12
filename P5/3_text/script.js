// p5.js 사용하기 예제 코드
// 3. 텍스트
/* 
 * 캔버스 위에 자신이 원하는 텍스트를 표시할 수 있다.
 */

// 텍스트를 그릴 기준 좌표 설정
var x, y;

function setup() {
    createCanvas(400, 400);

    // 텍스트를 중앙에 그리기
    x = width / 2;
    y = height / 2;
}

function draw() {
    background(50);

    // stroke와 fill 관련 함수를 통해 글자 색 조절 가능
    stroke(255);        // 글자 테두리 색
    noFill();           // 글자 채우기 색 (채우기 없애기)

    // 글자 속정 설정하기
    textSize(64);               // 글자 크기 조절
    textAlign(CENTER);          // 글자 정렬 설정 (LEFT, CENTER, RIGHT)
    text('안녕하세요', x, y);    // 글자 출력

    noStroke();         // 글자 테두리 없애기
    fill(255);

    textSize(32);
    text('저는 p5.js입니다.', x, y + 64);
}