// let shahrukh_img;
let capture;
// const Posenet = null;
let posenet ;
let noseX,noseY;
let reyeX,reyeY;
let leyeX,leyeY;
let singlePose,skeleton;
let actor_img;
let specs,smoke;


function setup(){
    createCanvas(800,500);
    capture = createCapture(VIDEO); 
    capture.hide();
    posenet = ml5.poseNet(capture, modelLoaded);
    posenet.on('pose',receivedposes);
    actor_img = loadImage('images/shahrukh.png');
    specs = loadImage('images/spects.png');
    smoke = loadImage('images/cigar.png');
//    shahrukh_img = loadImage('images/shahrukh.png');
    // console.log('Setup function');
}
// function getRandomArbitrary(min,max){
//     return Math.random() *(max-min)+min;
// }
function modelLoaded(){
    console.log('Model has loaded');
}
function receivedposes(poses){
console.log(poses);
console.log(poses);

if(poses.length > 0){
    singlePose = poses[0].pose;
    skeleton = poses[0].skeleton;
}
}

// if(poses.length > 0){
//     singlePose = poses[0].pose;
//     noseX =singlePose.nose.x;
//     noseY =singlePose. nose.y;
// }
// console.log(noseX+ " " +noseY);
// }

function draw(){
    //images and videos (webcam)
    image(capture,0,0);
    fill(255,0,0);
    if(singlePose){
        for(let i=0; i<singlePose.keypoints.length; i++){
            ellipse(singlePose.keypoints[i].position.x, singlePose.keypoints[i].position.y,20);
        }
        stroke(255,255,255);
        strokeWeight(5);
        for(let j=0; j<skeleton.length; j++){
            line(skeleton[j][0].position.x, skeleton[j][0].position.y, skeleton[j][1].position.x, skeleton[j][1].position.y)
        }

        //image(specs,singlePose.nose.x-35,singlePose.nose.y-50,80,80);
        //image(smoke,singlePose.nose.x-35,singlePose.nose.y+10,40,40);
    // ellipse(noseX,noseY,30,30);
    // image(shahrukh_img,mouseX,mouseY,100,100);
    // r =  getRandomArbitrary(0,255);
    // g =  getRandomArbitrary(0,255);
    // b =  getRandomArbitrary(0,255);
    // fill(r,g,b);
    // fill(255);
    // ellipse(mouseX,mouseY, 50, 50);
    // // console.log('draw function');
    // background(200);//It will give a background color in the canvas ... and the shade is grey which is 200
    //1.point
    // point(10000, 10000);
    //2.line
    // line(200, 200, 300, 300);
    // //3.triangle
    // triangle(100, 200, 300, 400, 150, 450);
    // //4.rectangle
    // rect(500, 200, 200,100);
    // // 5.circle
    // ellipse(600, 300, 100, 100);
    // //stroke and color
    // fill(132,100,34.100);
    // stroke(255, 0 ,0,255);
    
    // //Here the last value is for opasity
    // strokeWeight(5);
    // ellipse(100, 200,100, 100);
    // stroke(0, 255 ,0);
    // ellipse(250,200,100,100);
    // ellipse(400,200,100,100);
    // stroke(0, 0 ,255);
    // ellipse(550,200,100,100);
    // ellipse(700,200,100,100);

    }
}