import {
	AppBar,
	Checkbox,
	makeStyles,
	Slide,
	Slider,
	Tab,
	Tabs,
} from '@material-ui/core';

import React, { useCallback, memo, useState, useEffect } from 'react';

import {
	Button,
	Col,
	Container,
	Dropdown,
	DropdownItem,
	DropdownMenu,
	DropdownToggle,
	ListGroup,
	ListGroupItem,
	Navbar,
	NavItem,
	Row,
	UncontrolledDropdown,
} from 'reactstrap';

import moment from 'moment';
import { CustomCarousel, MyCheckboxList } from '../components';
import '../styles/pageTitle.css';
import '../styles/shopPage.css';
import Icon from '@material-ui/core/Icon';

import { useSelector } from 'react-redux';
import { Rating } from '@material-ui/lab';
import Category from './Category';
import { MDBContainer, MDBInput } from 'mdbreact';
import {
	CATEGORY_LIST,
	ITEMS_ORDER_LIST,
	PHONE_BRAND_LIST,
	ITEM_COLORS,
} from '../constants/constants';
import '../styles/forAll.css';
import CustomRadioButton from '../components/CustomRadioButton';

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
									fontWeight: '300',
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
									fontWeight: '300',
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
									fontWeight: '300',
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
	<Container className="mt-5 pt-5 justify-content-center">
		<h3 className="text-center">Our services</h3>
		<h4 className="text-center my-4">
			Join thousands of satisfied customers using our template globally.
		</h4>
		<Row className="my-5 py-5">
			<Col xl="3" lg="6" className="px-3">
				<Col
					className="button-container-box-shadow pt-3"
					style={{ backgroundColor: '#1E88E5', color: 'white' }}
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
					className="button-container-box-shadow pt-3"
					style={{ backgroundColor: '#1E88E5', color: 'white' }}
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
					className="button-container-box-shadow pt-3"
					style={{ color: 'white', backgroundColor: '#1E88E5' }}
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
					className="button-container-box-shadow pt-3"
					style={{ backgroundColor: '#1E88E5', color: 'white' }}
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
				className="px-3 mb-3 mt-1"
				xl="4"
				xs="4"
				lg="6"
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
								className="button-thin-shadow"
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
								className="button-thin-shadow"
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
			<Row className="title-container">
				<p class="page-title">Shop Page</p>
			</Row>
			{/* <CustomCarousel /> */}
			<section className="shop-container">
				<Container fluid className="w-75">
					<Row>
						<Col lg="3" md="3">
							<FilterPanel />
						</Col>
						<Col lg="9" md="9" classNam="p-0">
							<Row className="m-0 p-0 pt-5">{_renderItems()}</Row>
						</Col>
					</Row>
					<ShopMethod />
				</Container>
			</section>
		</Container>
	);
});
const FilterPanel = () => {
	return (
		<Col className="pt-2">
			<h3>Filter By</h3>
			<ListGroup className="z-depth1">
				<ListGroupItem
					style={{
						fontSize: 15,
						margin: 0,
						justifyContent: 'center',
						alignItems: 'center',
						backgroundColor: '#F5F5F5',
						color: '#4285F4',
					}}
				>
					<h6 className="text-start p-0 m-0">Order by</h6>
				</ListGroupItem>
				<CustomRadioButton items={ITEMS_ORDER_LIST} />
			</ListGroup>
			<ListGroup className="mt-3 z-depth1">
				<ListGroupItem
					style={{
						fontSize: 15,
						margin: 0,
						justifyContent: 'center',
						alignItems: 'center',
						backgroundColor: '#F5F5F5',
						color: '#4285F4',
					}}
				>
					<h6 className="text-start p-0 m-0">Category</h6>
				</ListGroupItem>

				<MyCheckboxList items={CATEGORY_LIST} />
			</ListGroup>
			<ListGroup className="mt-3 z-depth1">
				<ListGroupItem
					style={{
						fontSize: 15,
						margin: 0,
						justifyContent: 'center',
						alignItems: 'center',
						backgroundColor: '#F5F5F5',
						color: '#4285F4',
					}}
				>
					<h6 className="text-start p-0 m-0">Brand</h6>
				</ListGroupItem>
				<MyCheckboxList items={PHONE_BRAND_LIST} />
			</ListGroup>

			<ListGroup className="mt-3 z-depth1">
				<ListGroupItem
					style={{
						fontSize: 15,
						margin: 0,
						justifyContent: 'center',
						alignItems: 'center',
						backgroundColor: '#F5F5F5',
						color: '#4285F4',
					}}
				>
					<h6 className="text-start p-0 m-0">Price</h6>
				</ListGroupItem>

				<ListGroupItem style={{ fontSize: 15, margin: 0 }}>
					<Slider
						valueLabelDisplay="on"
						aria-labelledby="range-slider"
						defaultValue={[10, 50]}
						max={2000}
					/>
				</ListGroupItem>
			</ListGroup>
			<ListGroup className="mt-3 z-depth1">
				<ListGroupItem
					style={{
						fontSize: 15,
						margin: 0,
						flexDirection: 'row',
						justifyContent: 'space-around',
						alignItems: 'center',
						backgroundColor: '#F5F5F5',
						color: '#4285F4',
					}}
				>
					<h6 className="text-start p-0 m-0">Color</h6>
				</ListGroupItem>
				<MyCheckboxList items={ITEM_COLORS} />
			</ListGroup>
			<ListGroup className="mt-3 z-depth1">
				<ListGroupItem
					style={{
						fontSize: 15,
						margin: 0,
						flexDirection: 'row',
						justifyContent: 'space-around',
						alignItems: 'center',
						backgroundColor: '#F5F5F5',
						color: '#4285F4',
					}}
				>
					<h6 className="text-start p-0 m-0">Rating</h6>
				</ListGroupItem>
				<ListGroupItem style={{ fontSize: 15, margin: 0 }}>
					<Row className="align-items-center pl-3 pt-0">
						<MyRating value={5} />
						<p
							style={{
								fontSize: 12,
								textAlign: 'center',

								marginLeft: 10,
								paddingTop: 10,
							}}
						>
							4 start and more
						</p>
					</Row>
					<Row className="align-items-center pl-3 pt-0">
						<MyRating value={4} />
						<p
							style={{
								fontSize: 12,
								textAlign: 'center',

								marginLeft: 10,
								paddingTop: 10,
							}}
						>
							3 to 3.99
						</p>
					</Row>
					<Row className="align-items-center pl-3 pt-0">
						<MyRating value={3} />
						<p
							style={{
								fontSize: 12,
								textAlign: 'center',

								marginLeft: 10,
								paddingTop: 10,
							}}
						>
							3.00 and less
						</p>
					</Row>
				</ListGroupItem>
			</ListGroup>
		</Col>
	);
};

export default ShopPage;
