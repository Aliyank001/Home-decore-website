// ===================================
// Gallery Page JavaScript
// ===================================

document.addEventListener('DOMContentLoaded', function() {
    initGalleryFilters();
    initLightbox();
    initBeforeAfter();
});

// ===================================
// Gallery Filters
// ===================================

function initGalleryFilters() {
    const filterButtons = document.querySelectorAll('.gallery-filter-btn');
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    if (filterButtons.length === 0) return;
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const filter = this.getAttribute('data-filter');
            
            // Update active state
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            // Filter items
            galleryItems.forEach(item => {
                const category = item.getAttribute('data-category');
                
                if (filter === 'all' || category === filter) {
                    item.style.display = 'block';
                    setTimeout(() => {
                        item.style.opacity = '1';
                        item.style.transform = 'scale(1)';
                    }, 10);
                } else {
                    item.style.opacity = '0';
                    item.style.transform = 'scale(0.8)';
                    setTimeout(() => {
                        item.style.display = 'none';
                    }, 300);
                }
            });
        });
    });
}

// ===================================
// Lightbox
// ===================================

function initLightbox() {
    const galleryButtons = document.querySelectorAll('.gallery-btn');
    const lightbox = document.getElementById('lightbox');
    
    if (!lightbox) return;
    
    const lightboxImage = document.getElementById('lightbox-image');
    const lightboxCaption = document.getElementById('lightbox-caption');
    const closeBtn = document.getElementById('lightbox-close');
    const prevBtn = document.getElementById('lightbox-prev');
    const nextBtn = document.getElementById('lightbox-next');
    
    const images = [];
    let currentIndex = 0;
    
    // Collect all images
    galleryButtons.forEach((button, index) => {
        const galleryItem = button.closest('.gallery-item');
        const img = galleryItem.querySelector('.gallery-image img');
        const title = galleryItem.querySelector('.gallery-info h3').textContent;
        const category = galleryItem.querySelector('.gallery-category').textContent;
        
        images.push({
            src: img.src,
            title: title,
            category: category
        });
        
        button.addEventListener('click', function() {
            currentIndex = index;
            openLightbox();
        });
    });
    
    function openLightbox() {
        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden';
        showImage(currentIndex);
    }
    
    function closeLightbox() {
        lightbox.classList.remove('active');
        document.body.style.overflow = '';
    }
    
    function showImage(index) {
        const image = images[index];
        lightboxImage.src = image.src;
        lightboxCaption.innerHTML = `<h3>${image.title}</h3><p>${image.category}</p>`;
    }
    
    function nextImage() {
        currentIndex = (currentIndex + 1) % images.length;
        showImage(currentIndex);
    }
    
    function prevImage() {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        showImage(currentIndex);
    }
    
    // Event listeners
    if (closeBtn) closeBtn.addEventListener('click', closeLightbox);
    if (nextBtn) nextBtn.addEventListener('click', nextImage);
    if (prevBtn) prevBtn.addEventListener('click', prevImage);
    
    const overlay = lightbox.querySelector('.lightbox-overlay');
    if (overlay) overlay.addEventListener('click', closeLightbox);
    
    // Keyboard navigation
    document.addEventListener('keydown', function(e) {
        if (!lightbox.classList.contains('active')) return;
        
        switch(e.key) {
            case 'Escape':
                closeLightbox();
                break;
            case 'ArrowRight':
                nextImage();
                break;
            case 'ArrowLeft':
                prevImage();
                break;
        }
    });
}

// ===================================
// Before & After Slider
// ===================================

function initBeforeAfter() {
    const baItems = document.querySelectorAll('.ba-item');
    
    baItems.forEach(item => {
        const handle = item.querySelector('.ba-handle');
        const afterDiv = item.querySelector('.ba-after');
        
        if (!handle || !afterDiv) return;
        
        handle.addEventListener('input', function() {
            const value = this.value;
            afterDiv.style.clipPath = `inset(0 ${100 - value}% 0 0)`;
        });
        
        // Mouse drag functionality
        let isDragging = false;
        
        item.addEventListener('mousedown', function() {
            isDragging = true;
        });
        
        document.addEventListener('mouseup', function() {
            isDragging = false;
        });
        
        item.addEventListener('mousemove', function(e) {
            if (!isDragging) return;
            
            const rect = item.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const percentage = (x / rect.width) * 100;
            
            if (percentage >= 0 && percentage <= 100) {
                handle.value = percentage;
                afterDiv.style.clipPath = `inset(0 ${100 - percentage}% 0 0)`;
            }
        });
        
        // Touch support
        item.addEventListener('touchmove', function(e) {
            const touch = e.touches[0];
            const rect = item.getBoundingClientRect();
            const x = touch.clientX - rect.left;
            const percentage = (x / rect.width) * 100;
            
            if (percentage >= 0 && percentage <= 100) {
                handle.value = percentage;
                afterDiv.style.clipPath = `inset(0 ${100 - percentage}% 0 0)`;
            }
        });
    });
}
