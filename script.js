//list of images and choices for the functons later on
var list = ["<img src='images/rock.png'' height='70px'>", "<img src='images/paper.png'' height='70px'>", "<img src='images/scissors.png'' height='70px'>", "<img src='images/lizard.png' height='70px'>", "<img src='images/spock.png'' height='70px'>"]
var listnotag = [
  "rock", "paper", "scissors", "lizard", "spock"
]

//variables for the functions to run
let pchoice = 0;
let cpuchoice = 0;
let item = 0;
let CPUscore= 0;
let Pscore= 0;
let roundwin = 0;
let rounds = 0;

//functions for popping up the respective image for the user's choice and the button to reveal the cpu's choice
function rock() {
  document.getElementById("pchoice").innerHTML="<br><br><br><img src='images/rock.png' height='70'><br><br>you picked rock!<br><br><br><br>";
  document.getElementById("results").innerHTML="make a choice using one of the buttons above, and then the results will be revealed once the cpu makes its choice as well!";
  pchoice = 0;
}

function paper() {
  document.getElementById("pchoice").innerHTML="<br><br><br><img src='images/paper.png' height='70'><br><br>you picked paper!<br><br><br><br>";
  document.getElementById("results").innerHTML="make a choice using one of the buttons above, and then the results will be revealed once the cpu makes its choice as well!";
  pchoice = 1;
}

function scissors() {
  document.getElementById("pchoice").innerHTML="<br><br><br><img src='images/scissors.png' height='70'><br><br>you picked scissors!<br><br><br><br>";
  document.getElementById("results").innerHTML="make a choice using one of the buttons above, and then the results will be revealed once the cpu makes its choice as well!";
  pchoice = 2;
}

function lizard() {
  document.getElementById("pchoice").innerHTML="<br><br><br><img src='images/lizard.png' height='70'><br><br>you picked lizard!<br><br><br><br>";
  document.getElementById("results").innerHTML="make a choice using one of the buttons above, and then the results will be revealed once the cpu makes its choice as well!";
  pchoice = 3;
}

function spock() {
  document.getElementById("pchoice").innerHTML="<br><br><br><img src='images/spock.png' height='70'><br><br>you picked spock!<br><br><br><br>";
  document.getElementById("results").innerHTML="make a choice using one of the buttons above, and then the results will be revealed once the cpu makes its choice as well!";
  pchoice = 4;
}


//when run, allows for a button to pop up that, when clicked, will reveal the cpu's choice
function button() {
  document.getElementById("cpuchoice").innerHTML="<button onclick='cpurandom()'>click to see the computer's choice!</button>";
  document.getElementById("cpustatement").innerHTML="<p></p>";
}

//cpu random image function -- randomizes an image and prints that image, as well as its corresponding statement to say what the cpu chose. reveals the results button as well (that when clicked, shows the results of that round)
function cpurandom(){
  item = Math.floor(Math.random() * 5);
  cpuchoice = list[item];
  document.getElementById("cpuchoice").innerHTML = cpuchoice;
  var cpustatement = "<br>the cpu chose " + listnotag[item] + "!";
  document.getElementById("cpustatement").innerHTML = cpustatement;
  document.getElementById("results").innerHTML = "<button onclick='results(pchoice, item)'>click to see the results of this round!</button>";
}

//the results function -- when run, depending on the player's choice, prints either a "win" statement, a "draw" statement, or a "lose" statement, adds the appropriate point to the winner (if there is one) and increases the round count by one

