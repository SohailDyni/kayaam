import React, { Component } from 'react';
import { Icon, List, Avatar } from 'antd';
import avatar from 'assets/images/uploads/listing-review-3.png'

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

export default class Reviews extends Component {

	

    render() {
        return(
            <List
                itemLayout="vertical"
                dataSource={data}
                className="reviews-list"
                renderItem={item => (
                <List.Item>
                    <List.Item.Meta
                    avatar={<Avatar src={avatar}/>}
                    title={<a href="https://ant.design">{item.title}</a>}
                    description="July 2009"
                    />
                    We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.
                </List.Item>
                )}
            />
										
        );
    }
}
