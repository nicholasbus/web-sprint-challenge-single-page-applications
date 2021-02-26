import React from 'react'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'

const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    width: 50%;
    margin: auto;
    text-align: center;
`;

const PizzaForm = (props) => {

    const {submit, onChange, values, disabled, errors} = props
    const { pepperoni, sausage, canadianBacon, spicyItalianSausage, name, special } = values

    const change = (e) => {
        const { name, value, checked, type } = e.target
        const valueToUse = type === 'checkbox' ? checked : value
        // console.log(valueToUse, name)
        onChange(name, valueToUse)
    }

    const history = useHistory()

    const onSubmit = (e) => {
        submit(e);
        history.push('/confirm')
    }

    return (
    <>
        <StyledForm onSubmit={onSubmit}>
            <h2>Build Your Own Pizza</h2>
            <label>Name
                <input type='text' name='name' value={name} onChange={change} />
            </label>
            <label>Choice of size <small>Required</small>
                <select name='size' onChange={change}>
                    <option value=''>Select</option>
                    <option value='small'>Small</option>
                    <option value='medium'>Medium</option>
                    <option value='large'>Large</option>
                </select>
            </label>
            <label>Choice of sauce <small>Required</small>
                <input type='radio' name='sauce' value='Original Red' onChange={change}/>Original Red
                <input type='radio' name='sauce' value='Garlic Ranch' onChange={change}/>Garlic Ranch
                <input type='radio' name='sauce' value='BBQ Sauce' onChange={change}/>BBQ Sauce
                <input type='radio' name='sauce' value='Spinach Alfredo' onChange={change}/>Spinach Alfredo
            </label>
            <label>Add Toppings <small>Choose up to 10</small>
                <input type='checkbox' name='pepperoni' checked={pepperoni} onChange={change}/> Pepperoni
                <input type='checkbox' name='sausage' checked={sausage} onChange={change}/> Sausage
                <input type='checkbox' name='canadianBacon' checked={canadianBacon} onChange={change}/> Canadian Bacon
                <input type='checkbox' name='spicyItalianSausage' checked={spicyItalianSausage} onChange={change}/> Spicy Italian Sausage
            </label>
            <label>Special Instructions
                <input type='text' name='special' placeholder="Anything else you'd like to add?" value={special} onChange={change} />
            </label>
            <button disabled={disabled}>Add to order</button>
            <div>
                <p>{errors.name}</p>
                <p>{errors.sauce}</p>
                <p>{errors.size}</p>
            </div>
        </StyledForm>
    </>
    )
}

export default PizzaForm