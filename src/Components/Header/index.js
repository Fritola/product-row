import React, {useState} from 'react'
import {HeaderContainer, CartContainer, CartQuantity, CartModalContainer} from './styles'
import CartIcon from '../../assets/CartIcon'

import Cart from '../Cart'

import { useSelector} from 'react-redux'

const Header = () => {
    const[IsOpen, setOpen] = useState(false)
    const cart = useSelector(state => state.products.cart)    

    return (
        <>
        <HeaderContainer>
            <h1>Products</h1>                        

            <CartContainer>
                <CartIcon onClick={() => setOpen(!IsOpen)}/>
                <CartQuantity>{cart.length}</CartQuantity>
                {IsOpen && <CartModalContainer>
                    <Cart productsCart={cart}/>
                </CartModalContainer>}
            </CartContainer>
            
        </HeaderContainer>
        
        </>
    )
}

export default Header