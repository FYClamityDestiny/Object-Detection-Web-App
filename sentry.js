let statuscocossd = "";
let objects = [];
sentry = "";
function preload() {
  sentry = loadImage("sentry.png");
}

function setup() {
  myCanvas = createCanvas(300, 300);
  myCanvas.center();
  objectdetector = ml5.objectDetector('cocossd', modelLoaded);
  document.getElementById("status").innerHTML = "Detecting Objects";
}

function modelLoaded() {
  console.log("Model Loaded");
  statuscocossd = true;
  objectdetector.detect(sentry, gotResult);
}

function draw() {
  image(sentry, 0, 0, 300, 300);
  if (statuscocossd !== "" && objects.length > 0) { // Check if objects array has elements
    for (let i = 0; i < objects.length; i++) {
      let percent = floor(objects[i].confidence * 100);
      text(objects[i].label + ":" + percent + "%", objects[i].x - 50, objects[i].y - 120);
      noFill();
      stroke("#FF0000");
      rect(objects[i].x - 150, objects[i].y - 120, objects[i].width, objects[i].height);
    }
  }
}

function gotResult(error, results) {
  if (error) {
    console.error(error);
  } else {
    console.log(results);
    objects = results;
  }
}
