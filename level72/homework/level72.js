
      const slides = document.querySelectorAll('.slide');
        const dotsContainer = document.querySelector('.dots');
        const prevBtn = document.querySelector('.prev');
        const nextBtn = document.querySelector('.next');
        const sliderContainer = document.querySelector('.slider-container');

        let currentIndex = 0;
        let intervalId;
        const intervalTime = 3000; // Auto cycle every 3 seconds

        // Create dots dynamically
        slides.forEach((_, index) => {
            const dot = document.createElement('div');
            dot.classList.add('dot');
            dot.addEventListener('click', () => goToSlide(index));
            dotsContainer.appendChild(dot);
        });

        const dots = document.querySelectorAll('.dot');

        // Function to show slide
        function showSlide(index) {
            slides.forEach((slide, i) => {
                slide.classList.toggle('active', i === index);
            });
            dots.forEach((dot, i) => {
                dot.classList.toggle('active', i === index);
            });
        }

        // Go to specific slide
        function goToSlide(index) {
            currentIndex = (index + slides.length) % slides.length;
            showSlide(currentIndex);
        }

        // Next slide
        function nextSlide() {
            goToSlide(currentIndex + 1);
        }

        // Previous slide
        function prevSlide() {
            goToSlide(currentIndex - 1);
        }

        // Start auto cycling
        function startAutoCycle() {
            intervalId = setInterval(nextSlide, intervalTime);
        }

        // Stop auto cycling
        function stopAutoCycle() {
            clearInterval(intervalId);
        }

        // Event listeners
        nextBtn.addEventListener('click', () => {
            stopAutoCycle();
            nextSlide();
            startAutoCycle();
        });

        prevBtn.addEventListener('click', () => {
            stopAutoCycle();
            prevSlide();
            startAutoCycle();
        });

        // Pause on hover
        sliderContainer.addEventListener('mouseenter', stopAutoCycle);
        sliderContainer.addEventListener('mouseleave', startAutoCycle);

        // Initial setup
        showSlide(currentIndex);
        startAutoCycle();