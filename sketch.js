
let slider;
let triangles = [];

function setup() {
    createCanvas(800, 600);

 slider = createSlider(0, 255);
 slider.position(10, 10);
slider.size(80);

  for (let i = 0; i < 100; i++) {
    triangles.push({
      x: random(width),
      y: random(height),
      vx: random(-2, 2),
      vy: random(-2, 2),
      size: 40,
    });
  }

}

function draw() {
    background(220);

for (let t of triangles) {

    t.x += t.vx;
    t.y += t.vy;

  
    if (t.x < 0 || t.x > width) t.vx *= -1;
    if (t.y < 0 || t.y > height) t.vy *= -1;

  
    push();
    translate(t.x, t.y);
    fill(200, 150, 255);
    noStroke();

    let s = t.size;
    triangle(-s/5, s/5, 0, -s/5, s/5, s/5);
    pop();


 
    this.acceleration.mult(5);



  }
}