
// Mobile menu toggle functionality
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuButton = document.querySelector('.md\\:hidden');
    const mobileMenu = document.querySelector('.hidden.md\\:flex');
    
    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', function() {
            mobileMenu.classList.toggle('hidden');
            mobileMenu.classList.toggle('flex');
            mobileMenu.classList.toggle('flex-col');
            mobileMenu.classList.toggle('absolute');
            mobileMenu.classList.toggle('top-16');
            mobileMenu.classList.toggle('left-0');
            mobileMenu.classList.toggle('right-0');
            mobileMenu.classList.toggle('bg-blue-800');
            mobileMenu.classList.toggle('p-4');
            mobileMenu.classList.toggle('space-y-4');
            mobileMenu.classList.toggle('space-x-8');
        });
    }
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Image gallery modal functionality
    const galleryImages = document.querySelectorAll('.gallery-image');
    const modal = document.createElement('div');
    modal.className = 'fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center hidden';
    modal.innerHTML = `
        <div class="relative max-w-4xl w-full">
            <button class="absolute -top-12 right-0 text-white text-3xl">&times;</button>
            <img src="" alt="" class="w-full max-h-screen object-contain">
        </div>
    `;
    document.body.appendChild(modal);
    
    galleryImages.forEach(image => {
        image.addEventListener('click', function() {
            const imgSrc = this.getAttribute('src');
            const imgAlt = this.getAttribute('alt');
            
            modal.querySelector('img').setAttribute('src', imgSrc);
            modal.querySelector('img').setAttribute('alt', imgAlt);
            modal.classList.remove('hidden');
        });
    });
    
    modal.querySelector('button').addEventListener('click', function() {
        modal.classList.add('hidden');
    });
    
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.classList.add('hidden');
        }
    });
});