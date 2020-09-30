import React from 'react';
import { Container,  Card } from 'react-bootstrap'
import 'antd/dist/antd.css'
import { Badge, Button, Timeline } from 'antd';


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
                    <Timeline>
                        <Timeline.Item>All Hands Meeting</Timeline.Item>
                        <Timeline.Item>Yet another one, at 15:00 PM</Timeline.Item>
                        <Timeline.Item>Build the production release <Badge count={"NEW"} /></Timeline.Item>
                        <Timeline.Item>Network problems being solved 2015-09-01</Timeline.Item>
                        <Timeline.Item>Yet another one, at 15:00 PM</Timeline.Item>
                        <Timeline.Item>Build the production release <Badge count={"NEW"} /></Timeline.Item>
                        <Timeline.Item>Network problems being solved 2015-09-01</Timeline.Item>
                    </Timeline>
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