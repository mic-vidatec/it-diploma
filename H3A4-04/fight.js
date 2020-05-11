//Declare hit point variables and add event listeners to objects
let P1Health = 50,
    P2Health = 50,
    P1HealthField = document.querySelector("#P1Health"),
    P2HealthField = document.querySelector("#P2Health"),
    punchButton = document.querySelector("#punch"),
    kickButton = document.querySelector("#kick"),
    resultField = document.querySelector("#result"),
    shotTrackerField = document.querySelector("#shotTracker"),
    resetButton = document.querySelector("#reset"),
    onePlayerButton = document.querySelector("#onePlayer"),
    twoPlayerButton = document.querySelector("#twoPlayer"),
    compButton = document.querySelector("#comp"),
    P1Icon = document.querySelector("#P1Icon"),
    P2Icon = document.querySelector("#P2Icon"),
    instButton = document.querySelector("#inst"),
    randomNumber = 0,
    shotTracker = 1;
resetButton.addEventListener("click", function(){
    setTimeout(reset, 500)});
twoPlayerButton.addEventListener("click", function(){
    twoPlayer();
});
onePlayerButton.addEventListener("click", function(){
    onePlayer();
});
instButton.addEventListener("click", function(){
    alert("Start by choosing single player or two player. If playing single player, you are P1 and the computer is P2. When it's the computer's turn please use the 'computer turn' button. A kick does twice as much damage as a punch but is less likely to hit.");
});
P1HealthField.innerHTML = P1Health;
P2HealthField.innerHTML = P2Health;

//Kick function - 1 out of 3 chance of doing 10 damage
function kick(){
    random(3);
    if (randomNumber == 1){
        if (shotTracker == 1){
            P2Health -= 10;
            P2HealthField.innerHTML = P2Health;
            resultField.innerHTML = "P1 hit! -10 to P2";
            if (P2Health <= 25) {
                P2Icon.classList.remove("fa-smile");
                P2Icon.classList.add("fa-meh");
                if (P2Health <= 10) {
                    P2Icon.classList.remove("fa-meh");
                    P2Icon.classList.add("fa-heartbeat");
                    if (P2Health <= 0){
                        shotTrackerField.hidden = true;
                        resultField.innerHTML = "P1 WINS!";
                        resetButton.innerHTML = "Play again?";
                        P2Icon.classList.remove("fa-heartbeat");
                        P2Icon.classList.add("fa-ambulance");
                        P1Icon.classList.remove("fa-smile", "fa-meh", "fa-heartbeat");
                        P1Icon.classList.add("fa-trophy");
                    }
                }
            }
            setTimeout(changePlayer, 500);
        } else if (shotTracker == 0){
            P1Health -= 10;
            P1HealthField.innerHTML = P1Health;
            resultField.innerHTML = "P2 hit! -10 to P1";
            if (P1Health <= 25) {
                P1Icon.classList.remove("fa-smile");
                P1Icon.classList.add("fa-meh");
                if (P1Health <= 10) {
                    P1Icon.classList.remove("fa-meh");
                    P1Icon.classList.add("fa-heartbeat");
                    if (P1Health <= 0){
                        shotTrackerField.hidden = true;
                        resultField.innerHTML = "P2 WINS!";
                        resetButton.innerHTML = "Play again?";
                        P1Icon.classList.remove("fa-heartbeat");
                        P1Icon.classList.add("fa-ambulance");
                        P2Icon.classList.remove("fa-smile", "fa-meh", "fa-heartbeat");
                        P2Icon.classList.add("fa-trophy");
                    }
                }
            }
            setTimeout(changePlayer, 500);
        }
    } else {
        if (shotTracker == 1){
            resultField.innerHTML = "P1 missed!";
            setTimeout(changePlayer, 500);
        } else if (shotTracker == 0){
            resultField.innerHTML = "P2 missed!";
            setTimeout(changePlayer, 500);
        }
    }
};

