import React, { Component } from 'react';
import { Layout, Menu } from 'antd';
import './MainHeader.css';
import Login from './Login'
const { Header } = Layout;

export default class MainHeader extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            loginModel: false
        }
    }

    onLoginPress = () => this.setState(prevState => {
        return {
            loginModel: !prevState.loginModel
        }
    })
    
    render() {
        return (
            <Header className="top-fixed-header">
                <div className="logo" >
                    <img src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg" alt=""/>
                </div>
                <Menu
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={['2']}
                    className="top-header-menu"
                >
                    <Menu.Item key="1">nav 1</Menu.Item>
                    <Menu.Item key="2">nav 2</Menu.Item>
                    <Menu.Item key="3" onClick={this.onLoginPress}>Login</Menu.Item>
                    <Login visible={this.state.loginModel} onLoginClose={this.onLoginPress}/>
                </Menu>
            </Header>
        );
    }
}

// export default MainHeader;