canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

roverWidth = 35;
roverHeight = 25;
roverX = 0;
roverY = 0;
backgroundImg = "mars.jpeg";
roverImg = "rover.png";

function add() {
    backgroundImgTag = new Image();
    backgroundImgTag.onload = uploadBackground;
    backgroundImgTag.src = backgroundImg;

    roverImgTag = new Image();
    roverImgTag.onload = uploadRover;
    roverImgTag.src = roverImg;
}

function uploadBackground(){
    ctx.drawImage(backgroundImgTag, 0,0, canvas.width, canvas.height);
}

function uploadRover(){
    ctx.drawImage(roverImgTag, roverX,roverY, roverWidth, roverHeight);
}


window.addEventListener("keyDown", my_keyDown);
function my_keyDown(e) {
    var keyPressed = e.keyCode;
    console.log(keyPressed);
    if(keyPressed == "38"){
        up();
        console.log("up");
    }
    if(keyPressed == "40"){
        down();
        console.log("down");
    }
    if(keyPressed == "37"){
        left();
        console.log("left");
    }
    if(keyPressed == "39"){
        right();
        console.log("right");
    }
}

function up() {
    if(roverY >= 0){
        roverY = roverY - 10;
        console.log("X =" + roverX + "Y =" + roverY);
        uploadBackground();
        uploadRover();
    }
}

function down() {
    if(roverY <= 600){
        roverY = roverY + 10;
        console.log("X =" + roverX + "Y =" + roverY);
        uploadBackground();
        uploadRover();
    }
}

function left() {
    if(roverX >= 0){
        roverX = roverX - 10;
        console.log("X =" + roverX + "Y =" + roverY);
        uploadBackground();
        uploadRover();
    }
}

function right() {
    if(roverX <= 800){
        roverX = roverX + 10;
        console.log("X =" + roverX + "Y =" + roverY);
        uploadBackground();
        uploadRover();
    }
}
