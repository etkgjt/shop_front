import React, { useCallback, memo, useState } from 'react';

import { Button, Col, Container, Row } from 'reactstrap';
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
import '../styles/material.css';
import Icon from '@material-ui/core/Icon';
import { Rating } from '@material-ui/lab';
import { useSelector } from 'react-redux';
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
	<Container className="justify-content-center">
		<h4 className="text-center" style={{ fontWeight: 'bold', fontSize: 40 }}>
			Our services
		</h4>
		<h4 className="text-center my-4" style={{ fontWeight: '200' }}>
			Join thousands of satisfied customers using our template globally.
		</h4>
		<Row className="my-5 py-5">
			<Col xl="3" lg="6" className="px-3">
				<Col
					className="button-hover-depth3 pt-3"
					style={{ backgroundColor: '#00C851', color: 'white' }}
				>
					<Row className="px-5 mt-2 justify-content-center ">
						<Icon style={{ fontSize: 70, color: 'white' }}>
							local_shipping_rounded
						</Icon>
					</Row>
					<Row className="px-5 mt-4">
						<h5>Shipping</h5>
					</Row>
					<Row className="px-5 mt-2">
						<p>
							aorem ixpsacdolor sit ameasecur adipisicing elitsf edasd.
						</p>
					</Row>
				</Col>
			</Col>
			<Col xl="3" lg="6" className="px-3">
				<Col
					className="button-hover-depth3 pt-3"
					style={{ backgroundColor: '#ff4444', color: 'white' }}
				>
					<Row className="px-5 mt-2 justify-content-center">
						<Icon style={{ fontSize: 70 }}>verified_user</Icon>
					</Row>
					<Row className="px-5 mt-4">
						<h5>Security</h5>
					</Row>
					<Row className="px-5 mt-2">
						<p>
							aorem ixpsacdolor sit ameasecur adipisicing elitsf edasd.
						</p>
					</Row>
				</Col>
			</Col>
			<Col xl="3" lg="6" className="px-3">
				<Col
					className="button-hover-depth3 pt-3"
					style={{ color: 'white', backgroundColor: '#ffbb33' }}
				>
					<Row className="px-5 mt-2 justify-content-center">
						<Icon style={{ fontSize: 70 }}>headset_mic_rounded</Icon>
					</Row>
					<Row className="px-5 mt-4">
						<h5>Good Support</h5>
					</Row>
					<Row className="px-5 mt-2">
						<p>
							aorem ixpsacdolor sit ameasecur adipisicing elitsf edasd.
						</p>
					</Row>
				</Col>
			</Col>
			<Col xl="3" lg="6" className="px-3">
				<Col
					className="button-hover-depth3 pt-3"
					style={{ backgroundColor: '#7E57C3', color: 'white' }}
				>
					<Row className="px-5 mt-2 justify-content-center">
						<Icon style={{ fontSize: 70 }}>cached_two_tone</Icon>
					</Row>
					<Row className="px-5 mt-4">
						<h5>Exchanges</h5>
					</Row>
					<Row className="px-5 mt-2">
						<p>
							aorem ixpsacdolor sit ameasecur adipisicing elitsf edasd.
						</p>
					</Row>
				</Col>
			</Col>
		</Row>
	</Container>
);
const MyRating = ({ value }) => {
	return (
		<Rating size="large" name="size-large" precision={0.5} value={value} />
	);
};
const _renderItems = () => {
	const productsDataRedux = useSelector(
		(state) => state?.shopReducer?.products
	);
	const [data, setData] = useState(productsDataRedux ? productsDataRedux : []);
	let tempArr = [...data];

	return tempArr.splice(0, 6).map((item, idx) => (
		<Col
			className="px-5 my-1 mt-5"
			xl="4"
			lg="4"
			md="6"
			sm="6"
			key={`${item.name}-${idx}`}
		>
			<Col className="button-container-box-shadow">
				<div className="mb-50 text-center single_items bg-primary">
					<img src={item.img}></img>
				</div>
				<Col
					style={{ borderRadius: 5 }}
					className="py-4 d-flex flex-column justify-content-center align-items-center mt-4"
				>
					<p
						className="text-center m-0 my-1"
						style={{ fontWeight: 'bold', color: '#0276D8' }}
					>
						{item?.name}
					</p>
					<p className="text-center m-0 my-1">{`$${item?.price}`}</p>
					<MyRating value={item?.rating} />
					<Row className="justify-content-center mt-2">
						<Button
							style={{
								borderRadius: 20,
								backgroundColor: '#4285F4',
								color: 'white',
								borderWidth: 0,
								marginRight: 20,
								width: 100,
							}}
						>
							Buy Now
						</Button>
						<Button
							style={{
								borderRadius: 20,
								borderWidth: 2,
								borderColor: '#4285F4',
								backgroundColor: 'white',
								color: '#4285F4',
								width: 100,
							}}
						>
							Detail
						</Button>
					</Row>
				</Col>
			</Col>
		</Col>
	));
};

