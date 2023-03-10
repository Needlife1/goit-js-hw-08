import Player from "@vimeo/player";
import throttle from "lodash.throttle";

const iframe = document.getElementById("vimeo-player");
const player = new Player(iframe);

player.on('timeupdate', throttle(onPlay, 1000));

function onPlay(e) {
    const time = e.seconds;
    localStorage.setItem("videoplayer-current-time", time);
};


const currentTame = localStorage.getItem("videoplayer-current-time");
const startTame = JSON.parse(currentTame);
player.setCurrentTime(currentTame || 0);