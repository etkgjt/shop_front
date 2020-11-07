import {
	Divider,
	FormControl,
	Input,
	InputLabel,
	MenuItem,
	Select,
	TextField,
} from '@material-ui/core';
import { MDBContainer, MDBInput } from 'mdbreact';
import React, { useCallback, memo, useState, useEffect } from 'react';
import { NavLink, useLocation, useParams } from 'react-router-dom';

import {
	Container,
	Row,
	Col,
	Button,
	ListGroup,
	ListGroupItem,
} from 'reactstrap';
import { CITY, DISTRICTS } from '../constants/constants';
import '../styles/pageTitle.css';
import '../styles/checkout.css';
import '../styles/forAll.css';
import '../styles/material.css';
import { MyStepper } from '../components';
import { updateShippingInfo } from '../redux/actions/cartAction';
import { useDispatch, useSelector } from 'react-redux';
import { getNumberWithDot } from '../untils/numberFormater';
const Checkout = () => {
	let { state } = useLocation();
	const userInfo = useSelector((state) => state.userReducer.userInfo);
	const { first_name, last_name, phone_number, username } = userInfo;
	const userAddress = userInfo?.address;

	let { data } = state ? state : {};
	const dispatch = useDispatch();
	console.log('state', data);
	const [items, setItems] = useState(data ? data : []);
	const [firstName, setFirstName] = useState(first_name ? first_name : '');
	const [lastName, setLastName] = useState(last_name || '');
	const [address, setAddress] = useState(userAddress || '');
	const [secondAddr, setSecondAddr] = useState('');
	const [phoneNumber, setPhoneNumber] = useState(phone_number || '');
	const [city, setCity] = useState(1);
	const [district, setDistrict] = useState(1);
	const [note, setNote] = useState('');
	const _onCheckoutPress = () => {
		if (!firstName || !lastName || !address || !phoneNumber) {
			console.log('thieu thong tin');
		} else {
			console.log('success');
			updateShippingInfo(dispatch, {
				first_name,
				last_name,
				address,
				secondAddr,
				phone_number,
				city,
				district,
				username,
				note,
			});
		}
	};
	const validatePhoneNumber = (phone) => {
		const regex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
		return regex.match(phone);
	};
	useEffect(() => {
		setItems(data);
	}, [data]);
	return (
		<Container fluid style={{ backgroundColor: '#F4FAFE' }}>
			<Row className="title-container">
				<p class="page-title">Checkout</p>
			</Row>
			<MyStepper activeStep={1} />
			<Row className="mt-5 d-flex justify-content-center align-items-center">
				<h2>Checkout Form</h2>
			</Row>
			<Container>
				<Row className="mt-3 px-5">
					<Col md="7" className=" z-depth2 mb-5 mr-5 bg-white">
						<form className="m-5">
							<Row className="pl-0 justify-content-between">
								<Col md="6" className="m-0 p-0 pr-5">
									<TextField
										label="First Name"
										className="w-100"
										onChange={(e) => setFirstName(e?.target?.value)}
										color="success"
										value={firstName}
									/>
								</Col>
								<Col md="6" className="p-0">
									<TextField
										label="Last Name"
										className="w-100"
										onChange={(e) => setLastName(e?.target?.value)}
										value={lastName}
									/>
								</Col>
							</Row>
							<Row className="d-flex justify-content-around align-items-center mt-3">
								<TextField
									label="Address"
									className="w-100"
									onChange={(e) => setAddress(e?.target?.value)}
									value={address}
								/>
							</Row>
							<Row className="d-flex justify-content-around align-items-center mt-5">
								<TextField
									onChange={(e) => setSecondAddr(e?.target?.value)}
									label="Address 2 (optional)"
									className="w-100"
									value={secondAddr}
								/>
							</Row>
							<Row className="d-flex justify-content-around align-items-center mt-5">
								<TextField
									label="Phone Number"
									className="w-100"
									onChange={(e) => setPhoneNumber(e?.target?.value)}
									value={phoneNumber}
								/>
							</Row>
							<Row className="d-flex justify-content-around align-items-center mt-5">
								<TextField
									label="Note"
									className="w-100"
									onChange={(e) => setNote(e?.target?.value)}
									value={note}
									multiline
									variant="outlined"
								/>
							</Row>
							<Row className="mt-5">
								<MyDropdownPicker
									title="City"
									items={CITY}
									onSubmit={(val) => setCity(val)}
									value={city}
								/>
								<MyDropdownPicker
									items={DISTRICTS[0]}
									title="District"
									onSubmit={(val) => setDistrict(val)}
									value={district}
								/>
							</Row>

							<Row className="my-3">
								<Divider className="w-100" />
							</Row>

							<Row className="justify-content-around align-items-center">
								<Col lg="5" md="5">
									<NavLink
										exact
										to="/cart"
										style={{
											color: '#4285f4',
											textDecoration: 'none',
										}}
									>
										<Button
											className="button-container-box-shadow"
											style={{
												marginTop: 10,
												color: '#4285f4',
												backgroundColor: '#fff',
												borderColor: '#4285f4',

												borderWidth: 2,
												borderRadius: 25,
												width: '100%',
												height: 50,
											}}
										>
											Back
										</Button>
									</NavLink>
								</Col>
								<Col lg="5" md="5">
									<NavLink
										exact
										to={{
											pathname: '/payment',
											state: { data },
										}}
										style={{
											color: 'white',
											textDecoration: 'none',
										}}
									>
										<Button
											onClick={() => _onCheckoutPress()}
											// disabled={
											// 	!firstName ||
											// 	!lastName ||
											// 	!address ||
											// 	!phoneNumber ||
											// 	!city ||
											// 	!district
											// }
											className="button-container-box-shadow"
											style={{
												marginTop: 10,
												color: 'white',
												backgroundColor: '#4285f4',
												color: 'white',
												borderWidth: 0,
												borderRadius: 25,
												width: '100%',
												height: 50,
											}}
										>
											Next step
										</Button>
									</NavLink>
								</Col>
							</Row>
						</form>
					</Col>
					<DetailsCheckout items={data} />
				</Row>
			</Container>
		</Container>
	);
};
const DetailsCheckout = ({ items }) => {
	console.log('items ne', items);
	return (
		<Col md="4" className="p-0">
			<Col className="z-depth2 m-0 py-3 bg-white">
				<h4 style={{ textAlign: 'start' }}>Your Cart (3)</h4>

				<h6 class="mb-3 mt-3">The total amount of</h6>
				<ListGroup flush>
					<ListGroupItem className="d-flex my-2 p-0 justify-content-between align-items-center">
						<Col>
							{items?.map((v, i) => (
								<Row
									className="justify-content-between align-items-center mb-3"
									key={`${v?.name}-${i}`}
								>
									<small
										style={{
											fontSize: 16,
											overflow: 'hidden',
											textOverflow: 'ellipsis',
											width: '40%',
											whiteSpace: 'nowrap',
										}}
										className="h-25"
									>
										{v?.name}
									</small>
									<small
										style={{
											fontSize: 16,
											overflow: 'hidden',
											textOverflow: 'ellipsis',
											width: '40%',
											whiteSpace: 'nowrap',
										}}
									>
										{`${getNumberWithDot(v?.amount * v?.price)} vnđ`}
									</small>
								</Row>
							))}
						</Col>
					</ListGroupItem>

					<ListGroupItem className="d-flex my-2 p-0 justify-content-between align-items-center">
						<small style={{ fontSize: 16 }}>Shipping</small>
						<small style={{ fontSize: 16 }}>5</small>
					</ListGroupItem>
					<ListGroupItem className="d-flex my-2 p-0 justify-content-between align-items-center">
						<small style={{ fontSize: 16, fontWeight: 'bold' }}>
							The total amount of (including VAT)
						</small>
						<small style={{ fontSize: 16 }}>
							{`${getNumberWithDot(
								items?.reduce(
									(x, y) => (x += y?.price * y?.amount),
									0
								) + 5
							)} vnđ`}
						</small>
					</ListGroupItem>
				</ListGroup>
			</Col>
		</Col>
	);
};
const MyDropdownPicker = ({ items, title, onSubmit }) => {
	const [value, setValue] = useState(0);
	useEffect(() => {
		onSubmit(value);
	}, [value]);
	return (
		<Col
			md="6"
			className=" d-flex flex-column justify-content-center align-items-start p-0"
		>
			<InputLabel id="label">{title}</InputLabel>
			<FormControl variant="outlined" className="w-75">
				<Select labelId="label" id="select" value={value}>
					{items?.map((v, i) => (
						<MenuItem
							key={`${v}-${i}`}
							value={i}
							onClick={() => setValue(i)}
						>
							{v}
						</MenuItem>
					))}
				</Select>
			</FormControl>
		</Col>
	);
};

export default Checkout;
