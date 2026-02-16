document.addEventListener('DOMContentLoaded', function () { const contactForm = document.getElementById("contactForm"); const contactSuccess = document.getElementById("contactSuccess");

if (contactForm) { contactForm.addEventListener("submit", function (e) { e.preventDefault();

// Simple client-side validation example (you can expand this)
  const name = document.getElementById('cname').value.trim();
  const email = document.getElementById('cemail').value.trim();
  const message = document.getElementById('cmessage').value.trim();

  if (!name || !email || !message) {
    contactSuccess.textContent = 'Please fill in all fields.';
    contactSuccess.style.background = '#fdecea';
    contactSuccess.style.color = '#611';
    contactSuccess.style.display = 'block';
    setTimeout(() => contactSuccess.style.display = 'none', 3000);
    return;
  }

  // Show a success message (replace this with real send logic)
  contactSuccess.textContent = 'Your message has been sent!';
  contactSuccess.style.background = '#c8f7c5';
  contactSuccess.style.color = '#1b5e20';
  contactSuccess.style.display = 'block';

  // Reset the form
  contactForm.reset();

  // Hide the message after a while
  setTimeout(() => {
    contactSuccess.style.display = 'none';
  }, 3000);
});

} });