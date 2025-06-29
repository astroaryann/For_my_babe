document.addEventListener('DOMContentLoaded', function() {

    // --- Surprise Button Logic ---
    const surpriseBtn = document.getElementById('surprise-btn');
    const surpriseMessage = document.getElementById('surprise-message');

    // EDIT HERE: Add your cute compliments or messages
    const compliments = [
        "Vaidehi, you're the peace in my chaos and the love I never knew I deserved.",
        "Mera chotu sa baby, you're small in size but you carry the biggest part of my heart",
        "Vaidehi, my chotu sa baby, every time I look at you, I wonder how someone so perfect, so precious, became mine",
        "Baby, you’re not just beautiful—you’re the reason beauty exists in my life.",
        "You are absolutely perfect to me. ❤️",
        "If sweetness had a name, it would be Vaidehi.",
        "My chotu sa baby Vaidehi, you are the sweetest part of my life, and loving you is the easiest thing I've ever done",
        "Vaidehi, mera baccha, the way you laugh, the way you talk, even the way you get annoyed — it all makes me fall for you more every single day.",
        "Every little thing you do makes me fall deeper in love with you.",
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
