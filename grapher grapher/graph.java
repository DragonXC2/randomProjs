float x = 0;
float fx;

void setup() {
  size(500,500);
}

void draw(){
  fx = cos(x);
  translate(width/2, height/2);
  ellipse(x, fx, 1, 1);
  x+= .1;
}
