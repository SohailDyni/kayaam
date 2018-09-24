import React, { Component } from 'react';
import { Layout, Menu, Button, Dropdown, List, Popover, Checkbox } from 'antd';
import './styles.css';
import RangePicker from '../../RangePicker'
// import Login from './Login'
import IncDecButtons from 'components/IncDecButtons'
const { Header } = Layout;

class GuestsPicker extends React.PureComponent{
    render(){
        return(
            <List     itemLayout="horizontal"
            >
                <List.Item>
                    <IncDecButtons title="test" />
                </List.Item>

                <List.Item>
                    <IncDecButtons title="test" />
                </List.Item>

                <List.Item>
                    <IncDecButtons title="test" />
                </List.Item>

            </List>
        )
    }
}

class RoomTypesPicker extends React.PureComponent{
    render(){
        return(
            <List     itemLayout="horizontal"
            >
                <List.Item>
                     <Checkbox>
                        <h4>Entire Place <br/><small>Have a place to yourself</small></h4>
                    </Checkbox>

                </List.Item>

                <List.Item>
                     <Checkbox>Checkbox</Checkbox>

                </List.Item>

                <List.Item>
                     <Checkbox>Checkbox</Checkbox>

                </List.Item>

            </List>
        )
    }
}

class RoomListingHeader extends Component {
    render() {
        return (
            <Header className="top-fixed-header">
                <div className="main-menu bg-primary">
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
                        {/* <Menu.Item key="3" onClick={this.onLoginPress}>Login</Menu.Item> */}
                        {/* <Login visible={this.state.loginModel} onLoginClose={this.onLoginPress}/> */}
                    </Menu>

                </div>
                <div className="filters">
                    <Dropdown overlay={<RangePicker />} trigger="click">
                        <Button>Dates</Button>
                    </Dropdown>

                    <Popover content={<GuestsPicker />} trigger="click">
                        <Button>Guests</Button>
                    </Popover>

                    <Popover content={<RoomTypesPicker />} trigger="click">
                        <Button className="filters-btn">Room Type</Button>
                    </Popover>

                    <Button className="filters-btn">Price</Button>
                </div>
            </Header>
        );
    }
}

export default RoomListingHeader;