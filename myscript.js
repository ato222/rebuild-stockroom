function rebuildRebuild() {
  var episode = document.getElementsByTagName('audio')[0];

  submitKeyboardShortcut();
  playEpisode();
  startSavingLoop();

  function submitKeyboardShortcut() {
    window.addEventListener("keydown", function(e) {
      if (e.keyCode === 13 || e.keyCode === 75) {
        (episode.paused) ? episode.play() : episode.pause();
      }
    });
  }

  function playEpisode() {
    episode.currentTime = preTime();
    episode.play();
  }

  function startSavingLoop() {
    setInterval(function() {
      saveTime();
    }, 1000);
  }

  function preTime() { // return "0" if it's first playing.
    var episode_url = episode.src;
    return (localStorage.getItem(episode_url)) ? localStorage.getItem(episode_url) : "0";
  }

  function saveTime() {
    var episode_url = episode.src;
    localStorage.setItem(episode_url, Math.floor(episode.currentTime));
  }
}

var script = document.createElement("script");
script.appendChild(document.createTextNode('(' + rebuildRebuild + ")();"));
document.body.appendChild(script);
