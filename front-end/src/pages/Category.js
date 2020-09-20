import React, { useCallback, memo, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Container } from 'reactstrap';
import Header from '../components/Header';
const Category = memo(() => {
	const [isOpen, setIsOpen] = useState(false);

	const toggle = () => setIsOpen(!isOpen);
	return (
		<Container>
			<h1>I'm Category</h1>
		</Container>
	);
});
export default Category;
