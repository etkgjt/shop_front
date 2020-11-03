import React, { useCallback, memo, useState, useEffect } from 'react';
import { Container, Row, Col, ButtonGroup, Input, Button } from 'reactstrap';
import '../styles/pageTitle.css';
import { Icon } from '@material-ui/core';

import { MDBContainer, MDBInput } from 'mdbreact';
import {
	MyRating,
	MyModal,
	SignInModal,
	DescriptionDetailsForm,
} from '../components';

import '../styles/singleProduct.css';
import '../styles/material.css';
import { useLocation, useHistory } from 'react-router-dom';
import { addToCart } from '../redux/actions/cartAction';
import { useDispatch } from 'react-redux';
import { getNumberWithDot } from '../untils/numberFormater';

const SingleProduct = memo(() => {
	console.log('product render ne');
	let { state } = useLocation();
	console.log('state ne', state);
	const [itemInfo, setItemInfo] = useState(
		state
			? state
			: {
					name: 'Fantasy T-shirt',
					category: 'Shirt',
					price: 122,
					model: 'Shirt 5407X',
					description:
						'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, sapiente illo. Sit error voluptas repellat rerum quidem, soluta enim perferendis voluptates laboriosam. Distinctio, officia quis dolore quos sapiente tempore alias',
					color: 'Black',
					delivery: 'USE, Europe',
					rating: 4.5,
					img: [
						'https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/12a.jpg',
						'https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/12a.jpg',
						'https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/12a.jpg',
						'https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/12a.jpg',
					],
			  }
	);
	useEffect(() => {
		console.log('state ne', state, itemInfo);
		setItemInfo(state);
	}, [state]);

	return (
		<Container fluid className="gradient-background mb-5">
			<Row className="title-container mt-5">
				<p className="page-title">Product Details</p>
			</Row>
			<Container>
				<h2 className="mt-5">Main Section</h2>
				<ProductDetails productInfo={itemInfo} />
			</Container>
		</Container>
	);
});

const ProductImage = ({ data }) => {
	const [activeImgIndex, setActiveImgIndex] = useState(0);
	return (
		<Col lg="6" md="6" className="pr-2 mb-5 ">
			<Row
				className="m-0 p-0 z-depth1"
				style={{
					height: '500px',
					backgroundColor: 'white',
					alignItems: 'center',
					justifyContent: 'center',
					display: 'flex',
				}}
			>
				<img
					className="item-image w-100 "
					src={data?.[activeImgIndex]?.url}
				/>
			</Row>
			<Row className="p-0 m-0 mt-2">
				{data.map((v, i) => (
					<Col
						lg="3"
						md="6"
						className="m-0 p-1"
						style={{ height: 100 }}
						onClick={() => setActiveImgIndex(i)}
					>
						<img
							key={`${i}`}
							className="z-depth1 h-100 img-fluid"
							src={v?.url}
						/>
					</Col>
				))}
			</Row>
		</Col>
	);
};

const ProductDetails = ({ productInfo }) => {
	const {
		rating,
		name,
		category,
		price,
		brand,
		description,
		color,
		delivery,
		images = [],
	} = productInfo;
	const dispatch = useDispatch();
	const history = useHistory();
	const [amount, setAmount] = useState(1);
	const _add = () => {
		setAmount(amount + 1);
	};
	const _sub = () => {
		if (amount !== 0) setAmount(amount - 1);
	};
	return (
		<Row className="pt-4">
			<ProductImage data={images} />
			<Col lg="6" md="6" className="item">
				<p className="mb-2" style={{ fontSize: 20, fontWeight: '700' }}>
					{name}
				</p>
				<Row className="pl-3">
					<MyRating readOnly={false} value={rating ?? 4} />
				</Row>
				<small className="mb-2" style={{ fontSize: 16 }}>
					{category?.name}
				</small>

				<p className="mb-2">{`${getNumberWithDot(price)} vnđ`}</p>
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
					<p style={{ fontWeight: 'bold' }}>Brand</p>
					<p style={{ fontWeight: '300' }}>{brand?.name}</p>
				</Row>
				<Row
					className="d-flex justify-content-between align-items-center mb-2 px-3"
					style={{ width: '60%' }}
				>
					<p style={{ fontWeight: 'bold' }}>Color</p>
					<p style={{ fontWeight: '300' }}>{description?.color}</p>
				</Row>
				<Row
					className="d-flex justify-content-between align-items-center mb-2 px-3"
					style={{ width: '60%' }}
				>
					<Button
						onClick={() =>
							MyModal.show(
								() => console.log('show ne'),
								<DescriptionDetailsForm
									description={description}
									name={name}
								/>
							)
						}
						style={{
							backgroundColor: '#458AFF',
							color: 'white',
							borderWidth: 0,
						}}
					>
						Xem thêm cấu hình chi tiết
					</Button>
				</Row>

				{/* <Row
					className="d-flex justify-content-between align-items-center mb-2 px-3"
					style={{ width: '60%' }}
				>
					<p style={{ fontWeight: 'bold' }}>Delivery</p>
					<p style={{ fontWeight: '300' }}>{delivery}</p>
				</Row> */}
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
								onClick={_sub}
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
									remove
								</Icon>
							</Button>
							<Input
								style={{
									width: 50,
									borderRadius: 0,
									height: 40,
								}}
								value={amount ? amount : 0}
							/>
							<Button
								onClick={_add}
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
									add
								</Icon>
							</Button>
						</ButtonGroup>
					</Col>
				</Row>
				<Row className="p-3">
					<Button
						onClick={() => {
							for (let i = 0; i < amount; i++)
								addToCart(dispatch, productInfo);
							history.push('/cart');
						}}
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
						onClick={() => {
							for (let i = 0; i < amount; i++)
								addToCart(dispatch, productInfo);
						}}
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

export default SingleProduct;
