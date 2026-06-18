const audio =
  document.getElementById("beep");

const audioBtn =
  document.getElementById("toggle-audio");

let soundEnabled = true;

function updateAudioButton(){

  if(soundEnabled){

    audioBtn.innerText = "🔊 SOM ON";

    audioBtn.classList.remove("off");

  }else{

    audioBtn.innerText = "🔇 SOM OFF";

    audioBtn.classList.add("off");
  }
}

audioBtn.onclick = () => {

  soundEnabled = !soundEnabled;

  updateAudioButton();
};

function playBeep(){

  if(!soundEnabled)
    return;

  audio.currentTime = 0;

  audio.play().catch(()=>{});

  updateAudioButton();
}
