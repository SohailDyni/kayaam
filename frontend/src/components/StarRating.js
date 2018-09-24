import React, { PureComponent } from 'react';
import {  Rate, Icon } from 'antd';

class StarRating extends PureComponent {
    render() {
        return (
            <Rate {...this.props}character={<Icon type="star" className="listing-stars" />} />
        );
    }
}

export default StarRating;