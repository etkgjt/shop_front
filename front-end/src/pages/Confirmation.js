import React, { useCallback, memo, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Container, Row } from 'reactstrap';
import Header from '../components/Header';
import TitleBackground from '../assets/slider_background.png';
import '../styles/pageTitle.css';
import '../styles/confirmation.css';
import { Col } from 'reactstrap';
import { Table } from 'reactstrap';
import { MyStepper } from '../components';
import '../styles/material.css';
import { Divider } from '@material-ui/core';
const Confirmation = memo(() => {
	const [isOpen, setIsOpen] = useState(false);
	console.log('load ne');
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
								<p>Join Doe</p>
							</Row>
							<Row className="justify-content-between px-4">
								<h6>Email: </h6>
								<p>OurCompany@gmail.com</p>
							</Row>
							<Row className="justify-content-between px-4">
								<h6>Phone Number: </h6>
								<p>+20 019 823 2332</p>
							</Row>
							<Row className="justify-content-between px-4">
								<h6>Name: </h6>
								<p>Join Doe</p>
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
								<p>Ho Chi Minh</p>
							</Row>
							<Row className="justify-content-between px-4">
								<h6>District: </h6>
								<p>Quan 1</p>
							</Row>
							<Row className="justify-content-between px-4">
								<h6>Address </h6>
								<p>127/135A Dien Bien Phu</p>
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
							<Row className="justify-content-between px-4">
								<h6>Name: </h6>
								<p>Join Doe</p>
							</Row>
							<Row className="justify-content-between px-4">
								<h6>Email: </h6>
								<p>OurCompany@gmail.com</p>
							</Row>
							<Row className="justify-content-between px-4">
								<h6>Phone Number: </h6>
								<p>+20 019 823 2332</p>
							</Row>
							<Row className="justify-content-between px-4">
								<h6>Name: </h6>
								<p>Join Doe</p>
							</Row>
						</Col>
					</Row>
				</Container>
			</Container>
		</Container>
	);
});
export default Confirmation;
