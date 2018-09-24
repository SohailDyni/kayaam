import React, { Component } from 'react';
import { Button, Col, Row } from 'antd';


export default class IncDecButtons extends Component {

	// constructor(props) {
	// 	super(props);
	// 	this.state = {
	// 	}
	// }

    render() {
		const { title } = this.props;
        return (

            <Row style={{width: '17rem'}}>
                <Col span={12}>
                    <h2>{title}</h2>
                </Col>
                <Col span={12}>
                <Col span={8} className="text-center">
                    <Button type="primary" shape="circle" icon="plus" />
                </Col>
                <Col span={8} className="text-center">
                    <span style={{ display: 'inline-block', width: '100%', textAlign: 'center' }}>
                    1
                    </span>
                </Col>
                <Col span={8} className="text-center">
                    <Button type="primary" shape="circle" icon="minus" />
                </Col>
                </Col>
            </Row>

            // <div className="indec-con">
            //     <div className="indec-title"><h2>{title}</h2></div>
            //     <div className="indec-buttons">
            //         <Button type="primary" shape="circle" icon="plus" />
            //         <span style={{ display: 'inline-block', width: '100%', textAlign: 'center' }}>
            //             1
            //         </span>
            //         <Button type="primary" shape="circle" icon="minus" />
            //     </div>
            // </div>
                    
                
        );
    }
}


// export BookingForm;

const styles = {
	
}
// export default RoomDetail;