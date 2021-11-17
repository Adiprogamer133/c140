function preload(){
    video= createCanvas(600,300)
    webcam(600,300)
    parent()
    video.size(1000,500);

}
poseNet = ml5.poseNet(video,modelLoaded);



function modelLoaded(){
    console.log("model loaded!")
}