document.addEventListener('DOMContentLoaded', () => {
    const pathArray = window.location.pathname.split('/');
    const productSlug = pathArray[pathArray.length - 1];

    // Find the product with the matching slug
    const product = Object.values(products).find(product => product.productSlug === productSlug);
    const productDetailsContainer = document.getElementById('product-details');

    if (product) {
        productDetailsContainer.innerHTML = `
            <h1>${product.productName}</h1>
            <div class="img-box">
                <img src="${product.productImages[0].src}" alt="${product.productImages[0].alt}">
            </div>
            <div class="detail-box">
                <p>${product.productDetails.description}</p>
                <h6>Price: $${product.pricing.discountPrice || product.pricing.mrp}</h6>
            </div>
            <div class="review-box">
                <p>Rating: ${product.review.rating} stars</p>
                <p>Review: ${product.review.message}</p>
                <p>By: ${product.review.userName}</p>
            </div>
        `;
    } else {
        productDetailsContainer.innerHTML = '<p>Product not found.</p>';
    }
});
