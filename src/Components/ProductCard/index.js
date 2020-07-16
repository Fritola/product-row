import React, {useEffect} from 'react'

import { 
    ProductCardContainer, 
    IconContainer,
    ProductCardInfo,
    ProductCardName,
    ProductCardDescription,
    ProductCardPrice,
    ProductCardGift,
    CartActionsContainer
} from './styles'

import product_image from '../../assets/product-image.png'
import Counter from '../Counter'
import ActionButton from '../ActionButton'
import EditIcon from '../../assets/EditIcon'

const ProductCard = ({ name, description, price, gift, toggleModal }) => {  
     
    return (            
        <>          
        <ProductCardContainer draggable="true">
            <IconContainer onClick={() => toggleModal()}>
                <EditIcon />
            </IconContainer>
            <img src={product_image}/>

            <ProductCardInfo>
                <ProductCardName>{name}</ProductCardName>
                <ProductCardDescription>{description}</ProductCardDescription>
                <ProductCardPrice>{price}</ProductCardPrice>
                <ProductCardGift>{gift}</ProductCardGift>
                <a href="#">View details</a>                 
            </ProductCardInfo>

            <CartActionsContainer>
                <Counter />
                <ActionButton label="ADD"/>
            </CartActionsContainer>            
        </ProductCardContainer>   
        </>                                     
    )
}

export default ProductCard
