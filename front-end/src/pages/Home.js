import React, { useCallback, memo, useState } from 'react';

import { Col, Container, Row } from 'reactstrap';
import { CustomCarousel } from '../components';
import heroImg from '../assets/watch.png';
import newProduct1 from '../assets/new_product1.png';
import newProduct2 from '../assets/new_product2.png';
import newProduct3 from '../assets/new_product3.png';
import gallery1 from '../assets/gallery1.png';
import gallery2 from '../assets/gallery2.png';
import gallery3 from '../assets/gallery3.png';
import gallery4 from '../assets/gallery4.png';

import '../styles/pageTitle.css';
import '../styles/home.css';
import src from '*.bmp';
const Home = memo(() => {
	console.log('homepage render ne');

	return (
		<Container fluid className="p-0">
			{/* <CustomCarousel fluid className = "large-margin" /> */}
			<Container fluid style={{ backgroundColor: '#f0f0f2' }}>
				<Container className="intro-area-container">
					<Row className="intro-area">
						<Col
							xl="8"
							lg="8"
							md="8"
							sm="8"
							className="intro-title-container"
						>
							<h1>Select your new perfect style</h1>
							<p>
								Ut enim ad minim veniam, quis nostrud exercitation
								ullamco laboris nisi ut aliquip ex ea commodo consequat
								is aute irure.
							</p>
						</Col>
						<Col xl="3" lg="3" md="4" sm="4">
							<img src={heroImg}></img>
						</Col>
					</Row>
				</Container>
			</Container>
			<Container className="section-padding">
				<Row className="section-title-container">
					<h2 className="section-title">New Arrivals</h2>
				</Row>
				<Row>
					<Col xl="4" lg="4" md="6" sm="6">
						<img src={newProduct1} />
					</Col>
					<Col xl="4" lg="4" md="6" sm="6">
						<img src={newProduct2} />
					</Col>
					<Col xl="4" lg="4" md="6" sm="6">
						<img src={newProduct3} />
					</Col>
				</Row>
			</Container>
			<Container fluid className="gallery-area p-0 fix">
				<Row>
					<Col xl="6" lg="4" md="6" sm="6">
						<div className="gallery1" />
					</Col>
					<Col xl="3" lg="4" md="6" sm="6">
						{/* <img src={gallery2} /> */}
					</Col>
					<Col
						xl="3"
						lg="4"
						md="12"
						className="d-flex flex-column justify-content-around p-0"
					>
						{/* <img src={gallery3} />
						<img src={gallery4} /> */}
					</Col>
				</Row>
			</Container>
		</Container>
	);
});
export default Home;
