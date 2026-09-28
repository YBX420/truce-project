const video = document.getElementById('research-video');
document.querySelectorAll('[data-seek]').forEach((button) => {
  button.addEventListener('click', () => {
    const seek = () => {
      video.currentTime = Number(button.dataset.seek);
      video.focus({ preventScroll: true });
      video.scrollIntoView({ behavior: 'smooth', block: 'center' });
    };
    if (video.readyState >= 1) seek();
    else {
      video.addEventListener('loadedmetadata', seek, { once: true });
      video.load();
    }
  });
});
