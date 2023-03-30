// START DOS SLIDES
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
}
// FIM DOS SLIDES

//NAVBAR MENU
function menuOnClick() {
    document.getElementById("menu-bar").classList.toggle("change");
    document.getElementById("nav").classList.toggle("change");
    document.getElementById("menu-bg").classList.toggle("change-bg");
  }

//BUY BUTTON 
var card = document.querySelector(".card");

card.addEventListener("mouseover", function() {
  var btnrp = document.querySelector(".btn-rp");

  btnrp.style.opacity = "100";
});

card.addEventListener("mouseout", function() {
  var btnrp = document.querySelector(".btn-rp");

  btnrp.style.opacity = "0"; 
});

var card2 = document.querySelector(".card2");

card2.addEventListener("mouseover", function() {
  var btnrp = document.querySelector(".btn-rp2");

  btnrp.style.opacity = "100";
});

card2.addEventListener("mouseout", function() {
  var btnrp = document.querySelector(".btn-rp2");

  btnrp.style.opacity = "0"; 
});

var card3 = document.querySelector(".card3");

card3.addEventListener("mouseover", function() {
  var btnrp = document.querySelector(".btn-rp3");

  btnrp.style.opacity = "100";
});

card3.addEventListener("mouseout", function() {
  var btnrp = document.querySelector(".btn-rp3");

  btnrp.style.opacity = "0"; 
});

var card4 = document.querySelector(".card4");

card4.addEventListener("mouseover", function() {
  var btnrp = document.querySelector(".btn-rp4");

  btnrp.style.opacity = "100";
});

card4.addEventListener("mouseout", function() {
  var btnrp = document.querySelector(".btn-rp4");

  btnrp.style.opacity = "0"; 
});

