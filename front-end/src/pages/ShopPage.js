import { AppBar, makeStyles, Tab, Tabs } from '@material-ui/core';

import React, { useCallback, memo, useState } from 'react';

import {
	Col,
	Container,
	DropdownItem,
	DropdownMenu,
	DropdownToggle,
	Navbar,
	NavItem,
	Row,
	UncontrolledDropdown,
} from 'reactstrap';
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
	{ name: 'Thermo Ball Etip Gloves', price: 20, img: pics1 },
	{ name: 'Thermo Ball Etip Gloves', price: 30.5, img: pics2 },

	{ name: 'Thermo Ball Etip Gloves', price: 292, img: pics3 },

	{ name: 'Thermo Ball Etip Gloves', price: 421, img: pics4 },

	{ name: 'Thermo Ball Etip Gloves', price: 220, img: pics5 },

	{ name: 'Thermo Ball Etip Gloves', price: 201, img: pics6 },
];
const useStyles = makeStyles((theme) => ({
	tabBarLabel: {
		fontSize: 16,
		backgroundColor: 'red',
	},
}));
const TabBar = ({ styles }) => {
	const [value, setValue] = React.useState(0);

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	return (
		<div className={styles.root}>
			<AppBar
				position="static"
				color="transparent"
				style={{ boxShadow: null }}
				elevation="0"
			>
				<Tabs value={value} onChange={handleChange}>
					<Tab
						label={
							<p
								style={{
									fontSize: 16,
									color: 'black',
									fontFamily: '',
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
	<Row className="shop_method_container">
		<Col xl="4" lg="4" md="6" className="p-2 text-white">
			<Row className="px-5 mt-2">
				<Icon style={{ fontSize: 50 }}>verified_user</Icon>
			</Row>
			<Row className="px-5 mt-4">
				<h5>Free Shipping Method</h5>
			</Row>
			<Row className="px-5 mt-2">
				<p>Free Shipping Method</p>
				<p>Free Shipping Method</p>
				<p>Free Shipping Method</p>
			</Row>
		</Col>
		<Col xl="4" lg="4" md="6" className="p-2 text-white">
			<Row className="px-5 mt-2">
				<Icon style={{ fontSize: 50 }}>verified_user</Icon>
			</Row>
			<Row className="px-5 mt-4">
				<h5>Free Shipping Method</h5>
			</Row>
			<Row className="px-5 mt-2">
				<p>Free Shipping Method</p>
				<p>Free Shipping Method</p>
				<p>Free Shipping Method</p>
			</Row>
		</Col>
		<Col xl="4" lg="4" md="6" className="p-2 text-white">
			<Row className="px-5 mt-2">
				<Icon style={{ fontSize: 50 }}>verified_user</Icon>
			</Row>
			<Row className="px-5 mt-4">
				<h5>Free Shipping Method</h5>
			</Row>
			<Row className="px-5 mt-2">
				<p>Free Shipping Method</p>
				<p>Free Shipping Method</p>
				<p>Free Shipping Method</p>
			</Row>
		</Col>
	</Row>
);
const ShopPage = memo(() => {
	const styles = useStyles();
	console.log('shopage render ne');

	return (
		<Container fluid>
			<Row className="title-container">
				<p class="page-title">Shop Page</p>
			</Row>
			<CustomCarousel />
			<section className="shop-container">
				<Container>
					<Container fluid className="tabbar_container">
						<TabBar styles={styles} />
						<UncontrolledDropdown>
							<DropdownToggle
								caret
								style={{
									backgroundColor: '#ddd',
									borderRadius: 20,
									color: 'black',
								}}
							>
								40 per page
							</DropdownToggle>
							<DropdownMenu className="animate slideIn">
								<DropdownItem>50 per page</DropdownItem>
								<DropdownItem>60 per page</DropdownItem>
								<DropdownItem>70 per page</DropdownItem>
								<DropdownItem>80 per page</DropdownItem>
							</DropdownMenu>
						</UncontrolledDropdown>
					</Container>
					<Row className="mt-5">
						{data?.map((item, idx) => (
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
						))}
					</Row>
					<ShopMethod />
				</Container>
			</section>
		</Container>
	);
});
export default ShopPage;
