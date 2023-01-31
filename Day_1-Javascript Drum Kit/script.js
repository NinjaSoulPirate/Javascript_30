// Get the keycode of the pressed key and get the audio file associated with it and play it
window.addEventListener("keydown", playAudio);

// Get all the keys and add transition end event listener to each key
const keys = document.querySelectorAll(".key");
keys.forEach((key) => {
  key.addEventListener("transitionend", removeTransition);
});

function playAudio(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  if (!audio) return;
  //rewind audio to start if key press in succession
  audio.currentTime = 0;
  audio.play();
  //playing css
  key.classList.add("playing");
}

function removeTransition(e) {
  // catch only the transform transition
  if (e.propertyName !== "transform") return;
  // remove the playing class after transform transition is complete
  this.classList.remove("playing");
}