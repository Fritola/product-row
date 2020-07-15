import api from '../../services/api'

function loadedProduct(products){
    return {
        type: 'LOAD_PRODUCTS',
        products
    }
}

export function getProducts() {
    return dispatch => {
        api.get('/products')
        .then(res => {
            dispatch(loadedProduct(res.data))
        })
    }
}