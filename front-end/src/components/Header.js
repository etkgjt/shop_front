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
		title: 'Single Product',
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
];
const _renderNavItem = (data) => (
	<NavItem className="nav-link mx-2" key={data?.title}>
		<NavLink
			exact
			to={data?.path}
			className="nav-link-title"
			activeStyle={{ color: '#ff003c' }}
		>
			{data?.title}
		</NavLink>
	</NavItem>
);
const NavigationBar = () => {
	const [isOpen, setIsOpen] = useState(false);
	const toggle = () => setIsOpen(!isOpen);
	return (
		<Navbar expand="md" light className="main-header">
			<NavbarBrand to="/">
				<img src={mainLogo} className="img-fluid"></img>
			</NavbarBrand>
			<NavbarToggler className="toggler-button" onClick={toggle} />
			<Collapse
				isOpen={isOpen}
				navbar
				className="justify-content-center display-block"
			>
				<Nav navbar>{data.map((item) => _renderNavItem(item))}</Nav>
			</Collapse>
			<Container className="icon_wrapper">
				<ion-icon className="search" name="search-outline"></ion-icon>
				<ion-icon name="person-outline"></ion-icon>
				<ion-icon name="cart-outline"></ion-icon>
			</Container>
		</Navbar>
	);
};
const Header = memo(() => {
	const height = window.innerHeight;
	const [isOpen, setIsOpen] = useState(false);

	return (
		<Container fluid className="header-area">
			<div className="header-container">
				<NavigationBar />
			</div>
		</Container>
	);
});

export default Header;
