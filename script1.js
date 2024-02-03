document.addEventListener("DOMContentLoaded", function () {
    const videoContainer = document.getElementById("video-container");

    // Access user's camera and mirror the video
    navigator.mediaDevices.getUserMedia({ video: true })
        .then(function (stream) {
            const video = document.getElementById('video-feed');
            video.srcObject = stream;
            video.onloadedmetadata = function (e) {
                video.play();
            };
            video.setAttribute('playsinline', ''); // Ensure video plays inline on mobile devices

            // Mirror the video horizontally
            video.style.transform = 'scaleX(-1)';
        })
        .catch(function (err) {
            console.log("An error occurred: " + err);
        });
});
document.addEventListener("DOMContentLoaded", function () {
    const startButton = document.getElementById("start");
    const stopButton = document.getElementById("stop");
    const resetButton = document.getElementById("reset");
    const sound = document.getElementById("sound");
    let audioContext;
    let oscillator;

    // Function to create and start the sound
    function startSound() {
        // Create audio context if not already created
        if (!audioContext) {
            audioContext = new (window.AudioContext || window.webkitAudioContext)();
        }

        // Create oscillator
        oscillator = audioContext.createOscillator();
        oscillator.type = "sine"; // Set oscillator type
        oscillator.frequency.setValueAtTime(440, audioContext.currentTime); // Set frequency (440 Hz)
        oscillator.connect(audioContext.destination); // Connect oscillator to output
        oscillator.start(); // Start oscillator
    }

    // Function to stop the sound
    function stopSound() {
        if (oscillator) {
            oscillator.stop(); // Stop oscillator
            oscillator.disconnect(); // Disconnect oscillator from output
        }
    }

    // Event listener for start button
    startButton.addEventListener("click", function () {
        startSound(); // Call startSound function when start button is clicked
        sound.play(); // Play the sound
    });

    // Event listener for stop button
    stopButton.addEventListener("click", function () {
        stopSound(); // Call stopSound function when stop button is clicked
        sound.pause(); // Pause the sound
    });

    // Event listener for reset button
    resetButton.addEventListener("click", function () {
        stopSound(); // Call stopSound function when reset button is clicked
        sound.pause(); // Pause the sound
        sound.currentTime = 0;
    });
});