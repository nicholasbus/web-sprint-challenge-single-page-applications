import React, {useState, useEffect} from "react";
import HomePage from './components/HomePage'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import PizzaForm from './components/PizzaForm'
import Confirmation from './components/Confirmation'
import axios from 'axios'
import formSchema from './validation/formSchema'
import * as yup from 'yup'

const App = () => {
  // initial empty form values
  const initialFormValues = {
    name: '',
    special: '',
    sauce: '',
    pepperoni: false,
    sausage: false,
    canadianBacon: false,
    spicyItalianSausage: false,
    size: ''
  }
  // initial empty validation errors
  const initialErrors = {
    name: '',
    sauce: '',
    size: ''
  }
  
  // state for errors, the disabled prop for the button, formvalues, and the order
  const [errors, setErrors] = useState(initialErrors)
  const [disabled, setDisabled] = useState(true)
  const [formValues, setFormValues] = useState(initialFormValues)
  const [confirmedOrder, setConfirmedOrder] = useState({})

  // effect runs every time the formValues are changed to check if the button should remain disabled
  useEffect(() => {
    formSchema.isValid(formValues)
      .then(valid => setDisabled(!valid))
  }, [formValues])

  // function for when the input's values change
  const change = (name, value) => {
    validateFormData(name, value)
    setFormValues({
      ...formValues,
      [name]: value
    })
  }

  // function for when the form is submitted
  const submit = (e) => {
    e.preventDefault()
    
    // posting the data to the API
    axios.post('https://reqres.in/api/users', formValues)
      .then(res => {
        setConfirmedOrder(res.data) // setting the order that was just submitted in state
        setFormValues(initialFormValues) // resetting the form
      })
      .catch(err => console.log(err))
  }

  // function to validate the form data against the defined schema
  const validateFormData = (name, value) => {
    yup.reach(formSchema, name)
      .validate(value)
      // if valid set no errors
      .then(valid => setErrors({
        ...errors,
        [name]: ''
      }))
      // if there is an error then add the error to state
      .catch(err => {
        setErrors({
          ...errors,
          [name]: err.errors[0]
        })
      })
  }


  return (
    <>
      <Router>
        <Switch>
          <Route path='/' exact>
            <HomePage />
          </Route>
          <Route path='/pizza' exact>
            <PizzaForm values={formValues} onChange={change} submit={submit} disabled={disabled} errors={errors} />
          </Route>
          <Route path='/confirm' exact>
            <Confirmation order={confirmedOrder} />
          </Route>
        </Switch>
      </Router>
    </>
  );
};
export default App;
