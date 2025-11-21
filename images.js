const images = ["cout.jpg", "lobo.jpg", "water.jpg"];
const imageElement = document.getElementById("slide"); // Make sure your HTML has <img id="myImage">
let currentImageIndex = 0;

function changeImage() {
  currentImageIndex = (currentImageIndex + 1) % images.length; // Cycle through images
  imageElement.src = images[currentImageIndex];
}

// Display the first image immediately
imageElement.src = images[currentImageIndex];

// Set a timer to change the image every 5000 milliseconds (5 seconds)
setInterval(changeImage, 3000);
