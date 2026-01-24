// ===================================
// Products Page JavaScript
// ===================================

document.addEventListener('DOMContentLoaded', function() {
    initProductFilters();
    initColorFilters();
    initSortFilter();
    initQuickView();
    initWishlist();
    initLoadMore();
});

// ===================================
// Category Filter
// ===================================

function initProductFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const products = document.querySelectorAll('.product-card');
    const productCount = document.getElementById('product-count');
    
    if (filterButtons.length === 0) return;
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const category = this.getAttribute('data-category');
            
            // Update active state
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            // Filter products
            let visibleCount = 0;
            products.forEach(product => {
                const productCategory = product.getAttribute('data-category');
                
                if (category === 'all' || productCategory === category) {
                    product.style.display = 'block';
                    visibleCount++;
                } else {
                    product.style.display = 'none';
                }
            });
            
            // Update count
            if (productCount) {
                productCount.innerHTML = `Showing <strong>${visibleCount}</strong> products`;
            }
        });
    });
}

// ===================================
// Color Filter
// ===================================

function initColorFilters() {
    const colorButtons = document.querySelectorAll('.color-btn');
    const products = document.querySelectorAll('.product-card');
    const productCount = document.getElementById('product-count');
    
    if (colorButtons.length === 0) return;
    
    colorButtons.forEach(button => {
        button.addEventListener('click', function() {
            const color = this.getAttribute('data-color');
            
            // Update active state
            colorButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            // Filter products
            let visibleCount = 0;
            products.forEach(product => {
                const productColor = product.getAttribute('data-color');
                
                if (color === 'all' || productColor === color) {
                    if (product.style.display !== 'none') {
                        visibleCount++;
                    }
                    product.style.opacity = '1';
                    product.style.pointerEvents = 'auto';
                } else {
                    product.style.opacity = '0.3';
                    product.style.pointerEvents = 'none';
                }
            });
        });
    });
}

// ===================================
// Sort Filter
// ===================================

function initSortFilter() {
    const sortSelect = document.getElementById('sort-filter');
    const productsGrid = document.getElementById('products-grid');
    
    if (!sortSelect || !productsGrid) return;
    
    sortSelect.addEventListener('change', function() {
        const sortValue = this.value;
        const products = Array.from(productsGrid.querySelectorAll('.product-card'));
        
        products.sort((a, b) => {
            switch (sortValue) {
                case 'price-low':
                    return getPrice(a) - getPrice(b);
                case 'price-high':
                    return getPrice(b) - getPrice(a);
                case 'name':
                    return getTitle(a).localeCompare(getTitle(b));
                default:
                    return 0;
            }
        });
        
        // Re-append sorted products
        products.forEach(product => productsGrid.appendChild(product));
    });
    
    function getPrice(product) {
        const priceText = product.querySelector('.product-price').textContent;
        return parseInt(priceText.replace(/[^0-9]/g, ''));
    }
    
    function getTitle(product) {
        return product.querySelector('.product-title').textContent;
    }
}

// ===================================
// Quick View Modal
// ===================================

function initQuickView() {
    const quickViewButtons = document.querySelectorAll('.quick-view');
    const modal = document.getElementById('quick-view-modal');
    const closeBtn = document.getElementById('modal-close');
    
    if (!modal) return;
    
    const productData = {
        1: {
            image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&q=80',
            category: 'Furniture',
            title: 'Luxe Velvet Sofa',
            rating: 4.5,
            price: '$1,299',
            description: 'This premium 3-seater sofa features soft velvet upholstery in a rich beige tone. Hand-crafted hardwood frame ensures durability, while high-density foam cushions provide exceptional comfort. Perfect for modern and classic interiors alike.',
            sku: 'LH-SOFA-001'
        }
        // Add more products as needed
    };
    
    quickViewButtons.forEach(button => {
        button.addEventListener('click', function() {
            const productId = this.getAttribute('data-product');
            const card = this.closest('.product-card');
            
            // Get product info from card
            const image = card.querySelector('.product-image img').src;
            const category = card.querySelector('.product-category').textContent;
            const title = card.querySelector('.product-title').textContent;
            const price = card.querySelector('.product-price').textContent;
            const description = card.querySelector('.product-description').textContent;
            
            // Populate modal
            document.getElementById('modal-product-image').src = image;
            document.getElementById('modal-category').textContent = category;
            document.getElementById('modal-title').textContent = title;
            document.getElementById('modal-price').textContent = price;
            document.getElementById('modal-description').textContent = description;
            document.getElementById('modal-cat-link').textContent = category;
            
            // Show modal
            modal.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    });
    
    // Close modal
    if (closeBtn) {
        closeBtn.addEventListener('click', closeModal);
    }
    
    const overlay = modal.querySelector('.modal-overlay');
    if (overlay) {
        overlay.addEventListener('click', closeModal);
    }
    
    function closeModal() {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }
    
    // Quantity selector
    const minusBtn = modal.querySelector('.qty-btn.minus');
    const plusBtn = modal.querySelector('.qty-btn.plus');
    const qtyInput = document.getElementById('modal-quantity');
    
    if (minusBtn && plusBtn && qtyInput) {
        minusBtn.addEventListener('click', () => {
            const value = parseInt(qtyInput.value);
            if (value > 1) qtyInput.value = value - 1;
        });
        
        plusBtn.addEventListener('click', () => {
            const value = parseInt(qtyInput.value);
            qtyInput.value = value + 1;
        });
    }
}

// ===================================
// Wishlist Functionality
// ===================================

function initWishlist() {
    const wishlistButtons = document.querySelectorAll('.add-to-wishlist');
    
    wishlistButtons.forEach(button => {
        button.addEventListener('click', function() {
            const icon = this.querySelector('i');
            
            if (icon.classList.contains('far')) {
                icon.classList.remove('far');
                icon.classList.add('fas');
                showNotification('Added to wishlist!', 'success');
            } else {
                icon.classList.remove('fas');
                icon.classList.add('far');
                showNotification('Removed from wishlist', 'success');
            }
        });
    });
}

// ===================================
// Add to Cart
// ===================================

const addToCartButtons = document.querySelectorAll('.btn-add-cart');
addToCartButtons.forEach(button => {
    button.addEventListener('click', function() {
        const product = this.closest('.product-card');
        const title = product.querySelector('.product-title').textContent;
        
        // Update cart count
        const cartCount = document.querySelector('.cart-count');
        if (cartCount) {
            const currentCount = parseInt(cartCount.textContent);
            cartCount.textContent = currentCount + 1;
        }
        
        showNotification(`"${title}" added to cart!`, 'success');
    });
});

// ===================================
// Load More Products
// ===================================

function initLoadMore() {
    const loadMoreBtn = document.getElementById('load-more');
    
    if (!loadMoreBtn) return;
    
    loadMoreBtn.addEventListener('click', function() {
        // Simulate loading more products
        this.textContent = 'Loading...';
        
        setTimeout(() => {
            showNotification('All products loaded!', 'success');
            this.style.display = 'none';
        }, 1000);
    });
}

// Utility function (if not already defined in main.js)
function showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background-color: ${type === 'success' ? '#d4edda' : '#f8d7da'};
        color: ${type === 'success' ? '#155724' : '#721c24'};
        padding: 1rem 2rem;
        border-radius: 4px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        z-index: 10000;
        animation: slideIn 0.3s ease;
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}
