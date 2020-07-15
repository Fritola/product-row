import React from 'react'
import {AddButton, DecreaseButton, CounterContainer, CounterInput} from './style'

const Counter = () => {
    return(
        <CounterContainer>
            <AddButton> - </AddButton>
                <CounterInput placeholder="0" />
            <DecreaseButton> + </DecreaseButton>
        </CounterContainer>

    )
}

export default Counter