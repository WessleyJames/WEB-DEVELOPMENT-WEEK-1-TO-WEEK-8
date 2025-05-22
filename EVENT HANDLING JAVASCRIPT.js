// --- Event Handling ---
document.getElementById('clickBtn').addEventListener('click', () => {
  alert("You clicked the button!");
});

const hoverBox = document.getElementById('hoverBox');
hoverBox.addEventListener('mouseenter', () => {
  hoverBox.style.backgroundColor = 'lightgreen';
  hoverBox.textContent = "You're hovering!";
});
hoverBox.addEventListener('mouseleave', () => {
  hoverBox.style.backgroundColor = '#ffc107';
  hoverBox.textContent = "Hover Over Me!";
});

document.getElementById('keyInput').addEventListener('keypress', (e) => {
  console.log(`Key pressed: ${e.key}`);
});

document.getElementById('secretBtn').addEventListener('dblclick', () => {
  alert("🎉 Secret Double Click Activated!");
});

// --- Interactive Elements ---
let toggle = false;
document.getElementById('colorToggle').addEventListener('click', () => {
  toggle = !toggle;
  document.body.style.backgroundColor = toggle ? '#e0f7fa' : '#f5f5f5';
});

// Slideshow
const images = [
  'https://via.placeholder.com/300?text=1',
  'https://via.placeholder.com/300?text=2',
  'https://via.placeholder.com/300?text=3'
];
let index = 0;
const slideImg = document.getElementById('slideImg');

document.getElementById('nextBtn').addEventListener('click', () => {
  index = (index + 1) % images.length;
  slideImg.src = images[index];
});

document.getElementById('prevBtn').addEventListener('click', () => {
  index = (index - 1 + images.length) % images.length;
  slideImg.src = images[index];
});

// Tabs
const tabs = document.querySelectorAll('.tabBtn');
const contents = document.querySelectorAll('.tabContent');

tabs.forEach(btn => {
  btn.addEventListener('click', () => {
    contents.forEach(c => c.classList.remove('active'));
    document.getElementById(btn.dataset.tab).classList.add('active');
  });
});

// --- Form Validation ---
const form = document.getElementById('userForm');
const email = document.getElementById('email');
const password = document.getElementById('password');
const emailError = document.getElementById('emailError');
const passwordError = document.getElementById('passwordError');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  let valid = true;

  if (!email.value.includes('@')) {
    emailError.textContent = 'Invalid email format.';
    valid = false;
  } else {
    emailError.textContent = '';
  }

  if (password.value.length < 8) {
    passwordError.textContent = 'Password must be at least 8 characters.';
    valid = false;
  } else {
    passwordError.textContent = '';
  }

  if (valid) {
    alert('Form Submitted Successfully!');
  }
});

email.addEventListener('input', () => {
  emailError.textContent = email.value.includes('@') ? '' : 'Invalid email format.';
});

password.addEventListener('input', () => {
  passwordError.textContent = password.value.length >= 8 ? '' : 'Password too short.';
});
