let newpage = document.getElementById('todoList');
newpage.addEventListener('click', openNewPage);
let newpage2 = document.getElementById('block');
let startCountDownBtn = document.getElementById('startCountdown');
let timrzinterval, time;
startCountDownBtn.addEventListener('click', startCountDown);
const countdown = document.getElementById('countdown');

let select = document.getElementById('timer');
let elap = 0;
let hr = 0;
let min = 0;
let seconds = 0;
let elap1 = 0;
setInterval(update1, 1000);
function update1() {
    min = parseInt(min);
    elap1 += 1;
    seconds = elap1 - elap;
    if (seconds == 60) {
        seconds = 0;
        min += 1;
        elap1 = 0;
    }
    if (seconds < 10) {
        seconds = '0' + seconds;
    }
    if (min < 10) {
        min = '0' + min;
    }
    select.innerHTML = `${hr}:${min}:${seconds}`;

}

function startCountDown() {
    const starting = document.getElementById('countdowntxt').value;
    time = starting * 60;
    timrzinterval = setInterval(update, 1000);
}

function update() {
    const minu = Math.floor(time / 60);
    let sec = time % 60;
    if (sec < 10) {
        sec = '0' + sec;
    }
    if (minu == 0 && sec == 0) {
        clearInterval(timrzinterval);
        ringplay();
        chrome.storage.local.set({ isBlocked : true });
    }
    countdown.innerHTML = `${minu}: ${sec}`;
    time--;
}

function ringplay() {
    let audio = new Audio('https://interactive-examples.mdn.mozilla.net/media/cc0-audio/t-rex-roar.mp3');
    audio.play();
    const ele = document.getElementById('hiddenBtn');
    ele.click();
}

function openNewPage() {
    let locationTab = window.location.href.replace('main', 'saveToDoList')
    chrome.tabs.create({ active: true, url: locationTab })
}

newpage2.addEventListener('click', () => {
    let localtab = window.location.href.replace('main', 'blocker')
    chrome.tabs.create({ active: true, url: localtab })
});
