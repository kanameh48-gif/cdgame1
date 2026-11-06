// KAVLING ANIMASI FADE-IN SAAT DI SCROLL
document.addEventListener("DOMContentLoaded", function() {
  
  // Memilih semua elemen dengan class 'fade-in'
  const fadeElements = document.querySelectorAll('.fade-in');
  
  // Membuat Intersection Observer
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      // Jika elemen terlihat di viewport (layar)
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, {
    threshold: 0.1 // Animasi berjalan ketika 10% elemen terlihat
  });
  
  // Menerapkan observer ke setiap elemen
  fadeElements.forEach(element => {
    observer.observe(element);
  });
  
  // KAVLING NAVBAR SCROLL EFFECT (Opsional untuk ganti warna bg navbar jika scroll)
  const navbar = document.querySelector('.navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.style.background = 'rgba(5, 5, 5, 0.95)';
      navbar.style.backdropFilter = 'blur(10px)';
    } else {
      navbar.style.background = 'linear-gradient(to bottom, rgba(0,0,0,0.8), transparent)';
      navbar.style.backdropFilter = 'none';
    }
  });
});