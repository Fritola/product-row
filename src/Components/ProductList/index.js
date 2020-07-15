import React, {useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'

import {ProductsContainer} from './styles'

import { getProducts } from '../../store/actions/Products'

import ProductCard from '../ProductCard'

const ProductList = () => {  
    const products = useSelector(state => state.products.products)
    const dispatch = useDispatch()
   
    useEffect(() => {
        dispatch(getProducts())
    }, [])

    console.log(products)
        
    return(
        <ProductsContainer>
            {products.map((product, i) =>
                <ProductCard 
                    key={i}  
                    id={product._id}                  
                    name={product.name} 
                    gift={product.gift} 
                    price={product.price} 
                    quantity={product.quantity} 
                    description={product.description}
                />
            )}
        </ProductsContainer>
    )
}

export default ProductList