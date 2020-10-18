import { AppBar, makeStyles, Tab, Tabs } from '@material-ui/core';

import React, { useCallback, memo, useState, useEffect } from 'react';

import {
	Button,
	Col,
	Container,
	Dropdown,
	DropdownItem,
	DropdownMenu,
	DropdownToggle,
	Navbar,
	NavItem,
	Row,
	UncontrolledDropdown,
} from 'reactstrap';

import moment from 'moment';
import { CustomCarousel } from '../components';
import '../styles/pageTitle.css';
import '../styles/shopPage.css';
import Icon from '@material-ui/core/Icon';

import { useSelector } from 'react-redux';
import { Rating } from '@material-ui/lab';

const TabBar = ({ onChecked }) => {
	const [value, setValue] = useState(0);

	const handleChange = (event, newValue) => {
		console.log(newValue);
		setValue(() => {
			onChecked(newValue);
			return newValue;
		});
	};

	return (
		<div>
			<AppBar
				position="static"
				color="transparent"
				style={{ boxShadow: null }}
				elevation="0"
			>
				<Tabs value={value} onChange={handleChange}>
					<Tab
						style={{ borderWidth: 0 }}
						label={
							<p
								style={{
									fontSize: 16,
									color: 'black',
								}}
							>
								Newest Arrival
							</p>
						}
					/>
					<Tab
						label={
							<p
								style={{
									fontSize: 16,
									color: 'black',
								}}
							>
								Price High To Low
							</p>
						}
					/>
					<Tab
						label={
							<p
								style={{
									fontSize: 16,
									color: 'black',
								}}
							>
								Most Popular
							</p>
						}
					/>
				</Tabs>
			</AppBar>
		</div>
	);
};
const MyRating = ({ value }) => {
	return (
		<Rating size="large" name="size-large" precision={0.5} value={value} />
	);
};
const ShopMethod = () => (
	// <Row className="shop_method_container box-shadow">
	// 	<Col xl="4" lg="4" md="6" className="p-2 text-white">
	// 		<Row className="px-5 mt-2">
	// 			<Icon style={{ fontSize: 50 }}>local_shipping_rounded</Icon>
	// 		</Row>
	// 		<Row className="px-5 mt-4">
	// 			<h5>Free Shipping Method</h5>
	// 		</Row>
	// 		<Row className="px-5 mt-2">
	// 			<p>aorem ixpsacdolor sit ameasecur adipisicing elitsf edasd.</p>
	// 		</Row>
	// 	</Col>
	// 	<Col xl="4" lg="4" md="6" className="p-2 text-white">
	// 		<Row className="px-5 mt-2">
	// 			<Icon style={{ fontSize: 50 }}>verified_user</Icon>
	// 		</Row>
	// 		<Row className="px-5 mt-4">
	// 			<h5>Secure Payment</h5>
	// 		</Row>
	// 		<Row className="px-5 mt-2">
	// 			<p>aorem ixpsacdolor sit ameasecur adipisicing elitsf edasd.</p>
	// 		</Row>
	// 	</Col>
	// 	<Col xl="4" lg="4" md="6" className="p-2 text-white">
	// 		<Row className="px-5 mt-2">
	// 			<Icon style={{ fontSize: 50 }}>cached_two_tone</Icon>
	// 		</Row>
	// 		<Row className="px-5 mt-4">
	// 			<h5>Refunds and Exchanges</h5>
	// 		</Row>
	// 		<Row className="px-5 mt-2">
	// 			<p>aorem ixpsacdolor sit ameasecur adipisicing elitsf edasd.</p>
	// 		</Row>
	// 	</Col>
	// </Row>
	<Container className="mt-5 pt-5 justify-content-center">
		<h3 className="text-center">Our services</h3>
		<h4 className="text-center my-4">
			Join thousands of satisfied customers using our template globally.
		</h4>
		<Row className="my-5 py-5">
			<Col xl="3" lg="6" className="px-3">
				<Col
					className="service-box-shadow pt-3"
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
					className="service-box-shadow pt-3"
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
					className="service-box-shadow pt-3"
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
					className="service-box-shadow pt-3"
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
const DropDownPicker = ({ setNumOfItems, initNumber }) => {
	const [isOpen, setOpen] = useState(false);
	const _handleChecked = (num) => {
		setOpen((oldValue) => {
			setNumOfItems(num);
			return !oldValue;
		});
	};
	return (
		<Dropdown toggle={setNumOfItems} isOpen={isOpen}>
			<DropdownToggle
				onClick={() => setOpen(!isOpen)}
				caret
				style={{
					backgroundColor: '#ddd',
					borderRadius: 20,
					color: 'black',
				}}
			>
				{`${initNumber * 10} per page`}
			</DropdownToggle>
			<DropdownMenu className="animate slideIn">
				<DropdownItem onClick={() => _handleChecked(1)}>
					10 per page
				</DropdownItem>
				<DropdownItem onClick={() => _handleChecked(2)}>
					20 per page
				</DropdownItem>
				<DropdownItem onClick={() => _handleChecked(3)}>
					30 per page
				</DropdownItem>
				<DropdownItem onClick={() => _handleChecked(4)}>
					40 per page
				</DropdownItem>
			</DropdownMenu>
		</Dropdown>
	);
};

const ShopPage = memo(() => {
	console.log('shopage render ne');
	const [showType, setShowType] = useState(0);
	const [numOfItems, setNumOfItems] = useState(1);
	const _handleSetNumOfItems = (value) => {
		if (parseInt(value)) {
			console.log('Nums of items', value);
			setNumOfItems(value);
		}
	};

	const productsDataRedux = useSelector(
		(state) => state?.shopReducer?.products
	);
	const [data, setData] = useState(productsDataRedux ? productsDataRedux : []);
	useEffect(() => {
		console.log('data ne', productsDataRedux);
		if (productsDataRedux && productsDataRedux.length) {
			setData(productsDataRedux);
		}
	}, [productsDataRedux]);
	const _renderItems = () => {
		let tempArr = [...data];
		if (showType === 0)
			tempArr.sort((a, b) => moment(b).valueOf() - moment(a).valueOf());
		else if (showType === 1) tempArr.sort((a, b) => b.price - a.price);
		else tempArr.sort((a, b) => b.buyingTimes - a.buyingTimes);

		return tempArr.splice(0, numOfItems * 10).map((item, idx) => (
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
						<p className="text-center m-0 my-1">{item?.name}</p>
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
	return (
		<Container fluid className="gradient-background">
			{/* <Row className="title-container">
				<p class="page-title">Shop Page</p>
			</Row> */}
			<CustomCarousel />
			<section className="shop-container">
				<Container>
					<Container fluid className="tabbar_container">
						<TabBar onChecked={setShowType} />
						<DropDownPicker
							initNumber={numOfItems}
							setNumOfItems={(num) => _handleSetNumOfItems(num)}
						/>
					</Container>
					<Row className="mt-5">{_renderItems()}</Row>
					<ShopMethod />
				</Container>
			</section>
		</Container>
	);
});
export default ShopPage;
