import React, { useCallback, memo, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Button, Container, Row } from 'reactstrap';
import Header from '../components/Header';
import TitleBackground from '../assets/slider_background.png';
import '../styles/pageTitle.css';
import '../styles/confirmation.css';
import { Col } from 'reactstrap';
import { Table } from 'reactstrap';
import { MyStepper } from '../components';
import '../styles/material.css';
import { Divider } from '@material-ui/core';
import { useSelector } from 'react-redux';

const Confirmation = memo(() => {
	const [isOpen, setIsOpen] = useState(false);
	const { payment, shippingInfo, items } = useSelector(
		(state) => state.cartReducer
	);
	const { method, cardName, cardNumber, cvv, expireDate } = payment;
	const {
		firstName,
		lastName,
		address,
		secondAddr,
		phoneNumber,
		city,
		district,
	} = shippingInfo;
	console.log('load ne', payment, shippingInfo, items);
	const toggle = () => setIsOpen(!isOpen);
	return (
		<Container fluid style={{ backgroundColor: '#F4FAFE' }} className="pb-5">
			<Row className="title-container mt-5">
				<p class="page-title">Confirmation</p>
			</Row>
			<MyStepper activeStep={3} />
			<Container className="pb-5">
				<Row className="w-100 justify-content-center">
					<h3>Order Confirmation</h3>
				</Row>
				<Container className="z-depth2 p-5 bg-white">
					<Row>
						<Col lg="6" md="10">
							<Row className="justify-content-between px-4">
								<h6>Your Infomation</h6>
								<p style={{ color: '#4489FD' }}>Edit</p>
							</Row>
							<p
								style={{
									letterSpacing: 8,
									color: '#D1D6DA',
									fontWeight: 'bold',
									overflow: 'hidden',
									display: 'block',
									lineHeight: '0.5 rem',
									textAlign: 'center',
								}}
							>
								----------------------------------
							</p>
							<Row className="justify-content-between px-4">
								<h6>Name: </h6>
								<p>{`${firstName} ${lastName}`}</p>
							</Row>
							<Row className="justify-content-between px-4">
								<h6>Email: </h6>
								<p>OurCompany@gmail.com</p>
							</Row>
							<Row className="justify-content-between px-4">
								<h6>Phone Number: </h6>
								<p>{`${phoneNumber}`}</p>
							</Row>
						</Col>
						<Col lg="6" md="10">
							<Row className="justify-content-between px-4">
								<h6>Shipping Address</h6>
								<p style={{ color: '#4489FD' }}>Edit</p>
							</Row>
							<p
								style={{
									letterSpacing: 8,
									color: '#D1D6DA',
									fontWeight: 'bold',
									overflow: 'hidden',
									display: 'block',
									lineHeight: '0.5 rem',
									textAlign: 'center',
								}}
							>
								--------------------------------
							</p>
							<Row className="justify-content-between px-4">
								<h6>City: </h6>
								<p>{city}</p>
							</Row>
							<Row className="justify-content-between px-4">
								<h6>District: </h6>
								<p>{district}</p>
							</Row>
							<Row className="justify-content-between px-4">
								<h6>Address </h6>
								<p>{address}</p>
							</Row>
							<Row className="justify-content-between px-4">
								<h6>Second Address</h6>
								<p>{secondAddr}</p>
							</Row>
						</Col>
					</Row>
					<Row className="mt-3">
						<Col lg="6" md="10">
							<Row className="justify-content-between px-4">
								<h6>Payment</h6>
								<p style={{ color: '#4489FD' }}>Edit</p>
							</Row>
							<p
								style={{
									letterSpacing: 8,
									color: '#D1D6DA',
									fontWeight: 'bold',
									overflow: 'hidden',
									display: 'block',
									lineHeight: '0.5 rem',
									textAlign: 'center',
								}}
							>
								--------------------------------
							</p>
							<Row className="justify-content-between px-4">
								<h6>Payment method: </h6>
								<p>{method}</p>
							</Row>
							<Row className="justify-content-between px-4">
								<h6>Card Name: </h6>
								<p>{cardName ? cardName : 'None'}</p>
							</Row>
							<Row className="justify-content-between px-4">
								<h6>Card Number: </h6>
								<p>{cardNumber ? cardNumber : 'None'}</p>
							</Row>
							<Row className="justify-content-between px-4">
								<h6>CVV: </h6>
								<p>{cvv ? cvv : 'None'}</p>
							</Row>
							<Row className="justify-content-between px-4">
								<h6>Expiration Date: </h6>
								<p>{expireDate ? expireDate : 'None'}</p>
							</Row>
						</Col>
						<Col lg="6" md="10">
							<Row className="justify-content-between px-4">
								<h6>Order Details</h6>
								<p style={{ color: '#4489FD' }}>Edit</p>
							</Row>
							<p
								style={{
									letterSpacing: 8,
									color: '#D1D6DA',
									fontWeight: 'bold',
									overflow: 'hidden',
									display: 'block',
									lineHeight: '0.5 rem',
									textAlign: 'center',
								}}
							>
								--------------------------------
							</p>
							{items?.map((v, i) => (
								<Row className="justify-content-between px-4">
									<h6>{`${v?.name}`} </h6>
									<p>{`${v?.price * v?.amount}`}</p>
								</Row>
							))}
						</Col>
					</Row>
				</Container>
				<NavLink
					exact
					to={{
						pathname: '/finish',
						// state: { data },
					}}
					style={{
						color: 'white',
						textDecoration: 'none',
					}}
				>
					<Button
						// onClick={_onCheckoutPress}
						className="button-container-box-shadow mt-5"
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
						Place Order
					</Button>
				</NavLink>
			</Container>
		</Container>
	);
});
export default Confirmation;
