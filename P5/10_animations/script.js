// p5.js 사용하기 예제 코드
// 7. 애니메이션 예제

// 박스 크기와 위치 속성
var boxSize;
var boxPos;     // 벡터를 이용할 것임

// 박스의 위치 변화를 추적할 변수들
var initialPoint;   // 초기 위치
var finalPoint;     // 최종 위치
var t, dt, st;      // 변화량

function setup() {
    createCanvas(400, 400);
    translate(width / 2, height / 2);       // 계산의 편의를 위한 원점 이동

    boxSize = 25;

    // 초기 변수 설정
    initialPoint = createVector(-width / 2, -height / 2);
    finalPoint = createVector(width / 2, height / 2);
    t = 0;
    dt = 0.01;
    st = 1;

    // 초기 위치 설정
    boxPos = initialPoint;
}

function draw() {
    background(50);
    translate(width / 2, height / 2);   // 계산의 편의를 위한 원점 이동
    noStroke();

    // 상자 그리기
    drawBox();

    // 상자 위치 변경: getPosByFormula를 통해 위치 계산
    moveBox();
}

function drawBox() {
    // 상자의 위치가 상자의 중심이 되도록 상자 그리기
    var x = boxPos.x - boxSize / 2;
    var y = boxPos.y - boxSize / 2;
    rect(x, y, boxSize, boxSize);
}

function moveBox() {
    // formula에 의한 위치 계산하기
    // var formula = { formula: t, initial: 0, final: 1 };                       // 선형 위치
    // var formula = { formula: t * t, initial: 0, final: 1 };                   // 이차 위치
    // var formula = { formula: t * t * t, initial: 0, final: 1 };               // 삼차 위치
    var formula = { formula: abs(sin(t)), initial: 0, final: TWO_PI };        // 삼각함수

    boxPos = getPosByFormula(formula);   // 구간의 양 끝 값도 필요
}

function getPosByFormula(formula) {
    // 초기, 최종 위치 간 벡터 연산
    var direction = p5.Vector.sub(finalPoint, initialPoint);
    var newPos = p5.Vector.add(initialPoint, p5.Vector.mult(direction, formula.formula));

    // 변화량 조작
    // t는 초기값과 최종값 사이를 진동함
    t += st * dt;
    if (t >= formula.final || t <= formula.initial) {
        st *= -1;
    }

    return newPos;
}