noseX=0;
noseY=0;
difference=0;
RightwristX=0;
LeftwristX=0;

function setup(){
video=createCapture(VIDEO);
video.size(500,500);
canvas=createCanvas(500,500);
canvas.position(560,150);
poseNet=ml5.poseNet(video,modelLoaded);
poseNet.on('pose',gotPoses)
}
function modelLoaded(){
    console.log('Postnet is initialised.');
}
function gotPoses(results){
if(results.length>0){
    console.log(results);
    noseX=results[0].pose.nose.x;
    noseY=results[0].pose.nose.y;
    console.log(noseX,noseY);
    LeftwristX=results[0].pose.leftWrist.x;
    RightwristX=results[0].pose.rightWrist.x;
    difference=floor(LeftwristX-RightwristX);
    console.log('Left Wrist'+LeftwristX,'Right Wrist'+RightwristX)
}
}

function draw(){
background('#969A97');
fill('2FDD92');
textSize(difference);
text('Akshat', noseX, noseY);

}