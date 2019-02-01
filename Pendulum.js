

var p1 = 100;
var p2 = 100;
var an1 = 0;
var an2 = 0;

var ax = [200];
var ay = [200];

function setup(){
    createCanvas(500,500);
    //frameRate(60);
}

function draw(){

 background('gray');
 stroke(0);
 strokeWeight(5);
 translate(250, 250);

 
 var x1 = p1 *sin(an1);
 var y1 = p1 *cos(an1);
 
 var x2 = x1 + p2 * sin(an2);
 var y2 = y1 + p2 * cos(an2);

 line(0,0,x1,y1);
 fill(0);
 rect(x1,y1,5,5);
 
 line(x1,y1,x2,y2);
 fill(0);
 rect(x2,y2,5,5);
 an1 += 0.02;
 an2 += -0.06;
 stroke(240);
 
 ax.unshift(x2);
 ay.unshift(y2);

 for (var i = 1; i< 200; i++){
     stroke(255);
     line(ax[i-1],ay[i-1],ax[i],ay[i]);  
 }
 console.log(i);
}


