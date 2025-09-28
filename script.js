// =======================
// Part 1: Event Handling
// =======================
const counterEl = document.getElementById("counter");
const increaseBtn = document.getElementById("increase-btn");
const resetBtn = document.getElementById("reset-btn");

let counter = 0;

increaseBtn.addEventListener("click", () => {
  counter++;
  counterEl.textContent = counter;
});

resetBtn.addEventListener("click", () => {
  counter = 0;
  counterEl.textContent = counter;
});

// =======================
// Part 2: Interactive Elements
// =======================

// Dark/Light Mode Toggle
const themeToggle = document.getElementById("theme-toggle");
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// Collapsible FAQ
const faqToggles = document.querySelectorAll(".faq-toggle");
faqToggles.forEach((btn) => {
  btn.addEventListener("click", () => {
    const answer = btn.nextElementSibling;
    answer.style.display =
      answer.style.display === "block" ? "none" : "block";
  });
});

// =======================
// Part 3: Form Validation
// =======================
const form = document.getElementById("signup-form");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const successMessage = document.getElementById("form-success");

function showError(input, message) {
  const errorEl = input.nextElementSibling;
  errorEl.textContent = message;
}

function clearError(input) {
  const errorEl = input.nextElementSibling;
  errorEl.textContent = "";
}

function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

form.addEventListener("submit", (e) => {
  e.preventDefault(); // prevent page reload
  let valid = true;

  // Validate name
  if (nameInput.value.trim() === "") {
    showError(nameInput, "Name is required");
    valid = false;
  } else {
    clearError(nameInput);
  }

  // Validate email
  if (!validateEmail(emailInput.value)) {
    showError(emailInput, "Enter a valid email");
    valid = false;
  } else {
    clearError(emailInput);
  }

  // Validate password (min 6 chars)
  if (passwordInput.value.length < 6) {
    showError(passwordInput, "Password must be at least 6 characters");
    valid = false;
  } else {
    clearError(passwordInput);
  }

  // If valid, show success
  if (valid) {
    successMessage.textContent = "🎉 Form submitted successfully!";
    form.reset();
  } else {
    successMessage.textContent = "";
  }
});
