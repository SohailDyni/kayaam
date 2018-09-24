import React, { Component } from 'react';
import { Icon, List, Avatar, Card } from 'antd';
import avatar from 'assets/images/uploads/listing-review-3.png'
import RoomsCard from 'components/RoomCard'

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

export default class RoomsList extends Component {

	

    render() {
        return(
            <List
                grid={{ gutter: 16, column: 4 }}
                dataSource={data}
                renderItem={item => (
                <List.Item>
                    <RoomsCard/>
                </List.Item>
                )}
            />
										
        );
    }
}
