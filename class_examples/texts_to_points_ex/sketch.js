var w = window.innerWidth;
var h = window.innerHeight;  

let word1, word2;
let caslon;

function preload(){
  // Load the font before setup
  caslon = loadFont('PlaywriteNGModern-Regular.ttf');
}

function setup() {
  // Load the image before setup
  img = loadImage('carlton_dance.gif'); // Load the image

  // Create the canvas with the window's width and height
  canvas = createCanvas(w, h);

  // Convert text to points using the loaded font
  word1 = caslon.textToPoints('Pretty', 0, 0, 220, {
    sampleFactor: 0.5,
    simplifyThreshold: 0
  });

  word2 = caslon.textToPoints('Interesting ;D', 0, 0, 220, {
    sampleFactor: 0.5,
    simplifyThreshold: 0
  });

  // Create HTML elements
  let h1 = createElement('h1', 'This is HTML in p5!');
  let h2 = createElement('h2', 'This is also HTML in p5!');

  // Set the element's style and position
  h1.style('color', '#94FBAB');
  h1.position(w - 400, 100);

  h2.style('color', '#5F5AA2');
  h2.position(200, h - 100);
}

function draw() {
  // Set the background color to black
  background(0);

  // Display the image at point (25, 30) at half size
  image(img, 25, 30, img.width / 2, img.height / 2);

  // Translate the origin to (250, 250)
  translate(250, 250);
  
  // Draw the first word using points
  beginShape(POINTS);
  strokeWeight(10);
  for (let i = 0; i < word1.length; i++) {
    stroke(i / 10, random(255), random(255));
    vertex(word1[i].x + sin(frameCount * 0.2 + word1[i].y * 0.1) * 9, word1[i].y);
  }
  endShape();

  // Translate the origin to (-250, 300)
  translate(-250, 300);

  // Draw the second word using points
  beginShape(POINTS);
  stroke(40);
  for (let i = 0; i < word2.length; i++) {
    stroke(random(255), random(255), i / 15);
    vertex(word2[i].x + sin(frameCount * 0.2 + word2[i].y * 0.1) * 9, word2[i].y);
  }
  endShape();
}

// Adjust the canvas size when the window is resized
window.onresize = function() {
  w = window.innerWidth;
  h = window.innerHeight;  
  canvas.size(w, h);
}