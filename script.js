// script.js

// Function to handle button click events
function selectOption(option) {
    // Check which option was clicked
    if (option === 'yes') {
        // Flash rainbow colors
      document.getElementById('question').style.display = 'none';
        displayVideosSideBySide();
    } else if (option === 'no') {
        // Change text on the "No" button to "You sure?"
        document.getElementById('no-button').innerText = 'You sure?'; 
        // Increase font size of "Yes" button
        var yesButton = document.getElementById('yes-button');
        var currentFontSize = window.getComputedStyle(yesButton).getPropertyValue('font-size');
        var newSize = parseFloat(currentFontSize) * 2; // Increase font size by  * 2px
        yesButton.style.fontSize = newSize + 'px';
    } else {
        // If neither "Yes" nor "No" was clicked, show an alert message
        alert('Invalid option!');
    }
}

// Function to flash rainbow colors and then execute a callback function
function flashRainbowColors(callback) {
    var colors = ['#ff0000', '#ff7f00', '#ffff00', '#00ff00', '#0000ff', '#4b0082', '#9400d3'];
    var i = 0;
    var interval = setInterval(function() {
        document.body.style.backgroundColor = colors[i];
        i = (i + 1) % colors.length;
    }, 200); // Change color every 200 milliseconds
    setTimeout(function() {
        clearInterval(interval);
        document.body.style.backgroundColor = ''; // Reset background color
        if (callback) {
            callback();
        }
    }, 2000); // Flash colors for 2 seconds
}

// Function to display the cat.mp4 initially
// Function to display the cat.mp4 initially
function displayCat() {
    var imageContainer = document.getElementById('image-container');
    imageContainer.innerHTML = '';

    var catVideo = document.createElement('video');
    catVideo.src = 'cat.mp4';
    catVideo.autoplay = true;
    catVideo.loop = true;
    catVideo.muted = true;      // required for autoplay
    catVideo.playsInline = true;
    catVideo.width = 300;       // optional

    imageContainer.appendChild(catVideo);
}

// Function to display the cat-heart.mp4
function displayVideosSideBySide() {
    var container = document.getElementById('image-container');
    container.innerHTML = '';

    // Cat-heart video
    var catHeartVideo = document.createElement('video');
    catHeartVideo.src = 'cat-heart.mp4';
    catHeartVideo.controls = true;
    catHeartVideo.playsInline = true;

    // Us video
    var usVideo = document.createElement('video');
    usVideo.src = 'us.mp4';
    usVideo.controls = true;
    usVideo.playsInline = true;

    container.appendChild(catHeartVideo);
    container.appendChild(usVideo);

    document.getElementById('options').style.display = 'none';

    // Play with sound (after user click)
    catHeartVideo.play();
    usVideo.play();
}
// Display the cat.mp4 initially
displayCat();