import React, { useCallback, memo } from 'react';
import { Container, Row } from 'reactstrap';
import '../styles/pageTitle.css';
const SingleProduct = memo(() => {
	console.log('product render ne');
	return (
		<Container fluid>
			<Row className="title-container">
				<p class="page-title">Product</p>
			</Row>
		</Container>
	);
});
export default SingleProduct;
