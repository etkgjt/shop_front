import React, { useCallback, memo, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Button, Col, Container, Row } from 'reactstrap';
import Header from '../components/Header';
import TitleBackground from '../assets/slider_background.png';
import '../styles/pageTitle.css';
import '../styles/contact.css';
import { Icon, TextField } from '@material-ui/core';
import '../styles/material.css';
import FullWidthTabs from './UserInfo';
import { MyModal } from '../components';

const Contact = memo(() => {
	const [isOpen, setIsOpen] = useState(false);

	const toggle = () => setIsOpen(!isOpen);
	return (
		<Container fluid className="p-0 mb-5">
			<Container fluid className="background p-0 m-0">
				<Container
					fluid
					className="top-layer p-0 m-0 align-items-center justify-content-center d-flex flex-column"
				>
					<Row className="justify-content-center align-items-center pt-5 w-100 mb-5">
						<h1 style={{ color: 'black' }}>Contact Us</h1>
					</Row>
					<Row className="justify-content-around  w-50 contact-form z-depth2">
						<Col lg="9" md="9" className="p-5 ">
							<Row className="d-flex justify-content-center align-items-center mt-3">
								<TextField
									label="Your Email"
									className="w-100"
									variant="outlined"
								/>
							</Row>
							<Row className="d-flex justify-content-around align-items-center mt-5">
								<TextField
									label="Your Phone"
									className="w-100"
									variant="outlined"
								/>
							</Row>
							<Row className="d-flex justify-content-around align-items-center mt-5">
								<TextField
									id="outlined-multiline-static"
									label="Your Message"
									multiline
									rows={4}
									variant="outlined"
									className="w-100"
								/>
							</Row>
							<Row className="z-depth2 mt-3">
								<Button
									className="w-100"
									style={{
										backgroundColor: '#2296F3',
										borderWidth: 0,
										height: 50,
									}}
								>
									Send Inquiry
								</Button>
							</Row>
						</Col>

						<Col
							lg="3"
							md="3"
							className="d-flex flex-column align-items-start justify-content-center text-black "
						>
							<Icon
								style={{
									fontSize: 50,
									color: '#2296F3',
									justifyContent: 'center',
									alignItems: 'center',
								}}
							>
								room
							</Icon>
							<p
								style={{
									fontSize: 20,
									fontWeight: '500',
									marginLeft: 20,
								}}
							>
								1632 Main Street
							</p>

							<p
								style={{
									fontSize: 20,
									fontWeight: '500',
									marginLeft: 20,
								}}
							>
								New York, 94126
							</p>
							<p
								style={{
									fontSize: 20,
									fontWeight: '500',
									marginLeft: 20,
								}}
							>
								United States
							</p>
							<Icon
								style={{
									fontSize: 50,
									color: '#2296F3',
									justifyContent: 'center',
									alignItems: 'center',
								}}
							>
								phone
							</Icon>
							<p
								style={{
									fontSize: 20,
									fontWeight: '500',
									marginLeft: 20,
								}}
							>
								+ 01 234 567 89
							</p>

							<Icon
								style={{
									fontSize: 50,
									color: '#2296F3',
									justifyContent: 'center',
									alignItems: 'center',
								}}
							>
								mail
							</Icon>
							<p
								style={{
									fontSize: 20,
									fontWeight: '500',
									marginLeft: 20,
								}}
							>
								info@gmail.com
							</p>
						</Col>
					</Row>
				</Container>
			</Container>
			{/* <MyModal /> */}
		</Container>
	);
});

export default Contact;
