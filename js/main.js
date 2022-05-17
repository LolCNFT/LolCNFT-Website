/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }
  // When the user scrolls down from the top of the document, resize the myTopnav's padding and the logo's font size
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


/*-----------------------------------------------------------
2. PFP
-------------------------------------------------------------*/
let images = ['https://bafybeibi74lgqgl5n224cutkmeurfdtnx6psenrr2qekhdcrup4v6ncbhu.ipfs.infura-ipfs.io/', 'https://bafybeicqeo4lfn54kqj6axwrhyw2mdev6h3jonl6qmltc3hip5etzvr74a.ipfs.infura-ipfs.io/', 'https://bafybeiazdoy6fdi4fqc5ssxmj6f26qaucm6no5fxrd5clgqdowi7xhabgu.ipfs.infura-ipfs.io/', 'https://bafybeibjp5ajtfudanpla7ylhrjrtqdlqmeiaia6y2jrbnokq5yo5lzng4.ipfs.infura-ipfs.io/', 'https://bafybeigon75dp62reukaoftuyk32jqu4nbx26qxl6p6sm76zjmewegoiye.ipfs.infura-ipfs.io/'];
// let link = ['https://twitter.com/UglybrosNFT', 'https://twitter.com/BlockOwls', 'https://twitter.com/_nemonium', 'https://twitter.com/MosieAlong', 'https://twitter.com/CryptoRaggies'];
let index = 0;
const imgElement = document.querySelector('#mainPhoto');
// const imageLink = document.getElementById('#linkProject')
function change() {
   imgElement.src = images[index];
   index > 3 ? index = 0 : index++;
}
window.onload = function () {
    setInterval(change, 7000);
};


/*Sold Out!*/
function alert1(){
  document.getElementById("alert").innerHTML="Sold Out!";
  document.getElementById("alert").style.backgroundColor="black";
  
  setTimeout(function(){
    document.getElementById("alert").innerHTML="";
  document.getElementById("alert").style.backgroundColor="transparent";

    },3000);

   }