var database;
var form, room, player;
var player1Image, player2Image;

function preload() {
    player1Image = loadImage("images/player1.png");
    player2Image = loadImage("images/player2.png");
}

function setup() {
    createCanvas(displayWidth, displayHeight);
    

    database = firebase.database();

    room = new Room();
    room.readGameState();
    room.readRoomStatus();
    room.start();
}

function draw() {
    background("#ebc471");

    if(room.playerCount >= 2){
        room.play();
    }

}

function collideObjects(player1, player2) {
    player1BottomEdge = player1.y + 213/2;
    player2Topdge = player2.y - 213/2;
    yDisplaceMent = player1.overlapPoint(player2.x, player2Topdge);
    console.log(yDisplaceMent);
    if(yDisplaceMent){
        player1.bounce(player2);
    }
}