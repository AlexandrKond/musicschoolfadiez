document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('.main-header');
    let lastScroll = 0;
    
    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll <= 0) {
            header.classList.remove('header-hidden');
            header.classList.add('header-visible');
            return;
        }
        
        if (currentScroll > lastScroll && !header.classList.contains('header-hidden')) {
            header.classList.remove('header-visible');
            header.classList.add('header-hidden');
        } else if (currentScroll < lastScroll && header.classList.contains('header-hidden')) {
            header.classList.remove('header-hidden');
            header.classList.add('header-visible');
        }
        
        lastScroll = currentScroll;
    });
    
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                if (window.innerWidth <= 768) {
                    mainNav.style.display = 'none';
                }
                
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });

    const animateOnScroll = function() {
        const elements = document.querySelectorAll(
            '.advantage-card, .process-step, .teacher-card, .music-widget'
        );
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;
            
            if (elementPosition < screenPosition) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    };
});

  const logo = document.querySelector('.logo');
  logo.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
  
  
  