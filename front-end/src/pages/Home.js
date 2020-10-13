import React, { useCallback, memo, useState } from 'react';

import { Col, Container, Row } from 'reactstrap';
import { CustomCarousel } from '../components';
import {
	popular1,
	popular2,
	popular3,
	popular4,
	popular5,
	popular6,
	gallery1,
	gallery2,
	gallery3,
	gallery4,
	newProduct1,
	newProduct2,
	newProduct3,
	watch,
} from '../assets';

import '../styles/pageTitle.css';
import '../styles/home.css';
import '../styles/shopPage.css';
import Icon from '@material-ui/core/Icon';
const data = [
	{
		name: 'Thermo Ball Etip Gloves',
		price: 20,
		img: popular1,
		dateArrive: '2019-05-29',
		buyingTimes: 9,
	},
	{
		name: 'Thermo Ball Etip Gloves',
		price: 30.5,
		img: popular2,
		dateArrive: '2020-10-12',
		buyingTimes: 20,
	},

	{
		name: 'Thermo Ball Etip Gloves',
		price: 292,
		img: popular3,
		dateArrive: '2020-01-12',
		buyingTimes: 18,
	},

	{
		name: 'Thermo Ball Etip Gloves',
		price: 421,
		img: popular4,
		dateArrive: '2019-12-02',
		buyingTimes: 5,
	},

	{
		name: 'Thermo Ball Etip Gloves',
		price: 220,
		img: popular5,
		dateArrive: '2020-03-25',
		buyingTimes: 2,
	},

	{
		name: 'Thermo Ball Etip Gloves',
		price: 201,
		img: popular6,
		dateArrive: '2020-10-08',
		buyingTimes: 80,
	},
];
const ShopMethod = () => (
	<Row className="shop_method_container">
		<Col xl="4" lg="4" md="6" className="p-2 text-white">
			<Row className="px-5 mt-2">
				<Icon style={{ fontSize: 50 }}>local_shipping_rounded</Icon>
			</Row>
			<Row className="px-5 mt-4">
				<h5>Free Shipping Method</h5>
			</Row>
			<Row className="px-5 mt-2">
				<p>aorem ixpsacdolor sit ameasecur adipisicing elitsf edasd.</p>
			</Row>
		</Col>
		<Col xl="4" lg="4" md="6" className="p-2 text-white">
			<Row className="px-5 mt-2">
				<Icon style={{ fontSize: 50 }}>verified_user</Icon>
			</Row>
			<Row className="px-5 mt-4">
				<h5>Secure Payment</h5>
			</Row>
			<Row className="px-5 mt-2">
				<p>aorem ixpsacdolor sit ameasecur adipisicing elitsf edasd.</p>
			</Row>
		</Col>
		<Col xl="4" lg="4" md="6" className="p-2 text-white">
			<Row className="px-5 mt-2">
				<Icon style={{ fontSize: 50 }}>cached_two_tone</Icon>
			</Row>
			<Row className="px-5 mt-4">
				<h5>Refunds and Exchanges</h5>
			</Row>
			<Row className="px-5 mt-2">
				<p>aorem ixpsacdolor sit ameasecur adipisicing elitsf edasd.</p>
			</Row>
		</Col>
	</Row>
);
const _renderItems = (data) => {
	let tempArr = [...data];

	return tempArr.map((item, idx) => (
		<Col
			className="px-5 my-1"
			xl="4"
			lg="4"
			md="6"
			sm="6"
			key={`${item.name}-${idx}`}
		>
			<div className="mb-50 text-center single_items">
				<div className="item_img">
					<img src={item.img}></img>
					<div className="img_cap">
						<p>Add to cart</p>
					</div>
				</div>
				<div className="item_caption">
					<h4>{item.name}</h4>
					<span>{`$ ${item.price}`}</span>
				</div>
			</div>
		</Col>
	));
};
const Home = memo(() => {
	console.log('homepage render ne');

	return (
		<Container fluid className="p-0">
			{/* <CustomCarousel fluid className = "large-margin" /> */}
			<Container fluid style={{ backgroundColor: '#f0f0f2' }}>
				<Container className="intro-area-container">
					<Row className="intro-area">
						<Col
							xl="8"
							lg="8"
							md="8"
							sm="8"
							className="intro-title-container"
						>
							<h1>Select your new perfect style</h1>
							<p>
								Ut enim ad minim veniam, quis nostrud exercitation
								ullamco laboris nisi ut aliquip ex ea commodo consequat
								is aute irure.
							</p>
						</Col>
						<Col xl="3" lg="3" md="4" sm="4">
							<img src={watch}></img>
						</Col>
					</Row>
				</Container>
			</Container>
			<Container className="section-padding">
				<Row className="section-title-container">
					<h2 className="section-title">New Arrivals</h2>
				</Row>
				<Row>
					<Col xl="4" lg="4" md="6" sm="6">
						<div
							style={{
								width: '100%',
								height: '100%',
								overflow: 'hidden',
							}}
						>
							<img src={newProduct1} className="hvr-grow" />
						</div>
					</Col>
					<Col xl="4" lg="4" md="6" sm="6">
						<div
							style={{
								width: '100%',
								height: '100%',
								overflow: 'hidden',
							}}
						>
							<img src={newProduct2} className="hvr-grow" />
						</div>
					</Col>
					<Col xl="4" lg="4" md="6" sm="6">
						<div
							style={{
								width: '100%',
								height: '100%',
								overflow: 'hidden',
							}}
						>
							<img src={newProduct3} className="hvr-grow" />
						</div>
					</Col>
				</Row>
			</Container>
			<Container fluid className="gallery-area p-0 fix">
				<Row className="gallery-container">
					<Col
						xl="6"
						lg="4"
						md="6"
						sm="6"
						className="justify-content-center align-items-center"
					>
						<div
							style={{
								width: '100%',
								height: '100%',
								overflow: 'hidden',
							}}
						>
							<div className="gallery1 hvr-shrink" />
						</div>
					</Col>
					<Col xl="3" lg="4" md="6" sm="6">
						<div
							style={{
								width: '100%',
								height: '100%',
								overflow: 'hidden',
							}}
						>
							<div className="gallery2 hvr-shrink" />
						</div>
					</Col>
					<Col
						xl="3"
						lg="4"
						md="12"
						className="d-flex flex-column justify-content-around"
					>
						<div
							style={{
								width: '100%',
								height: '100%',
								overflow: 'hidden',
							}}
						>
							<div className="gallery3 hvr-shrink" />
						</div>
						<div
							style={{
								width: '100%',
								height: '100%',
								overflow: 'hidden',
								marginTop: '20px',
							}}
						>
							<div className="gallery4 hvr-shrink" />
						</div>
					</Col>
				</Row>
			</Container>
			<Container className="popular-section-padding">
				<Col className="popular-section-title-container">
					<div className="popular-section-title">
						<h2 className="popular-section-big-title">Popular Items</h2>
						<p
							style={{
								textAlign: 'center',
								color: '#777777',
								fontWeight: '500',
								fontSize: '16px',
							}}
						>
							Consectetur adipiscing elit, sed do eiusmod tempor
							incididunt ut labore et dolore magna aliqua. Quis ipsum
							suspendisse ultrices gravida.
						</p>
					</div>
				</Col>
				<Row>{_renderItems(data)}</Row>
				<Row
					style={{
						justifyContent: 'center',
						alignItems: 'center',
						marginTop: '30px',
					}}
				>
					<div className="view-more-button hvr-sweep-to-right">
						<h4 style={{ textAlign: 'center', fontWeight: '600' }}>
							View more product
						</h4>
					</div>
				</Row>
			</Container>
			<Container fluid className="video-area p-0 my-5">
				<div className="video-background">
					<div className="play-button border">
						<Icon style={{ fontSize: 50 }}>play_arrow_rounded</Icon>
					</div>
					<div className="more-info">
						<h5>NEXT VIDEO</h5>
						<Icon style={{ fontSize: 40 }}>arrow_forward</Icon>
					</div>
				</div>
			</Container>

			<Container className="watch-area-padding">
				<Row className="choice-container">
					<Col lg="5" md="6" className="px-5">
						<h2 className="choice-title">Watch of Choice</h2>
						<p>
							Enim ad minim veniam, quis nostrud exercitation ullamco
							laboris nisi ut aliquip ex ea commodo consequat. Duis aute
							irure dolor in reprehenderit in voluptate velit esse.
						</p>
						<div className="view-more-button hvr-sweep-to-right">
							<h4 style={{ textAlign: 'center', fontWeight: '600' }}>
								Show Watch
							</h4>
						</div>
					</Col>
					<Col lg="6" md="6" sm="10">
						<div className="choice-watch-img1" />
					</Col>
				</Row>
				<Row className="choice-container">
					<Col lg="6" md="6" sm="10">
						<div className="choice-watch-img2" />
					</Col>
					<Col lg="5" md="6" className="px-5">
						<h2 className="choice-title">Watch of Choice</h2>
						<p>
							Enim ad minim veniam, quis nostrud exercitation ullamco
							laboris nisi ut aliquip ex ea commodo consequat. Duis aute
							irure dolor in reprehenderit in voluptate velit esse.
						</p>
						<div className="view-more-button hvr-sweep-to-right">
							<h4 style={{ textAlign: 'center', fontWeight: '600' }}>
								Show Watch
							</h4>
						</div>
					</Col>
				</Row>
			</Container>

			<Container>
				<ShopMethod />
			</Container>
		</Container>
	);
});
export default Home;
