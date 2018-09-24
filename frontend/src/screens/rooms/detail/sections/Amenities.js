import React, { Component } from 'react';
import { Icon, List } from 'antd';


const data = [
	{
	  title: 'Wifi',
	  icon: 'wifi'
	},
	{
	  title: 'Breakfast',
	  icon: 'coffee'
	},
	{
	  title: 'Car',
	  icon: 'car'

	},
	{
	  title: 'USB',
	  icon: 'usb'

	},
];

export default class Amenities extends Component {

	

    render() {
        return(
            <List
                grid={{ gutter: 16, column: 2 }}
                dataSource={data}
                renderItem={item => (
                <List.Item>
                    <p className="amenity"><Icon type={item.icon}/><span>{item.title}</span></p>
                </List.Item>
                )}
            />
										
        );
    }
}
