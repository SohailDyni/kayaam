import React, { Component } from 'react';
import { Layout, Icon, Rate, Row, Col, Card, Affix } from 'antd';
// import Swiper from 'swiper/dist/js/swiper.esm.bundle';
import { Swiper, Slide } from 'react-dynamic-swiper'
import Header from 'components/header/MainHeader'

import AvailabilityCalendar from 'components/rooms/AvailabilityCalendar'
import BookingForm from './sections/BookingForm'

import headerImg from 'assets/images/header.jpg';
import Reviews from 'components/Reviews'
import Amenities from './sections/Amenities';
import './room-detail.css'
import 'react-dynamic-swiper/lib/styles.css'
import 'react-photoswipe/lib/photoswipe.css';
import {PhotoSwipeGallery} from 'react-photoswipe';

const data = [
	{
	  title: 'Wifi',
	  icon: 'wifi'
	},
	{
	  title: 'Breakfast',
	  icon: 'cofee'
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
const sliderImages = [
	{
		src: require('assets/images/uploads/single-listing-slider-1.jpg'),
		thumbnail: 'http://lorempixel.com/120/90/nightlife/1',
		w: 1200,
		h: 900,
		title: 'Image 1'
	  },
	  {
		src: require('assets/images/uploads/single-listing-slider-2.jpg'),
		thumbnail: 'http://lorempixel.com/120/90/nightlife/2',
		w: 1200,
		h: 900,
		title: 'Image 2'
	  },
	  {
		src: require('assets/images/uploads/single-listing-slider-3.jpg'),
		thumbnail: 'http://lorempixel.com/120/90/nightlife/3',
		w: 1200,
		h: 900,
		title: 'Image 3'
	  },
	  {
		src: require('assets/images/uploads/single-listing-slider-3.jpg'),
		thumbnail: 'http://lorempixel.com/120/90/nightlife/4',
		w: 1200,
		h: 900,
		title: 'Image 4'
	  },
];
const { Content, Footer } = Layout;

export default class RoomDetail extends Component {

	constructor(props) {
		super(props);
		this.state = {
			slides: sliderImages,
			virtualData: {
				slides: [],
			},
			slideIndex: 0,
			isPopupOpen: false,

		}
	}

	componentDidMount() {
		// const self = this;
		// const swiper = new Swiper('.swiper-container', {
		//   // ...
		//   slidesPerColumn: 3,
		// 	virtual: {
		// 		slides: self.state.slides,
		// 		renderExternal(data) {
		// 		// assign virtual slides data
		// 		self.setState({
		// 			virtualData: data,
		// 		});
		// 		}
		// 	},
		// });
	}

	

	getThumbnailContent = (item) => {
		return (
			null
		//   <img />
		);
	}

	openPhotoSwipe = (e) => {
		e.preventDefault();
		const index = parseInt(e.currentTarget.dataset.id);
		// console.log(index)
		// iindex = index
		this.setState({
			slideIndex: index,
		  	isPopupOpen: true,
		});
	};
	
	handlePopupClose = () => {
		this.setState({
			isPopupOpen: false
		});
	};
	

    render() {
		const {virtualData, slides, isPopupOpen, slideIndex} = this.state
		
        return (
            <Layout className="layout">
				<Header />
				<Content>
					{/* <div className="swiper-container">
						<div className="swiper-wrapper">
							{/* It is important to set "left" style prop on every slide */}
							{/* {this.state.virtualData.slides.map((slide, index) => (
							// <div className="swiper-slide"
							// 	key={index}
							// 	style={{left: `${virtualData.offset}px`}}
							// >{slide}</div>
							<figure className="swiper-slide" key={index}>
								<a
								href="assets/images/uploads/single-listing-slider-1.jpg"
								data-width="675"
								data-height="450"
								className="js-gallery-link"
								>
								<img src={slide} alt="Single Listing Image" />
								</a>
							</figure>
							))} */}
						{/* </div> */}
					{/* </div> */} 
					<Swiper
						swiperOptions={{
							slidesPerView: 'auto',
							slidesPerView: 3
						}}
						// nextButton={<MyNextButton/>}
						// prevButton={swiper => <MyPrevButton onClick={() => swiper.slideNext()} />}
						// onTouchMove={(swiper, event) => doSomething()}
					>
						{slides.map((slide, index) => (
						<Slide key={index}>
							<a
								href="assets/images/uploads/single-listing-slider-1.jpg"
								data-width="675"
								data-height="450"
								className="js-gallery-link"
								onClick={this.openPhotoSwipe}
								data-id={index}
								>
								<img src={slide.src} alt="Single Listing Image" />
							</a>
						</Slide>
						))}
					</Swiper>
					{isPopupOpen && <PhotoSwipeGallery 
						items={slides} 
						options={{index: slideIndex}} 
						thumbnailContent={this.getThumbnailContent}
						isOpen={isPopupOpen}
						onClose={this.handlePopupClose}
						// thumbnailContent={null}
					/>}
					<div className="main-content">
						<div className="container">
							{/* <Layout>
								<Content>

								</Content>
								<Sider width={200}>right sidebar</Sider>

							</Layout> */}
							<Row gutter={16}>
								<Col span={16}>
									<section id="intro">
										<Card className="listing-intro" >
											<h1>Pizza Prizm House</h1>
											<p><Icon type="pushpin" />2726 Shinn Street, New York</p>
											<div className="rating-con"><Rate disabled defaultValue={4} character={<Icon type="star" className="listing-stars" />} /> 31</div>
										</Card>
									</section>
									
									<section id="description">
										<Card title="Description" bordered={false}>
											<p>At Vero Eos Et Accusamus Et Iusto Odio Dignissimos Ducimus Qui Blanditiis Praesentium Voluptatum Deleniti Atque Corrupti Quos Dolores Et Quas Molestias Excepturi Sint Occaecati Cupiditate Non Provident, Similique Sunt In Culpa Qui Officia Deserunt Mollitia Animi, Id Est Laborum Et Dolorum Fuga. Et Harum Quidem Rerum Facilis Est Et Expedita Distinctio.At Vero Eos Et Accusamus Et Iusto Odio Dignissimos Ducimus Qui Blanditiis Praesentium Voluptatum Deleniti Atque Corrupti Quos Dolores Et Quas Molestias Excepturi Sint Occaecati Cupiditate Non Provident, Similique Sunt In Culpa Qui Officia Deserunt Mollitia Animi, Id Est Laborum Et Dolorum Fuga.</p>
										</Card>
									</section>

									<section id="amenities">
										<Card title="Amenities">
											<Amenities />
										</Card>
									</section>

									<section id="reviews">
										<Card title="Reviews" bordered={false}>
											<Reviews />
										</Card>
									</section>

									<section id="availability">
										<Card title="Availability" bordered={false}>
											<p>Updated 2 days ago</p>
											<AvailabilityCalendar />
										</Card>
									</section>
								</Col>
								{/* sidebar */}
								<Col span={8}>
									<section id="booking">
									<Affix offsetTop={100} onChange={affixed => console.log(affixed)}>

										<Card title={<span><Icon type="calendar" />Book A Reservation</span>} avatar={<Icon type="pushpin" />}>
											<BookingForm />
										</Card>
									</Affix>
									</section>
								</Col>
							</Row>

						</div>
					</div>
				</Content>
				<Footer style={{ textAlign: 'center' }}>
					Ant Design ©2018 Created by Ant UED
				</Footer>
			</Layout>
        );
    }
}

// const WrappedTimeRelatedForm = Form.create()(TimeRelatedForm);


const styles = {
	heroImg: {
		background: `url(${headerImg})`,
		height: '100vh',
		width: '100vw',
	},
	service1: {
		background: "url('http://pakiholic.com/wp-content/uploads/2018/03/maxresdefault-1-2.jpg')",
		marginBottom: '8px',
	},
	service12: {
		background: "url('http://pakiholic.com/wp-content/uploads/2018/03/maxresdefault-1-2.jpg')",
		marginTop: '8px',
	},
	service2: {
		background: "url('http://haintheme.com/demo/html/listiry/assets/images/uploads/paris-2.jpg')"
	},
	
}
// export default RoomDetail;