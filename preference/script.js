document.addEventListener('DOMContentLoaded', () => {
    const bgColorInput = document.getElementById('bg-color');
    const fontSizeInput = document.getElementById('font-size');
    const themeSelect = document.getElementById('theme');
    const saveBtn = document.getElementById('save-btn');
    const contactForm = document.getElementById('contact-form');

    // Load saved preferences
    const savedBgColor = localStorage.getItem('bgColor');
    const savedFontSize = localStorage.getItem('fontSize');
    const savedTheme = localStorage.getItem('theme');

    if (savedBgColor) {
        document.body.style.backgroundColor = savedBgColor;
        if (bgColorInput) bgColorInput.value = savedBgColor;
    }

    if (savedFontSize) {
        document.body.style.fontSize = `${savedFontSize}px`;
        if (fontSizeInput) fontSizeInput.value = savedFontSize;
    }

    if (savedTheme) {
        if (themeSelect) themeSelect.value = savedTheme;
        applyTheme(savedTheme);
    }

    // Save preferences
    if (saveBtn) {
        saveBtn.addEventListener('click', () => {
            const bgColor = bgColorInput.value;
            const fontSize = fontSizeInput.value;
            const theme = themeSelect.value;

            document.body.style.backgroundColor = bgColor;
            document.body.style.fontSize = `${fontSize}px`;

            localStorage.setItem('bgColor', bgColor);
            localStorage.setItem('fontSize', fontSize);
            localStorage.setItem('theme', theme);

            applyTheme(theme);
        });
    }

    // Apply theme
    function applyTheme(theme) {
        if (theme === 'dark') {
            document.body.style.backgroundColor = '#333';
            document.body.style.color = 'white';
        } else {
            document.body.style.backgroundColor = 'white';
            document.body.style.color = '#333';
        }
    }

    // Contact form submission
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            
            console.log(`New message from ${name} (${email}): ${message}`);
            alert('Thank you for your message! We will get back to you soon.');
            contactForm.reset();
        });
    }
});