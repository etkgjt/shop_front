import React, { useCallback, memo, useState } from 'react';
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
	const toggle = () => setIsOpen(!isOpen);
	return (
		<Navbar expand="md" light>
			<NavbarBrand to="/">
				<img src={mainLogo} className="img-fluid"></img>
			</NavbarBrand>
			<Collapse navbar className="justify-content-center">
				<div className="ml-sm-auto navbar-nav main-menu">
					<Nav navbar>{data.map((item) => _renderNavItem(item))}</Nav>
				</div>
			</Collapse>
			<Container className="icon_wrapper">
				<ion-icon class="_icon" name="search-outline"></ion-icon>
				<ion-icon class="_icon" name="person-outline"></ion-icon>
				<ion-icon class="_icon" name="cart-outline"></ion-icon>
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
