import {
	Divider,
	FormControl,
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
const Checkout = () => {
	let { state } = useLocation();

	let { data } = state;
	console.log('state', data);
	const [items, setItems] = useState(data ? data : []);
	useEffect(() => {
		setItems(data);
	}, [data]);
	return (
		<Container fluid style={{ backgroundColor: '#E5F2FF' }}>
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
									<TextField label="FirstName" className="w-100" />
								</Col>
								<Col md="6" className="p-0">
									<TextField label="FirstName" className="w-100" />
								</Col>
							</Row>
							<Row className="d-flex justify-content-around align-items-center mt-3">
								<TextField label="Address" className="w-100" />
							</Row>
							<Row className="d-flex justify-content-around align-items-center mt-5">
								<TextField
									label="Address 2 (optional)"
									className="w-100"
								/>
							</Row>
							<Row className="d-flex justify-content-around align-items-center mt-5">
								<TextField label="Phone Number" className="w-100" />
							</Row>
							<Row className="mt-5">
								<MyDropdownPicker title="City" items={CITY} />
								<MyDropdownPicker
									items={DISTRICTS[0]}
									title="District"
								/>
							</Row>

							<Row className="my-3">
								<Divider className="w-100" />
							</Row>

							<Row className="justify-content-around align-items-center">
								<Col lg="5" md="5">
									<Button
										className="button-container-box-shadow"
										style={{
											marginTop: 10,
											color: 'white',
											backgroundColor: '#fff',
											borderColor: '#4285f4',

											borderWidth: 2,
											borderRadius: 25,
											width: '100%',
											height: 50,
										}}
									>
										<NavLink
											exact
											to="/cart"
											style={{
												color: '#4285f4',
												textDecoration: 'none',
											}}
										>
											Back
										</NavLink>
									</Button>
								</Col>
								<Col lg="5" md="5">
									<Button
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
										<NavLink
											exact
											to={{
												pathname: '/confirmation',
												state: { data },
											}}
											style={{
												color: 'white',
												textDecoration: 'none',
											}}
										>
											Next step
										</NavLink>
									</Button>
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
									className="justify-content-between align-items-center mb-2"
									key={`${v?.name}-${i}`}
								>
									<small style={{ fontSize: 16 }} className="h-25">
										{v?.name}
									</small>
									<small style={{ fontSize: 16 }}>
										{v?.amount * v?.price}
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
							{items?.reduce((x, y) => (x += y?.price * y?.amount), 0) +
								5}
						</small>
					</ListGroupItem>
				</ListGroup>
			</Col>
		</Col>
	);
};
const MyDropdownPicker = ({ items, title }) => {
	const [value, setValue] = useState(0);
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

const MyRadioButton = () => {
	const [radio, setRadio] = useState(1);
	return (
		<MDBContainer className="m-0 pl-0 d-flex flex-row justify-content-start">
			<Row className="ml-1 mr-4 align-items-center">
				<MDBInput
					checked={radio === 0}
					onClick={() => setRadio(0)}
					type="radio"
				></MDBInput>
				<p className="ml-2">Credit card</p>
			</Row>
			<Row className="ml-1 mr-4  align-items-center">
				<MDBInput
					id="radio1"
					checked={radio === 1}
					onClick={() => setRadio(1)}
					type="radio"
				/>
				<p className="ml-2">Paypal</p>
			</Row>
			<Row className="ml-1  align-items-center">
				<MDBInput
					checked={radio === 2}
					onClick={() => setRadio(2)}
					type="radio"
				/>
				<p className="ml-2">Visa</p>
			</Row>
		</MDBContainer>
	);
};
export default Checkout;
