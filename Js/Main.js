document.addEventListener('DOMContentLoaded', () => {
  const menuBtn = document.querySelector('.menu-btn');
  const navLinks = document.querySelector('.nav-links');
  if(menuBtn && navLinks){
    menuBtn.addEventListener('click', () => {
      navLinks.classList.toggle('open');
    });
  }

  const contactForm = document.getElementById('contactForm');
  if(contactForm){
    contactForm.addEventListener('submit', e => {
      e.preventDefault();
      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const message = document.getElementById('message').value.trim();
      if(name && email && message){
        alert('Thank you for reaching out!');
        contactForm.reset();
      } else {
        alert('Please fill in all fields.');
      }
    });
  }

  // Product search feature
  const searchInput = document.getElementById('searchInput');
  const productGrid = document.getElementById('productGrid');
  if(searchInput && productGrid){
    searchInput.addEventListener('input', () => {
      const query = searchInput.value.toLowerCase();
      const products = productGrid.querySelectorAll('article');
      products.forEach(prod => {
        const name = prod.dataset.name.toLowerCase();
        prod.style.display = name.includes(query) ? 'block' : 'none';
      });
    });
  }
});