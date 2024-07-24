// Ensure smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});



setTimeout(() => {
    document.querySelector('.content-sectionn').style.transition = "background-color 4s ease-in-out";
    document.querySelector('.content-sectionn').classList.add('colorful-bg');
    document.querySelector('.fog').style.opacity = 10;
}, 0);





window.onload = function () { 
  let slides = document.getElementsByClassName('carousel-item'); 

  function addActive(slide) { 
      slide.classList.add('active'); 
  } 

  function removeActive(slide) { 
      slide.classList.remove('active'); 
  } 

  addActive(slides[0]); 
  setInterval(function () { 
      for (let i = 0; i < slides.length; i++) { 
          if (slides[i].classList.contains('active')) { 
              removeActive(slides[i]);
              if (i + 1 == slides.length) { 
                  addActive(slides[0]); 
              } else { 
                  addActive(slides[i + 1]); 
              }
              break; 
          } 
      } 
  }, 4000); 
};
