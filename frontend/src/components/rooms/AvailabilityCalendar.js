import React, { Component } from 'react';
import {Calendar} from 'antd';


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

export default class AvailabilityCalendar extends Component {

	
    onPanelChange(value, mode) {
        console.log(value, mode);
    }

    render() {
        return(
            <div style={{ width: 300, border: '1px solid #d9d9d9', borderRadius: 4 }}>
                <Calendar fullscreen={false} onPanelChange={this.onPanelChange} />
            </div>
        );
    }
}
