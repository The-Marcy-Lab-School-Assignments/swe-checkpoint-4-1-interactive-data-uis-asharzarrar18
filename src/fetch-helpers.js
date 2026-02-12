export const fetchData = (url) => {

};

export const getProducts = () => {
    return fetch('https://dummyjson.com/products')
    .then((response) => {
        if(!response.ok) {
            throw new Error('Failed to get products')
        }
        return response.json()
    })
    .then((json) => {
        return { data: json.products, error: null}
    })
    .catch((error) => {
        return { data: null, error}
    })
};

export const getProductById = (id) => {
    return fetch(`https://dummyjson.com/products/${id}`)
    .then((response) => {
        if (!response.ok){
            throw new Error('Failed to get product details')
        }
        return response.json()
    })
    .then((product) => {
        return { data: product, error: null}
    })
    .catch((error) => {
        return { data: null, error}
    })
};

export const searchProducts = async (query) => {
    try {
        const response = await fetch(`https://dummyjson.com/products/search?q=${query}`)
    if (!response.ok) {
        throw new Error('Failed to find product')
    }
    const json = await response.json()
    return { data: json.products, error: null }
}   catch (error) {
    return { data: null, error }
}
};
