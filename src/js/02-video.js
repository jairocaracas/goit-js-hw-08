import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

let frame = document.getElementById('vimeo-player');
const player = new Player(frame);

const LOCALSTORAGE_KEY = 'videoplayer-current-time';

function play(data) {
  localStorage.setItem(LOCALSTORAGE_KEY, data.seconds);
  console.log(data);
}

player
  .setCurrentTime(localStorage.getItem(LOCALSTORAGE_KEY))
  .then(function (time) {
    time = localStorage.getItem(LOCALSTORAGE_KEY);
  });

player.on('timeupdate', throttle(play, 1000));
