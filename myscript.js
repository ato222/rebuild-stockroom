var episode = document.getElementsByTagName('audio')[0];
var episode_url = episode.src;
var playButton = document.getElementsByTagName('button')[0];
var currentTime;

episode.currentTime = getCurrentTime();
playButton.focus();
alertCurrentTimeAndPlay();

setInterval(function() {
    saveCurrentTime();
}, 1000);


function getCurrentTime() {
    return (localStorage.getItem(episode_url)) ? localStorage.getItem(episode_url) : 0;
}

function saveCurrentTime() {
    localStorage.setItem(episode_url, Math.floor(episode.currentTime));
}

function getFormattedCurrentTime(second) {
    var hour = Math.floor(second / 3600);
    var minute = Math.floor(second / 60);
    var second = Math.floor(second % 60);

    return paddingTime(hour) + ':' + paddingTime(minute) + ':' + paddingTime(second);
}

function paddingTime(time) {
    return ("000"+time).slice(-2);
}

function alertCurrentTimeAndPlay() {
    if (getCurrentTime() != 0) {
        // alert('Rebuild Stockroom\nCurrent Time: '+getFormattedCurrentTime(getCurrentTime()));
        episode.play();
    }
}