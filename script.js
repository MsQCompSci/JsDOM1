console.log("It WORKS!"); //This tests if the script is working and linked to we page in js console

//This saves the h1 element in the "title" variable
const title = document.querySelector("#title");
const words = document.querySelector("#words")

//This displays what is saves in my "title" variable in the console
console.log(title);

//This adds the text "DOM PORJECT" to the "title" variable which is assigned an element in my html
title.innerHTML = title.innerHTML + " DOM Project";

//this function accessess the element with id of "today" in my html and changes it to the current date 
function displayDate(){
    document.getElementById("today").innerHTML = Date();
}

//Variable for each lightbulb
var bulbOne = document.querySelector("#bulb1");
var bulbTwo = document.querySelector("#bulb2");
var bulbThree = document.querySelector("#bulb3");
var bulbFour = document.querySelector("#bulb4");

//Variable for states to check which state each lightbulb is in
var state1 = "o"
var state2 = "o"
var state3 = 'o'
var state4 = 'o'

//Variable for number of turn
var turn = 1;

/*
function winner(){

        //winning algorithm
        if(state1 =='p' && state2 =='p'&&state3 =='p'&& state4 =='p' ){
            title.innerHTML = title.innerHTML("YOUR A WINNER!!")
            
        }
} */  

//Check each
console.log(bulbOne);
console.log(bulbTwo);
console.log(bulbThree);
console.log(bulbFour);


//console.log(state1)
 
//Event listeners for each
bulbOne.addEventListener(
    'click', function(){
        console.log("Click")
        console.log(turn%2);
    
        if(turn%2 != 0){
        if(state1 == 'o'){
            bulbOne.src = "purpleLightbulb.PNG";
            state1 = 'pp';
            turn++;
            console.log(turn);
        }
        else if(state1=='pp' && turn%2 != 0) {
            bulbOne.src = "pinkLightbulb.PNG"
            turn++;
            state1 = 'p';
            if(state1 =='p' && state2 =='p'&& state3 =='p' && state4 =='p' ){
            document.getElementById("title").innerHTML = "YOU WON!";
            document.getElementById("words").innerHTML = "YOU WON!";
            }
        }
            
        }else if(turn%2==0){//If on an even turn restart 
            bulbOne.src = "orangeLightblub.PNG";
            bulbTwo.src = "orangeLightblub.PNG";
            bulbThree.src = "orangeLightblub.PNG";
            bulbFour.src = "orangeLightblub.PNG";
            state1 = 'o';
            state2 = 'o';
            state3 = 'o';
            state4 = 'o';
            turn = 1;
            console.log("Restart");
            console.log(state1);
            console.log(turn);
            }
    }

)

bulbTwo.addEventListener(
    'click', function(){
        console.log("bulb clicked!");
        if(turn%2 == 0){
        if(state2 == 'o'){
            bulbTwo.src = "purpleLightbulb.PNG";
            state2 = 'pp';
            turn++;
            console.log(turn);
        }
        else if(state2=='pp' && turn%2 == 0) {
            bulbTwo.src = "pinkLightbulb.PNG"
            turn++;
            state2 = 'p';
            if(state1 =='p' && state2 =='p'&& state3 =='p' && state4 =='p' ){
            document.getElementById("title").innerHTML = "YOU WON!";
            document.getElementById("words").innerHTML = "YOU WON!";
            }
        }
            
        }else if(turn%2!=0){//If on an even turn restart 
            bulbOne.src = "orangeLightblub.PNG";
            bulbTwo.src = "orangeLightblub.PNG";
            bulbThree.src = "orangeLightblub.PNG";
            bulbFour.src = "orangeLightblub.PNG";
            state1 = 'o';
            state2 = 'o';
            state3 = 'o';
            state4 = 'o';
            turn = 1;
            console.log("Restart");
            console.log(state2);
            console.log(turn);
            }
    }

)

bulbThree.addEventListener(
    'click', function(){
        console.log("bulb clicked!");
        if(turn%2 != 0){
        if(state3 == 'o'){
            bulbThree.src = "purpleLightbulb.PNG";
            state3 = 'pp';
            turn++;
            console.log(turn);
        }
        else if(state3=='pp' && turn%2 != 0) {
            bulbThree.src = "pinkLightbulb.PNG"
            turn++;
            state3 = 'p';
            if(state1 =='p' && state2 =='p'&& state3 =='p' && state4 =='p' ){
            document.getElementById("title").innerHTML = "YOU WON!";
            document.getElementById("words").innerHTML = "YOU WON!"
            }
        }
            
        }else if(turn%2==0){//If on an even turn restart 
            bulbOne.src = "orangeLightblub.PNG";
            bulbTwo.src = "orangeLightblub.PNG";
            bulbThree.src = "orangeLightblub.PNG";
            bulbFour.src = "orangeLightblub.PNG";
            state1 = 'o';
            state2 = 'o';
            state3 = 'o';
            state4 = 'o';
            turn = 1;
            console.log("Restart");
            console.log(state1);
            console.log(turn);
            }
    }

)

bulbFour.addEventListener(
    'click', function(){
        console.log("bulb clicked!");
         if(turn%2 == 0){
        if(state4 == 'o'){
            bulbFour.src = "purpleLightbulb.PNG";
            state4 = 'pp';
            turn++;
            console.log(turn);
        }
        else if(state4=='pp' && turn%2 == 0) {
            bulbFour.src = "pinkLightbulb.PNG"
            turn++;
            state4 = 'p';
            if(state1 =='p' && state2 =='p'&& state3 =='p' && state4 =='p' ){
            document.getElementById("title").innerHTML = "YOU WON!";
            document.getElementById("words").innerHTML = "YOU WON!";
            }
        }
            
        }else if(turn%2!=0){//If on an even turn restart 
            bulbOne.src = "orangeLightblub.PNG";
            bulbTwo.src = "orangeLightblub.PNG";
            bulbThree.src = "orangeLightblub.PNG";
            bulbFour.src = "orangeLightblub.PNG";
            state1 = 'o';
            state2 = 'o';
            state3 = 'o';
            state4 = 'o';
            turn = 1;
            console.log("Restart");
            console.log(state4);
            console.log(turn);
            }
    }

)
 


//console.log(state1);

