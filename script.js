let btn = document.querySelector("#btn");
let sidebar = document.querySelector(".sidebar");


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
  videoPopup.style.width = '100%'
}

document.querySelector('.sidebar').addEventListener('mouseover', function() {
  document.querySelector('.icon1').style.paddingLeft = "10px";

});

document.querySelector('.sidebar').addEventListener('mouseout', function() {
  document.querySelector('.icon1').style.paddingLeft = "0px";

});

document.querySelector('.sidebar').addEventListener('mouseover', function() {
  document.querySelector('.icon2').style.paddingLeft = "10px";

});

document.querySelector('.sidebar').addEventListener('mouseout', function() {
  document.querySelector('.icon2').style.paddingLeft = "0px";

});



document.querySelector('.sidebar').addEventListener('mouseover', function() {
  document.querySelector('.icon3').style.paddingLeft = "10px";

});


document.querySelector('.sidebar').addEventListener('mouseout', function() {
  document.querySelector('.icon3').style.paddingLeft = "0px";

});






document.querySelector('.name1').addEventListener('mouseover', function() {
  document.querySelector('.icon1').style.color = "var(--shadow)";
  document.querySelector('.icon1').style.transform = "rotate(-90deg)";
});

document.querySelector('.name1').addEventListener('mouseout', function() {
  document.querySelector('.icon1').style.color = "var(--highlight_color)";
  document.querySelector('.icon1').style.transform = "rotate(0deg)";

});

document.querySelector('.name2').addEventListener('mouseover', function() {
  document.querySelector('.icon2').style.color = "var(--shadow)";

});

document.querySelector('.name2').addEventListener('mouseout', function() {
  document.querySelector('.icon2').style.color = "var(--highlight_color)";

});


document.querySelector('.name3').addEventListener('mouseover', function() {
  document.querySelector('.icon3').style.color = "var(--shadow)";

});

document.querySelector('.name3').addEventListener('mouseout', function() {
  document.querySelector('.icon3').style.color = "var(--highlight_color)";

});






