import React, { useCallback, memo, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { Container, Row } from 'reactstrap';
import Header from '../components/Header';
const Home = memo(() => {
	const [isOpen, setIsOpen] = useState(false);

	const toggle = () => setIsOpen(!isOpen);
	return (
		<Container>
			
			<Row>
				<h1>Home</h1>
			</Row>
		</Container>
	);
});
export default Home;
