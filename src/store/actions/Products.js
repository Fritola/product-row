import api from '../../services/api'

export function loadedProduct(products){
    return {
        type: 'LOAD_PRODUCTS',
        products
    }
}

export function loadCart(product){    
    return{
        type: 'LOAD_CART',
        product
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

export function addToCart(product){    
    return dispatch => {
        dispatch(loadCart(product))
    }
}