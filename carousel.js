let slideIndex = 0;
showSlides();

function showSlides() {
  let slides = document.getElementsByClassName("carousel-slide");
  let dots = document.getElementsByClassName("dot");
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (let i = 0; i < dots.length; i++) {
    dots[i].classList.remove("active-dot");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].classList.add("active-dot");
  setTimeout(showSlides, 10000); // Change image every 10 seconds
}
