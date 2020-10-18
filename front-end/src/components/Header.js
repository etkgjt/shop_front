import React, { useCallback, memo, useState, useEffect } from 'react';
import { BrowserRouter, Link, NavLink } from 'react-router-dom';

import '../styles/header.css';

import {
	Container,
	Navbar,
	NavbarToggler,
	NavbarBrand,
	NavbarText,
	Collapse,
	Nav,
	NavItem,
	Col,
	Row,
	Dropdown,
	DropdownToggle,
	DropdownItem,
	DropdownMenu,
} from 'reactstrap';
import mainLogo from '../assets/timezone-logo.png';
import { Badge, Icon } from '@material-ui/core';
import { useSelector } from 'react-redux';
const data = [
	{
		path: '/',
		title: 'Home',
	},
	{
		path: '/shop_page',
		title: 'Shop',
	},
	{
		path: '/single_product',
		title: 'Product',
	},
	{
		path: '/contact',
		title: 'Contact',
	},

	{
		path: '/category',
		title: 'Category',
	},
];
const _renderNavItem = (data) => (
	<NavItem className="nav-link mx-2" key={data?.title}>
		<NavLink
			exact
			to={data?.path}
			className="nav-link-title hvr-grow"
			activeStyle={{
				color: '#fff',
				fontWeight: '900',
				fontSize: '18px',
			}}
		>
			{data?.title}
		</NavLink>
	</NavItem>
);
const _renderDropDownItems = (data) => (
	<DropdownItem
		className="nav-link"
		style={{
			backgroundColor: '#4285F4',
			color: 'white',
			flexDirection: 'row',
			justifyContent: 'center',
			alignItems: 'center',
		}}
		key={data?.title}
	>
		<NavLink
			exact
			to={data?.path}
			className="nav-link-title hvr-grow"
			activeStyle={{ fontWeight: '900' }}
		>
			{data?.title}
		</NavLink>
	</DropdownItem>
);
const NavigationBar = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [cartBadgeNum, setCartBadgeNum] = useState(0);
	const numOfItems = useSelector((state) => state?.cartReducer?.items?.length);
	useEffect(() => {
		if (numOfItems) setCartBadgeNum(numOfItems);
	}, [numOfItems]);
	const toggle = () => setIsOpen(!isOpen);
	return (
		<Navbar expand="md" light>
			<NavbarBrand to="/">
				<img src={mainLogo} className="img-fluid"></img>
			</NavbarBrand>
			<Collapse navbar className="justify-content-center ">
				<div className="ml-sm-auto navbar-nav main-menu">
					<Nav navbar>{data.map((item) => _renderNavItem(item))}</Nav>
				</div>
			</Collapse>
			<Container className="icon_wrapper">
				<Icon className="_icon" style={{ fontSize: 30 }}>
					search
				</Icon>
				<Icon className="_icon" style={{ fontSize: 30 }}>
					person
				</Icon>
				<NavLink
					exact
					to="/cart"
					style={{ color: 'white' }}
					activeStyle={{ color: 'black' }}
				>
					<Badge
						badgeContent={cartBadgeNum}
						color="error"
						style={{ marginRight: '20px' }}
					>
						<Icon
							onClick={() => {}}
							className="_icon"
							style={{ fontSize: 30 }}
						>
							shopping_cart_outlined
						</Icon>
					</Badge>
				</NavLink>
			</Container>
			<Dropdown isOpen={isOpen} toggle={toggle}>
				<DropdownToggle className="navbar-toggler">
					<ion-icon name="menu-outline"></ion-icon>
				</DropdownToggle>
				<DropdownMenu right className="p-0">
					{data.map((item) => _renderDropDownItems(item))}
				</DropdownMenu>
			</Dropdown>
			{/* <NavbarToggler onClick={toggle} /> */}
		</Navbar>
	);
};
const Header = memo(() => {
	console.log('header render ??');

	return (
		<Container
			fluid
			className="header-area header-container slideIn header-gradient-bg"
			style={{ color: 'white' }}
		>
			<div>
				<NavigationBar />
			</div>
		</Container>
	);
});

export default Header;
