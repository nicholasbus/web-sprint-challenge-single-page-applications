import React from 'react'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'

// styled component for the form
const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    width: 50%;
    margin: auto;
    text-align: center;
    background: #999;

    label {
        display: flex;
        flex-direction: row;
        margin: 1rem 0 1rem 0
    }
`;

// styled component for the checkboxes/radio buttons
const Option = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

// styled component for when there is a list of items
const Options = styled.div`
    display: flex;
    flex-direction: column;
`;

// pizza form
const PizzaForm = (props) => {

    // expecting all of these values to come in props
    const {submit, onChange, values, disabled, errors} = props
    const { pepperoni, sausage, canadianBacon, spicyItalianSausage, name, special } = values

    // function for when an input's value is changed
    const change = (e) => {
        const { name, value, checked, type } = e.target
        const valueToUse = type === 'checkbox' ? checked : value
        onChange(name, valueToUse)
    }

    // history hook to navigate
    const history = useHistory()

    // function for when the form is submitted
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
                <Options>
                    <Option><label><input type='radio' name='sauce' value='Original Red' onChange={change}/>Original Red</label></Option>
                    <Option><label><input type='radio' name='sauce' value='Garlic Ranch' onChange={change}/>Garlic Ranch</label></Option>
                    <Option><label><input type='radio' name='sauce' value='BBQ Sauce' onChange={change}/>BBQ Sauce</label></Option>
                    <Option><label><input type='radio' name='sauce' value='Spinach Alfredo' onChange={change}/>Spinach Alfredo</label></Option>
                </Options>
            </label>
            <label>Add Toppings
                <Options>
                    <Option><label><input type='checkbox' name='pepperoni' checked={pepperoni} onChange={change}/>Pepperoni</label></Option>
                    <Option><label><input type='checkbox' name='sausage' checked={sausage} onChange={change}/>Sausage</label></Option>
                    <Option><label><input type='checkbox' name='canadianBacon' checked={canadianBacon} onChange={change}/>Canadian Bacon</label></Option>
                    <Option><label><input type='checkbox' name='spicyItalianSausage' checked={spicyItalianSausage} onChange={change}/>Spicy Italian Sausage</label></Option>
                </Options>
            </label>
            <label>Special Instructions
                <input type='text' name='special' placeholder="Anything else you'd like to add?" value={special} onChange={change} />
            </label>
            <button disabled={disabled}>Add to order</button>
            <div style={{color: 'red'}}>
                <p>{errors.name}</p>
                <p>{errors.sauce}</p>
                <p>{errors.size}</p>
            </div>
        </StyledForm>
    </>
    )
}

export default PizzaForm