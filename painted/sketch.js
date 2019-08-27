let picture;

function setup() {
  let canvas = createCanvas(775, 940);
  canvas.parent('sketch-div');
  picture = loadImage("picture.jpg");
  imageMode(CENTER);
  noStroke();
  background(255);
}

function draw() { 
    let i = 0;
    while (i <= 15) {
        paint();
        paint();
        i = i + 1;
    }
}

function paint() {
    const x = int(random(picture.width));
    const y = int(random(picture.height));
    const size = random(5, 6);
    fill(picture.get(x, y));
    ellipse(x, y, size, size);
}