var hr,mn,sc;
var hrAngle,mnAngle,scAngle;

function setup() {
  createCanvas(800,600);

  angleMode(DEGREES);
  
}

function draw() {
  //backgroundcolor
  background(224,213,213);

  translate(400,400);
  rotate(-90);
  hr = hour();
  mn = minute();
  sc = second();

  scAngle = map(sc,0,60,0,360);
  mnAngle = map(mn,0,60,0,360);
  hrAngle = map(hr%12,0,12,0,360);

  //seconds
  push();
  rotate(scAngle);
  stroke(226,13,209);
  strokeWeight(5);
  line(0,0,200,0);
  pop();

  //minutes
  push();
  rotate(mnAngle);
  stroke(137,212,237);
  strokeWeight(5);
  line(0,0,150,0);
  pop();

  //hour
  push();
  rotate(hrAngle);
  stroke(237,137,208);
  strokeWeight(5);
  line(0,0,100,0);
  pop();

  stroke(255,0,255);
  point(0,0)

  //drawing the arcs
  strokeWeight(10);
  noFill();

  //seconds
  stroke(226,13,209);
  arc(0,0,300,300,0,scAngle);

  //minutes
  stroke(137,212,237);
  arc(0,0,280,280,0,mnAngle);

  //hour
  stroke(237,137,208);
  arc(0,0,260,260,0,hrAngle);
  
}