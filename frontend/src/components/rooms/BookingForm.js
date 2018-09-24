import React, { Component } from 'react';
import { Form, Button, DatePicker, Input, Col, Row } from 'antd';
import IncDecButtons from 'components/IncDecButtons';

const FormItem = Form.Item;
const RangePicker = DatePicker.RangePicker;

class BookingFormClass extends Component {

	// constructor(props) {
	// 	super(props);
	// 	this.state = {
	// 	}
	// }

    render() {
		const { getFieldDecorator } = this.props.form;
		const rangeConfig = {
			rules: [{ type: 'array', required: true, message: 'Please select time!' }],
		};
		const formItemLayout = {
			labelCol: {
			  xs: { span: 24 },
			  sm: { span: 8 },
			},
			wrapperCol: {
			  xs: { span: 24 },
			  sm: { span: 24 },
			},
		};
        return (
            <Form onSubmit={this.handleSubmit}>
                <FormItem
                    {...formItemLayout}
                    label="Dates"
                    labelCol={{span: 24}}
                >
                    {getFieldDecorator('range-picker', rangeConfig)(
                        <RangePicker size="large"/>
                    )}
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label="Guests"
                    labelCol={{span: 24}}
                    >
                    {getFieldDecorator('guests', {
                        rules: [{ required: true, message: 'Please input your note!' }],
                    })(
                        <Input value="1 Guest" size="large"/>
                    )}
                    <IncDecButtons title="Adults" />
                    
                </FormItem>
                <FormItem
                    // wrapperCol={{
                    //     xs: { span: 24, offset: 0 },
                    //     sm: { span: 16, offset: 8 },
                    // }}
                    >
                <Button type="primary" size="large" block htmlType="submit">Submit</Button>
                </FormItem>
            </Form>
        );
    }
}

const BookingForm = Form.create()(BookingFormClass);

export default BookingForm;

const styles = {
	
}
// export default RoomDetail;