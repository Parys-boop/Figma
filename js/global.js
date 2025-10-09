let currentFontSize = 16; // Tamanho padrão em px

// Aumentar fonte
function increaseFontSize() {
    if (currentFontSize < 24) { // Máximo 24px
        currentFontSize += 2;
        applyFontSize();
        console.log('📈 Fonte aumentada para:', currentFontSize + 'px');
    }
}

// Diminuir fonte
function decreaseFontSize() {
    if (currentFontSize > 12) { // Mínimo 12px
        currentFontSize -= 2;
        applyFontSize();
        console.log('📉 Fonte diminuída para:', currentFontSize + 'px');
    }
}

// Restaurar fonte normal
function normalFontSize() {
    currentFontSize = 16;
    applyFontSize();
    console.log('🔄 Fonte restaurada para:', currentFontSize + 'px');
}

// Aplicar tamanho de fonte e salvar
function applyFontSize() {
    document.documentElement.style.fontSize = currentFontSize + 'px';
    localStorage.setItem('fontSize', currentFontSize);
}

// ========================================
// ALTO CONTRASTE (COM PERSISTÊNCIA)
// ========================================
let highContrast = false;

function toggleContrast() {
    highContrast = !highContrast;
    
    if (highContrast) {
        document.body.classList.add('high-contrast');
        console.log('🎨 Alto contraste ATIVADO');
    } else {
        document.body.classList.remove('high-contrast');
        console.log('🎨 Alto contraste DESATIVADO');
    }
    
    // ✅ SALVAR no localStorage para PERSISTIR entre páginas
    localStorage.setItem('highContrast', highContrast);
}

// ========================================
// VLIBRAS - CARREGAR AUTOMATICAMENTE
// ========================================
function initVLibras() {
    // Carregar script do VLibras
    const script = document.createElement('script');
    script.src = 'https://vlibras.gov.br/app/vlibras-plugin.js';
    script.async = true;
    
    script.onload = () => {
        if (typeof VLibras !== 'undefined') {
            new window.VLibras.Widget('https://vlibras.gov.br/app');
            console.log('✅ VLibras carregado');
        }
    };
    
    script.onerror = () => {
        console.warn('⚠️ Erro ao carregar VLibras');
    };
    
    document.body.appendChild(script);
}

// ========================================
// BOTÃO VOLTAR AO TOPO
// ========================================
function initBackToTop() {
    const backToTopBtn = document.getElementById('back-to-top');
    
    if (!backToTopBtn) {
        console.warn('⚠️ Botão back-to-top não encontrado');
        return;
    }
    
    // Mostrar/ocultar botão baseado no scroll
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backToTopBtn.classList.add('visible');
        } else {
            backToTopBtn.classList.remove('visible');
        }
    });
    
    // Ação de voltar ao topo
    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
        console.log('⬆️ Voltando ao topo');
    });
    
    console.log('✅ Botão voltar ao topo configurado');
}

// ========================================
// CARREGAR PREFERÊNCIAS SALVAS
// ========================================
function loadUserPreferences() {
    // ✅ Carregar tamanho de fonte salvo
    const savedFontSize = localStorage.getItem('fontSize');
    if (savedFontSize) {
        currentFontSize = parseInt(savedFontSize);
        document.documentElement.style.fontSize = currentFontSize + 'px';
        console.log('📂 Fonte carregada:', currentFontSize + 'px');
    }
    
    // ✅ Carregar preferência de contraste
    const savedContrast = localStorage.getItem('highContrast');
    if (savedContrast === 'true') {
        highContrast = true;
        document.body.classList.add('high-contrast');
        console.log('📂 Alto contraste carregado: ATIVO');
    }
}

// ========================================
// INICIALIZAÇÃO
// ========================================
document.addEventListener('DOMContentLoaded', () => {
    console.log('🚀 Iniciando Global.js...');
    
    // ✅ CARREGAR PREFERÊNCIAS SALVAS
    loadUserPreferences();
    
    // ✅ CARREGAR VLIBRAS AUTOMATICAMENTE
    initVLibras();
    
    // Inicializar botão voltar ao topo
    initBackToTop();
    
    // Event Listeners dos botões de acessibilidade
    const decreaseBtn = document.getElementById('decrease-font');
    const normalBtn = document.getElementById('normal-font');
    const increaseBtn = document.getElementById('increase-font');
    const contrastBtn = document.getElementById('toggle-contrast');
    
    if (decreaseBtn) {
        decreaseBtn.addEventListener('click', decreaseFontSize);
        console.log('✅ Botão A- configurado');
    }
    
    if (normalBtn) {
        normalBtn.addEventListener('click', normalFontSize);
        console.log('✅ Botão A configurado');
    }
    
    if (increaseBtn) {
        increaseBtn.addEventListener('click', increaseFontSize);
        console.log('✅ Botão A+ configurado');
    }
    
    if (contrastBtn) {
        contrastBtn.addEventListener('click', toggleContrast);
        console.log('✅ Botão Alto Contraste configurado');
    }
    
    console.log('✅ Global.js carregado completamente - Acessibilidade ativa!');
});