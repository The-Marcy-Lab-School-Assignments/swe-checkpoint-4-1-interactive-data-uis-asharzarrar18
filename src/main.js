import { getProducts, getProductById, searchProducts } from './fetch-helpers.js';
import { renderProducts, renderProductDetails } from './dom-helpers.js';

const errorMessage = document.querySelector('#error-message')

getProducts().then(({ data, error }) => {
    if (error) {
        errorMessage.textContent = error.message
        return
    }
    renderProducts(data)
})

const productsList = document.querySelector('#products-list')

productsList.addEventListener('click', (event) => {
    const li = event.target.closest('li')
    if (!li) return 

    const productId = li.dataset.productId

    getProductById(productId).then(({ data, error }) => {
        if (error) {
            errorMessage.textContent = error.message
            return
        }
        renderProductDetails(data)
    })
})

const searchForm = document.querySelector('#search-form')

searchForm.addEventListener('submit', async (event) => {
    event.preventDefault()
    errorMessage.textContent = ''

    const formData = new FormData(searchForm)
    const query = formData.get('query')
    const { data, error } = await searchProducts(query)

    if (error) {
        errorMessage.textContent = error.message
        return
    }
    renderProducts(data)
    searchForm.reset()
})