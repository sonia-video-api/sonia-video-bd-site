// Génération des particules flottantes
function createParticles() {
  const container = document.getElementById('particles');
  if (!container) return;
  for (let i = 0; i < 60; i++) {
    const p = document.createElement('div');
    p.className = 'particle';
    p.style.left = Math.random() * 100 + '%';
    p.style.animationDuration = (Math.random() * 10 + 8) + 's';
    p.style.animationDelay = (Math.random() * 10) + 's';
    p.style.width = (Math.random() * 4 + 1) + 'px';
    p.style.height = p.style.width;
    p.style.opacity = Math.random() * 0.8 + 0.2;
    // Couleurs variées : or, rouge, bleu
    const colors = ['rgba(255,200,50,0.8)', 'rgba(255,80,0,0.6)', 'rgba(50,150,255,0.6)', 'rgba(255,255,255,0.4)'];
    p.style.background = colors[Math.floor(Math.random() * colors.length)];
    container.appendChild(p);
  }
}

// Scroll vers la section créer
function scrollToCreate() {
  const el = document.getElementById('create');
  if (el) el.scrollIntoView({ behavior: 'smooth' });
}

// Scroll vers les packs
function scrollToPacks() {
  const el = document.getElementById('packs');
  if (el) el.scrollIntoView({ behavior: 'smooth' });
}

// Upload image
document.addEventListener('DOMContentLoaded', function() {
  createParticles();

  const imgAdd = document.querySelector('.create-image-add');
  const imgInput = document.getElementById('imgUpload');
  if (imgAdd && imgInput) {
    imgAdd.addEventListener('click', () => imgInput.click());
    imgInput.addEventListener('change', function() {
      if (this.files && this.files[0]) {
        imgAdd.innerHTML = '✅ <strong>Image ajoutée :</strong> ' + this.files[0].name;
      }
    });
  }

  // Animation d'entrée au scroll
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.tarif-card, .pack-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
  });
});
