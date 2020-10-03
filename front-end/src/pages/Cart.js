import React, { useCallback, memo } from 'react';
import { Container, Row } from 'reactstrap';
import '../styles/pageTitle.css';
const Cart = memo(() => {
	console.log('cart render ne');
	return (
		<Container fluid>
			<Row className="title-container">
				<p class="page-title">Cart List</p>
			</Row>
		</Container>
	);
});
export default Cart;
