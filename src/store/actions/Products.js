import api from '../../services/api'

export function loadedProduct(products){
    return {
        type: 'LOAD_PRODUCTS',
        products
    }
}

export function getProducts() {
    return dispatch => {
        api.get('/products')
        .then(res => {            
            dispatch(loadedProduct(res.data.products))
        })
    }
}

export function toggleActualProduct(currentProduct) {    
    return {
        type: 'TOGGLE_ACTUAL_PRODUCT',
        currentProduct
    }
}

export function editProductRequest() {
    return (dispatch, getState) => {
        const {currentProduct} = getState().products
        api.put(`/product/${currentProduct._id}`, {    
            ...currentProduct
        })
        .then(res => {
            if(res.status == 204){
                const allProducts = getState().products.products
                const foundIndexProduct = allProducts.findIndex(product => currentProduct._id == product._id)
                allProducts.splice(foundIndexProduct, 1)
                const updatedProducts = [...allProducts, currentProduct]
                console.log(updatedProducts)
                dispatch(loadedProduct(updatedProducts))
            }
        })
    }
}