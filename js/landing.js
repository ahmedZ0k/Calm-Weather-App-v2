let arr = ["./videos/three.mp4", "./videos/two.mp4", "./videos/four.mp4", "./videos/five.mp4","./videos/six.mp4","./videos/seven.mp4","./videos/one.mp4"];
let video = document.getElementById("video");

// for(let i = 0; i < arr.length ;i++){
//     video.src = `./videos/${arr[i]}.mp4`;
// }
video.src = arr[0];

// Current video index
let currentVideoIndex = 0;

// Function to handle video ended event
function handleVideoEnded() {
  currentVideoIndex++;

  // If all videos have been played, reset to the first video
  if (currentVideoIndex >= arr.length) {
    currentVideoIndex = 0;
  }

  // Change the source of the video element
  video.src = arr[currentVideoIndex];

  // Play the next video
  video.play();
}

// Attach the event listener for video ended
video.addEventListener('ended', handleVideoEnded);

// Play the first video
video.play();