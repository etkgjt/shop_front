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
	Button,
} from 'reactstrap';
import mainLogo from '../assets/timezone-logo.png';
import { Badge, Icon } from '@material-ui/core';
import { useSelector } from 'react-redux';
import '../styles/material.css';
import reducers from '../redux/reducer/index';
import { login } from '../redux/actions/userAction';
import MyModal from '../components/MyModal';

import SearchBar from './SearchBar';
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
			style={{
				justifyContent: 'center',
				alignItems: 'center',
				height: 25,
				padding: 0,
				paddingBottom: 10,
			}}
		>
			<Button
				activeStyle={{ borderColor: 'white' }}
				className="header-button button-hover-depth0"
				style={{
					backgroundColor: 'transparent',
				}}
				color="white"
			>
				<p
					className="button-hover-depth0"
					style={{
						margin: 0,
						fontSize: 16,

						textAlign: 'center',
						justifyContent: 'center',
						alignItems: 'center',
					}}
				>
					{data?.title}
				</p>
			</Button>
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
const NavigationBar = ({ setShow }) => {
	const [isOpen, setIsOpen] = useState(false);
	const [cartBadgeNum, setCartBadgeNum] = useState(0);
	const numOfItems = useSelector((state) =>
		state?.cartReducer?.items?.reduce((x, y) => (x += y?.amount), 0)
	);
	useEffect(() => {
		if (numOfItems) setCartBadgeNum(numOfItems);
	}, [numOfItems]);
	const toggle = () => setIsOpen(!isOpen);
	const { loggedIn } = useSelector((state) => state.userReducer);
	console.log('loggedIn', loggedIn);

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
				<Icon
					onClick={() => setShow(true)}
					className="_icon"
					style={{ fontSize: 30 }}
				>
					search
				</Icon>
				{loggedIn ? (
					<NavLink
						exact
						to="/user_info"
						style={{ color: 'white' }}
						activeStyle={{ color: 'black' }}
					>
						<Icon
							// onClick={() =>
							// 	MyModal.show(
							// 		() => console.log('show ne'),
							// 		<LoginRequestModal />
							// 	)
							// }
							className="_icon"
							style={{ fontSize: 30 }}
						>
							person
						</Icon>
					</NavLink>
				) : (
					<Icon
						onClick={() =>
							MyModal.show(
								() => console.log('show ne'),
								<LoginRequestModal />
							)
						}
						className="_icon"
						style={{ fontSize: 30 }}
					>
						person
					</Icon>
				)}

				<NavLink
					exact
					to="/cart"
					style={{ color: 'white' }}
					activeStyle={{ color: 'black' }}
				>
					<Badge
						badgeContent={cartBadgeNum}
						color="secondary"
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
const LoginRequestModal = () => {
	return (
		<Container
			fluid
			className="justify-content-center align-items-center d-flex flex-column"
		>
			<Row className="justify-content-center mt-5 mb-3">
				<h4>Sign In</h4>
			</Row>
			<Row className="justify-content-center align-items-center d-flex w-75">
				<p className="text-center">
					Sign in to enjoy the benefits of shop account. If you haven’t
					already created an account, you will be prompted to do so after
					signing in.
				</p>
			</Row>

			<NavLink
				exact
				// to="/checkout"
				to={{
					pathname: '/sign_in',
					state: { data },
				}}
				className="w-100"
				style={{
					color: 'white',
					textDecoration: 'none',
				}}
			>
				<Button
					className="button-container-box-shadow mb-5"
					style={{
						marginTop: 10,
						color: 'white',
						backgroundColor: '#4285f4',
						color: 'white',
						borderWidth: 0,
						width: '100%',
						height: 50,
						borderRadius: 25,
					}}
				>
					Sign In
				</Button>
			</NavLink>
		</Container>
	);
};
const Header = () => {
	console.log('header render ??');
	const [show, setShow] = useState(false);
	return (
		<Container
			fluid
			className="header-area header-container slideIn header-gradient-bg z-depth3"
			style={{ color: 'white' }}
		>
			<div>{show ? <SearchBar /> : <NavigationBar setShow={setShow} />}</div>
		</Container>
	);
};

export default Header;
