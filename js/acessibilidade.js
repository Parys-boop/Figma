document.addEventListener('DOMContentLoaded', function() {
    // === Controle de Tamanho da Fonte ===
    const decreaseBtn = document.getElementById('font-decrease');
    const resetBtn = document.getElementById('font-reset');
    const increaseBtn = document.getElementById('font-increase');
    const htmlElement = document.documentElement;

    const fontSizes = ['xsmall', 'small', 'reset', 'large', 'xlarge', 'xxlarge', 'xxxlarge'];
    let currentSizeIndex = fontSizes.indexOf(localStorage.getItem('fontSize') || 'reset');

    function applyFontSize() {
        // Remove todas as classes de tamanho
        fontSizes.forEach(size => {
            if (size !== 'reset') {
                htmlElement.classList.remove(`font-${size}`);
            }
        });

        // Aplica a nova classe
        const currentSize = fontSizes[currentSizeIndex];
        if (currentSize !== 'reset') {
            htmlElement.classList.add(`font-${currentSize}`);
        }
        localStorage.setItem('fontSize', currentSize);
    }

    // Aplica o tamanho salvo ao carregar
    applyFontSize();

    // Event listeners
    decreaseBtn.addEventListener('click', () => {
        if (currentSizeIndex > 0) {
            currentSizeIndex--;
            applyFontSize();
        }
    });

    resetBtn.addEventListener('click', () => {
        currentSizeIndex = fontSizes.indexOf('reset');
        applyFontSize();
    });

    increaseBtn.addEventListener('click', () => {
        if (currentSizeIndex < fontSizes.length - 1) {
            currentSizeIndex++;
            applyFontSize();
        }
    });

    // === Inversão de Cores (Alto Contraste) ===
    const invertButton = document.getElementById('invert-colors');
    if (localStorage.getItem('colorInvert') === 'enabled') {
        htmlElement.classList.add('color-invert');
        invertButton.setAttribute('aria-pressed', 'true');
    }
    invertButton.addEventListener('click', function() {
        htmlElement.classList.toggle('color-invert');
        const isInverted = htmlElement.classList.contains('color-invert');
        invertButton.setAttribute('aria-pressed', isInverted);
        localStorage.setItem('colorInvert', isInverted ? 'enabled' : 'disabled');
    });

    // === Botão "Voltar ao Topo" ===
    const backToTopButton = document.getElementById('back-to-top');
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            backToTopButton.style.display = 'flex';
        } else {
            backToTopButton.style.display = 'none';
        }
    });
    backToTopButton.addEventListener('click', function(e) {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});