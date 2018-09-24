import React, { Component } from 'react';
import RangeCalendar from 'rc-calendar/lib/RangeCalendar';
import 'rc-calendar/assets/index.css';

const formatStr = 'YYYY-MM-DD HH:mm:ss';


class RangePicker extends Component {

    onStandaloneChange = (value)=> {
        console.log(value);
    }

    render() {
        return (
            <RangeCalendar
                showToday={false}
                showWeekNumber
                dateInputPlaceholder={['start', 'end']}
                showOk={false}
                showClear
                format={formatStr}
                onChange={this.onStandaloneChange}
                // onSelect={onStandaloneSelect}
                // disabledDate={disabledDate}
                // timePicker={timePickerElement}
                // disabledTime={disabledTime}
                // renderFooter={() => <span>extra footer</span>}
            />
        );
    }
}

export default RangePicker;