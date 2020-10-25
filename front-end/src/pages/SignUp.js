import {
	Button,
	Divider,
	FormControl,
	InputLabel,
	MenuItem,
	Select,
	TextField,
} from '@material-ui/core';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Col, Container, Row } from 'reactstrap';
import { CITY, DISTRICTS } from '../constants/constants';
import '../styles/material.css';
const SignUp = () => {
	return (
		<Container className="py-5 w-50">
			<Container className="w-75">
				<Row className="my-5" />

				<Row classNam="bg-danger w-50 py-5 mt-5 pb-5 mb-5">
					<Col className="mt-5 z-depth3">
						<form className="m-5">
							<Row className="justify-content-center p-0 m-0">
								<h3 style={{ color: '#4F4F4F' }}>Sign Up</h3>
							</Row>
							<Row className="mt-5 pl-0 justify-content-between">
								<Col md="6" className="m-0 p-0 pr-5">
									<TextField label="FirstName" className="w-100" />
								</Col>
								<Col md="6" className="p-0">
									<TextField label="FirstName" className="w-100" />
								</Col>
							</Row>
							<Row className="d-flex justify-content-around align-items-center mt-3">
								<TextField label="Email" className="w-100" />
							</Row>
							<Row className="d-flex justify-content-around align-items-center mt-5">
								<TextField
									label="Password (optional)"
									className="w-100"
								/>
							</Row>
							<Row className="d-flex justify-content-around align-items-center mt-5">
								<TextField label="Confirm password" className="w-100" />
							</Row>
							<Row className="d-flex justify-content-around align-items-center mt-5">
								<TextField label="Phone number" className="w-100" />
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
						</form>
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
