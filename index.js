document.addEventListener("DOMContentLoaded", function () {
    // Typing Effect
    const typingElement = document.querySelector(".typing");
    const words = ["Programmer", "Web Developer", "Designer"];
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function typeEffect() {
        if (!typingElement) return;

        let currentWord = words[wordIndex];

        if (isDeleting) {
            typingElement.textContent = currentWord.substring(0, charIndex - 1);
            charIndex--;
        } else {
            typingElement.textContent = currentWord.substring(0, charIndex + 1);
            charIndex++;
        }

        let speed = isDeleting ? 100 : 200;
        if (!isDeleting && charIndex === currentWord.length) {
            speed = 1500;
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length;
            speed = 1000;
        }

        setTimeout(typeEffect, speed);
    }

    typeEffect();
});
const downloadBtn = document.querySelector(".btn");
    if (downloadBtn) {
        downloadBtn.addEventListener("click", function () {
            window.location.href = "../photos/s@ty@resume.pdf"; // Direct download
        });
    }