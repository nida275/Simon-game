
var buttonColours=["red", "green", "blue","yellow"];
var gamePattern=[];
var userClickPattern=[];
var started= false;
var level=0;


$("body").keypress(function(){
    if(started==false){
        $("#level-title").text("Level "+level);
        nextSequence();
        started=true;
    }
});

$(".btn").click(function(){

    var userChosenColor = $(this).attr("id");

    userClickPattern.push(userChosenColor);

    playSound(userChosenColor);
    animatePress(userChosenColor);
    checkAnswer(level);
});

function nextSequence(){
    level++;
    $("#level-title").html("Level "+level);

    var randomNumber = Math.floor(Math.random()*3 );
    var randomChosenColour= buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);

$("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);

playSound(randomChosenColour);


}

function playSound(name){
    var audio = new Audio("./sounds/" + name + ".mp3");
    audio.play();
}

function animatePress(currentColour){
    $("#"+ currentColour).addClass("pressed");
    setTimeout(function () {
        $("#" + currentColour).removeClass("pressed");
      }, 100);
    }


function checkAnswer(){
     if(){
        
     }
     else
}