import { MDBBtn, MDBBtnGroup } from 'mdbreact';
import React, { useCallback, memo, useState, useEffect, useRef } from 'react';
import {
	Container,
	Row,
	Col,
	Button,
	ButtonGroup,
	Input,
	ListGroup,
	ListGroupItem,
	Fade,
	Carousel,
	CarouselItem,
} from 'reactstrap';
import '../styles/pageTitle.css';
import '../styles/cart.css';
import { Icon } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import {
	addToCart,
	removeCart,
	removeFromCart,
	updateItem,
} from '../redux/actions/cartAction';
import useDebounce from '../untils/debounce';
import _ from 'lodash';
import { NavLink, useHistory } from 'react-router-dom';
import '../styles/forAll.css';
import '../styles/material.css';
import {
	LoginRequestModal,
	MyStepper,
	MyModal,
	SignInModal,
} from '../components';
import { login } from '../redux/actions/userAction';

const Cart = () => {
	const data = useSelector((state) => state?.cartReducer?.items);
	const [cartData, setCartData] = useState(data ? [...data] : []);

	useEffect(() => {
		console.log('data redux thay doi ne', data);
		setCartData(data);
	}, [data]);
	console.log('cart render ne');
	return (
		<Container
			fluid
			className="pb-5"
			style={{ backgroundColor: '#e3f2fd66' }}
		>
			<Row className="title-container mt-5">
				<p class="page-title">Cart List</p>
			</Row>
			<MyStepper activeStep={0} />
			<Container>
				<Row className="mt-5">
					<Col lg="7" className="z-depth2 mr-5 bg-white">
						<h6 style={{ fontSize: 20 }} className="m-3">
							{`Cart ${cartData?.length} items`}
						</h6>

						{cartData.length ? (
							cartData.map((item, idx) => (
								<ItemDetails
									product={item}
									key={`${item?.name}-${idx}-${item?.id}`}
								/>
							))
						) : (
							<h3>There is no items</h3>
						)}
					</Col>
					<SumaryCheckout items={cartData ? cartData : []} />
				</Row>
			</Container>
		</Container>
	);
};
const ItemDetails = ({ product }) => {
	const dispatch = useDispatch();
	const { name, color, brand, size, amount, price, id, img } = product;
	const [amountOfItem, setAmountOfItem] = useState(amount ? amount : 0);
	const _handleAddItem = () => {
		setAmountOfItem((amount) => amount + 1);
	};
	const _handleSubItem = () => {
		setAmountOfItem((amount) => amount - 1);
	};
	const modalRef = useRef();

	useEffect(
		useDebounce(() => {
			if (amountOfItem > 0) {
				console.log('update item ne');
				updateItem(dispatch, { ...product, amount: amountOfItem });
			} else {
				console.log('remove item ne');
				removeFromCart(dispatch, product);
			}
		}, 0),
		[amountOfItem]
	);
	const _handleModalPress = () => {};
	return (
		<Col>
			<Row className="mb-4 pt-4">
				<Col md="5" lg="3" xl="3">
					<img className="img-fluid w-100" src={img?.[0]} />
				</Col>
				<Col md="7" lg="9" xl="9">
					<div className="mb-0 pl-1">
						<div className="d-flex justify-content-between">
							<div>
								<p
									style={{ fontSize: 20, fontWeight: 'bold' }}
									className="mb-2"
								>
									{name}
								</p>
								<p
									className="mb-3 text-muted text-uppercase small"
									style={{ fontSize: 12 }}
								>
									{`BRAND: ${brand?.toString().toUpperCase()}`}
								</p>
								<p
									className="mb-2 text-muted text-uppercase small"
									style={{ fontSize: 12 }}
								>
									{`COLOR: ${color?.toString().toUpperCase()}`}
								</p>
								<p
									className="mb-3 text-muted text-uppercase small"
									style={{ fontSize: 12 }}
								>
									{`SIZE: ${size?.toUpperCase()}`}
								</p>
							</div>
							<div>
								<div className="mb-0 w-100">
									<ButtonGroup>
										<Button
											onClick={_handleAddItem}
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
												textAlign: 'center',
											}}
											value={amountOfItem}
										/>
										<Button
											onClick={_handleSubItem}
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

									<small
										id="passwordHelpBlock"
										className="form-text text-muted text-center"
										style={{ fontSize: 10 }}
									>
										(Note, 1 piece)
									</small>
								</div>
							</div>
						</div>
					</div>

					<div class="d-flex justify-content-between align-items-center">
						<div>
							<Button
								color="secondary"
								style={{
									backgroundColor: 'transparent',
									paddingLeft: 0,
									borderWidth: 0,
								}}
								onClick={() => removeFromCart(dispatch, product)}
							>
								<div className="p-0 m-0 d-flex justify-content-between align-items-center">
									<Icon
										style={{
											fontSize: 25,
											color: '#888',
										}}
									>
										delete_forever
									</Icon>
									<small
										style={{
											fontSize: 10,
											color: '#888',
										}}
									>
										REMOVE
									</small>
								</div>
							</Button>
							<Button
								onClick={_handleModalPress}
								color="secondary"
								style={{
									backgroundColor: 'transparent',
									borderWidth: 0,
								}}
							>
								<div className="d-flex justify-content-between align-items-center">
									<Icon
										style={{
											fontSize: 25,
											color: '#888',
										}}
									>
										favorite
									</Icon>
									<small
										style={{
											fontSize: 10,
											color: '#888',
										}}
									>
										MOVE TO WISH LIST
									</small>
								</div>
							</Button>
						</div>
						<p class="mb-0">
							<span>
								<strong id="summary">{`$ ${
									amountOfItem * price
								}`}</strong>
							</span>
						</p>
					</div>
				</Col>
			</Row>
		</Col>
	);
};
const SumaryCheckout = ({ items }) => {
	const [isFaded, setIsFaded] = useState(false);
	const [data, setData] = useState(items ? items : []);
	const { loggedIn } = useSelector((state) => state.userReducer);
	const history = useHistory();
	const ship = 10;
	const discount = 0;
	useEffect(() => {
		if (items && items.length) setData(items);
	}, [items]);
	const _caculateTotal = () => {
		if (data && data.length) {
			let total = data?.reduce((x, y) => (x += y?.price * y?.amount), 0);
			return total;
		}
		return 0;
	};
	return (
		<Col lg="4">
			<div className="p-4 z-depth2 bg-white">
				<h6 class="mb-3">The total amount of</h6>
				<ListGroup flush>
					<ListGroupItem className="d-flex justify-content-between align-items-center">
						<small style={{ fontSize: 16 }}>Temporary amount</small>
						<small style={{ fontSize: 16 }}>{_caculateTotal()}</small>
					</ListGroupItem>
					<ListGroupItem className="d-flex justify-content-between align-items-center">
						<small style={{ fontSize: 16 }}>Shipping</small>
						<small style={{ fontSize: 16 }}>{ship}</small>
					</ListGroupItem>
					<ListGroupItem className="d-flex justify-content-between align-items-center">
						<small style={{ fontSize: 16, fontWeight: 'bold' }}>
							The total amount of (including VAT)
						</small>
						<small style={{ fontSize: 16 }}>
							{_caculateTotal() + ship}
						</small>
					</ListGroupItem>
					{loggedIn && data ? (
						<NavLink
							exact
							to={{
								pathname: '/checkout',
								state: { data },
							}}
							className="w-100"
							style={{
								color: 'white',
								textDecoration: 'none',
							}}
						>
							<Button
								className="button-container-box-shadow"
								style={{
									marginTop: 10,
									color: 'white',
									backgroundColor: '#4285f4',
									color: 'white',
									borderWidth: 0,
									width: '100%',
									height: 50,
									borderRadius: 25,
								}}
							>
								Next Step
							</Button>
						</NavLink>
					) : (
						<Button
							onClick={() =>
								MyModal.show(() => {},
								<SignInModal onSignInSuccess={() => history.push('/checkout', { data })} />)
							}
							className="button-container-box-shadow"
							style={{
								marginTop: 10,
								color: 'white',
								backgroundColor: '#4285f4',
								color: 'white',
								borderWidth: 0,
								width: '100%',
								height: 50,
								borderRadius: 25,
							}}
						>
							Next Step
						</Button>
					)}

					<Button
						outline
						color="primary"
						className="mt-4 button-container-box-shadow"
						onClick={() => setIsFaded(!isFaded)}
						style={{
							color: 'white',
							color: '#4285f4',
							backgroundColor: 'white',
							borderColor: '#4285f4',
							width: '100%',
							height: 50,
							borderRadius: 25,
						}}
					>
						Add a discount code (optional)
					</Button>
					<Fade in={isFaded} className="mt-3">
						<Input className="mb-3" />
					</Fade>
				</ListGroup>
			</div>
		</Col>
	);
};
export default Cart;
