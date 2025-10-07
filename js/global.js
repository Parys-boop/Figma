// GLOBAL.JS - Funcionalidades de Acessibilidade Intelectus+

// --- Controle de Tamanho de Fonte ---
function setFontSize(size) {
    document.body.classList.remove('font-small', 'font-normal', 'font-large', 'font-extra-large');
    document.body.classList.add(size);
    localStorage.setItem('fontSize', size);
}

// --- Alto Contraste ---
function toggleContrast() {
    document.body.classList.toggle('high-contrast');
    localStorage.setItem('highContrast', document.body.classList.contains('high-contrast') ? '1' : '0');
}

// Aguarda o DOM estar pronto antes de adicionar event listeners
window.addEventListener('DOMContentLoaded', () => {
    // --- Event Listeners dos Botões de Fonte ---
    const decreaseBtn = document.getElementById('decrease-font');
    const normalBtn = document.getElementById('normal-font');
    const increaseBtn = document.getElementById('increase-font');
    
    if (decreaseBtn) {
        decreaseBtn.addEventListener('click', function () {
            setFontSize('font-small');
        });
    }
    
    if (normalBtn) {
        normalBtn.addEventListener('click', function () {
            setFontSize('font-normal');
        });
    }
    
    if (increaseBtn) {
        increaseBtn.addEventListener('click', function () {
            setFontSize('font-large');
        });
    }
    
    // --- Event Listener do Botão Alto Contraste ---
    const contrastBtn = document.getElementById('toggle-contrast');
    if (contrastBtn) {
        contrastBtn.addEventListener('click', toggleContrast);
    }
    
    // --- Carrega preferências salvas ---
    const savedFont = localStorage.getItem('fontSize') || 'font-normal';
    setFontSize(savedFont);
    
    if (localStorage.getItem('highContrast') === '1') {
        document.body.classList.add('high-contrast');
    }
    
    // --- Botão Voltar ao Topo ---
    const backToTopBtn = document.getElementById('back-to-top');
    if (backToTopBtn) {
        window.addEventListener('scroll', function () {
            if (window.scrollY > 200) {
                backToTopBtn.classList.add('visible');
            } else {
                backToTopBtn.classList.remove('visible');
            }
        });
        
        backToTopBtn.addEventListener('click', function () {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
    
    // --- Foco Acessível nos Botões ---
    document.querySelectorAll('.accessibility-btn, .btn-login, .btn-enroll, .btn-menu-hero, .btn-noticia, .btn-login-form, .btn-contato-form, .btn-cadastro-form')
        .forEach(btn => {
            btn.addEventListener('keyup', function (e) {
                if (e.key === 'Enter' || e.keyCode === 13) {
                    btn.click();
                }
            });
        });
    
    // --- VLibras Plugin (Verifica se já carregou) ---
    if (typeof window.VLibras === "undefined") {
        const script = document.createElement("script");
        script.src = "https://vlibras.gov.br/app/vlibras-plugin.js";
        document.body.appendChild(script);
        script.onload = function () {
            if (window.VLibras) new window.VLibras.Widget('https://vlibras.gov.br/app');
        };
    }
    
    // --- Atalhos de Teclado ---
    // 'Alt + Shift + C' ativa/desativa contraste
    window.addEventListener('keydown', function (e) {
        if (e.altKey && e.shiftKey && e.code === 'KeyC') {
            toggleContrast();
        }
    });
    
    // 'Alt + Shift + F' ciclo de fonte
    window.addEventListener('keydown', function (e) {
        if (e.altKey && e.shiftKey && e.code === 'KeyF') {
            const sizes = ['font-small', 'font-normal', 'font-large', 'font-extra-large'];
            let current = localStorage.getItem('fontSize') || 'font-normal';
            let idx = sizes.indexOf(current);
            idx = (idx + 1) % sizes.length;
            setFontSize(sizes[idx]);
        }
    });
});