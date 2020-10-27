import { Button, Container } from '@material-ui/core';
import React from 'react';
import { NavLink } from 'react-router-dom';
import { Row } from 'reactstrap';
import CircularProgress from '@material-ui/core/CircularProgress';

const IndicatorModal = ({ onSuccess }) => {
	return (
		<Container
			fluid
			className="justify-content-center align-items-center d-flex flex-column bg-white pb-5"
		>
			<Row className="justify-content-center mt-5 mb-3 bg-white">
				<h4>Sign In...</h4>
			</Row>

			<CircularProgress />
		</Container>
	);
};
export default IndicatorModal;
