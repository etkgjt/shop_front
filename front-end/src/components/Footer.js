import React, { useEffect } from 'react';
import { Row } from 'reactstrap';
import { Col } from 'reactstrap';
import Alert from 'reactstrap/lib/Alert';
import Container from 'reactstrap/lib/Container';
const Footer = () => {
	const height = window.innerHeight;
	return (
		<Container className="bg-light">
			<Row
				className="d-flex justify-content-between p-3"
				style={{ height: '100%' }}
			>
				<Col className="text-light bg-dark mx-4 my-1">
					<Row className="p-1">uStora</Row>
					<Row className="p-1" style={{ fontSize: 12 }}>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit.
						Perferendis sunt id doloribus vero quam laborum quas alias
						dolores blanditiis iusto consequatur, modi aliquid eveniet
						eligendi iure eaque ipsam iste, pariatur omnis sint! Suscipit,
						debitis, quisquam. Laborum commodi veritatis magni at?
					</Row>
				</Col>
				<Col className="text-light bg-dark mx-4 my-1">
					<Row>User Navigation</Row>
					<Row style={{ fontSize: 12 }}>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit.
						Perferendis sunt id doloribus vero quam laborum quas alias
						dolores blanditiis iusto consequatur, modi aliquid eveniet
						eligendi iure eaque ipsam iste, pariatur omnis sint! Suscipit,
						debitis, quisquam. Laborum commodi veritatis magni at?
					</Row>
				</Col>
				<Col className="text-light bg-dark mx-4 my-1">
					<Row>User Navigation</Row>
					<Row style={{ fontSize: 12 }}>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit.
						Perferendis sunt id doloribus vero quam laborum quas alias
						dolores blanditiis iusto consequatur, modi aliquid eveniet
						eligendi iure eaque ipsam iste, pariatur omnis sint! Suscipit,
						debitis, quisquam. Laborum commodi veritatis magni at?
					</Row>
				</Col>
				<Col className="text-light bg-dark mx-4 my-1 ">
					<Row>User Navigation</Row>
					<Row style={{ fontSize: 12 }}>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit.
						Perferendis sunt id doloribus vero quam laborum quas alias
						dolores blanditiis iusto consequatur, modi aliquid eveniet
						eligendi iure eaque ipsam iste, pariatur omnis sint! Suscipit,
						debitis, quisquam. Laborum commodi veritatis magni at?
					</Row>
				</Col>
			</Row>
		</Container>
	);
};
export default Footer;
