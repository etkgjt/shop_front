import { MDBBtn, MDBBtnGroup } from 'mdbreact';
import React, { useCallback, memo, useState, useEffect, useRef } from 'react';
import {
	Container,
	Row,
	Col,
	Button,
	ButtonGroup,
	Input,
	ListGroup,
	ListGroupItem,
	Fade,
	Carousel,
	CarouselItem,
} from 'reactstrap';
import '../styles/pageTitle.css';
import '../styles/cart.css';
import { Icon } from '@material-ui/core';
import { useSelector } from 'react-redux';

import useDebounce from '../untils/debounce';
import _ from 'lodash';
import { NavLink } from 'react-router-dom';
import '../styles/forAll.css';
import { MyStepper } from '../components';
import visa from '../assets/visa.svg';
import mastercard from '../assets/mastercard.svg';
import paypal from '../assets/paypal.svg';
import pay from '../assets/pay.svg';
const PaymentMethod = memo(() => {
	console.log('cart render ne');
	return (
		<Container fluid className="mb-5">
			<Row className="title-container mt-5">
				<p class="page-title">Payment Method</p>
			</Row>
			<MyStepper activeStep={2} />
			<Container className="border">
				<Row>
					<Col lg="3" md="3" sm="6">
						<Row>
							<img src={visa} style={{ width: '40%' }} />
							<img src={mastercard} style={{ width: '40%' }} />
						</Row>
					</Col>
					<Col lg="3" md="3" sm="6">
						<img src={paypal} style={{ width: '40%' }} />
					</Col>
					<Col lg="3" md="3" sm="6">
						<img src={pay} style={{ width: '40%' }} />
					</Col>
				</Row>
			</Container>
		</Container>
	);
});
export default PaymentMethod;
