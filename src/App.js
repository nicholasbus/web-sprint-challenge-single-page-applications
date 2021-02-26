import React, {useState, useEffect} from "react";
import HomePage from './components/HomePage'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import PizzaForm from './components/PizzaForm'
import Confirmation from './components/Confirmation'
import axios from 'axios'
import formSchema from './validation/formSchema'
import * as yup from 'yup'

const App = () => {
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

  const initialErrors = {
    name: '',
    sauce: '',
    size: ''
  }
  
  const [errors, setErrors] = useState(initialErrors)
  const [disabled, setDisabled] = useState(true)
  const [formValues, setFormValues] = useState(initialFormValues)
  const [confirmedOrder, setConfirmedOrder] = useState({})

  useEffect(() => {
    formSchema.isValid(formValues)
      .then(valid => setDisabled(!valid))
  }, [formValues])

  const change = (name, value) => {
    validateFormData(name, value)
    setFormValues({
      ...formValues,
      [name]: value
    })
  }

  const submit = (e) => {
    e.preventDefault()
    
    axios.post('https://reqres.in/api/users', formValues)
      .then(res => {
        setConfirmedOrder(res.data)
        
      })
      .catch(err => console.log(err))
  }

  const validateFormData = (name, value) => {
    yup.reach(formSchema, name)
      .validate(value)
      .then(valid => setErrors({
        ...errors,
        [name]: ''
      }))
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
