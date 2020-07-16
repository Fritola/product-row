const INITIAL_STATE = {
    products: [
        
    ],
    currentProduct: {
        name :"Brahma",
        quantity: 1,
        _id: 2
    },
    cart: [
        
    ]
    
}
       
export default function products(state = INITIAL_STATE, action) {
    switch(action.type){       
        case 'LOAD_PRODUCTS':
            return {...state, products: action.products}
            break        
        case 'TOGGLE_ACTUAL_PRODUCT':
            return {...state, currentProduct: action.currentProduct}
            break
        case 'LOAD_CART':
            return {...state, cart: [...state.cart, action.product]}
            break
        default:
            return state
            break
    }
}