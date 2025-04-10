// Mobile menu toggle
const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');

mobileMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Product Modal
function openModel(productId) {
    const modal = document.getElementById('productModal');
    const modalTitle = document.getElementById('modal-title');
    const modalDescription = document.getElementById('modal-description');
    const modalPrice = document.getElementById('modal-price');

    // Sample data, you can replace this with dynamic content based on the product clicked
    const products = [
        { title: 'Dhakiya Jamdani', description: 'Dhakiya Jamdani is a beautifully handwoven Bengali saree, known for its intricate patterns, vibrant colors, and timeless elegance.', price: '1590.00 Tk' },
        { title: 'Dhakiya Jamdani', description: 'Dhakiya Jamdani is a beautifully handwoven Bengali saree, known for its intricate patterns, vibrant colors, and timeless elegance.', price: '1590.00 Tk' },
        { title: 'Dhakiya Jamdani', description: 'Dhakiya Jamdani is a beautifully handwoven Bengali saree, known for its intricate patterns, vibrant colors, and timeless elegance.', price: '1590.00 Tk' },
        { title: 'Dhakiya Jamdani', description: 'Dhakiya Jamdani is a beautifully handwoven Bengali saree, known for its intricate patterns, vibrant colors, and timeless elegance.', price: '1590.00 Tk' },
        { title: 'Dhakiya Jamdani', description: 'Dhakiya Jamdani is a beautifully handwoven Bengali saree, known for its intricate patterns, vibrant colors, and timeless elegance.', price: '1590.00 Tk' },
        { title: 'Dhakiya Jamdani', description: 'Dhakiya Jamdani is a beautifully handwoven Bengali saree, known for its intricate patterns, vibrant colors, and timeless elegance.', price: '1590.00 Tk' }
    ];

    const product = products[productId - 1];

    modalTitle.innerText = product.title;
    modalDescription.innerText = product.description;
    modalPrice.innerText = `Price: ${product.price}`;

    modal.style.display = 'flex';
}

// Close Modal
function closeModal() {
    const modal = document.getElementById('productModal');
    modal.style.display = 'none';
}
