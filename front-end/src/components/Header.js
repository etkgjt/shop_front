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
		path: '/cart',
		title: 'Cart',
	},
	{
		path: '/contact',
		title: 'Contact',
	},

	{
		path: '/category',
		title: 'Category',
	},
	{
		path: '/confirmation',
		title: 'Confirmation',
	},
];
const _renderNavItem = (data) => (
	<NavItem className="nav-link mx-2" key={data?.title}>
		<NavLink
			exact
			to={data?.path}
			className="nav-link-title hvr-grow"
			activeStyle={{ color: '#ff003c' }}
		>
			{data?.title}
		</NavLink>
	</NavItem>
);
const _renderDropDownItems = (data) => (
	<DropdownItem className="nav-link mx-2" key={data?.title}>
		<NavLink
			exact
			to={data?.path}
			className="nav-link-title hvr-grow"
			activeStyle={{ color: '#ff003c' }}
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
				<Badge
					badgeContent={cartBadgeNum}
					color="error"
					style={{ marginRight: '20px' }}
				>
					<Icon className="_icon" style={{ fontSize: 30 }}>
						shopping_cart_outlined
					</Icon>
				</Badge>
			</Container>
			<Dropdown isOpen={isOpen} toggle={toggle}>
				<DropdownToggle className="navbar-toggler">
					<ion-icon name="menu-outline"></ion-icon>
				</DropdownToggle>
				<DropdownMenu right>
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
		<Container fluid className="header-area header-container slideIn">
			<div>
				<NavigationBar />
			</div>
		</Container>
	);
});

export default Header;
