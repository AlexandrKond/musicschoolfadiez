const countdownDate = new Date(2025, 3, 20, 23, 59).getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const distance = countdownDate - now;

    if (distance < 0) {
        clearInterval(countdownTimer);
        document.querySelector('.timer-message').textContent = 'Набор завершен!';
        document.querySelector('.timer').style.opacity = '0.5';
        return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById('countdown-days').textContent = days.toString().padStart(2, '0');
    document.getElementById('countdown-hours').textContent = hours.toString().padStart(2, '0');
    document.getElementById('countdown-minutes').textContent = minutes.toString().padStart(2, '0');
    document.getElementById('countdown-seconds').textContent = seconds.toString().padStart(2, '0');
}

const countdownTimer = setInterval(updateCountdown, 1000);
updateCountdown();