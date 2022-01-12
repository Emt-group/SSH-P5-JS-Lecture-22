// p5.js 사용하기 예제 코드
// 4. 버튼
/* 
 * 버튼을 생성해서 원하는 함수를 실행시킬 수 있다.
 */

// 배경 색상 변수
var bg;

function setup() {
    createCanvas(400, 400);

    bg = 50;

    // 버튼 생성 (HTML 태그 사용)
    var button = createButton('눌러줘!');
    
    // 버튼 속성 설정 (CSS 태그 사용)
    button.size(75, 50);                    // 버튼 상자 크기 설정 (rect와 동일)
    button.position(0, 0);                  // 버튼 위치 설정 (rect와 동일)
    button.style('font-size', '16px');      // 버튼 글자 크기 설정 (CSS 태그 사용)
    button.mousePressed(changeBG);          // 버튼 클릭 시 실행할 함수 설정

    button.style('font-style', 'italic');   // CSS를 사용하므로 다른 style 적용 가능 (기울임꼴 글꼴)
    button.style('color', 'blue');          // 버튼 글꼴색 설정
    button.style('background', 'green');    // 버튼 배경색 설정
}

function draw() {
    background(bg);         // 배경을 bg로 설정 (changeBG에서 bg 값 변경)
}

function changeBG() {
    bg = random(255);       // 배경색 변수 bg를 난수로 설정
}