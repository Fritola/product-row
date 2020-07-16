import React from 'react'
import {ProductsContainer, ProductName, ProductInfo, ProductPrice, CartMessage} from './styles'

const Cart = ({productsCart}) => {    
    return(             
        <ProductsContainer>
            {productsCart.length == 0 &&
                <CartMessage>Sem produtos</CartMessage>
            }
            {productsCart.map((product, i) =>
                <ProductInfo key={i}>
                    <ProductName>
                        {product.name}                    
                    </ProductName>
                    <ProductPrice>
                        {product.price} 
                    </ProductPrice>                    
                </ProductInfo>
            )}
        </ProductsContainer>
    )
}

export default Cart