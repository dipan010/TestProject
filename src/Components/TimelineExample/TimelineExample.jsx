import React from 'react';
import { Container,  Card } from 'react-bootstrap'
import 'antd/dist/antd.css'
import { Badge, Button } from 'antd';
import TimelineX from './Timeline/TimelineX'

class TimelineExample extends React.Component{
    state = { size: 'medium'};
    render(){
        const { size } = this.state
        return(
            <Container> 
                <Card>
                    Timeline Example
                    <hr class="my-4"/>
                    <Container>
                    <TimelineX/>                        
                    </Container>
                    <hr class="my-2"/>
                    <Button class="btn-shadow " type="primary" shape="round"  size={size}>
                        <Badge dot status="warning">
                            View All Messages
                        </Badge>
                    </Button>
                </Card>
            </Container>
        );
    }
}

export default TimelineExample;