

var p1 = 100;
var p2 = 100;
var an1 = 0;
var an2 = 0;
var an3 = 0;

var ax = [];
var ay = [];


function setup(){
    createCanvas(800,800);
    frameRate(30);
}

function draw(){

 background('gray');
 stroke(0);
 strokeWeight(1);
 
 translate(400, 300);

 var x1 = p1 *sin(an1);
 var y1 = p1 *cos(an1);
 
 var x2 = x1 + p2 * sin(an2);
 var y2 = y1 + p2 * cos(an2);

 var x3 = x2 + p2 * sin(an3);
 var y3 =  y2 + p2 * cos(an3);

 line(0,0,x1,y1);
 fill(1);
 rect(x1,y1,0,0);
 
 line(x1,y1,x2,y2);
 fill(0);
 rect(x2,y2,0,0);

 line(x2,y2,x3,y3);
 fill(0);
 rect(x3,y3,0,0);


 an1 += 0.03;
 an2 += -0.06;
 an3 += 0.07;
 stroke(240);
 
 ax.push(x3);
 ay.push(y3);
 

 for (var i = 1; i< ax.length; i++){
     
     stroke(255);
     strokeWeight(1);
     line(ax[i-20],ay[i-20],ax[i],ay[i]); 
     if(ax.length > 800){
        noLoop();
    } 
 }
 
 console.log(ax.length);
}


