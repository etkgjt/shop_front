import React, { useCallback, memo, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Container, Row } from 'reactstrap';
import Header from '../components/Header';
import TitleBackground from '../assets/slider_background.png';
import '../styles/pageTitle.css';

const Contact = memo(() => {
	const [isOpen, setIsOpen] = useState(false);

	const toggle = () => setIsOpen(!isOpen);
	return (
		<Container fluid>
			<Row className="title-container">
				<p class="page-title">Contacts</p>
			</Row>
		</Container>
	);
});
export default Contact;
