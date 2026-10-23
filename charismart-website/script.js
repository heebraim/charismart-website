const menuToggle = document.getElementById('menuToggle');
const mainNav = document.getElementById('mainNav');

menuToggle.addEventListener('click', () => {
  const isOpen = mainNav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
  menuToggle.setAttribute('aria-label', isOpen ? 'Close navigation' : 'Open navigation');
});

mainNav.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    mainNav.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
  });
});

document.querySelectorAll('.filter-btn').forEach(button => {
  button.addEventListener('click', () => {
    document.querySelectorAll('.filter-btn').forEach(item => item.classList.remove('active'));
    button.classList.add('active');
    const filter = button.dataset.filter;
    document.querySelectorAll('.product-card').forEach(card => {
      card.hidden = filter !== 'all' && card.dataset.category !== filter;
    });
  });
});

document.querySelectorAll('.product-enquire').forEach(link => {
  link.addEventListener('click', () => {
    const product = link.dataset.product;
    const select = document.querySelector('.contact-form select[name="product"]');
    const option = [...select.options].find(item => item.text.trim().toLowerCase() === product.toLowerCase());
    if (option) select.value = option.value || option.text;
    else select.value = 'Other / multiple products';
  });
});

document.getElementById('year').textContent = new Date().getFullYear();
