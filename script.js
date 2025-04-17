// Form submission with validation
document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('formMessage');

  // Validation
  if (!name || !email) {
    message.textContent = "Please fill out all fields.";
    message.className = "feedback error";
    return;
  }

  const emailRegex = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
  if (!emailRegex.test(email)) {
    message.textContent = "Please enter a valid email address.";
    message.className = "feedback error";
    return;
  }

  message.textContent = `Thanks, ${name}! We'll contact you at ${email}.`;
  message.className = "feedback";
});

// Live input interaction
document.getElementById('liveInput').addEventListener('input', function(e) {
  const output = document.getElementById('echoOutput');
  output.textContent = `You said: ${e.target.value}`;
});

// Toggle dark mode
document.getElementById('toggleMode').addEventListener('click', function() {
  document.body.classList.toggle('dark-mode');
});
