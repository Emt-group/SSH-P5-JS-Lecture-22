// p5.js 사용하기 예제 코드
// 5. 텍스트 박스
/* 
 * 텍스트 박스를 사용해서 원하는 문자열 입력을 받을 수 있다.
 */

// 입력 문자열 및 텍스트 입력 관련 변수
var string, input;
var boxWidth, boxHeight;        // 텍스트 입력 박스 크기 설정

function setup() {
    createCanvas(400, 400);

    // 텍스트 입력 박스 크기 설정
    boxWidth = 150;
    boxHeight = 20;

    // 텍스트 박스 입력 변수 초기화
    string = '안녕하세요';

    // 텍스트 입력 설정
    input = createInput('여기에 입력하시오');       // 기본 출력 메시지 입력
    input.input(changeText);                       // 텍스트 입력 시 실행될 함수 설정 (changeText를 통한 텍스트 변경)

    // input도 HTML 및 CSS를 사용하므로 관련 설정을 추가할 수 있다
    input.size(boxWidth, boxHeight);           // 텍스트 박스 크기 설정 (rect와 동일)
    input.position(width / 2 - boxWidth / 2, width - boxHeight);        // 텍스트 박스 위치 조정 (rect와 동일)
    input.style('font-style', 'italic');       // 기울임꼴 설정
    input.style('text-align', 'center');       // 가운데 정렬
    input.style('color', 'gray');              // 메시지 색상을 회색으로 변경
}

function draw() {
    background(50);

    // 글꼴 색상 설정
    stroke(255);
    fill(255);

    // 텍스트 속성 설정
    textSize(32);
    textAlign(CENTER);
    text(string, width / 2, height / 2);
}

function changeText() {
    string = this.value();      // 텍스트 입력이 들어오면 텍스트 출력을 박스의 입력으로 변경
}