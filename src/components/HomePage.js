import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

// styled component for the Home Card
const HomeCard = styled.div`
    display: flex;
    flex-direction: column;
    background: #999;
    width: 33.3%;
    margin: auto;
    text-align: center;
    border-radius: 5px;

    a {
        text-decoration: none;
        color: #fff;
        background: #000;
        width: 20%;
        margin: auto;
        margin-bottom: 1rem;
    }
`;

// simple home page
const HomePage = (props) => {
    return (
    <HomeCard>
        
        <h1>Lambda Eats</h1>
        <Link to='/pizza'>Order a pizza</Link>
        
    </HomeCard>
    )
}

export default HomePage