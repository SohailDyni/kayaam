import React, { Component } from 'react';
import { Layout, Icon, Rate, Row, Col, Card, List } from 'antd';
// import Swiper from 'swiper/dist/js/swiper.esm.bundle';
// import { Swiper, Slide } from 'react-dynamic-swiper'
import Header from 'components/header/rooms-listing/RoomListingHeader'
// import {MainFooter} from 'components/footer'

// import {BookingForm, AvailabilityCalendar} from 'components/rooms'
// import headerImg from 'assets/images/header.jpg';
// import Reviews from 'components/Reviews'
// import Amenities from './Amenities';
import RoomsList from './sections/RoomsList'
import './styles.css'
// import 'react-dynamic-swiper/lib/styles.css'
// import 'react-photoswipe/lib/photoswipe.css';
// import {PhotoSwipeGallery} from 'react-photoswipe';
const { Content } = Layout;


export default class RoomsListing extends Component {
    render() {
        return (
            <Layout className="layout">
				<Header />
				<Content>
                    <div className="main-content has-fixed-header">
                        <div className="container">
                            <RoomsList />
                        </div>   
                    </div>
				</Content>
				{/* <MainFooter /> */}
			</Layout>
        );
    }
}

// export default RoomsListing;