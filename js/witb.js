/*box*/

let bandera = 0;

function myFun() {
  if (bandera == 0) {
    bandera = 1;
    var ob = document.getElementById("front");
    ob.classList.add("base64");
    var ob = document.getElementById("rightt");
    ob.classList.add("base64");
    var ob = document.getElementById("left");
    ob.classList.add("base64");
    var ob = document.getElementById("backk");
    ob.classList.add("base64");
    var ob = document.getElementById("coverleft");
    ob.classList.add("base64");
    var ob = document.getElementById("coverright");
    ob.classList.add("base64");
    var ob = document.getElementById("coverfront");
    ob.classList.add("base64");
    var ob = document.getElementById("coverback");
    ob.classList.add("base64");
  }else{
    bandera = 0;
    var ob = document.getElementById("front");
    ob.classList.remove("base64");
    var ob = document.getElementById("rightt");
    ob.classList.remove("base64");
    var ob = document.getElementById("left");
    ob.classList.remove("base64");
    var ob = document.getElementById("backk");
    ob.classList.remove("base64");
    var ob = document.getElementById("coverleft");
    ob.classList.remove("base64");
    var ob = document.getElementById("coverright");
    ob.classList.remove("base64");
    var ob = document.getElementById("coverfront");
    ob.classList.remove("base64");
    var ob = document.getElementById("coverback");
    ob.classList.remove("base64"); 
  }
}

// const clases = ["bkk", "bkk2", "bkk3", "bkk4"];

//const random = clases[Math.floor(Math.random() * clases.length)];

function myFun2() {

  if (bandera == 0) {

    bandera = 1;
    var ob = document.getElementById("bk");
    ob.classList.add('bkk');
}

else{
    bandera = 0;
    var ob = document.getElementById("bk");
    ob.classList.remove('bkk');
   
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
function alert(){
  const message = document.getElementById(alert);
  message.style.opacity = 1;
  message.style.display = 'inline';
  if (message.style.opacity != 0){
    message.style.opacity -= 1;
  } 
  else{
    message.style.display = 'none';
  }
}



function myFunctionCopy() {
    /* Get the text field */
    var copyText = document.getElementById("myInput");
    
    /* Select the text field */
    copyText.select();
    copyText.setSelectionRange(0, 99999); /* For mobile devices */
    
    /* Copy the text inside the text field */
    navigator.clipboard.writeText(copyText.value);
    
    /* Alert the copied text */
    alert("Copied the text: " + copyText.value);
    }