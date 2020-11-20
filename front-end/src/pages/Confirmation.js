import React, { useCallback, memo, useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { Button, Container, Row } from 'reactstrap';
import Header from '../components/Header';
import TitleBackground from '../assets/slider_background.png';
import '../styles/pageTitle.css';
import '../styles/confirmation.css';
import { Col } from 'reactstrap';
import { Table } from 'reactstrap';
import { AlertModal, IndicatorModal, MyStepper } from '../components';
import '../styles/material.css';
import { Divider } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import { getNumberWithDot } from '../untils/numberFormater';
import { clearCart, sendOrder } from '../redux/actions/cartAction';
import { Alert } from 'reactstrap/lib/Alert';
import MyModal from '../components/MyModal';
import socket from '../untils/socket';
import { sendNoti } from '../redux/actions/userAction';
import moment from 'moment';

const Confirmation = memo(() => {
	const [isOpen, setIsOpen] = useState(false);
	const { payment, shippingInfo, items } = useSelector(
		(state) => state.cartReducer
	);
	const { id, access_token } = useSelector(
		(state) => state.userReducer.userInfo
	);
	const dispatch = useDispatch();
	const history = useHistory();
	const { method, cardName, cardNumber, cvv, expireDate } = payment;
	const {
		first_name,
		last_name,
		address,
		secondAddr,
		phone_number,
		city,
		district,
		username,
		note,
	} = shippingInfo;

	console.log('load ne', payment, shippingInfo, items);
	const toggle = () => setIsOpen(!isOpen);
	const formatPlaceOrderData = () => {
		const cartDetails = [...items]?.map((v) => ({
			product_id: v?.id,
			quantity: v?.amount,
		}));
		const total = [...items].reduce((x, y) => (x += y?.price * y?.amount), 0);
		return {
			user_id: id,
			shipping_address: address,
			buying_date: new Date().toString(),
			note,
			status: 1,
			total,
			details: cartDetails,
			method: payment,
		};
	};
	const _onCheckoutPress = async () => {
		try {
			MyModal.show(() => {}, <IndicatorModal title="Order sending..." />);
			const orderInfo = JSON.stringify(formatPlaceOrderData());
			const res = await sendOrder(access_token, orderInfo);
			console.log('order success', res);
			// MyModal.show(() => {}, <AlertModal title="Order Successfully !" />);
			const noti = {
				type: 2,
				email: `${first_name} ${last_name}`,
				date: moment().format('YYYY-MM-DD HH:mm:SS'),
			};
			socket.emit('new-order');

			const res1 = await sendNoti(JSON.stringify(noti));
			console.log('send notie', res1);
			MyModal.hide();
			clearCart(dispatch);
			history.push('/finish');
		} catch (err) {
			MyModal.hide();
			console.log('Place Order Err', err);
		}
	};

	return (
		<Container fluid style={{ backgroundColor: '#F4FAFE' }} className="pb-5">
			<Row className="title-container mt-5">
				<p class="page-title">Xác nhận</p>
			</Row>
			<MyStepper activeStep={3} />
			<Container className="pb-5">
				<Row className="w-100 justify-content-center">
					<h3>Kiểm tra lại thông tin</h3>
				</Row>
				<Container className="z-depth2 p-5 bg-white">
					<Row>
						<Col lg="6" md="10">
							<Row className="justify-content-between px-4">
								<h6>Người mua</h6>
								<p style={{ color: '#4489FD' }}>Chỉnh sửa</p>
							</Row>
							<p
								style={{
									letterSpacing: 8,
									color: '#D1D6DA',
									fontWeight: 'bold',
									overflow: 'hidden',
									display: 'block',
									lineHeight: '0.5 rem',
									textAlign: 'center',
								}}
							>
								----------------------------------
							</p>
							<Row className="justify-content-between px-4">
								<h6>Tên: </h6>
								<p>{`${first_name} ${last_name}`}</p>
							</Row>
							<Row className="justify-content-between px-4">
								<h6>Email: </h6>
								<p>{username}</p>
							</Row>
							<Row className="justify-content-between px-4">
								<h6>Số điện thoại: </h6>
								<p>{`${phone_number}`}</p>
							</Row>
							<Row className="justify-content-between px-4">
								<h6>Ghi chú: </h6>
								<p>{`${note}`}</p>
							</Row>
						</Col>
						<Col lg="6" md="10">
							<Row className="justify-content-between px-4">
								<h6>Địa chỉ nhận hàng</h6>
								<p style={{ color: '#4489FD' }}>Chỉnh sửa</p>
							</Row>
							<p
								style={{
									letterSpacing: 8,
									color: '#D1D6DA',
									fontWeight: 'bold',
									overflow: 'hidden',
									display: 'block',
									lineHeight: '0.5 rem',
									textAlign: 'center',
								}}
							>
								--------------------------------
							</p>
							<Row className="justify-content-between px-4">
								<h6>Thành phố: </h6>
								<p>{city}</p>
							</Row>
							<Row className="justify-content-between px-4">
								<h6>Quận: </h6>
								<p>{district}</p>
							</Row>
							<Row className="justify-content-between px-4">
								<h6>Địa chỉ </h6>
								<p>{address}</p>
							</Row>
							<Row className="justify-content-between px-4">
								<h6>Địa chỉ 2</h6>
								<p>{secondAddr}</p>
							</Row>
						</Col>
					</Row>
					<Row className="mt-3">
						{method !== 'delivery' ? (
							<Col lg="6" md="10">
								<Row className="justify-content-between px-4">
									<h6>Thanh toán</h6>
									<p style={{ color: '#4489FD' }}>Chỉnh sửa</p>
								</Row>
								<p
									style={{
										letterSpacing: 8,
										color: '#D1D6DA',
										fontWeight: 'bold',
										overflow: 'hidden',
										display: 'block',
										lineHeight: '0.5 rem',
										textAlign: 'center',
									}}
								>
									--------------------------------
								</p>
								<Row className="justify-content-between px-4">
									<h6>Phương thúc thanh toán: </h6>
									<p>{method}</p>
								</Row>
								<Row className="justify-content-between px-4">
									<h6>Tên chủ thẻ: </h6>
									<p>{cardName ? cardName : 'None'}</p>
								</Row>
								<Row className="justify-content-between px-4">
									<h6>Số thẻ: </h6>
									<p>{cardNumber ? cardNumber : 'None'}</p>
								</Row>
								<Row className="justify-content-between px-4">
									<h6>CVV: </h6>
									<p>{cvv ? cvv : 'None'}</p>
								</Row>
								<Row className="justify-content-between px-4">
									<h6>Ngày hết hạn: </h6>
									<p>{expireDate ? expireDate : 'None'}</p>
								</Row>
							</Col>
						) : (
							<Col lg="6" md="10">
								<Row className="justify-content-between px-4">
									<h6>Thanh toán</h6>
									<p style={{ color: '#4489FD' }}>Chỉnh sửa</p>
								</Row>
								<p
									style={{
										letterSpacing: 8,
										color: '#D1D6DA',
										fontWeight: 'bold',
										overflow: 'hidden',
										display: 'block',
										lineHeight: '0.5 rem',
										textAlign: 'center',
									}}
								>
									--------------------------------
								</p>
								<Row className="justify-content-between px-4">
									<h6>Phương thức: </h6>
									<p>{method}</p>
								</Row>
							</Col>
						)}

						<Col lg="6" md="10">
							<Row className="justify-content-between px-4">
								<h6>Đơn hàng</h6>
								<p style={{ color: '#4489FD' }}>Chỉnh sửa</p>
							</Row>
							<p
								style={{
									letterSpacing: 8,
									color: '#D1D6DA',
									fontWeight: 'bold',
									overflow: 'hidden',
									display: 'block',
									lineHeight: '0.5 rem',
									textAlign: 'center',
								}}
							>
								--------------------------------
							</p>
							{items?.map((v, i) => (
								<Row className="justify-content-between px-4">
									<h6>{`${v?.name}`} </h6>
									<p>{`${getNumberWithDot(
										v?.price * v?.amount
									)} vnđ`}</p>
								</Row>
							))}
						</Col>
					</Row>
				</Container>

				<Button
					onClick={_onCheckoutPress}
					className="button-container-box-shadow mt-5"
					style={{
						marginTop: 10,
						color: 'white',
						backgroundColor: '#4285f4',
						color: 'white',
						borderWidth: 0,
						borderRadius: 25,
						width: '100%',
						height: 50,
					}}
				>
					Đặt hàng
				</Button>
			</Container>
		</Container>
	);
});
export default Confirmation;
