import React, { useState } from 'react';

import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import Box from '@material-ui/core/Box';
import { Button, Container, Divider, TextField } from '@material-ui/core';
import { Col, Row } from 'reactstrap';
import { useSelector } from 'react-redux';

function a11yProps(index) {
	return {
		id: `full-width-tab-${index}`,
		'aria-controls': `full-width-tabpanel-${index}`,
	};
}
const TabPanel = (props) => {
	const { children, value, index } = props;

	return <Container className="pb-5 mb-5">{children}</Container>;
};
export default function FullWidthTabs() {
	const theme = useTheme();
	const [value, setValue] = React.useState(0);

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	const handleChangeIndex = (index) => {
		setValue(index);
	};
	const userInfo = useSelector((state) => state.userReducer.userInfo);
	const { loggedIn } = useSelector((state) => state.userReducer);
	return (
		<Container className="mt-5">
			{loggedIn ? (
				<Container className="my-5 pb-5">
					<Row className="my-5" />
					<Row className="my-5">
						<img
							src="https://plus24h.com/upload/images/t%E1%BA%A3i%20xu%E1%BB%91ng%20(1).png"
							style={{ width: 300, height: 300 }}
						/>
					</Row>
					<AppBar position="static" color="transparent">
						<Tabs
							value={value}
							onChange={handleChange}
							indicatorColor="primary"
							textColor="primary"
							variant="fullWidth"
						>
							<Tab label="Profile" {...a11yProps(0)} />
							<Tab label="History" {...a11yProps(1)} />
						</Tabs>
					</AppBar>
					<SwipeableViews
						axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
						index={value}
						onChangeIndex={handleChangeIndex}
						className="z-depth2"
					>
						<TabPanel value={value} index={0} dir={theme.direction}>
							<UserInfoTable data={userInfo} />
						</TabPanel>
						<TabPanel value={value} index={1} dir={theme.direction}>
							<h1>Item 1</h1>
						</TabPanel>
					</SwipeableViews>
				</Container>
			) : (
				<h1 className="mt-5 pt-5 text-center w-100">
					You must to loggin to use this feature
				</h1>
			)}
		</Container>
	);
}
const UserInfoTable = ({ data }) => {
	const [isChangable, setIsChangable] = useState(-1);
	const { address, id, fullname, username, phone, gender } = data;
	console.log('data ', data);

	return (
		<Col className="w-100 d-flex flex-column justify-content-center align-items-center">
			<form className="mt-3 w-50">
				<Row className="mt-5 pl-0 justify-content-between">
					<TextField
						variant="outlined"
						className="w-100"
						label="FirstName"
						disabled
						value={fullname}
					/>
				</Row>
				<Row className="mt-5 pl-0 justify-content-between">
					<TextField
						variant="outlined"
						label="FirstName"
						className="w-100"
						disabled
						value={fullname}
					/>
				</Row>
				<Row className="d-flex justify-content-around align-items-center mt-5">
					<TextField variant="outlined" label="Email" className="w-100" />
				</Row>
				<Row className="d-flex justify-content-around align-items-center mt-5">
					<TextField
						variant="outlined"
						label="Address"
						value={address ? address : 'Not have yet'}
						className="w-100"
					/>
				</Row>
				<Row className="d-flex justify-content-around align-items-center mt-5">
					<TextField
						variant="outlined"
						label="Password"
						className="w-100"
						value="**************"
					/>
				</Row>
				<Row className="d-flex justify-content-around align-items-center mt-5">
					<TextField
						variant="outlined"
						label="Phone number"
						className="w-100"
						value={phone ? phone : 'Not have yet'}
					/>
				</Row>

				<Row className="justify-content-around align-items-center mt-5">
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
							Update your change
						</Button>
					</Col>
				</Row>
			</form>
		</Col>
	);
};
