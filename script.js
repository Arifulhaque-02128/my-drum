const keyList = ["key1", "key2", "key3", "key4", "key5", "key6", "key7", "key8", "key9"];
for (let i = 0; i < keyList.length; i++) {
    // const element = keyList[i];
    // const key = document.getElementById(element);
    const key = document.getElementsByClassName("key")[i];
    key.addEventListener("click", function(){
        const text = document.getElementsByClassName("text")[i].innerText;
        const character = text.toLowerCase();
        audioPlay(character);

        anim(character);
});  
}

document.addEventListener("keypress", function(event){
    var ch = event.key;
    audioPlay(ch);
    anim(ch);
});


function anim(ch){
    const myKey = document.querySelector("." + ch);
    myKey.classList.add("my-style");
        setTimeout(() => {
            myKey.classList.remove("my-style");
        }, 500);

}

function audioPlay(key){
    if (key == "a") {
        const audio = new Audio("sounds/boom.wav");
        audio.play();
    } 
    else if (key == "s"){
        const audio = new Audio("sounds/clap.wav");
        audio.play();
    }
    else if (key == "d") {
        const audio = new Audio("sounds/hihat.wav");
        audio.play();
    }
    else if (key == "f") {
        const audio = new Audio("sounds/kick.wav");
        audio.play();
    }
    else if (key == "g") {
        const audio = new Audio("sounds/openhat.wav");
        audio.play();
    }
    else if (key == "h") {
        const audio = new Audio("sounds/ride.wav");
        audio.play();
    }
    else if (key == "j") {
        const audio = new Audio("sounds/snare.wav");
        audio.play();
    }
    else if (key == "k") {
        const audio = new Audio("sounds/tink.wav");
        audio.play();
    }
    else if (key == "l") {
        const audio = new Audio("sounds/tom.wav");
        audio.play();
    }
    
    
}
