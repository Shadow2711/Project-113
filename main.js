function preload(){

}
function setup(){
    canvas = createCanvas(640, 480);
    canvas.position(480 , 200)
    video = createCapture(VIDEO);
    video.hide();
    
    color = "";
}
function draw(){
    image(video, 0, 0, 640, 480);
    fill("#FFD365");
    stroke("#FFD365");
    circle(5 , 20 , 100);
    circle(320 , 20 , 50);
    circle(635 , 20 , 100);
    circle(20 ,  475 , 100);
    circle(635 ,  470 , 100);
    circle(20 , 240 , 50);
    circle(625 , 240 , 50);
}
function take_Snapshot(){
    save('student_name.png');
}