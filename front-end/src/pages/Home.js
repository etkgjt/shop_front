import React, { useCallback, memo, useState } from 'react';

import { Container, Row } from 'reactstrap';

import '../styles/pageTitle.css';
const Home = memo(() => {
	console.log('homepage render ne');

	return (
		<Container fluid>
			<Row className="title-container">
				<p class="page-title">Home</p>
			</Row>
		</Container>
	);
});
export default Home;
