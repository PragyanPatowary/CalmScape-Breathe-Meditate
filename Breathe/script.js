let timer;
let isRunning = false;
let totalSeconds = 0;

const timerDisplay = document.getElementById('timer');
const startStopBtn = document.getElementById('start-stop-btn');
const envAudio = document.getElementById('env-sound');
const meditationAudio = document.getElementById('meditation-sound');
const envVolume = document.getElementById('env-audio');
const meditationVolume = document.getElementById('meditation-audio');

// Timer function
function startTimer() {
    timer = setInterval(() => {
        totalSeconds++;
        let minutes = Math.floor(totalSeconds / 60);
        let seconds = totalSeconds % 60;
        timerDisplay.textContent = `${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    }, 1000);
}

function stopTimer() {
    clearInterval(timer);
}

// Start/Stop button logic
startStopBtn.addEventListener('click', () => {
    if (!isRunning) {
        startTimer();
        startStopBtn.textContent = 'Stop Breathing Exercise';
    } else {
        stopTimer();
        startStopBtn.textContent = 'Start Breathing Exercise';
    }
    isRunning = !isRunning;
});

// Change environment logic
document.querySelectorAll('.env-btn').forEach(button => {
    button.addEventListener('click', function () {
        document.body.className = this.dataset.environment;
        switch (this.dataset.environment) {
            case 'forest':
                envAudio.src = '/assets/forest-163012.mp3';
                break;
            case 'rain':
                envAudio.src = '/assets/rain-sfx-12819.mp3';
                break;
            case 'clouds':
                envAudio.src = '/assets/calm-background-piano-148405.mp3';
                break;
        }
        envAudio.play();
    });
});

// Audio controls
envVolume.addEventListener('input', () => {
    envAudio.volume = envVolume.value / 100;
});

meditationVolume.addEventListener('input', () => {
    meditationAudio.volume = meditationVolume.value / 100;
});

// Set meditation audio
meditationAudio.src = 'meditation.mp3';
meditationAudio.play();