//Punch function - 2 out of 3 chance of doing 5 damage
function punch(){
    random(3);
    if (randomNumber == 1 || randomNumber == 2){
        if (shotTracker == 1){
            P2Health -= 5;
            P2HealthField.innerHTML = P2Health;
            resultField.innerHTML = "P1 hit! -5 to P2";
            if (P2Health <= 25) {
                P2Icon.classList.remove("fa-smile");
                P2Icon.classList.add("fa-meh");
                if (P2Health <= 10) {
                    P2Icon.classList.remove("fa-meh");
                    P2Icon.classList.add("fa-heartbeat");
                    if (P2Health <= 0){
                        shotTrackerField.hidden = true;
                        resultField.innerHTML = "P1 WINS!";
                        resetButton.innerHTML = "Play again?";
                        P2Icon.classList.remove("fa-heartbeat");
                        P2Icon.classList.add("fa-ambulance");
                        P1Icon.classList.remove("fa-smile", "fa-meh", "fa-heartbeat");
                        P1Icon.classList.add("fa-trophy");
                    }
                }
            }
            setTimeout(changePlayer, 500);
        } else if (shotTracker == 0){
            P1Health -= 5;
            P1HealthField.innerHTML = P1Health;
            resultField.innerHTML = "P2 hit! -5 to P1";
            if (P1Health <= 25) {
                P1Icon.classList.remove("fa-smile");
                P1Icon.classList.add("fa-meh");
                if (P1Health <= 10) {
                    P1Icon.classList.remove("fa-meh");
                    P1Icon.classList.add("fa-heartbeat");
                    if (P1Health <= 0){
                        shotTrackerField.hidden = true;
                        resultField.innerHTML = "P2 WINS!";
                        resetButton.innerHTML = "Play again?";
                        P1Icon.classList.remove("fa-heartbeat");
                        P1Icon.classList.add("fa-ambulance");
                        P2Icon.classList.remove("fa-smile", "fa-meh", "fa-heartbeat");
                        P2Icon.classList.add("fa-trophy");
                    }
                }
            }
            setTimeout(changePlayer, 500);
        }
    } else {
        if (shotTracker == 1){
            resultField.innerHTML = "P1 missed!";
            setTimeout(changePlayer, 500);
        } else if (shotTracker == 0){
            resultField.innerHTML = "P2 missed!";
            setTimeout(changePlayer, 500);
        }
    }
};

//Generate random number 0, 1 or 2
function random(num){
    randomNumber = Math.floor(Math.random()*num);
};

//Function to change the player taking a shot
function changePlayer(){
    if (shotTracker == 1){
        shotTracker = 0;
        shotTrackerField.innerHTML = "P2 take your shot";
        shotTrackerField.classList.remove("P1Colour");
        shotTrackerField.classList.add("P2Colour");
        punchButton.classList.add("P2:hover", "P2");
        kickButton.classList.add("P2:hover", "P2");
        punchButton.classList.remove("P1:hover", "P1");
        kickButton.classList.remove("P1:hover", "P1");
        punchButton.disabled = true;
        kickButton.disabled = true;
    } else {
        shotTracker = 1;
        shotTrackerField.innerHTML = "P1 take your shot";
        shotTrackerField.classList.remove("P2Colour");
        shotTrackerField.classList.add("P1Colour");
        punchButton.classList.remove("P2:hover", "P2");
        kickButton.classList.remove("P2:hover", "P2");
        punchButton.classList.add("P1:hover", "P1");
        kickButton.classList.add("P1:hover", "P1");
        punchButton.disabled = false;
        kickButton.disabled = false;
    }
};

function reset(){
    P1Health = 50,
    P2Health = 50,
    randomNumber = 0,
    shotTracker = 1;
    P1HealthField.innerHTML = P1Health;
    P2HealthField.innerHTML = P2Health;
    resultField.innerHTML = "Fiiiight!";
    shotTrackerField.hidden = false;
    shotTrackerField.innerHTML = "P1 take your shot";
    resetButton.innerHTML = "Reset";
    P1Icon.classList.remove("fa-trophy", "fa-ambulance");
    P2Icon.classList.remove("fa-trophy", "fa-ambulance");
    P1Icon.classList.add("fa-smile");
    P2Icon.classList.add("fa-smile");
    shotTrackerField.classList.remove("P2Colour");
    shotTrackerField.classList.add("P1Colour");
    punchButton.classList.remove("P2:hover", "P2");
    kickButton.classList.remove("P2:hover", "P2");
    punchButton.classList.add("P1:hover", "P1");
    kickButton.classList.add("P1:hover", "P1");
};

function twoPlayer(){
    activateButtons();
    reset();
    twoPlayerButton.classList.add("selected");
    onePlayerButton.classList.remove("selected");
    punchButton.disabled = false;
    kickButton.disabled = false;
    compButton.hidden = true;
};

function onePlayer(){
    activateButtons();
    reset();
    onePlayerButton.classList.add("selected");
    twoPlayerButton.classList.remove("selected");
    compButton.disabled = false;
    compButton.hidden = false;
    punchButton.disabled = false;
    kickButton.disabled = false;
    compButton.classList.remove("button");
    compButton.classList.add("P2");
    compButton.addEventListener("click", function(){
        setTimeout(compButtonUse, 1000);
    });
};

function activateButtons(){
    punchButton.addEventListener("click", function(){
        setTimeout(punch, 1000)});
    kickButton.addEventListener("click", function(){
        setTimeout(kick, 1000)});
    punchButton.classList.remove("button");
    kickButton.classList.remove("button");
    punchButton.classList.add("P1");
    kickButton.classList.add("P1");
};

function compButtonUse(){
    if (shotTracker == 0){
        random(2);
        if (randomNumber == 0){
            punch();
        } else {
            kick();
        }
    }
};
