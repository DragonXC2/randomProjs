
pointsAmount = 10;
PVector[] points = new PVector[pointsAmount];

void setup(){
  canvas(500,500);
  for(int i = 0;i<pointsAmount;i++){
    points[i] = new PVector(random(width),random(height));
    ellipse(points[i].x,points[i].y,10,10);
    
  }
}
