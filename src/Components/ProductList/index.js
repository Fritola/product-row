import React, {useEffect, useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'

import {ProductsContainer} from './styles'

import { getProducts, toggleActualProduct} from '../../store/actions/Products'

import ProductCard from '../ProductCard'
import ModalEdit from '../ModalEdit'

const ProductList = () => {  
    const products = useSelector(state => state.products.products)
    
    const[isOpen, setOpen] = useState(false)
    
    const dispatch = useDispatch()

    const toggleModal = (product) => {        
        dispatch(toggleActualProduct(product))    
        setOpen(!isOpen)         
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