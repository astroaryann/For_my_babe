document.addEventListener('DOMContentLoaded', function() {

    // --- Surprise Button Logic ---
    const surpriseBtn = document.getElementById('surprise-btn');
    const surpriseMessage = document.getElementById('surprise-message');

    // EDIT HERE: Add your cute compliments or messages
    const compliments = [
        "You have the most beautiful smile! 😊",
        "You're smarter than you know.",
        "I love the way you laugh.",
        "You make me a better person.",
        "You are absolutely perfect to me. ❤️",
        "Spending time with you is my favorite thing to do.",
        "Your kindness is a balm to everyone you meet.",
        "You have the most captivating eyes. ✨",
        "Just thinking about you makes me smile.",
        "You're my everything. 💖"
    ];

    surpriseBtn.addEventListener('click', function() {
        const randomIndex = Math.floor(Math.random() * compliments.length);
        surpriseMessage.textContent = compliments[randomIndex];
        surpriseMessage.style.display = 'block';
    });

    // --- Slideshow Logic ---
    // This is handled by inline `onclick` in the HTML for simplicity, but we need to initialize it.
    showSlides(1);

});

// Slideshow global variables and functions
let slideIndex = 1;

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("slide");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
}
