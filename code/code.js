function setup() {
  createCanvas(800, 800);
  angleMode(DEGREES);
  noStroke();
}

function draw() {
  background(57, 165, 204);
  solsikke(150, 350);
  solsikke(500, 150);
  solsikke(630, 500);
  solsikke(320, 600);
}

function solsikke(x, y) {
  push();
  let pedalCount = 55/2;
  let pedalAngle = 360 / pedalCount;
  let pedalWidth = 400 / pedalCount;

  let stalkLength = height - y;
  let stalkPedalCount = stalkLength / 50;
  translate(x, y);

  fill("green");
  rect(-7.5, 0, 15, stalkLength);
  let switchSide = false;
  for (let i = 0; i <= stalkPedalCount; i++) {


    if (switchSide) {
      push();
      translate(0, i*50+100);
      rotate(20);
      fill(111, 194, 39,240);
      ellipse(15, 0, 25, 50);

      pop();

      switchSide = false;
    } else {
      push();
      translate(0, i*50+200);
      rotate(-20);
      fill(111, 194, 39,240);
      ellipse(-15, 0, 25, 50);
      pop();

      switchSide = true;
    }
  }


  fill(66, 51, 10);
  ellipse(0, 0, 120, 120);

  rotate(frameCount/4);

  for (let i = 0; i <= pedalCount; i++) {
    rotate(pedalAngle/2);
    fill(184, 145, 40, 240);
    ellipse(0, 90, pedalWidth, 75);

    rotate(pedalAngle/2);
    fill(252, 186, 3, 240);
    ellipse(0, 90, pedalWidth, 75);
  }
  pop();
}
