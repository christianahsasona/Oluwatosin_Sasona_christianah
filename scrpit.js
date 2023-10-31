const portfolioItems = document.querySelectorAll(".portfolio-items");
portfolioItems.forEach(item => {
    const ptitle = item.querySelector('.title');
    const pcontent = item.querySelector('.content');
    ptitle.addEventListener('click', () => {
        item.classList.toggle('active');
    });
    
});