/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }
  // When the user scrolls down 80px from the top of the document, resize the myTopnav's padding and the logo's font size
  window.onscroll = function() {scrollFunction()};
  
  function scrollFunction() {
    if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
      document.getElementById("myTopnav").style.padding = "1.5rem";
      document.getElementById("myTopnav").style.backgroundColor = "rgba(0, 0, 0, 0.466)";
      document.getElementById("logo").style.margin = "1.5rem";
    } else {
      document.getElementById("myTopnav").style.padding = "1rem";
      document.getElementById("myTopnav").style.backgroundColor = "transparent";
      document.getElementById("logo").style.margin = "1rem";
    }
  }