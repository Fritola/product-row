import styled from 'styled-components'

export const OverlayModal = styled.div`
    display: flex;
    justify-content: center;
    position: fixed;
    width: 100%;
    height: 100vh;
    top: 0;
    left: 0;    
    padding: 20px;
    padding-top: 100px;
    background: rgba(0, 0, 0, .6);
`

export const ModalContainer = styled.div`    
    width: 500px;
    height: 400px;    
    border: solid 1px #CCC;
    background: #fff;
    margin: 0 auto;    
`

export const ModalForm = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;

    input{
        margin: 10px 0;
        width: 250px;
        padding: 10px;
        border-radius: 7px;
        border: solid 1px #ccc;
    }

    button{
        padding: 7px;
        width: 100px;
        color: #6492c0;
        border: solid 2px #6492c0;
        border-radius: 5px;
        cursor: pointer;
    }
`