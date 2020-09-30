import React from 'react';
import { Container,Card } from 'react-bootstrap';
import 'antd/dist/antd.css';
import { Progress } from 'antd';
import Chart from './Chart/Chart'
 class TechnicalSupport extends React.Component{
     render(){
         return(
            <Container>
                <Card>
                <h3> Technical Support</h3>
                <hr class="my-3"/>
                <Chart />
                <p class="text-muted"> SALES PROGRESS </p>
                <hr class="my-1" />
                <Progress percent={50}  />
                <div class="row">
                    <div class="col">
                        YoY Growth
                    </div>
                </div>
                </Card>
            </Container>
         );
     }
 }

 export default TechnicalSupport;