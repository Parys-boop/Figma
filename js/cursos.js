document.addEventListener('DOMContentLoaded', () => {
    
    // ========================================
    // FILTROS DE CATEGORIA
    // ========================================
    const filterButtons = document.querySelectorAll('.filter-btn');
    const courseCards = document.querySelectorAll('.course-card');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove classe 'active' de todos os botões
            filterButtons.forEach(btn => btn.classList.remove('active'));
            
            // Adiciona classe 'active' no botão clicado
            button.classList.add('active');
            
            // Pega o filtro selecionado
            const filterValue = button.getAttribute('data-filter');
            
            // Filtra os cards
            courseCards.forEach(card => {
                const cardCategory = card.getAttribute('data-category');
                
                if (filterValue === 'all' || cardCategory === filterValue) {
                    // Mostra o card com animação
                    card.style.display = 'flex';
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'scale(1)';
                    }, 10);
                } else {
                    // Esconde o card com animação
                    card.style.opacity = '0';
                    card.style.transform = 'scale(0.9)';
                    setTimeout(() => {
                        card.style.display = 'none';
                    }, 300);
                }
            });
        });
    });
    
    // ========================================
    // BUSCA DE CURSOS
    // ========================================
    const searchInput = document.getElementById('search-courses');
    
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            const searchTerm = e.target.value.toLowerCase().trim();
            
            courseCards.forEach(card => {
                const title = card.querySelector('.course-title').textContent.toLowerCase();
                const description = card.querySelector('.course-description').textContent.toLowerCase();
                const category = card.querySelector('.course-category').textContent.toLowerCase();
                
                // Verifica se o termo está no título, descrição ou categoria
                if (title.includes(searchTerm) || 
                    description.includes(searchTerm) || 
                    category.includes(searchTerm)) {
                    card.style.display = 'flex';
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'scale(1)';
                    }, 10);
                } else {
                    card.style.opacity = '0';
                    card.style.transform = 'scale(0.9)';
                    setTimeout(() => {
                        card.style.display = 'none';
                    }, 300);
                }
            });
            
            // Se não houver termo de busca, reseta para o filtro ativo
            if (searchTerm === '') {
                const activeFilter = document.querySelector('.filter-btn.active');
                if (activeFilter) {
                    activeFilter.click();
                }
            }
        });
    }
    
    // ========================================
    // ANIMAÇÃO DOS CARDS AO CARREGAR
    // ========================================
    courseCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            card.style.transition = 'all 0.4s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 100); // Delay progressivo
    });
    
    console.log('✅ Cursos.js carregado - Filtros ativos');
});