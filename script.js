let startBtn = document.getElementById("start");
let stopBtn = document.getElementById("stop");
let resetBtn = document.getElementById("reset");

let hour = 0o0;
let minute = 0o0;
let second = 0o0;
let count = 0o0;

startBtn.addEventListener("click", function () {
  timer = true;
  stopWatch();
});

stopBtn.addEventListener("click", function () {
  timer = false;
});

resetBtn.addEventListener("click", function () {
  timer = false;
  hour = 0;
  minute = 0;
  second = 0;
  count = 0;
  document.getElementById("hr").innerHTML = "00";
  document.getElementById("min").innerHTML = "00";
  document.getElementById("sec").innerHTML = "00";
  document.getElementById("count").innerHTML = "00";
});

function stopWatch() {
  if (timer) {
    count++;

    if (count == 100) {
      second++;
      count = 0;
    }

    if (second == 60) {
      minute++;
      second = 0;
    }

    if (minute == 60) {
      hour++;
      minute = 0;
      second = 0;
    }

    let hrString = hour;
    let minString = minute;
    let secString = second;
    let countString = count;

    if (hour < 10) {
      hrString = "0" + hrString;
    }

    if (minute < 10) {
      minString = "0" + minString;
    }

    if (second < 10) {
      secString = "0" + secString;
    }

    if (count < 10) {
      countString = "0" + countString;
    }

    document.getElementById("hr").innerHTML = hrString;
    document.getElementById("min").innerHTML = minString;
    document.getElementById("sec").innerHTML = secString;
    document.getElementById("count").innerHTML = countString;
    setTimeout(stopWatch, 10);
  }
}

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

const video = document.getElementById("video-feed");
const startAlone = document.getElementById("start-alone");
const startWithFriends = document.getElementById("start-with-friends");
const controls = document.querySelector(".controls");
const lobbyContainer = document.querySelector("#lobby-container");
// const videos = document.querySelector("#videos");
const controlsContainer = document.querySelector("#controls");
const embeddedWebsite = document.querySelector("#embedded-website");

async function startCamera() {
  try {
    const stream = await navigator.mediaDevices.getUserMedia({
      video: true,
    });
    video.srcObject = stream;
  } catch (err) {
    console.error("Error accessing camera:", err);
  }
}

function createRoom() {
  // Create a room and join it
  // You can use a service like Firebase to create and manage rooms
}

function joinRoom() {
  // Join a room
  // You can use a service like Firebase to join rooms
}

startAlone.addEventListener("click", () => {
  startCamera();
  controls.style.display = "none";
  // lobbyContainer.style.display = "none";
  // videos.style.display = "none";
  // controlsContainer.style.display = "none";
  navigator.mediaDevices
    .getUserMedia({ video: true })
    .then(function (stream) {
      const video = document.getElementById("video-feed");
      const overlay = document.getElementById("overlay");
      const postureOptions = document.getElementById("posture-options");
      console.log(postureOptions.style);
      postureOptions.style.display = "flex";
      // console.log(video);
      video.style.border = "solid";
      overlay.style.display = "block";
      video.srcObject = stream;
      video.onloadedmetadata = function (e) {
        video.play();
      };
      video.setAttribute("playsinline", ""); // Ensure video plays inline on mobile devices

      // Mirror the video horizontally
      video.style.transform = "scaleX(-1)";
    })
    .catch(function (err) {
      console.log("An error occurred: " + err);
    });
  const postureOptions = document.querySelectorAll(".posture");
  console.log(postureOptions);
  postureOptions.forEach((posture) => {
    posture.addEventListener("click", (e) => {
      // console.log(e.currentTarget.id);
      const imageNumber = e.currentTarget.id;
      if (imageNumber === "1") {
        let overlay = document.getElementById("overlay");
        // console.log(overlay.style);
        overlay.style.backgroundImage = "url('./postion1.jpg')";
      }
      if (imageNumber === "2") {
        let overlay = document.getElementById("overlay");
        // console.log(overlay.style);
        overlay.style.backgroundImage = "url('./post2.jpg')";
      }
      if (imageNumber === "3") {
        let overlay = document.getElementById("overlay");
        // console.log(overlay.style);
        overlay.style.backgroundImage = "url('./post1.jpg')";
      }
    });
  });
});

startAlone.addEventListener("click", () => {
  startCamera();
  controls.remove(); // Remove the controls div
});

startWithFriends.addEventListener("click", () => {
  // Create or join a room
});

const leaderBoardBtn = document.getElementById("leaderboard-btn");
leaderBoardBtn.addEventListener("click", (e) => {
  const left = document.getElementById("left-section");
  const middle = document.getElementById("middle-section");
  // console.log(left);
  if (left.style.display === "block") {
    left.style.display = "none";
    middle.style.width = "50%";
  } else {
    left.style.display = "block";
    middle.style.width = "80%";
    left.style.opacity = "1";
  }
});
