img = "";
status = "";
objectdetector = "";
objects=[];

function preload() {
    img = loadImage("tv.jpg");
}
function setup() {
    canvas = createCanvas(640, 420);
    canvas.center();
    objectdetector = ml5.objectDetector('cocossd' ,modelLoaded);
    document.getElementById("status").innerHTML = "status = detecting objects";
}
function draw() {
    image(img, 0, 0, 640, 420);
    fill("#FF0000");
    noFill();
    stroke("FF0000");
    if(status !="") {
        for(i=0; i < objects.length; i++ ) {
            document.getElementById("status").innerHTML = "status = obj dect";
            fill("#FF0000");
            percent = floor(objects[i].confidence * 100);
            text(objects[i].label + " " + percent + "%", objects[i].x + 15, objects[i].y + 15);
            
    noFill();
 stroke("#FF0000");

 rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height);
        }
    }
}
function modelLoaded() {
    console.log("modaloaded");
    status = true;
    objectdetector.detect(img, gotResult);
}
function gotResult(error, results) {
    if(error) {
        console.error(error);
    }
    console.log(results);
    objects=results;
}