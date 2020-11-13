import {
	Button,
	Divider,
	FormControl,
	FormControlLabel,
	FormLabel,
	InputLabel,
	MenuItem,
	Radio,
	RadioGroup,
	Select,
} from '@material-ui/core';
import React, { useState, useEffect } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { Col, Container, Row } from 'reactstrap';
import { CITY, DISTRICTS } from '../constants/constants';
import '../styles/material.css';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import { signUp } from '../redux/actions/userAction';
import { AlertModal, IndicatorModal, MyModal } from '../components';
const SignUp = () => {
	const [state, setState] = useState({
		firstName: '',
		lastName: '',
		email: '',
		pass: '',
		confirmPass: '',
		address: '',
		phoneNumber: '',
		gender: '0',
	});
	const history = useHistory();
	const _handleChange = (e) => {
		e.persist();
		console.log(e.target.name, e.target.value);
		setState({ ...state, [e.target.name]: e.target.value });
	};
	useEffect(() => {
		ValidatorForm.addValidationRule('isPasswordMatch', (value) => {
			// console.log('value ne', value, 'state ne', state);
			if (value !== state?.pass) {
				return false;
			}
			return true;
		});
		// return ValidatorForm.removeValidationRule('isPasswordMatch');
	});
	console.log('state pass', state);
	const _handleSubmit = async () => {
		try {
			MyModal.show(() => {}, <IndicatorModal title="SignUp..." />);
			const data = JSON.stringify({
				username: state.email,
				first_name: state.firstName,
				last_name: state.lastName,
				address: state.address,
				phone_number: state.phoneNumber,
				gender: state.gender * 1,
				role: 2,
				password: state.pass,
			});
			console.log(data);
			const res = await signUp(data);
			console.log('Sign Up success', res);
			MyModal.hide(() => {});
			MyModal.show(() => {},
			<AlertModal title="Check your email to verify your account !" color="#458AFF" />);
			setTimeout(() => MyModal.hide(() => history.goBack()), 1000);
		} catch (err) {
			MyModal.hide(() => {});
			console.log('Create account error', err);
		}
	};
	return (
		<Container className="py-5 w-50">
			<Container className="w-75">
				<Row className="my-5" />

				<Row classNam="bg-danger w-50 py-5 mt-5 pb-5 mb-5">
					<Col className="mt-5 z-depth3">
						<ValidatorForm
							className="w-100 h-100 p-5"
							onSubmit={() => _handleSubmit()}
						>
							<Row className="justify-content-center p-0 m-0">
								<h3 style={{ color: '#4F4F4F' }}>Sign Up</h3>
							</Row>

							<Row className="px-3  justify-content-between">
								<Col lg="6" md="6" className=" p-0 pr-1">
									<TextValidator
										label="FirstName"
										name="firstName"
										value={state.firstName}
										variant="outlined"
										className="w-100"
										validators={[
											'required',
											'minStringLength: 4',
											'maxStringLength: 20',
										]}
										errorMessages={['This field is required']}
										onChange={_handleChange}
									/>
								</Col>
								<Col lg="6" md="6" className=" p-0 pl-1">
									<TextValidator
										label="FirstName"
										variant="outlined"
										className="w-100"
										name="lastName"
										value={state.lastName}
										validators={[
											'required',
											'minStringLength: 4',
											'maxStringLength: 20',
										]}
										errorMessages={['This field is required']}
										onChange={_handleChange}
									/>
								</Col>
							</Row>

							<TextValidator
								label="Email"
								className="w-100"
								variant="outlined"
								validators={['required', 'isEmail']}
								errorMessages={[
									'This field is required',
									'This is not an email',
								]}
								name="email"
								value={state.email}
								onChange={_handleChange}
							/>

							<TextValidator
								label="Password (optional)"
								className="w-100"
								variant="outlined"
								type="password"
								validators={['required', 'minStringLength: 6']}
								errorMessages={[
									'this field is required',
									'pass word ay least 6 letter',
								]}
								name="pass"
								value={state.pass}
								onChange={_handleChange}
							/>

							<TextValidator
								label="Confirm password"
								className="w-100"
								variant="outlined"
								type="password"
								validators={['required', 'isPasswordMatch']}
								errorMessages={[
									'this field is required',
									"password didn't match",
								]}
								name="confirmPass"
								value={state.confirmPass}
								onChange={_handleChange}
							/>

							<TextValidator
								label="Phone number"
								className="w-100"
								variant="outlined"
								validators={['required']}
								errorMessages={['this field is required']}
								name="phoneNumber"
								value={state.phoneNumber}
								onChange={_handleChange}
							/>
							<TextValidator
								label="Address"
								className="w-100"
								variant="outlined"
								validators={['required']}
								errorMessages={[
									'this field is required',
									'minStringLength: 4',
								]}
								name="address"
								value={state.address}
								onChange={_handleChange}
							/>
							<FormLabel component="legend">Gender</FormLabel>
							<RadioGroup
								aria-label="gender"
								name="gender"
								value={state.gender}
								onChange={_handleChange}
							>
								<FormControlLabel
									value="1"
									control={<Radio />}
									label="Female"
								/>
								<FormControlLabel
									value="0"
									control={<Radio />}
									label="Male"
								/>
							</RadioGroup>

							{/* <Row className="mt-5">
								<MyDropdownPicker title="City" items={CITY} />
								<MyDropdownPicker
									items={DISTRICTS[0]}
									title="District"
								/>
							</Row> */}

							{/* <Row className="my-3">
								<Divider className="w-100" />
							</Row> */}

							<Row className="justify-content-around align-items-center">
								<Col lg="5" md="5">
									<Button
										type="submit"
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
										Sign up
									</Button>
								</Col>
							</Row>
						</ValidatorForm>
					</Col>
				</Row>
			</Container>
		</Container>
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
export default SignUp;
