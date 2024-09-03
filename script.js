const menuButton = document.getElementById('menuButton');
    const closeButton = document.getElementById('closeButton');
    const mobileMenu = document.getElementById('mobileMenu');

    // Abrir el menú cuando se hace clic en el ícono de hamburguesa
    menuButton.addEventListener('click', () => {
      mobileMenu.classList.remove('translate-x-full'); // Mueve el menú desde fuera de la pantalla
      mobileMenu.classList.add('translate-x-0'); // Lo desplaza al centro
    });

    // Cerrar el menú cuando se hace clic en el ícono de cerrar (X)
    closeButton.addEventListener('click', () => {
      mobileMenu.classList.add('translate-x-full'); // Lo desplaza fuera de la pantalla nuevamente
      mobileMenu.classList.remove('translate-x-0'); // Quita la clase de centrado
    });

    let currentIndex = 0;

    function moveRight() {
      const slider = document.getElementById('slider');
      const totalSlides = document.querySelectorAll('.slide').length;
      if (currentIndex < totalSlides - 1) {
        currentIndex++;
      } else {
        currentIndex = 0; // Vuelve al inicio si se llega al final
      }
      updateSliderPosition();
    }
    
    function moveLeft() {
      const totalSlides = document.querySelectorAll('.slide').length;
      if (currentIndex > 0) {
        currentIndex--;
      } else {
        currentIndex = totalSlides - 1; // Vuelve al último slide si se está en el primero
      }
      updateSliderPosition();
    }
    
    function updateSliderPosition() {
      const slider = document.getElementById('slider');
      slider.style.transform = `translateX(-${currentIndex * 5}rem)`; // 18rem es igual a 72px (el ancho del slide)
    }    
    