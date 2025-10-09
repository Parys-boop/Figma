// ============================================
// NOTICIAS.JS - Intelectus+
// Funcionalidades da página de Notícias FATEC
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    
    // ========================================
    // ATUALIZAR DATA AUTOMATICAMENTE
    // ========================================
    const currentDateElement = document.getElementById('current-date');
    
    if (currentDateElement) {
        // Pegar data atual
        const today = new Date();
        const day = String(today.getDate()).padStart(2, '0');
        const month = String(today.getMonth() + 1).padStart(2, '0');
        const year = today.getFullYear();
        
        // Formatar data no padrão brasileiro (DD/MM/YYYY)
        const formattedDate = `${day}/${month}/${year}`;
        
        // Atualizar no HTML
        currentDateElement.textContent = formattedDate;
        
        console.log('📅 Data atualizada:', formattedDate);
    }
    
    console.log('✅ Noticias.js carregado - Página FATEC ativa');
});