import React from 'react'
import styled from 'styled-components'

// styled component for the confirmation card
const ConfirmationCard = styled.div`
    background: #999;
    width: 50%;
    margin: auto;
    text-align: center;
`

const Confirmation = (props) => {
    const { order } = props

    return (
        <ConfirmationCard>
            <h2>Pizza is on the way!</h2>
            <p>Name: {order.name}</p>
            <p>Size: {order.size}</p>
            <p>Sauce: {order.sauce}</p>
            
            <h3>Toppings: </h3>
            { order.pepperoni ? <p>Pepperoni</p> : null }
            { order.sausage ? <p>Sausage</p> : null }
            { order.canadianBacon ? <p>Canadian Bacon</p> : null }
            { order.spicyItalianSausage ? <p>Spicy Italian Sausage</p> : null }
            <h3>Special Instructions</h3>
            { order.special ? <p>{order.special}</p> : null }
            
        </ConfirmationCard>
    )
}

export default Confirmation