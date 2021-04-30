//Created a function to play my music, also to enable and disable my button

function playSpaceMusic() {
    mySoundSM = new sound("spaceMusic2.mp3");
    mySoundSM.play();
    //getting my element or button refrence
    document.getElementById("SpaceMusic").disabled = true;
    //getting my element or button refrence
    document.getElementById("StopMusic").disabled = false;

}

//Created a function to play my thrusters, also to enable and disable my button

function playThrusters() {
    mySoundT = new sound("thrusters.mp3");
    mySoundT.play();
    //getting my element or button refrence
    document.getElementById("Thrusters").disabled = true;
    //getting my element or button refrence
    document.getElementById("StopThrusters").disabled = false;
}

//Created a function to stop my music, also to enable and disable my button

function stopMusic() {
    //getting my element or button refrence and set disable to true
    document.getElementById("StopMusic").disabled = true;
    //getting my element or button refrence setting it to false
    document.getElementById("SpaceMusic").disabled = false;
    mySoundSM.stop();

}

//Created a function to stop my thrusters, also to enable and disable my buttons

function stopThrusters() {
    //getting my element or button refrence and set disable to true
    document.getElementById("StopThrusters").disabled = true;
    //getting my element or button refrence setting it to false
    document.getElementById("Thrusters").disabled = false;
    mySoundT.stop();

}

// I almost understand this? I think... nope, I do not...what do the strings make refrence to?
function sound(src) {
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.sound.setAttribute("preload", "audio");
    this.sound.setAttribute("controls", "none");
    this.sound.style.display = "none";
    document.body.appendChild(this.sound);

    //this function to play sound I think?
    this.play = function() {
        this.sound.play();
    }

    // this function to stop the sound...again unsure due to my sound would not stop until I placed them in my other stopThruster function....when I disabled this line of code it still worked.
    this.stop = function() {
        this.sound.pause();
    }

}