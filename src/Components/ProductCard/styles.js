import styled from 'styled-components'

export const ProductCardContainer = styled.div`
    display: flex;
    align-items: center;    
    flex-direction: column;
    width: 250px;
    height: 380px;
    border: solid 1px #000;
`

export const IconContainer = styled.div`
    width: auto;
    cursor: pointer;
    display: flex;
    justify-content: flex-end;
    padding: 10px;    
`

export const ProductCardInfo = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 10px;

    a{
        color: #00f;
        margin-top: 5px;
    }
`
export const ProductCardName = styled.span`
    font-weight: bold;
    font-size: 18px;
    color: #333;
`
export const ProductCardDescription = styled.span`
    font-size: 14px;
    color: #8e8a8a;
    margin-bottom: 10px;
`

export const ProductCardPrice = styled.span`
    font-size: 14px;
    color: #333;
    font-weight: bold;
    margin-bottom: 15px;
`

export const ProductCardGift = styled.span`
    color: #277b27;
`
export const CartActionsContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 90%;
`