import React from 'react'
import {ModalContainer, OverlayModal, ModalForm} from './style'
import { useSelector, useDispatch } from 'react-redux'
import { toggleActualProduct, loadedProduct, editProductRequest} from '../../store/actions/Products'

import api from '../../services/api'

const ModalEdit = ({toggleModal}) => {
    const currentProduct = useSelector(state => state.products.currentProduct)
    const products = useSelector(state => state.products.products)
    const dispatch = useDispatch()     

    const handleInput = (e) => {
        const {name, value} = e.target 
        dispatch(toggleActualProduct({
            ...currentProduct,
            [name]: value
        }))
    }

    const editProduct = () => {                  
        api.put(`/product/${currentProduct._id}`, {    
        ...currentProduct
        })                              
        const foundIndexProduct = products.findIndex(product => currentProduct._id == product._id)                                                
        products[foundIndexProduct] = currentProduct                
        dispatch(loadedProduct(products))                        
        toggleModal()                  
    }

    const closeModal = (e) => {
        if(e.target.id == 'overlayModal'){
            toggleModal()
        }
    }

    return(
        <OverlayModal id="overlayModal" onClick={closeModal}>
            <ModalContainer>
                <ModalForm>
                    <input onChange={handleInput} name="name" type="text" placeholder="Name" value={currentProduct.name} />
                    <input onChange={handleInput} name="description" type="text" placeholder="Description" value={currentProduct.description} />
                    <input onChange={handleInput} name="quantity" type="text" placeholder="Quantity" value={currentProduct.quantity} />
                    <input onChange={handleInput} name="gift" type="text" placeholder="Gift" value={currentProduct.gift} />

                    <button type="button" onClick={editProduct}>Edit</button>
                </ModalForm>
            </ModalContainer>
        </OverlayModal>
    )
}

export default ModalEdit