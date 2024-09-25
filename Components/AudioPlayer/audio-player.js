// Select elements
const audio = document.getElementById('audio');
const playPauseBtn = document.getElementById('playPauseBtn');
const seekSlider = document.getElementById('seekSlider');
const currentTimeDisplay = document.getElementById('currentTime');
const durationDisplay = document.getElementById('duration');

// Play/Pause functionality
playPauseBtn.addEventListener('click', () => {
  if (audio.paused) {
    audio.play();
    playPauseBtn.textContent = 'Pause';
  } else {
    audio.pause();
    playPauseBtn.textContent = 'Play';
  }
});

// Update seek slider and time displays
audio.addEventListener('timeupdate', () => {
  const currentTime = audio.currentTime;
  const duration = audio.duration;
  
  // Update the seek bar
  seekSlider.value = (currentTime / duration) * 100;
  
  // Update the current time display
  currentTimeDisplay.textContent = formatTime(currentTime);
  
  // Update the duration display
  if (!isNaN(duration)) {
    durationDisplay.textContent = formatTime(duration);
  }
});

// Seek audio on slider change
seekSlider.addEventListener('input', () => {
  const value = seekSlider.value;
  audio.currentTime = (value / 100) * audio.duration;
});

// Format time helper function (MM:SS)
function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
}
