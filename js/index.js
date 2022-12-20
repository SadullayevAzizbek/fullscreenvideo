const btnEl = document.querySelector("#video-btn");
const videoEl = document.querySelector("video");
// if (video.paused) {
//   video.play();
//   btn.innerHTML = "Pause";
// } else {
//   video.pause();
//   btn.innerHTML = "Play";
// }
function videoPause(){
  if(videoEl.paused){
    videoEl.play();
    btnEl.innerHTML="Pause"
  }else{
    videoEl.pause();
    btnEl.innerHTML="Play"
  }
}

btnEl.addEventListener("click",videoPause)