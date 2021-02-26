import React from 'react'
import { Link } from 'react-router-dom'

const HomePage = (props) => {
    return (
    <>
        
        <h1>Lambda Eats</h1>
        <Link to='/pizza'>Order a pizza</Link>
        
    </>
    )
}

export default HomePage