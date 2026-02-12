import { getProducts } from './fetch-helpers.js';
import { renderProducts} from './dom-helpers.js';

const errorMessage = document.querySelector('#error-message')

getProducts().then(({ data, error }) => {
    if (error) {
        errorMessage.textContent = error.message
        return
    }
    renderProducts(data)
})