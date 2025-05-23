// Smooth scrolling for navigation links (optional)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 70, // Adjust for fixed navbar height
                behavior: 'smooth'
            });
        }
    });
});

// Update footer year dynamically
document.addEventListener('DOMContentLoaded', () => {
    const currentYearSpan = document.getElementById('currentYear');
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }
});


// Basic form submission handling (conceptual)
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault(); // Prevent actual submission for this demo

        // You would typically gather form data here:
        // const name = this.querySelector('input[name="name"]').value;
        // const email = this.querySelector('input[name="email"]').value;
        // const message = this.querySelector('textarea[name="message"]').value;

        // And then send it to a server or an email service.
        // For this demo, we'll just log it and show an alert.

        console.log('Form submitted (demo).');
        alert('Thank you for your message! We will get back to you soon. (This is a demo)');

        this.reset(); // Clear the form
    });
}

// Placeholder for any future dynamic interactions
// e.g., interactive charts for pricing, real-time service status display, etc.
console.log("JavaScript file loaded. Add your interactions here!");
