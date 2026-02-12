export const renderProducts = (products) => {
    const productsList = document.querySelector('#products-list')
    const productCount = document.querySelector('#product-count')

    productsList.innerHTML = ''
    productCount.textContent = products.length

    for (const product of products) {
        const li = document.createElement('li')
        li.dataset.productId = product.id

        const img = document.createElement('img')
        img.src = product.thumbnail
        img.alt = product.title

        const h3 = document.createElement('h3')
        h3.textContent = product.title

        const p = document.createElement('p')
        p.textContent = `$${product.price}`

        li.append(img, h3, p)
        productsList.appendChild(li)
    }

};


export const renderProductDetails = (product) => {

};
