import React, { useCallback, memo, useState } from 'react';

import { Container, Row } from 'reactstrap';
import { CustomCarousel } from '../components';

import '../styles/pageTitle.css';
const Home = memo(() => {
	console.log('homepage render ne');

	return (
		<Container fluid>
			<CustomCarousel fluid className = "large-margin" />
		</Container>
	);
});
export default Home;
