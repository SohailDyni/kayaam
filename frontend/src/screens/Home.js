import React, { Component } from 'react';
import { Layout, Breadcrumb, Row, Col } from 'antd';
import {MainHeader} from 'components/header'
import headerImg from 'assets/images/header.jpg';
import './HomeStyles.css'
const { Content, Footer } = Layout;

export class Home extends Component {
    render() {
        return (
            <Layout className="layout">
				<MainHeader />
				<Content>
					<div className="home-slider bg-img" style={styles.heroImg}>
					</div>
					<div className="container">
						<section id="services" className="narrow-section">
							<Row gutter={16}>
								<Col span={12}>
									<Row>
										<div className="service-home-con bg-img" style={styles.service1}>
											<div className="service-gradient">
											</div>
											<h1>Hotel</h1>
										</div>
									</Row>
									<Row>
										<div className="service-home-con bg-img" style={styles.service12}>
											<div className="service-gradient">
												<h1>Hotel</h1>
											</div>
										</div>
									</Row>
								</Col>
								<Col span={12}>
									<div className="service-home-con1 bg-img" style={styles.service2}>
										<div className="service-gradient">
											<h1>Hotel</h1>
										</div>
									</div>
								</Col>
							</Row>
						</section>
					</div>
					{/* <Breadcrumb style={{ margin: '16px 0' }}>
						<Breadcrumb.Item>Home</Breadcrumb.Item>
						<Breadcrumb.Item>List</Breadcrumb.Item>
						<Breadcrumb.Item>App</Breadcrumb.Item>
					</Breadcrumb> */}
					{/* <div style={{ background: home-slider '#fff', padding: 24, minHeight: 280 }}>Content</div> */}
				</Content>
				<Footer style={{ textAlign: 'center' }}>
					Ant Design ©2018 Created by Ant UED
				</Footer>
			</Layout>
        );
    }
}

const styles = {
	heroImg: {
		background: `url(${headerImg})`,
		height: '100vh',
		width: '100vw',
	},
	service1: {
		background: "url('http://pakiholic.com/wp-content/uploads/2018/03/maxresdefault-1-2.jpg')",
		marginBottom: '8px',
	},
	service12: {
		background: "url('http://pakiholic.com/wp-content/uploads/2018/03/maxresdefault-1-2.jpg')",
		marginTop: '8px',
	},
	service2: {
		background: "url('http://haintheme.com/demo/html/listiry/assets/images/uploads/paris-2.jpg')"
	},
	
}
// export c Home;