const Intro = () => (
	<Container fluid className="p-0 intro-area-shadow">
		<Container className="intro-area-container w-100 mt-lg-5" fluid>
			<Row className="intro-area">
				<Col xl="6" lg="6" md="4" sm="4">
					<div
						style={{
							width: '100%',
							height: '100%',
							overflow: 'hidden',
						}}
					></div>
				</Col>
				<Col
					xl="6"
					lg="6"
					md="8"
					sm="8"
					className="intro-title-container pt-lg-5"
				>
					<h1 className="hvr-grow">Select your partner</h1>
					<p className="hvr-grow w-75 text-center">
						Ut enim ad minim veniam, quis nostrud exercitation ullamco
						laboris nisi ut aliquip ex ea commodo consequat is aute irure
						Ut enim ad minim veniam, quis nostrud exercitation ullamco
						laboris nisi ut aliquip ex ea commodo consequat is aute irure
						Ut enim ad minim veniam, quis nostrud exercitation ullamco
						laboris nisi ut aliquip ex ea commodo consequat is aute irure
					</p>
				</Col>
			</Row>
		</Container>
	</Container>
);
const NewArrival = () => (
	<Container className="section-padding">
		<Row className="w-100 section-title-container">
			<h2 style={{ textAlign: 'center', fontWeight: '600' }}>
				New Arrivals
			</h2>
		</Row>
		<Row className="w-100 justify-content-center align-items-center mb-5">
			<p className="text-center w-75" style={{ fontWeight: '200' }}>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit fugit,
				error amet numquam iure provident voluptate esse quasi nostrum
				quisquam eum porro a pariatur veniam.
			</p>
		</Row>
		<Row>
			<Col xl="4" lg="4" md="6" sm="6">
				<div
					className="z-depth5"
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
					className="z-depth5"
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
					className="z-depth5"
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
);
const Gallery = () => (
	<Container className="gallery-area p-0 fix mt-5">
		<Row className="w-100 section-title-container">
			<h2 style={{ textAlign: 'center', fontWeight: '600' }}>
				Our Best Seller
			</h2>
		</Row>
		<Row className="w-100 justify-content-center align-items-center mb-5">
			<p className="text-center w-75" style={{ fontWeight: '200' }}>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit fugit,
				error amet numquam iure provident voluptate esse quasi nostrum
				quisquam eum porro a pariatur veniam.
			</p>
		</Row>
		<Row className="gallery-container">
			<Col
				xl="6"
				lg="4"
				md="6"
				sm="6"
				className="justify-content-center align-items-center"
			>
				<div
					className="z-depth5"
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
					className="z-depth5"
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
					className="z-depth5"
					style={{
						width: '100%',
						height: '100%',
						overflow: 'hidden',
					}}
				>
					<div className="gallery3 hvr-shrink" />
				</div>
				<div
					className="z-depth5"
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
);
const Popular = () => (
	<Container className="popular-section-padding">
		<Col className="popular-section-title-container">
			<div className="popular-section-title">
				<h4
					className="popular-section-big-title mb-3"
					style={{ fontSize: 40 }}
				>
					Popular Items
				</h4>
				<p
					style={{
						textAlign: 'center',
						color: '#777777',
						fontWeight: '300',
						fontSize: '16px',
					}}
				>
					Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
					labore et dolore magna aliqua. Quis ipsum suspendisse ultrices
					gravida.
				</p>
			</div>
		</Col>
		<Row>{_renderItems(data)}</Row>
		<Row
			style={{
				justifyContent: 'center',
				alignItems: 'center',
				marginTop: '50px',
			}}
		>
			<Button
				className="view-more-button container-box-shadow w-25"
				style={{ borderWidth: 0, width: 150, height: 70, borderRadius: 35 }}
			>
				<h4 style={{ textAlign: 'center', fontWeight: '600' }}>
					View more product
				</h4>
			</Button>
		</Row>
	</Container>
);
const VideoArea = () => (
	<Container fluid className="video-area p-0 my-5 pt-5">
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
);
const ChoseWatchAd = () => (
	<Container className="watch-area-padding">
		<Row className="choice-container z-depth3 p-5">
			<Col lg="5" md="6" className="px-5">
				<h2 className="choice-title">Watch of Choice</h2>
				<p>
					Enim ad minim veniam, quis nostrud exercitation ullamco laboris
					nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
					reprehenderit in voluptate velit esse.
				</p>
				<Button
					style={{ borderWidth: 0, borderRadius: 50 }}
					className="view-more-button container-box-shadow"
				>
					<h4 style={{ textAlign: 'center', fontWeight: '600' }}>
						View more product
					</h4>
				</Button>
			</Col>
			<Col lg="6" md="6" sm="10">
				<div className="choice-watch-img1" />
			</Col>
		</Row>
		<Row className="choice-container z-depth3 p-5">
			<Col lg="6" md="6" sm="10">
				<div className="choice-watch-img2" />
			</Col>
			<Col lg="5" md="6" className="px-5">
				<h2 className="choice-title">Watch of Choice</h2>
				<p>
					Enim ad minim veniam, quis nostrud exercitation ullamco laboris
					nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
					reprehenderit in voluptate velit esse.
				</p>
				<Button
					style={{ borderWidth: 0, borderRadius: 50 }}
					className="view-more-button container-box-shadow"
				>
					<h4
						style={{
							textAlign: 'center',

							fontSize: 20,
						}}
					>
						View more product
					</h4>
				</Button>
			</Col>
		</Row>
	</Container>
);
const Home = memo(() => {
	console.log('homepage render ne');

	return (
		<Container fluid className="p-0 gradient-background ">
			{/* <CustomCarousel fluid className = "large-margin" /> */}
			<Intro />
			<NewArrival />

			<CustomCarousel />
			<Gallery />
			<Popular />

			<ChoseWatchAd />
			<Container>
				<ShopMethod />
			</Container>
		</Container>
	);
});
export default Home;
