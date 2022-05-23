/*box*/
var input = document.getElementById('file-input');
input.onchange = e => { 
  // getting a hold of the file reference
  var file = e.target.files[0]; 
  // setting up the reader
  var reader = new FileReader();
  reader.readAsDataURL(file); // this is reading as data url
  // here we tell the reader what to do when it's done reading...
  var back =  document.getElementById('coverback');
      var right =  document.getElementById('coverright');
      var left =  document.getElementById('coverleft'); 
      var front =  document.getElementById('coverfront');
  reader.onload = readerEvent => {
      var content = readerEvent.target.result; // this is the content!
      document.querySelector('#left').style.backgroundImage = 'url('+ content +')';
      document.querySelector('#rightt').style.backgroundImage = 'url('+ content +')';
      document.querySelector('#backk').style.backgroundImage = 'url('+ content +')';
      document.querySelector('#tap').style.backgroundImage = 'url('+ content +')';
      document.querySelector('#front').style.backgroundImage = 'url('+ content +')';
      back.style.backgroundImage = 'url('+ content +')';
      right.style.backgroundImage = 'url('+ content +')';
      left.style.backgroundImage = 'url('+ content +')';
      front.style.backgroundImage = 'url('+ content +')';
    }
}
var input2 = document.getElementById('file-input-2');
input2.onchange = e => { 
  // getting a hold of the file reference
  var file = e.target.files[0]; 
  // setting up the reader
  var reader = new FileReader();
  reader.readAsDataURL(file); // this is reading as data url
  // here we tell the reader what to do when it's done reading...
  reader.onload = readerEvent => {
      var content = readerEvent.target.result; // this is the content!
      document.querySelector('#bk').style.backgroundImage = 'url('+ content +')';
    }
}
"use strict";
let oldURL = null;
function catchDrag(event) {
  event.dataTransfer.dropEffect = "copy"
  event.preventDefault();
}
document.body.addEventListener("dragenter", catchDrag);
document.body.addEventListener("dragover",  catchDrag);
document.body.addEventListener("drop", function( event) {
  event.preventDefault();
  event.stopPropagation();
  const file = event.dataTransfer.files[0];
  let newURL = URL.createObjectURL( file);
  if( oldURL) {
      URL.revokeObjectURL(oldURL);
  }
  oldURL = newURL;
  document.getElementById("bk").style.backgroundImage = `url("${newURL}")`;

});
box = document.getElementById('box')
box.addEventListener("dragenter", catchDrag);
box.addEventListener("dragover",  catchDrag);
box.addEventListener("drop", function( event) {
  event.preventDefault();
  event.stopPropagation();
  const file = event.dataTransfer.files[0];
  let newURL = URL.createObjectURL( file);
  if( oldURL) {
      URL.revokeObjectURL(oldURL);
  }
  oldURL = newURL;
  document.getElementById("front")
  .style.backgroundImage = `url("${newURL}")`;
  document.getElementById("rightt")
  .style.backgroundImage = `url("${newURL}")`;

document.getElementById("left")
.style.backgroundImage = `url("${newURL}")`;

document.getElementById("backk")
.style.backgroundImage = `url("${newURL}")`;

document.getElementById("coverleft")
.style.backgroundImage = `url("${newURL}")`;

document.getElementById("coverright")
.style.backgroundImage = `url("${newURL}")`;

document.getElementById("coverfront")
.style.backgroundImage = `url("${newURL}")`;

document.getElementById("coverback")
.style.backgroundImage = `url("${newURL}")`;

document.getElementById("tap")
.style.backgroundImage = `url("${newURL}")`;
});
let flag = 0;
function openLid(){
var back =  document.getElementById('coverback');
var right =  document.getElementById('coverright');
var left =  document.getElementById('coverleft'); 
var front =  document.getElementById('coverfront');
let content = document.getElementById('content');
var txt = document.getElementById('txt')
var txt2 = document.getElementById('txt2')
var txt3 = document.getElementById('txt3')
if (flag == 0){
flag = 1;
front.classList.add('front-cover');

back.classList.add('back-cover');
left.classList.add('left-cover');
right.classList.add('right-cover');
content.classList.add('content-active');
txt.classList.add('txt-active');
txt2.classList.add('txt2-active');
txt3.classList.add('txt3-active');
}
else {
flag = 0;
front.classList.remove('front-cover');
back.classList.remove('back-cover');
left.classList.remove('left-cover');
right.classList.remove('right-cover');
content.classList.remove('content-active');
txt.classList.remove('txt-active');
txt2.classList.remove('txt2-active');
txt3.classList.remove('txt3-active');
}

}
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
// function alert(){
//   const message = document.getElementById(alert);
//   message.style.opacity = 1;
//   message.style.display = 'inline';
//   if (message.style.opacity != 0){
//     message.style.opacity -= 1;
//   } 
//   else{
//     message.style.display = 'none';
//   }
// }



function myFunctionCopy() {
    /* Get the text field */
    var copyText = document.getElementById("myInput");
    
    /* Select the text field */
    copyText.select();
    copyText.setSelectionRange(0, 99999); /* For mobile devices */
    
    /* Copy the text inside the text field */
    navigator.clipboard.writeText(copyText.value);
    
    /* Alert the copied text */
    console.log("Copied the text: " + copyText.value);
    }