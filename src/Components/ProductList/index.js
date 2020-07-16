import React, {useEffect, useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'

import {ProductsContainer} from './styles'

import { getProducts, toggleActualProduct, addToCart} from '../../store/actions/Products'

import ProductCard from '../ProductCard'
import ModalEdit from '../ModalEdit'
import api from '../../services/api'

const ProductList = () => {  
    const products = useSelector(state => state.products.products)
    const cart = useSelector(state => state.products.cart)    
    
    const[isOpen, setOpen] = useState(false)
    
    const dispatch = useDispatch()

    const toggleModal = (product) => {        
        dispatch(toggleActualProduct(product))    
        setOpen(!isOpen)         
    }

    const AddCart = (product) => {
        const {name, price, _id} = product
        const cartProduct = {
            name,
            price,
            _id
        }
        dispatch(addToCart(cartProduct))                 
    }
       
    useEffect(() => {
        dispatch(getProducts())
    }, [])    
                    
    return(
        <>       
        {isOpen && <ModalEdit toggleModal={() => toggleModal({})}/>}
        <ProductsContainer>
            {products.map((product, i) =>
                <ProductCard                                        
                    key={i}
                    toggleModal={() => toggleModal(product)}  
                    AddCart={() => AddCart(product)}  
                    id={product._id}                  
                    name={product.name} 
                    gift={product.gift} 
                    price={product.price} 
                    quantity={product.quantity} 
                    description={product.description}
                />
            )}
        </ProductsContainer>
        </>
    )
}

export default ProductList