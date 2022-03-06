text_input_value = "";
Status = "";
function setup(){
    canvas = createCanvas(400,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
}

function draw(){
    image(video, 0, 0, 400, 300);
}

function start(){
    objectDetector = ml5.objectDetector('cocossd', modelloaded);
    document.getElementById("status").innerHTML = "Status : Detecting Object";
    text_input_value = document.getElementById("object").value;
}

function modelloaded(){
    console.log("Model Loaded!");
    Status = true;
}