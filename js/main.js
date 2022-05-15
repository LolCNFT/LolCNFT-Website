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


  //moving-image-banner
  $(document).ready(function() {
    var movementStrength = 15;
    var height = movementStrength / $(window).height();
    var width = movementStrength / $(window).width();
    $("#image-banner").mousemove(function(e){
              var pageX = e.pageX - ($(window).width() / 2);
              var pageY = e.pageY - ($(window).height() / 2);
              var newvalueX = width * pageX * -1 - 10;
              var newvalueY = height * pageY * -1 - 10;
              $('#image-banner').css("background-position", newvalueX+"px     "+newvalueY+"px");
    });
    $("#image-banner-2").mousemove(function(e){
                  var pageX = e.pageX - ($(window).width() / 2);
                  var pageY = e.pageY - ($(window).height() / 2);
                  var newvalueX = width * pageX * 1 + 0;
                  var newvalueY = height * pageY * -1 + 10;
                  $('#image-banner-2').css("background-position", newvalueX+"px     "+newvalueY+"px");
    });
    $("#image-banner-3").mousemove(function(e){
      var pageX = e.pageX - ($(window).width() / 2);
      var pageY = e.pageY - ($(window).height() / 2);
      var newvalueX = width * pageX * 1 + 0;
      var newvalueY = height * pageY * -1 + 10;
      $('#image-banner-3').css("background-position", newvalueX+"px     "+newvalueY+"px");
});
$("#image-banner-4").mousemove(function(e){
  var pageX = e.pageX - ($(window).width() / 2);
  var pageY = e.pageY - ($(window).height() / 2);
  var newvalueX = width * pageX * 1 + 0;
  var newvalueY = height * pageY * -1 -350;
  $('#image-banner-4').css("background-position", newvalueX+"px     "+newvalueY+"px");
});
  });

  //copy txt
  function copyTextToClipboard(text) {
    if (!navigator.clipboard) {
      fallbackCopyTextToClipboard(text);
      return;
    }
    navigator.clipboard.writeText(text).then(
      function() {
        console.log("Async: Copying to clipboard was successful!");
      },
      function(err) {
        console.error("Async: Could not copy text: ", err);
      }
    );
  }

  try {
    var successful = document.execCommand("copy");
    var msg = successful ? "successful" : "unsuccessful";
    console.log("Fallback: Copying text command was " + msg);
  } catch (err) {
    console.error("Fallback: Oops, unable to copy", err);
  }
  var copyBtn = document.querySelector(".copy-txt");

copyBtn.addEventListener("click", function(event) {
  copyTextToClipboard('5ded942a9ae524354dbba9101cc8705b5d1926238eb55b1e3415fcbd');
});

/*-----------------------------------------------------------
2. Modal
-------------------------------------------------------------*/
// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}