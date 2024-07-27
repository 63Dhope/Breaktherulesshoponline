
JavaScript (script.js):
javascript
const contactBtn = document.getElementById('contact-btn');
const contactInfo = document.getElementById('contact-info');

contactBtn.addEventListener('click', function() {
    contactInfo.classList.toggle('show');
});