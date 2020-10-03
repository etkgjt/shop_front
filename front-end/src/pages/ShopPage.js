import React, { useCallback, memo, useState } from 'react';

import { Container, Row } from 'reactstrap';
import { CustomCarousel } from '../components';
import '../styles/pageTitle.css';

const ShopPage = memo(() => {
	console.log('shopage render ne');

	return (
		<Container fluid>
			<Row className="title-container">
				<p class="page-title">Shop Page</p>
			</Row>

			<CustomCarousel />
		</Container>
	);
});
export default ShopPage;
