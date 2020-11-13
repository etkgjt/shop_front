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
import { AlertModal, IndicatorModal, MyModal } from '../components';
import moment from 'moment';
import { TextValidator, ValidatorForm } from 'react-material-ui-form-validator';
import { sendInquiry } from '../redux/actions/userAction';
const Contact = memo(() => {
	const [state, setState] = useState({
		email: '',
		phone: '',
		message: '',
		date: moment().toString(),
	});
	const [isOpen, setIsOpen] = useState(false);

	const toggle = () => setIsOpen(!isOpen);
	const _handleChange = (e) => {
		e.persist();
		console.log(e.target.name, e.target.value);
		setState({ ...state, [e.target.name]: e.target.value });
	};
	const _handleSubmit = async () => {
		try {
			MyModal.show(() => {}, <IndicatorModal title="Send Inquiry..." />);
			const data = JSON.stringify({
				email: state.email,
				phone: state.phone,
				message: state.message,
				date: state.date,
			});
			console.log('Send data ne', data);
			const res = await sendInquiry(data);
			console.log('send inquiry success', res);
			MyModal.hide(() => {});
			MyModal.show(() => {},
			<AlertModal title="Send inquiry success !" color="#458AFF" />);
			setTimeout(
				() =>
					MyModal.hide(() =>
						setState({
							email: '',
							phone: '',
							message: '',
							date: moment().toString(),
						})
					),
				1000
			);
		} catch (err) {
			MyModal.hide(() => {});
			MyModal.show(() => {},
			<AlertModal title="Send inquiry failed !" color="#F12849" />);
			setTimeout(() => MyModal.hide(() => {}), 1000);
			console.log('Send inquiry err', err);
		}
	};

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
							<ValidatorForm
								className="w-100 h-100 p-5"
								onSubmit={() => _handleSubmit()}
							>
								<TextValidator
									label="Your Email"
									className="w-100"
									variant="outlined"
									name="email"
									value={state?.email}
									onChange={_handleChange}
									validators={['required', 'isEmail']}
									errorMessages={[
										'This field is required',
										'This is not an email',
									]}
								/>

								<TextValidator
									label="Your Phone"
									className="w-100"
									variant="outlined"
									name="phone"
									value={state?.phone}
									onChange={_handleChange}
									validators={['required']}
									errorMessages={['This field is required']}
								/>

								<TextValidator
									id="outlined-multiline-static"
									label="Your Message"
									multiline
									rows={4}
									variant="outlined"
									className="w-100"
									name="message"
									value={state?.message}
									onChange={_handleChange}
									validators={['required']}
									errorMessages={['This field is required']}
								/>

								<Button
									type="submit"
									className="w-100"
									style={{
										backgroundColor: '#2296F3',
										borderWidth: 0,
										height: 50,
									}}
								>
									Send Inquiry
								</Button>
							</ValidatorForm>
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
