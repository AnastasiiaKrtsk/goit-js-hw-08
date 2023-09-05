import Vimeo from '@vimeo/player';

const player = new Vimeo('vimeo-player');

function saveTimeToLocalStorage(time) {
  localStorage.setItem('videoplayer-current-time', time);
}
function loadTimeFromLocalStorage() {
  return parseFloat(localStorage.getItem('videoplayer-current-time')) || 0;
}

player.ready().then(() => {
  const savedTime = loadTimeFromLocalStorage();
  player.setCurrentTime(savedTime);
});
player.on('timeupdate', event => {
  const currentTime = event.seconds;
  saveTimeToLocalStorage(currentTime);
});
