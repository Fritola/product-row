import React from 'react'

import {Button} from './style'

const ActionButton = ({label, AddCart}) => {
    
    return(
        <Button onClick={AddCart}>
            {label}
        </Button>
    )
}

export default ActionButton