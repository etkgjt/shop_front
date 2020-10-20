import React, { useCallback, memo, useState, useEffect } from 'react';
import { Container, Row, Col, ButtonGroup, Input, Button } from 'reactstrap';
import '../styles/pageTitle.css';
import { Icon } from '@material-ui/core';

import { MDBContainer, MDBInput, MDBRating } from 'mdbreact';
import '../styles/singleProduct.css';
import { Rating } from '@material-ui/lab';
const SingleProduct = memo(() => {
	console.log('product render ne');
	const info = {
		name: 'Fantasy T-shirt',
		category: 'Shirt',
		price: 122,
		model: 'Shirt 5407X',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, sapiente illo. Sit error voluptas repellat rerum quidem, soluta enim perferendis voluptates laboriosam. Distinctio, officia quis dolore quos sapiente tempore alias',
		color: 'Black',
		delivery: 'USE, Europe',
	};
	return (
		<Container fluid className="gradient-background mb-5">
			<Row className="title-container mt-5">
				<p class="page-title">Product Details</p>
			</Row>
			<Container>
				<h2 className="mt-5">Main Section</h2>
				<ProductDetails productInfo={info} />
			</Container>
		</Container>
	);
});

const ProductImage = ({ data }) => {
	return (
		<Col lg="6" md="6" className="pr-2 ">
			<img
				className="img-fluid w-100 item-container-box-shadow"
				src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/12a.jpg"
			/>
			<Row className="p-2 mt-4 justify-content-between">
				{data.map((v, i) => (
					<img
						key={`${i}`}
						style={{ width: 130, height: 150 }}
						className="item-container-box-shadow mt-2"
						src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/12a.jpg"
					/>
				))}
			</Row>
		</Col>
	);
};

const ProductDetails = ({ productInfo }) => {
	let data = [
		'https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/12a.jpg',
		'https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/12a.jpg',
		'https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/12a.jpg',
		'https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/12a.jpg',
	];
	const {
		name,
		category,
		price,
		model,
		description,
		color,
		delivery,
	} = productInfo;
	return (
		<Row className="pt-4">
			<ProductImage data={data} />
			<Col lg="6" md="6" className="item">
				<p className="mb-2" style={{ fontSize: 20, fontWeight: '700' }}>
					{name}
				</p>
				<Row className="pl-3">
					<MyRating />
				</Row>
				<small className="mb-2" style={{ fontSize: 16 }}>
					{category}
				</small>

				<p className="mb-2">{`$${price}`}</p>
				<p className="mb-2" style={{ fontWeight: '300' }}>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam,
					sapiente illo. Sit error voluptas repellat rerum quidem, soluta
					enim perferendis voluptates laboriosam. Distinctio, officia quis
					dolore quos sapiente tempore alias.
				</p>
				<Row
					className="d-flex justify-content-between align-items-center mb-2 px-3"
					style={{ width: '60%' }}
				>
					<p style={{ fontWeight: 'bold' }}>Model</p>
					<p style={{ fontWeight: '300' }}>{model}</p>
				</Row>
				<Row
					className="d-flex justify-content-between align-items-center mb-2 px-3"
					style={{ width: '60%' }}
				>
					<p style={{ fontWeight: 'bold' }}>Color</p>
					<p style={{ fontWeight: '300' }}>{color}</p>
				</Row>
				<Row
					className="d-flex justify-content-between align-items-center mb-2 px-3"
					style={{ width: '60%' }}
				>
					<p style={{ fontWeight: 'bold' }}>Delivery</p>
					<p style={{ fontWeight: '300' }}>{delivery}</p>
				</Row>
				<div
					style={{
						width: '100%',
						height: 1,
						backgroundColor: '#7F7F7F',
					}}
				/>
				<Row className="mt-3">
					<Col className="p-0 pl-3 d-flex flex-column align-items-start justify-content-start">
						<p className="mb-0">Quantity</p>

						<ButtonGroup className="mt-2">
							<Button
								style={{
									width: 50,
									height: 40,
									justifyContent: 'center',
									flexDirection: 'row',
									borderColor: '#CED4DA',
									backgroundColor: 'white',
									borderRight: 0,
								}}
							>
								<Icon
									style={{
										fontSize: 20,
										color: '#C4D4DA',
									}}
								>
									add
								</Icon>
							</Button>
							<Input
								style={{
									width: 50,
									borderRadius: 0,
									height: 40,
								}}
							/>
							<Button
								style={{
									width: 50,
									height: 40,
									justifyContent: 'center',
									flexDirection: 'row',
									borderColor: '#C4D4DA',
									borderWidth: 1,
									backgroundColor: 'white',
								}}
							>
								<Icon
									style={{
										fontSize: 20,
										color: '#CED4DA',
									}}
								>
									remove
								</Icon>
							</Button>
						</ButtonGroup>
					</Col>
					<Col className="p-0 align-items-start justify-content-center">
						<p className="m-0 pl-3" style={{ textAlign: 'start' }}>
							Select Size
						</p>
						<MyRadioButton />
					</Col>
				</Row>
				<Row className="p-3">
					<Button
						className="mr-2 d-flex flex-row justify-content-center align-content-between button-shadow"
						style={{
							backgroundColor: '#4285F4',

							width: 150,
							height: 50,
							borderRadius: 25,
						}}
					>
						<p className="m-0" style={{ fontSize: 10 }}>
							BUY NOW
						</p>
					</Button>

					<Button
						style={{
							backgroundColor: '#F2F2F2',
							width: 150,
							height: 50,
							borderRadius: 25,
						}}
						className="d-flex flex-row justify-content-center align-content-between button-shadow"
					>
						<Icon
							style={{
								fontSize: 16,
								color: '#4F4F4F',
								marginRight: 10,
							}}
						>
							shopping_cart
						</Icon>
						<p className="m-0" style={{ fontSize: 10, color: '#4F4F4F' }}>
							ADD TO CART
						</p>
					</Button>
				</Row>
			</Col>
		</Row>
	);
};

const MyRadioButton = () => {
	const [radio, setRadio] = useState(1);
	useEffect(() => {
		console.log('radio thay dooi ne');
	}, [radio]);
	return (
		<MDBContainer className="m-0 pl-0 d-flex flex-row justify-content-around">
			<Row className="ml-1 align-items-center">
				<MDBInput
					checked={radio === 0}
					onClick={() => setRadio(0)}
					type="radio"
				></MDBInput>
				<p className="ml-2">Small</p>
			</Row>
			<Row className="ml-1  align-items-center">
				<MDBInput
					id="radio1"
					checked={radio === 1}
					onClick={() => setRadio(1)}
					type="radio"
				/>
				<p>Small</p>
			</Row>
			<Row className="ml-1  align-items-center">
				<MDBInput
					checked={radio === 2}
					onClick={() => setRadio(2)}
					type="radio"
				/>
				<p>Small</p>
			</Row>
		</MDBContainer>
	);
};
const MyRating = () => {
	const [value, setValue] = useState(3);
	return (
		<Rating
			size="large"
			name="size-large"
			precision={0.5}
			value={value}
			onChange={(event, newValue) => {
				setValue(newValue);
			}}
		/>
	);
};
export default SingleProduct;
