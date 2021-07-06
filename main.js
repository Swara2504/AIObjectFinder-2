status="";
function start()
{
    objectDetector= ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML= "status: Detecting Objects";
    var value= document.getElementById("input_box").value;
}
function setup()
{
    canvas= createCanvas(480,380);
    canvas.center();
}
function preload()
{
    video= createVideo();
    video.hide();
}
function draw()
{
    image(video,0,0,480,380)
}
function modelLoaded()
{
    console.log("model Loaded");
    status= true;
}