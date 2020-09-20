import React, { useCallback, memo, useState } from 'react';

import { Container } from 'reactstrap';
const ShopPage = memo(() => {
	const [isOpen, setIsOpen] = useState(false);

	const toggle = () => setIsOpen(!isOpen);
	return (
		<Container>
			<h1>I'm ShopPage</h1>
		</Container>
	);
});
export default ShopPage;
