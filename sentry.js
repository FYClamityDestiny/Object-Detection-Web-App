statuscocossd = "";
function preload(){
sentry = loadImage("sentry.png")
}
function setup(){
myCanvas = createCanvas(300,300);
myCanvas.center();
objectdetector = ml5.objectDetector('cocossd', modelLoaded);
document.getElementById("status").innerHTML = "Detecting Objects";
}
function modelLoaded(){
console.log("Model Loaded");
statuscocossd = true;
objectdetector.detect(img,gotResult);
}
function draw(){
image(sentry,0,0,300,300)
}
function gotResult(error,results){
if(error){
console.error();
}
else{
console.log(results);
objects = results;
}
}