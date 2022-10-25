function setup() {
    createCanvas(400, 400);
  }
  
  function draw() {
    background(220);
    push();
    translate(width/2, height/2);
    let r_max = 100;
    for (let i = 0; i < 100000; i++) {
      let r = (1/sqrt(random())) * r_max;
      let theta = random(TWO_PI);
      let x = cos(theta) * r;
      let y = sin(theta) * r;
      point(x,y)
    }
    pop();
    noLoop();
  }