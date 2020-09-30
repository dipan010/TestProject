import React from 'react';
import 'antd/dist/antd.css'
import { Badge, Button, Timeline } from 'antd';


class TimelineX extends React.Component{
    state = { size: 'medium'};
    render(){
        
        return(
            <Timeline>
                <Timeline.Item>All Hands Meeting</Timeline.Item>
                <Timeline.Item>Yet another one, at 15:00 PM</Timeline.Item>
                <Timeline.Item>Build the production release <Badge count={"NEW"} /></Timeline.Item>
                <Timeline.Item>Network problems being solved 2015-09-01</Timeline.Item>
                <Timeline.Item>Yet another one, at 15:00 PM</Timeline.Item>
                <Timeline.Item>Build the production release <Badge count={"NEW"} /></Timeline.Item>
                <Timeline.Item>Network problems being solved 2015-09-01</Timeline.Item>
            </Timeline>
        );
    }
}

export default TimelineX;