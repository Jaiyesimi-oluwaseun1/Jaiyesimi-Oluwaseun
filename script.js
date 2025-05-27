const contactForm = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // Simulate form sending
    formMessage.style.color = 'green';
    formMessage.textContent = 'MESSAGE RECEIVED, ILL GET BACK TO YOU SOON';

    contactForm.reset();
  });
}



