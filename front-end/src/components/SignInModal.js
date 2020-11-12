import {
	Button,
	Checkbox,
	Divider,
	FormControl,
	Icon,
	Input,
	InputLabel,
	MenuItem,
	Select,
	TextField,
} from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Col, Container, Row } from 'reactstrap';
import '../styles/material.css';
import {
	getUserInfo,
	login,
	updateUserInfoRedux,
	distpatchLoginToRedux,
} from '../redux/actions/userAction';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { MyModal, IndicatorModal } from '../components';
import axios from 'axios';
import { CheckBox } from '@material-ui/icons';
function parseJwt(token) {
	var base64Url = token.split('.')[1];
	var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
	var jsonPayload = decodeURIComponent(
		atob(base64)
			.split('')
			.map(function (c) {
				return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
			})
			.join('')
	);

	return JSON.parse(jsonPayload);
}

const SignInModal = ({ onSignInSuccess = () => {} }) => {
	const dispatch = useDispatch();
	const [email, setEmail] = useState(localStorage.getItem('tech_world_acc'));
	const [password, setPassword] = useState(
		localStorage.getItem('tech_world_pass')
	);
	// useEffect(() => {
	// 	if (localStorage.getItem('tech_world_acc'))
	// 		setEmail(localStorage.getItem('tech_world_acc'));
	// 	if (localStorage.getItem('tech_world_pass'))
	// 		setPassword(localStorage.getItem('tech_world_pass'));
	// }, [
	// 	localStorage.getItem('tech_world_acc'),
	// 	localStorage.getItem('tech_world_pass'),
	// ]);
	const [remember, setRemember] = useState(true);
	const history = useHistory();
	const _handleSignInClick = async () => {
		try {
			MyModal.show(() => {}, <IndicatorModal title="Sign in..." />);
			const { access_token } = await login(email, password);
			console.log('token', access_token);

			console.log('long token', parseJwt(access_token));
			const { sub } = parseJwt(access_token);
			const res = await getUserInfo(sub, access_token);
			const {
				address,
				id,
				fullname,
				username,
				phone_number,
				gender,
				first_name,
				last_name,
			} = res;

			console.log(
				'user Info',
				address,
				id,
				fullname,
				username,
				phone_number,
				gender,
				first_name,
				last_name
			);

			distpatchLoginToRedux(dispatch);
			updateUserInfoRedux(dispatch, {
				address,
				id,
				first_name,
				last_name,
				username,
				phone_number,
				gender,
				access_token,
			});
			localStorage.setItem('tech_world_acc', email);
			localStorage.setItem('tech_world_pass', password);
			onSignInSuccess();
			MyModal.hide();
		} catch (err) {
			console.log('long signin err', err);
			MyModal.hide(() => alert('wrong'));
		}
	};
	const validateEmail = (email) => {
		const regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		return regex.test(email);
	};
	const validatePassword = (pass) => {
		const regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
		return regex.test(pass);
	};
	const gotoProfile = () => {
		history.push('/user_info');
	};
	return (
		<Container className="d-flex justify-content-center align-items-center w-75">
			<Col lg="5" md="10" sm="10" className="mt-5 z-depth3 bg-white w-50">
				<Icon
					onClick={() => MyModal.hide()}
					className="_icon"
					style={{
						fontSize: 30,
						position: 'absolute',
						right: -30,
						top: -30,
						color: 'white',
					}}
				>
					highlight_off_outlined
				</Icon>
				<form className="m-5">
					<Row className="justify-content-center p-0 m-0">
						<h3 style={{ color: '#4F4F4F' }}>Sign In</h3>
					</Row>
					<Row className="d-flex justify-content-around align-items-center mt-3">
						<TextField
							label="Email"
							className="w-100"
							color={validateEmail(email) ? 'primary' : 'secondary'}
							onChange={(e) => setEmail(e?.target?.value)}
							value={email}
						/>
					</Row>
					<Row className="d-flex justify-content-around align-items-center mt-3">
						<TextField
							label="Password"
							className="w-100"
							color={
								validatePassword(password) ? 'primary' : 'secondary'
							}
							type="password"
							onChange={(e) => {
								setPassword(e?.target?.value);
							}}
							value={password}
						/>
					</Row>

					<Row className="mt-3 justify-content-around align-items-center">
						<Row className="align-content-center">
							<Checkbox
								checked={remember}
								onChange={() => setRemember(!remember)}
							/>
							<p
								style={{
									paddingTop: 10,
									fontSize: 14,
									color: 'black',
									marginRight: 10,
									fontWeight: '300',
								}}
							>
								Remember me
							</p>
						</Row>

						<p
							style={{
								fontSize: 14,
								color: '#949494',
								fontWeight: '300',
								paddingTop: 10,
							}}
						>
							forgot your password ?
						</p>
					</Row>

					<Row className="justify-content-around align-items-center">
						<Col lg="5" md="5">
							<Button
								// disabled={
								// 	validateEmail(email) && validatePassword(password)
								// 		? false
								// 		: true
								// }
								onClick={_handleSignInClick}
								className="button-container-box-shadow"
								style={{
									marginTop: 10,
									color: 'white',
									backgroundColor:
										validateEmail(email) && validatePassword(password)
											? '#4285f4'
											: '#7a7a7a',
									color: 'white',
									borderWidth: 0,
									borderRadius: 25,
									width: '100%',
									height: 50,
								}}
							>
								Sign In
							</Button>
						</Col>
					</Row>
					<Row className="justify-content-center align-items-center mt-3">
						<p style={{ color: '#949494', fontWeight: '300' }}>
							Not a member ?{' '}
						</p>
						<NavLink exact to="/sign_up" onClick={() => MyModal.hide()}>
							<p
								style={{
									marginLeft: 10,
									color: '#4285f4',
									fontWeight: '300',
								}}
							>
								register
							</p>
						</NavLink>
					</Row>
				</form>
			</Col>
		</Container>
	);
};

export default SignInModal;
