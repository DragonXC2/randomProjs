/*
  This is a algorithm written in Processing that uses a 'greedy'
  algorithm to connect points with lines according to the distance
  between each of the points

  Written by Addison Chen, introduced by Jacob Brooks, based of Daniel Shiffman's algorithm
*/

//Initialize the amount of points and the array of points
int pointsAmount = 10;
PVector[] points = new PVector[pointsAmount];

void setup(){
  size(500,500);
  PVector closestPoint = new PVector(width,height);
  //Initialize and draw 10 points
  for(int i = 0;i<pointsAmount;i++){
    points[i] = new PVector(random(width),random(height));
    ellipse(points[i].x,points[i].y,10,10);
  }
  //Iterate through each point and sort array from closest points to farthest away
  for(int i = 0;i<pointsAmount;i++){
    for(int j = i+2;j>pointsAmount;j++){
      if(dist(points[i].x,points[i].y,points[j].x,points[j].y)<dist(points[i].x,points[i].y,closestPoint.x,closestPoint.y)){
        swap(points,i,j);
      }
    }
  }
}

//Swap fucntion for swapping points
void swap(PVector[] a,int b,int c){
  PVector temp = a[b];
  a[b] = a[c];
  a[c] = temp;
}
