const song = document.getElementById("song");
const playbtn = document.querySelector(".player-inner");
const nextbtn = document.querySelector(".play-forward");
const prevbtn = document.querySelector(".play-back");
let isPlaying = true;
let indexsong = 0;
const musics = ["Xichlinh.mp3","holo.mp3" , "DanhMatEm.mp3"];
song.setAttribute("src", `/Website/music/${musics[indexsong]}`);
nextbtn.addEventListener("click", function () {
  changesong(1);
});
prevbtn.addEventListener("click", function () {
  changesong(-1);
})
function changesong (dir){
  if(dir === 1) {
    //next song
    indexsong++;
    if (indexsong >=  musics.length){
      indexsong = 0 ;
    }
    isPlaying = true;
  } else if ( dir === -1 ) {
    //prev song
    indexsong--;
    if(indexsong <= 0 ){
      indexsong = indexsong.length - 1;
    }
    isPlaying = true;
  }
  song.setAttribute("src", `/Website/music/${musics[indexsong]}`);
  playPause();
}

playbtn.addEventListener("click", playPause);
function playPause() {
  if(isPlaying){
    song.play();
    playbtn.innerHTML= `<ion-icon name="pause-circle"></ion-icon>`
    isPlaying = false ;
  }  else {
    song.pause();
    playbtn.innerHTML=`<ion-icon name="play"></ion-icon>`
    isPlaying=true;
  }
}