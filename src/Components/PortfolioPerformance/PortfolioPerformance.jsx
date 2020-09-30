import React from 'react';
import { Container, Card, Button, CardGroup } from 'react-bootstrap';
import Cards from './Cards/Cards';
import styles from './PortfolioPerformance.module.css'

class PortfolioPerformance extends React.Component{
    render(){
        return (
            <div class= "PortfolioPerformance">
                <Container>
                    <Cards/>
                </Container> 
            </div>
        );
    }
}
 export default PortfolioPerformance;