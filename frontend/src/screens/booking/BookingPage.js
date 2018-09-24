import React, { Component } from 'react';
import { Layout, Steps, Button, message } from 'antd';
import Header from 'components/header/MainHeader'
import MianFooter from 'components/footer/MainFooter'

const Step = Steps.Step;

const steps = [{
  title: 'First',
  content: 'First-content',
}, {
  title: 'Second',
  content: 'Second-content',
}, {
  title: 'Last',
  content: 'Last-content',
}];


const { Content, Footer } = Layout;

export default class BookingPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        current: 0,
        };
    }

    next() {
        const current = this.state.current + 1;
        this.setState({ current });
    }

    prev() {
        const current = this.state.current - 1;
        this.setState({ current });
    }

    render() {
        const { current } = this.state;
        return (
            <Layout className="layout">
				<Header />
				<Content>

            	<div className="main-content">
					<div className="container">
                <Steps current={current}>
                    <Step title="Login" />
                    <Step title="Verification"  />
                    <Step title="Pay" />
                </Steps>
                <div className="steps-content">{steps[current].content}</div>
                <div className="steps-action">
                {
                    current < steps.length - 1
                    && <Button type="primary" onClick={() => this.next()}>Next</Button>
                }
                {
                    current === steps.length - 1
                    && <Button type="primary" onClick={() => message.success('Processing complete!')}>Done</Button>
                }
                {
                    current > 0
                    && (
                    <Button style={{ marginLeft: 8 }} onClick={() => this.prev()}>
                    Previous
                    </Button>
                    )
                }
                </div>
            </div>
            </div>
            </Content>
           <MianFooter />
        </Layout>
        );
    }
}
