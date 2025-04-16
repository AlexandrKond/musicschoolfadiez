document.addEventListener('DOMContentLoaded', function() {
    const reviews = document.querySelectorAll('.review');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    let currentIndex = 0;
  
    function showReview(index) {
      reviews.forEach(review => review.classList.remove('active'));
      reviews[index].classList.add('active');
      currentIndex = index;
    }
  
    function nextReview() {
      let newIndex = (currentIndex + 1) % reviews.length;
      showReview(newIndex);
    }
  
    function prevReview() {
      let newIndex = (currentIndex - 1 + reviews.length) % reviews.length;
      showReview(newIndex);
    }
  
    nextBtn.addEventListener('click', nextReview);
    prevBtn.addEventListener('click', prevReview);
  
    showReview(0);
  });