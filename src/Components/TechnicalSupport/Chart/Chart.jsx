import React, { Component } from 'react';
import LineChart from 'react-linechart';
//import '../node_modules/react-linechart/dist/styles.css';
import { Container } from 'react-bootstrap' 
export default class Chart extends Component {
    render() {
        const data = [
            {									
                color: "steelblue", 
                points: [{x: 1, y: 2}, {x: 3, y: 5}, {x: 7, y: -3}] 
            }
        ];
        return (
            <div>
                <Container>
                    <p> NEW ACCOUNTS SINCE 2018 </p>
                    <h3> 78% </h3>
                    <LineChart 
                        width={600}
                        height={400}
                        data={data}
                    />
                </Container>		
            </div>
        );
    }
}
