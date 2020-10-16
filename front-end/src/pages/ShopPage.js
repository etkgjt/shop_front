import { AppBar, makeStyles, Tab, Tabs } from '@material-ui/core';

import React, { useCallback, memo, useState } from 'react';

import {
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
import pics1 from '../assets/popular1.png';
import pics2 from '../assets/popular2.png';
import pics3 from '../assets/popular3.png';
import pics4 from '../assets/popular4.png';
import pics5 from '../assets/popular5.png';
import pics6 from '../assets/popular6.png';

const data = [
	{
		name: 'Thermo Ball Etip Gloves',
		price: 20,
		img: pics1,
		dateArrive: '2019-05-29',
		buyingTimes: 9,
	},
	{
		name: 'Thermo Ball Etip Gloves',
		price: 30.5,
		img: pics2,
		dateArrive: '2020-10-12',
		buyingTimes: 20,
	},

	{
		name: 'Thermo Ball Etip Gloves',
		price: 292,
		img: pics3,
		dateArrive: '2020-01-12',
		buyingTimes: 18,
	},

	{
		name: 'Thermo Ball Etip Gloves',
		price: 421,
		img: pics4,
		dateArrive: '2019-12-02',
		buyingTimes: 5,
	},

	{
		name: 'Thermo Ball Etip Gloves',
		price: 220,
		img: pics5,
		dateArrive: '2020-03-25',
		buyingTimes: 2,
	},

	{
		name: 'Thermo Ball Etip Gloves',
		price: 201,
		img: pics6,
		dateArrive: '2020-10-08',
		buyingTimes: 80,
	},
	{
		name: 'Thermo Ball Etip Gloves',
		price: 20,
		img: pics1,
		dateArrive: '2019-05-29',
		buyingTimes: 9,
	},
	{
		name: 'Thermo Ball Etip Gloves',
		price: 30.5,
		img: pics2,
		dateArrive: '2020-10-12',
		buyingTimes: 20,
	},

	{
		name: 'Thermo Ball Etip Gloves',
		price: 292,
		img: pics3,
		dateArrive: '2020-01-12',
		buyingTimes: 18,
	},

	{
		name: 'Thermo Ball Etip Gloves',
		price: 421,
		img: pics4,
		dateArrive: '2019-12-02',
		buyingTimes: 5,
	},

	{
		name: 'Thermo Ball Etip Gloves',
		price: 220,
		img: pics5,
		dateArrive: '2020-03-25',
		buyingTimes: 2,
	},

	{
		name: 'Thermo Ball Etip Gloves',
		price: 201,
		img: pics6,
		dateArrive: '2020-10-08',
		buyingTimes: 80,
	},
	{
		name: 'Thermo Ball Etip Gloves',
		price: 20,
		img: pics1,
		dateArrive: '2019-05-29',
		buyingTimes: 9,
	},
	{
		name: 'Thermo Ball Etip Gloves',
		price: 30.5,
		img: pics2,
		dateArrive: '2020-10-12',
		buyingTimes: 20,
	},

	{
		name: 'Thermo Ball Etip Gloves',
		price: 292,
		img: pics3,
		dateArrive: '2020-01-12',
		buyingTimes: 18,
	},

	{
		name: 'Thermo Ball Etip Gloves',
		price: 421,
		img: pics4,
		dateArrive: '2019-12-02',
		buyingTimes: 5,
	},

	{
		name: 'Thermo Ball Etip Gloves',
		price: 220,
		img: pics5,
		dateArrive: '2020-03-25',
		buyingTimes: 2,
	},

	{
		name: 'Thermo Ball Etip Gloves',
		price: 201,
		img: pics6,
		dateArrive: '2020-10-08',
		buyingTimes: 80,
	},
	{
		name: 'Thermo Ball Etip Gloves',
		price: 20,
		img: pics1,
		dateArrive: '2019-05-29',
		buyingTimes: 9,
	},
	{
		name: 'Thermo Ball Etip Gloves',
		price: 30.5,
		img: pics2,
		dateArrive: '2020-10-12',
		buyingTimes: 20,
	},

	{
		name: 'Thermo Ball Etip Gloves',
		price: 292,
		img: pics3,
		dateArrive: '2020-01-12',
		buyingTimes: 18,
	},

	{
		name: 'Thermo Ball Etip Gloves',
		price: 421,
		img: pics4,
		dateArrive: '2019-12-02',
		buyingTimes: 5,
	},

	{
		name: 'Thermo Ball Etip Gloves',
		price: 220,
		img: pics5,
		dateArrive: '2020-03-25',
		buyingTimes: 2,
	},

	{
		name: 'Thermo Ball Etip Gloves',
		price: 201,
		img: pics6,
		dateArrive: '2020-10-08',
		buyingTimes: 80,
	},
	{
		name: 'Thermo Ball Etip Gloves',
		price: 20,
		img: pics1,
		dateArrive: '2019-05-29',
		buyingTimes: 9,
	},
	{
		name: 'Thermo Ball Etip Gloves',
		price: 30.5,
		img: pics2,
		dateArrive: '2020-10-12',
		buyingTimes: 20,
	},

	{
		name: 'Thermo Ball Etip Gloves',
		price: 292,
		img: pics3,
		dateArrive: '2020-01-12',
		buyingTimes: 18,
	},

	{
		name: 'Thermo Ball Etip Gloves',
		price: 421,
		img: pics4,
		dateArrive: '2019-12-02',
		buyingTimes: 5,
	},

	{
		name: 'Thermo Ball Etip Gloves',
		price: 220,
		img: pics5,
		dateArrive: '2020-03-25',
		buyingTimes: 2,
	},

	{
		name: 'Thermo Ball Etip Gloves',
		price: 201,
		img: pics6,
		dateArrive: '2020-10-08',
		buyingTimes: 80,
	},
	{
		name: 'Thermo Ball Etip Gloves',
		price: 20,
		img: pics1,
		dateArrive: '2019-05-29',
		buyingTimes: 9,
	},
	{
		name: 'Thermo Ball Etip Gloves',
		price: 30.5,
		img: pics2,
		dateArrive: '2020-10-12',
		buyingTimes: 20,
	},

	{
		name: 'Thermo Ball Etip Gloves',
		price: 292,
		img: pics3,
		dateArrive: '2020-01-12',
		buyingTimes: 18,
	},

	{
		name: 'Thermo Ball Etip Gloves',
		price: 421,
		img: pics4,
		dateArrive: '2019-12-02',
		buyingTimes: 5,
	},

	{
		name: 'Thermo Ball Etip Gloves',
		price: 220,
		img: pics5,
		dateArrive: '2020-03-25',
		buyingTimes: 2,
	},

	{
		name: 'Thermo Ball Etip Gloves',
		price: 201,
		img: pics6,
		dateArrive: '2020-10-08',
		buyingTimes: 80,
	},
	{
		name: 'Thermo Ball Etip Gloves',
		price: 20,
		img: pics1,
		dateArrive: '2019-05-29',
		buyingTimes: 9,
	},
	{
		name: 'Thermo Ball Etip Gloves',
		price: 30.5,
		img: pics2,
		dateArrive: '2020-10-12',
		buyingTimes: 20,
	},

	{
		name: 'Thermo Ball Etip Gloves',
		price: 292,
		img: pics3,
		dateArrive: '2020-01-12',
		buyingTimes: 18,
	},

	{
		name: 'Thermo Ball Etip Gloves',
		price: 421,
		img: pics4,
		dateArrive: '2019-12-02',
		buyingTimes: 5,
	},

	{
		name: 'Thermo Ball Etip Gloves',
		price: 220,
		img: pics5,
		dateArrive: '2020-03-25',
		buyingTimes: 2,
	},

	{
		name: 'Thermo Ball Etip Gloves',
		price: 201,
		img: pics6,
		dateArrive: '2020-10-08',
		buyingTimes: 80,
	},
	{
		name: 'Thermo Ball Etip Gloves',
		price: 20,
		img: pics1,
		dateArrive: '2019-05-29',
		buyingTimes: 9,
	},
	{
		name: 'Thermo Ball Etip Gloves',
		price: 30.5,
		img: pics2,
		dateArrive: '2020-10-12',
		buyingTimes: 20,
	},

	{
		name: 'Thermo Ball Etip Gloves',
		price: 292,
		img: pics3,
		dateArrive: '2020-01-12',
		buyingTimes: 18,
	},

	{
		name: 'Thermo Ball Etip Gloves',
		price: 421,
		img: pics4,
		dateArrive: '2019-12-02',
		buyingTimes: 5,
	},

	{
		name: 'Thermo Ball Etip Gloves',
		price: 220,
		img: pics5,
		dateArrive: '2020-03-25',
		buyingTimes: 2,
	},

	{
		name: 'Thermo Ball Etip Gloves',
		price: 201,
		img: pics6,
		dateArrive: '2020-10-08',
		buyingTimes: 80,
	},
];

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
const ShopMethod = () => (
	<Row className="shop_method_container box-shadow">
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
				<div className="mb-50 text-center single_items box-shadow">
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
	return (
		<Container fluid>
			<Row className="title-container">
				<p class="page-title">Shop Page</p>
			</Row>
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
