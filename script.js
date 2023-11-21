let sidebar = document.querySelector(".sidebar");
let closeBtn = document.querySelector("#btn");
let searchBtn = document.querySelector(".bx-search");

  sidebar.onmouseover = function() {
      sidebar.classList.toggle("open");
  };

  sidebar.onmouseout = function() {
      sidebar.classList.toggle("open");
  };


  var video = document.getElementById("myVideo");
  
  var PPbtn = document.getElementById("pausePlayBtn");
  
  
  play.onclick = function () {
    PPbtn.play();
};

stop.onclick = function () {
  PPbtn.stop();
};


