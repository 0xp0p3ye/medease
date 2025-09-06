let meditationTimer;
let isPaused = false;
let timeRemaining;
let meditationTitle = "";
let meditationAudio = document.getElementById("meditationAudio");
let audioSource = document.getElementById("audioSource");

// Function to start meditation
function startMeditation(title, minutes, audioFile) {
    stopMeditation(); // Stop any previous session

    meditationTitle = title;
    timeRemaining = minutes * 60; // Convert minutes to seconds
    isPaused = false;

    document.getElementById('meditation-title').textContent = title;
    document.getElementById('meditation-timer').style.display = 'block';
    document.getElementById('timer').textContent = formatTime(timeRemaining);

    // Set and play the correct audio file
    audioSource.src = audioFile;
    meditationAudio.load(); // Ensure the new file is loaded
    meditationAudio.play().catch(err => console.log("Audio autoplay blocked:", err));

    startCountdown();
}

// Timer countdown function
function startCountdown() {
    meditationTimer = setInterval(() => {
        if (!isPaused) {
            timeRemaining--;
            document.getElementById('timer').textContent = formatTime(timeRemaining);
            if (timeRemaining <= 0) {
                clearInterval(meditationTimer);
                meditationAudio.pause();
                alert(`${meditationTitle} meditation session completed!`);
            }
        }
    }, 1000);
}

// Function to format time (MM:SS)
function formatTime(seconds) {
    let minutes = Math.floor(seconds / 60);
    let secondsRemaining = seconds % 60;
    return `${minutes}:${secondsRemaining < 10 ? '0' : ''}${secondsRemaining}`;
}

// Pause meditation
function pauseMeditation() {
    isPaused = true;
    clearInterval(meditationTimer);
    meditationAudio.pause();
}

// Stop meditation
function stopMeditation() {
    clearInterval(meditationTimer);
    document.getElementById('meditation-timer').style.display = 'none';
    meditationAudio.pause();
    meditationAudio.currentTime = 0; // Reset audio to beginning
    alert(`${meditationTitle} session has been stopped.`);
}
