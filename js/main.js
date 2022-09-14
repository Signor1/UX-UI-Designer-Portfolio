const tracker = document.querySelector('.tracker'),
trackPointer = document.querySelector('.track-pointer');

document.body.addEventListener('mousemove', (e)=>{
    tracker.style.top = `${e.pageY - 20}px`;
    tracker.style.left = `${e.pageX - 20}px`;

    trackPointer.style.top = `${e.pageY}px`;
    trackPointer.style.left = `${e.pageX}px`;
});


//function for scroll to top
//Get the button:
var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}