function results(pchoice, item){

  if (pchoice == item){
    document.getElementById("results").innerHTML = "this round has ended in a draw. better luck next time!";
    rounds += 1;
  }
  
  else if (pchoice == 0){
    if (item == 2 || item == 3) {
      document.getElementById("results").innerHTML = "this round has ended in you winning! congrats!";
      Pscore += 1;
      rounds += 1;
    } 
    else {
      document.getElementById("results").innerHTML = "this round has ended in you losing. better luck next time!";
      CPUscore +=1;
      rounds += 1;
    }
  }

  else if (pchoice == 1){
    if (item == 0 || item == 4) {
      document.getElementById("results").innerHTML = "this round has ended in you winning! congrats!";
      Pscore += 1;
      rounds += 1;
    } 
    else {
      document.getElementById("results").innerHTML = "this round has ended in you losing. better luck next time!";
      CPUscore +=1;
      rounds += 1;
    }
  }

  else if (pchoice == 2){
    if (item == 1 || item == 3) {
      document.getElementById("results").innerHTML = "this round has ended in you winning! congrats!";
      Pscore += 1;
      rounds += 1;
    } 
    else {
      document.getElementById("results").innerHTML = "this round has ended in you losing. better luck next time!";
      CPUscore +=1;
      rounds += 1;
    }
  }

  else if (pchoice == 3){
    if (item == 1 || item == 4) {
      document.getElementById("results").innerHTML = "this round has ended in you winning! congrats!";
      Pscore += 1;
      rounds += 1;
    } 
    else {
      document.getElementById("results").innerHTML = "this round has ended in you losing. better luck next time!";
      CPUscore +=1;
      rounds += 1;
    }
  }

  else if (pchoice == 4){
    if (item == 0 || item == 2) {
      document.getElementById("results").innerHTML = "this round has ended in you winning! congrats!";
      Pscore += 1;
      rounds += 1;
    } 
    else {
      document.getElementById("results").innerHTML = "this round has ended in you losing. better luck next time!";
      CPUscore +=1;
      rounds += 1;
    }
  }

  refreshscore = score()
  if (Pscore == 5 || CPUscore == 5){
    alert("game over! ✰")
    if (Pscore == 5){
      window.location.href = "endwin.html"
    }
    else {
      window.location.href = "endlose.html"
    }
  }
}

//Function for showing the player and cpu score alongside the number of rounds played
function score(){
  document.getElementById("pscore").innerHTML = "player score: " + Pscore;
  document.getElementById("cpuscore").innerHTML = "cpu score: " + CPUscore;
  document.getElementById("rds").innerHTML = "round number: " + rounds;
}

//win function, takes the user to the winning ending page
function win(){
  document.getElementById("win").innerHTML = "<h3 style='font-size: 70px; margin-bottom: 10px;'>you win!</h3><img src='images/frog.gif' style='width: 160px; margin: 20px;'><br><br><button onclick='home()'>return to home</button><button onclick='again()'>play again?</button>";
}
//lose that takes the user to the losing ending page
function lose(){
  document.getElementById("lose").innerHTML = "<h3 style='font-size: 70px; margin-bottom: 10px;'>you lose.</h1><br><img src='images/froglose.gif' style='width: 200px;'><br><br><button onclick='home()'>return to home</button><button onclick='again()'>play again?</button>";
}

//takes user to the game page
function again(){
  window.location.href="game.html"
}

//takes the user to the home page
function home(){
  window.location.href="index.html"
}

//resets the entire game by setting all variables equal to what they initially were at the beginning, refreshing the scoreboard so that it shows the zeroed out values, and re-adding the placeholder text
function reset(){
  cpuchoice = 0;
  item = 0;
  CPUscore= 0;
  Pscore= 0;
  roundwin = 0;
  rounds = 0;
  refreshscore = score()
  document.getElementById("pchoice").innerHTML = "<br><br>make a choice using one of the buttons above!<br><br><br><br>";
  document.getElementById("cpuchoice").innerHTML = "<br><br>make a choice using one of the buttons above, and then the cpu will make its choice!<br><br><br><br>";
  document.getElementById("cpustatement").innerHTML = "";
  document.getElementById("results").innerHTML = "make a choice using one of the buttons above, and then the results will be revealed once the cpu's choice is revealed as well!";
}