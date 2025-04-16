    const signupForm = document.querySelector('.signup-form');
    if (signupForm) {
        signupForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Спасибо за вашу заявку! Мы свяжемся с вами в ближайшее время для уточнения деталей.');
            this.reset();
        });
    }