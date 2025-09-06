// Breathing Exercise
const breathingButton = document.getElementById('start-breathing');
const breathingCircle = document.getElementById('breathing-circle');

// Breathing Exercise Start Button
breathingButton.addEventListener('click', function() {
    let isBreathingIn = true;
    breathingCircle.textContent = 'Inhale';
    breathingCircle.style.animation = 'none';  // Reset animation
    breathingCircle.offsetHeight;  // Trigger reflow to restart animation
    breathingCircle.style.animation = 'breathe 4s infinite';  // Restart animation

    const breathingInterval = setInterval(function() {
        if (isBreathingIn) {
            breathingCircle.textContent = 'Exhale';
        } else {
            breathingCircle.textContent = 'Inhale';
        }
        isBreathingIn = !isBreathingIn;  // Toggle between inhale and exhale
    }, 4000); // 4 seconds interval for inhale/exhale toggle

    // Stop after 2 minutes (120 seconds)
    setTimeout(function() {
        clearInterval(breathingInterval);
        breathingCircle.textContent = 'Relax';
    }, 120000); // Stop after 2 minutes
});

// Timer Functionality
const timerButton = document.getElementById('start-timer');
const timerInput = document.getElementById('timer-input');
const timerDisplay = document.getElementById('timer-display');

// Timer Start Button
timerButton.addEventListener('click', function() {
    const minutes = parseInt(timerInput.value);
    if (isNaN(minutes) || minutes <= 0) {
        timerDisplay.innerText = "Please enter a valid time.";
        return;
    }
    
    let timeLeft = minutes * 60;
    timerDisplay.innerText = `${minutes} minutes remaining`;
    
    const countdown = setInterval(function() {
        if (timeLeft <= 0) {
            clearInterval(countdown);
            timerDisplay.innerText = "Time's up!";
        } else {
            const minutesLeft = Math.floor(timeLeft / 60);
            const secondsLeft = timeLeft % 60;
            timerDisplay.innerText = `${minutesLeft}m ${secondsLeft}s`;
            timeLeft--;
        }
    }, 1000);
});

// Sound Controls
const soundButton = document.getElementById('play-sound');
const stopSoundButton = document.getElementById('stop-sound');
let sound;

// Play soothing sound (e.g., ocean waves)
soundButton.addEventListener('click', function() {
    if (sound) {
        sound.pause(); // Pause any currently playing sound before starting a new one
    }
    sound = new Audio('https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3'); // Ocean waves
    sound.loop = true;
    sound.play();
});

// Stop the sound
stopSoundButton.addEventListener('click', function() {
    if (sound) {
        sound.pause();
        sound.currentTime = 0;
    }
});
function loadGame(gameUrl) {
    document.getElementById('game-container').style.display = 'block';
    document.getElementById('game-frame').src = gameUrl;
}
