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
    // $(document).ready(function() {
    //   var movementStrength = 55;
    //   var height = movementStrength / $(window).height();
    //   var width = movementStrength / $(window).width();
    //   $("#image-banner-2").mousemove(function(e){
    //             var pageX = e.pageX - ($(window).width() / 2);
    //             var pageY = e.pageY - ($(window).height() / 2);
    //             var newvalueX = width * pageX * -1 - 25;
    //             var newvalueY = height * pageY * -1 - 50;
    //             $('#image-banner-2').css("background-position", newvalueX+"px     "+newvalueY+"px");
    //   });
    //   });