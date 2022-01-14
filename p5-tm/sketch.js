
// CV 관련 코드.
var classifier;
var imageModelURL = 'https://teachablemachine.withgoogle.com/models/GjAMkjurb/';    // 훈련된 모델의 업로드 URL.

// 동영상 관련 코드.
var video;
var flippedVideo;

var boxX = 400
var boxY = 400
var boxSize = 20

var videoWidth = 160
var videoHeight = 120

var canvasWidth = 800
var canvasHeight = 800



function setup() {

  // 모델 분류 라벨 불러오기
  classifier = ml5.imageClassifier(imageModelURL + 'model.json');

  createCanvas(800, 800);
  
  // 비디오 캡처 설정.
  video = createCapture(VIDEO);
  video.size(videoWidth, videoHeight);
  video.hide();
  
  // 비디오 분류 관련 코드.
  updateModel()
}



function draw() {
  background(50);
  noStroke()
  
  // 박스 그리기
  rect(boxX, boxY, boxSize, boxSize);
  
  // 웹캠 비디오 표시.
  image(flippedVideo, canvasWidth - videoWidth, 0);
}



// 카메라를 통해 이미지 받고 모델 prediction 하는 코드
function updateModel(){
  flippedVideo = ml5.flipImage(video);
  classifier.classify(flippedVideo, classiferHandler);
  flippedVideo.remove();
}



// prediction 결과 핸들링 함수
function classiferHandler(error, results) {
  
  // results에는 각 클래스별 확률(점수)가 나옴
  // 0부터 가장 높은 순서대로 나옴
  // 성녕이가 학습한 모델은 Idle, Up, Down, Left, Right 로 구성됨
  var result = results[0].label;

  if (result == "Up") {
    moveBox(0,-2)
  } else if (result == "Down") {
    moveBox(0,2)
  } else if (result == "Left") {
    moveBox(-2,0)
  } else if (result == "Right") {
    moveBox(2,0)
  }
  // Idle은 동작 X

  console.log(result)
  
  // 다음 결과를 받기 위한 prediction
  updateModel();
}



// 상자의 위치를 amount만큼 움직이는 함수
function moveBox(amountX, amountY) {
  boxX += amountX;
  boxY += amountY;
}