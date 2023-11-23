let btn = document.querySelector("#btn");
let sidebar = document.querySelector(".sidebar");
let searchBtn = document.querySelector(".bx-search");

sidebar.onmouseover = function() {
    sidebar.classList.toggle("active");
};

sidebar.onmouseout = function() {
    sidebar.classList.toggle("active");
};


function openVideo(videoSource) {
  var videoPopup = document.getElementById('video-popup');
  var video = videoPopup.querySelector('video');

  // Set the source of the video
  video.src = videoSource;

  // Show the video popup
  videoPopup.style.display = 'flex';
  videoPopup.style.width = '90%'
}