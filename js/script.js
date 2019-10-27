var textPool = [
  'あ', 'い', 'う', 'え', 'お', 'か', 'き', 'く', 'け', 'こ', 'さ', 'し', 'す', 'せ', 'そ', 'た', 'ち', 'つ', 'て',
'と','な', 'に', 'ぬ', 'ね', 'の', 'は','ひ','ふ','へ','ほ','ま','み','む','め','も','や','ゆ','よ','ら',
'り','る','れ','ろ','わ','を','ん',  'あ', 'い', 'う', 'え', 'お', 'か', 'き', 'く', 'け', 'こ', 'さ', 'し', 'す', 'せ', 'そ', 'た', 'ち', 'つ', 'て',
'と','な', 'に', 'ぬ', 'ね', 'の', 'は','ひ','ふ','へ','ほ','ま','み','む','め','も','や','ゆ','よ','ら',
'り','る','れ','ろ','わ','を','ん',  'あ', 'い', 'う', 'え', 'お', 'か', 'き', 'く', 'け', 'こ', 'さ', 'し', 'す', 'せ', 'そ', 'た', 'ち', 'つ', 'て',
'と','な', 'に', 'ぬ', 'ね', 'の', 'は','ひ','ふ','へ','ほ','ま','み','む','め','も','や','ゆ','よ','ら',
'り','る','れ','ろ','わ','を','ん',
];
var texts = [];
var textY = [];
var textSpeed = [];
var eachSpeed = [];
let sW = window.innerWidth;
let sH = window.innerHeight;

var numIndex;
var minSpeed = 0.1;
var maxSpeed = 1.0;
var tSize = 16;
var rectX;
var rectY = sH-100;
var rectW = 100;
var rectH = 10;

var ellipseX = 440;
var ellipseY = 60;
var ellipseSize = 70;

function setup() {
createCanvas(sW,sH);
rainStart();
textFont("Sawarabi Mincho");
}

function draw() {
// console.log(frameRate());
background(255);

// restart button
if (dist (ellipseX, ellipseY, mouseX, mouseY) < ellipseSize) {
  fill(70);
} else {
  fill(0);
}

// ellipse(ellipseX, ellipseY, ellipseSize, ellipseSize);
// fill(50);
// text("restart", 417, 65);

// rain catcher
// fill(0);
// rectX = constrain (mouseX, 0, width-rectW);
// rect(rectX, rectY, rectW, rectH);
// text("ひ");


// text rains
fill(0);
for (var i = 0; i < 1250; i++) {

    text(texts[i], i*4, textY[i]);
    if (i*10 > rectX-tSize/2 && i*10 < rectX+rectW-tSize/10 && textY[i] > rectY - maxSpeed && textY[i] < rectY + maxSpeed) {
      textSpeed[i] = 0;
    }
    if (i*10 < rectX-tSize/2 || i*10 > rectX+rectW-tSize/10) {
      textSpeed[i] = eachSpeed[i];
    }
    textY[i]+=textSpeed[i];
 }

fill(0);

}

function rainStart() {
textSize(tSize);
noStroke();
for (var i = 0; i < 1250; i++) {
    // pick a random text
    numIndex = floor(random(textPool.length));
    texts[i] = textPool[numIndex];
    textFont("Sawarabi Mincho");
    // append to the push array
    textY[i] = random(0, height/2);
    eachSpeed[i] = random(minSpeed, maxSpeed);
    textSpeed[i] = eachSpeed[i];
}
}

setInterval(
  function mousePressed() {
  rainStart();
},17000
)
console.log(textPool);
