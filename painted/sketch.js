let picture;

function setup() {
  let canvas = createCanvas(775, 930);
  canvas.parent('sketch-div');
  picture = loadImage("picture.jpg");
  imageMode(CENTER);
  noStroke();
  background(255);
}

function draw() { 
    paint();
}

function paint() {
    const x = int(random(picture.width));
    const y = int(random(picture.height));
    const s = random(5, 6);
    const c = picture.get(x, y)
    fill(c);
    ellipse(x, y, s, s);
}