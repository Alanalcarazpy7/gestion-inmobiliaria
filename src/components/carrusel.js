export default function slider() {
  const $slider = document.querySelector(".slider"); 
  const $slides = $slider.querySelectorAll(".slider-slide"),
    $next = document.querySelector(".slider-btns .next"),
    $prev = document.querySelector(".slider-btns .prev");
  
  let i = 0;
  document.addEventListener("click", (e) => {
    //console.log($slides);
    if (e.target === $prev) {
      e.preventDefault()
      $slides[i].classList.remove("active")
      i--;
      //console.log(i < 0, $slides.length - 1);
      if (i < 0) i = $slides.length - 1;
      $slides[i].classList.add("active")
    }
    if (e.target === $next) {
      e.preventDefault();
      $slides[i].classList.remove("active");
      i++;
      if (i > $slides.length - 1) i = 0;
      $slides[i].classList.add("active");
    }

    
  })
    setInterval(() => {
      $slides[i].classList.remove("active");
      i++;
      if (i > $slides.length - 1) i = 0;
      $slides[i].classList.add("active");
    }, 5000);
  
}

