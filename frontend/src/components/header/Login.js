import React, { Component } from 'react';
import { Modal, Form, Icon, Input, Button, Checkbox, Divider } from 'antd';

const FormItem = Form.Item;

class Login extends Component {
    
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
          if (!err) {
            console.log('Received values of form: ', values);
          }
        });
    }

    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <Modal
                title="Vertically centered modal dialog"
                centered
                visible={this.props.visible}
                // onOk={() => this.setModal2Visible(false)}
                footer={null}
                onCancel={this.props.onLoginClose}
            >
                <Form onSubmit={this.handleSubmit} className="login-form">
                    <Button size="large" type="primary" icon="facebook" block className="social-login fb">Login with Facebook</Button>
                    <Button size="large" type="primary" icon="google" block className="social-login gplus">Login with Google </Button>
                    <FormItem>
                    {getFieldDecorator('userName', {
                        rules: [{ required: true, message: 'Please input your username!' }],
                    })(
                        <Input size="large" prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
                    )}
                    </FormItem>
                    <FormItem>
                    {getFieldDecorator('password', {
                        rules: [{ required: true, message: 'Please input your Password!' }],
                    })(
                        <Input size="large" prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
                    )}
                    </FormItem>
                    <FormItem>
                    {getFieldDecorator('remember', {
                        valuePropName: 'checked',
                        initialValue: false,
                    })(
                        <Checkbox>Remember me</Checkbox>
                    )}
                    <a className="login-form-forgot" href="">Forgot password</a>
                    </FormItem>
                    <FormItem>
                    <Button size="large" type="primary" htmlType="submit" className="login-form-button">
                        Log in
                    </Button>

                    <Divider>OR</Divider>
                    <div className="text-center">
                        <a href="">register now!</a>
                        {/* <Button htmlType="button" className="transparent-btn">register now!</Button> */}
                    </div>
                    </FormItem>
                </Form>
            </Modal>
        );
    }
}

const WrappedLogin = Form.create()(Login);

export default WrappedLogin;