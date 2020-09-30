import React from 'react';
import { Card, Button, CardGroup } from 'react-bootstrap';
import styles from './PortfolioPerformance.module.css'

class PortfolioPerformance extends React.Component{
    render(){
        return (
            <div class= "PortfolioPerformance">
                <Card style={{ width: '100%'}}>
                    <Card.Header as="h5">
                        <div class="row">
                            <div class="col">
                                Portfolio Performance
                            </div>
                            <div class="col">
                                <Button class="viewall">View All</Button>
                            </div>
                        </div>
                    </Card.Header>
                    <Card.Body>
                    <CardGroup>
                        <Card>
                            <Card.Body>
                            <Card.Title>Card Deposits</Card.Title>
                                <div class="row">
                                    <div class="col">
                                        <img src="https://thumbs.dreamstime.com/b/laptop-flat-icon-round-colorful-button-circular-vector-sign-style-design-95232259.jpg"/>
                                    </div>
                                    <div class="col">
                                        <h3>1,7M</h3> 
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col">
                                        <text class="cd">54.1%</text> less earnings 
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                        <Card>
                            <Card.Body>
                            <Card.Title>Invested Dividents</Card.Title>
                            <div class="row">
                                    <div class="col">
                                        <img src="https://thumbs.dreamstime.com/b/laptop-flat-icon-round-colorful-button-circular-vector-sign-style-design-95232259.jpg"/>
                                    </div>
                                    <div class="col">
                                        <h3>9M</h3> 
                                    </div>
                            </div>
                            <div class="row">
                                <div class="col">
                                    Grow Rate: 14.1%
                                </div>
                            </div>
                            </Card.Body>
                        </Card>
                        <Card>
                            <Card.Body>
                            <Card.Title>Capital Gains</Card.Title>
                            <div class="row">
                                    <div class="col">
                                        <img src="https://thumbs.dreamstime.com/b/laptop-flat-icon-round-colorful-button-circular-vector-sign-style-design-95232259.jpg"/>
                                    </div>
                                    <div class="col">
                                        <h3 class="gains"> <b>$563</b> </h3> 
                                    </div>
                            </div>
                            <div class="row">
                                <div class="col">
                                    Increasec by 7.35%
                                </div>
                            </div>
                            </Card.Body>
                        </Card>
                        </CardGroup>
                    </Card.Body>
                    <hr class="my-2"/>
                        <Button> View Complete Report </Button>
                </Card> 
            </div>
        );
    }
}
 export default PortfolioPerformance;