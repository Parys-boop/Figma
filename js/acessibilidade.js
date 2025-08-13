document.addEventListener('DOMContentLoaded', function() {
  const decreaseBtn = document.getElementById('font-decrease');
  const resetBtn = document.getElementById('font-reset');
  const increaseBtn = document.getElementById('font-increase');
  const htmlElement = document.documentElement;
  const bodyElement = document.body;
  
  // Verifica se já existe um tamanho salvo
  const savedSize = localStorage.getItem('fontSize');
  if (savedSize) {
    applyFontSize(savedSize);
  }
  
  // Event listeners
  decreaseBtn.addEventListener('click', () => adjustFontSize('decrease'));
  resetBtn.addEventListener('click', () => adjustFontSize('reset'));
  increaseBtn.addEventListener('click', () => adjustFontSize('increase'));
  
  function adjustFontSize(action) {
    let currentSize = localStorage.getItem('fontSize') || 'reset';
    
    switch(action) {
      case 'decrease':
        if (currentSize === 'reset') currentSize = 'small';
        else if (currentSize === 'large') currentSize = 'reset';
        else if (currentSize === 'xlarge') currentSize = 'large';
        break;
      case 'increase':
        if (currentSize === 'reset') currentSize = 'large';
        else if (currentSize === 'large') currentSize = 'xlarge';
        else if (currentSize === 'small') currentSize = 'reset';
        break;
      case 'reset':
      default:
        currentSize = 'reset';
    }
    
    applyFontSize(currentSize);
    localStorage.setItem('fontSize', currentSize);
  }
  
  function applyFontSize(size) {
    // Remove todas as classes de tamanho primeiro
    htmlElement.classList.remove('font-small', 'font-large', 'font-xlarge');
    bodyElement.classList.remove('font-small', 'font-large', 'font-xlarge');
    
    // Aplica a nova classe se não for reset
    if (size !== 'reset') {
      htmlElement.classList.add(`font-${size}`);
      bodyElement.classList.add(`font-${size}`);
    }
  }
});

document.addEventListener('DOMContentLoaded', function() {
  const invertButton = document.getElementById('invert-colors');
  const htmlElement = document.documentElement;
  
  // Verifica se o modo invertido estava ativo
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
});