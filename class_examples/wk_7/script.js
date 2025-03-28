let txt = "";
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(122);
  text(txt, 100, 100);
}

function updateText(val){
  txt = val
}
