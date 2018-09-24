import React, { Component } from 'react';
import {  Card, Icon, Carousel, Button, Avatar } from 'antd';
import avatar from 'assets/images/uploads/listing-review-3.png'
// import 'slick-carousel/slick/slick.css'
// import 'slick-carousel/slick/slick-theme.css'
import img1 from 'assets/images/uploads/listing-1.jpg';
import img2 from 'assets/images/uploads/listing-2.jpg';
import img3 from 'assets/images/uploads/listing-3.jpg';

import Rate from './StarRating'

// const img1 = 'https://a0.muscache.com/im/pictures/54b3eadc-e503-41da-a9fe-ba10d20d9aa6.jpg';
// const img2 = 'https://a0.muscache.com/im/pictures/c571ab10-d896-4095-b4be-4e57aa8b43cd.jpg';
// const img3 = 'https://a0.muscache.com/im/pictures/37e211bb-6ef8-44b6-8022-7427e7a241a5.jpg';

const { Meta } = Card;

// import custom arrow

// declare component
const Right = props => (
  <div className="listing-card-right">
    <Button onClick={props.onClick}  className='' ><Icon type="right" /></Button>
  </div>
)

const Left = props => (
    <div className="listing-card-left">
      <Button onClick={props.onClick} ><Icon type="left" /></Button>
    </div>
)

export default class RoomsCard extends Component {

	

    render() {
        return(
            <Card
                hoverable={false}
                // style={{ width: 240 }}
                className="room-card"
                bordered={false}
                cover={
                    <div className="carousel-con">
                    <Carousel lazyLoad effect="fade" arrows draggable nextArrow={<Right />} prevArrow={<Left/>}>
                        <img alt="example" src={img1} />
                        <img alt="example" src={img2} />
                        <img alt="example" src={img3} />
                    </Carousel>
                    <p className="price-tag"><small>$</small>102</p>
                    <p className="room-host"><Avatar size={50} icon="user" /></p>
                    </div>
                }
            >
                
                <h2>Europe Street beat</h2>
                <p className=""><Icon type="global"/> Islamabad Capital Territory,Pakistan.</p>
                <p className=""><b>$102</b> per night free cancelation</p>
                <div className="listing-rating-con"><Rate disabled className="listing-rating" defaultValue={4} /> (31)</div>
            </Card>
										
        );
    }
}
