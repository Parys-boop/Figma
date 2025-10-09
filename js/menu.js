// ============================================
// MENU.JS - Intelectus+
// Funcionalidades específicas da página Home
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    
    // ========================================
    // ANIMAÇÕES SUAVES AO SCROLL
    // ========================================
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);
    
    // Observar elementos que devem animar
    const animatedElements = document.querySelectorAll('.destaque-card, .stat-item, .benefit-item');
    animatedElements.forEach(el => observer.observe(el));
    
    console.log('✅ Menu.js carregado');
});