document.addEventListener('DOMContentLoaded', () => {
    const productContainer = document.getElementById('product-container');

    // Get the first 8 products
    const firstEightProducts = Object.values(products).slice(0, 8);

    firstEightProducts.forEach(product => {
        const productBox = document.createElement('div');
        productBox.className = 'col-sm-6 col-md-4 col-lg-3';

        productBox.innerHTML = `
            <div class="box">
                <a href="${product.productSlug}.html">
                    <div class="img-box">
                        <img src="${product.productImages[0].src}" alt="${product.productImages[0].alt}">
                    </div>
                    <div class="detail-box">
                        <h6>${product.productName}</h6>
                        <h6>
                            Price
                            <span>₹${product.pricing.discountPrice || product.pricing.mrp}</span>
                        </h6>
                    </div>
                    ${product.qty > 0 ? '<div class="new"><span>New</span></div>' : ''}
                </a>
            </div>
        `;

        productContainer.appendChild(productBox);
    });
});
