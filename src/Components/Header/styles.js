import styled from 'styled-components'

export const HeaderContainer = styled.header`
    height: 15vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #eee;
`

export const CartContainer = styled.div`
    margin-bottom: -35px;
    width: 75%;
    display: flex;
    justify-content: flex-end;
`

export const CartQuantity = styled.span`
    font-size: 14px;
    position: relative;
    left: 4px;
    bottom: 15px;
    width: 20px;
    text-align: center;  
    color: #6492c0;
    border: solid 1px #6492c0;
    border-radius: 10px;
`

export const CartModalContainer = styled.div`
    position: absolute;
    top: 100px;
    width: 200px;
    height: 300px;
    border: solid 2px #ccc;
    background: white;
    border-radius: 5px;
    overflow: scroll;
`