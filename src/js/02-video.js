import Vimeo from '@vimeo/player';
const iframe = document.querySelector('iframe');
const player = new Vimeo(iframe);

const onPlay = function (data) {
  // data is an object containing properties specific to that event
};

player.on('play', onTimeUpdate);

player.getVideoTitle().then(function (title) {
  console.log('title:', title);
});

// function onTimeUpdate() {
//   console.log('Play');
// }
// function onSavedCurrentTime() {
//   localStorage.setItem('videoplayer-current-time');
// }
