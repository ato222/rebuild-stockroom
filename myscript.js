function rebuildRebuild() {
  var episode = document.getElementsByTagName('audio')[0];

  submitKeyboardShortcut();
  startEpisode();
  startSavingLoop();

  function submitKeyboardShortcut() {
    window.addEventListener("keydown", function(e) {
      if (e.keyCode === 13 || e.keyCode === 75) {
        (episode.paused) ? episode.play() : episode.pause();
      }
    });
  }

  function startEpisode() {
    episode.currentTime = getCurrentTime();
    episode.play();
  }

  function startSavingLoop() {
    setInterval(function() {
      saveCurrentTime();
    }, 1000);
  }

  function getCurrentTime() {
    var episode_url = episode.src;
    return (localStorage.getItem(episode_url)) ? localStorage.getItem(episode_url) : 0;
  }

  function saveCurrentTime() {
    var episode_url = episode.src;
    localStorage.setItem(episode_url, Math.floor(episode.currentTime));
  }
}

var script = document.createElement("script");
script.appendChild(document.createTextNode('(' + rebuildRebuild + ")();"));
document.body.appendChild(script);
