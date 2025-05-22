// Toggle Light/Dark Theme
function toggleTheme() {
  document.body.classList.toggle("dark-mode");
}

// Toggle the Skills List
function toggleSkills() {
  const skillsList = document.getElementById("skills-list");
  skillsList.classList.toggle("hidden");
}

// Handle Form Submission
document.getElementById("contact-form").addEventListener("submit", function (e) {
  e.preventDefault(); // prevent actual form submission
  document.getElementById("form-message").classList.remove("hidden");
  setTimeout(() => {
    document.getElementById("form-message").classList.add("hidden");
    this.reset();
  }, 3000);
});
