document.addEventListener("DOMContentLoaded", function(event) {

  const srcLinks = document.querySelectorAll('#popularPodcasts a');

  srcLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      changePlayerSource(link.getAttribute('href'));
    })
  })

  const changePlayerSource = (src) => {
    const player = document.getElementById('player');
    const currentSource = player.getAttribute('src');
    const newSource = currentSource.slice(0, currentSource.indexOf('/podcast/'))+ '/podcast/'+src;
    player.setAttribute('src', newSource);
  }
});
