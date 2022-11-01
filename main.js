objects = [];
img = "";

function preload(){
    img = loadImage("dog_cat.jpg");
}

function setup(){
    canvas=createCanvas(600,500);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
}

function modelLoaded(){
    console.log("Model has been launched");
    objectDetector.detect(img, gotResult);
}

function gotResult(error, results){
    if (error){
        console.error
    } else{
        console.log(results);
        objects = results;
    }
}

function draw(){
    image(img, 0,0,600,500)
}

