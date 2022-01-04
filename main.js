function take_snapshot(){
    save("mustache.jpg");
}
nosex=0;
nosey=0;

function setup(){
    canvas=createCanvas(300,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    posenet=ml5.poseNet(video,modelloaded); 
    posenet.on('pose',gotposes);   
}
function preload(){
mustache=loadImage("https://i.postimg.cc/3x3QzSGq/m.png");
}


function modelloaded(){
    console.log("model loaded");
}

function gotposes(results){
if(results.length>0){
    console.log(results);
    nosex=results[0].pose.nose.x;
    nosey=results[0].pose.nose.y;
    console.log("nose x="+results[0].pose.nose.x);
    console.log("nose y="+results[0].pose.nose.y);

}
}


function draw(){
    image(video,0,0,300,300);   
    image(mustache,nosex,nosey,50,10);
   }