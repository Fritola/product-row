const INITIAL_STATE = {
    products: [
        {
            name: "Heineken",
            quantity: 2,
            _id: 1
        },
        {
            name :"Brahma",
            quantity: 1,
            _id: 2
        }
    ],
    currentProduct: {
        name :"Brahma",
        quantity: 1,
        _id: 2
    }   
}
       
export default function products(state = INITIAL_STATE, action) {
    switch(action.type){       
        case 'LOAD_PRODUCTS':
            return {...state, products: action.products}
            break        
        case 'TOGGLE_ACTUAL_PRODUCT':
            return {...state, currentProduct: action.currentProduct}
            break
        default:
            return state
            break
    }
}