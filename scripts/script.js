const carouselItems = document.querySelectorAll('.carousel-item');
const button1 = document.querySelectorAll('button1');
const button2 = document.querySelectorAll('button2');
document.addEventListener("DOMContentLoaded", function () {
    var images = document.querySelectorAll('.carousel__image');
    var currentIndex = 0;
  
    function switchImage() {
      images[currentIndex].classList.remove('active');
      
      currentIndex++;
      if (currentIndex >= images.length) {
        currentIndex = 0;
      }
  
      images[currentIndex].classList.add('active');
    }
  
    setInterval(switchImage, 5000); // Переключение каждые 5 секунд
     switch(currentIndex){
      case 0 : 
     }
  });

