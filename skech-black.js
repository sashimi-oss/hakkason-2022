//skech-black.js
let n = 0;
let f = 1;

function setup() {
   createCanvas(windowWidth, windowHeight);
  //stroke(255,255,255,100-i);
  
}
function draw() {
   background("#000");
   noFill();
   //stroke(255,255,255,50);
   strokeWeight(1);
   f+=1;
  
   for(n=f%40;n<300;n+=40){
       
       circle(windowWidth*noise(n-f),windowHeight*noise(n-f,1),n);
       stroke(255,255,255,100 - n/2);
     
   }
}