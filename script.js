// 🌗 Theme Toggle
const themeButton = document.getElementById("themeToggle");

themeButton.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  if (document.body.classList.contains("dark-mode")) {
    themeButton.textContent = "Light Mode ☀️";
  } else {
    themeButton.textContent = "Dark Mode 🌙";
  }
});

// 💌 Contact Form Validation
const form = document.getElementById("contactForm");
const message = document.getElementById("formMessage");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const text = document.getElementById("message").value.trim();

  if (name === "" || email === "" || text === "") {
    message.textContent = "Please fill in all fields.";
    message.style.color = "red";
  } else if (!email.includes("@")) {
    message.textContent = "Please enter a valid email address.";
    message.style.color = "red";
  } else {
    message.textContent = "Message sent successfully! ✅";
    message.style.color = "green";
    form.reset();
  }
});