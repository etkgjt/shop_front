import { BASE_URL } from '../../constants/constants';
import { API } from '../../untils/api';
import axios from 'axios';
import { REDUX } from '../store/type';
import { reject } from 'lodash';

export const sendNoti = (noti) =>
	new Promise((resolve, reject) => {
		API.post('/noti/add', noti)
			.then((res) => resolve(res.data))
			.catch((err) => reject(err));
	});

export const login = (userName, password) => {
	const data = JSON.stringify({ UserName: userName, Password: password });
	console.log('Data', data);
	return new Promise((resolve, reject) => {
		console.log(data);
		API.post('/login/customer', data)
			.then((res) => resolve(res?.data))
			.catch((err) => {
				console.log('Error', err);
				reject(err);
			});
	});
};
export const getUserInfo = (username, token) =>
	new Promise((resolve, reject) => {
		API.get(`/user?value=${username}`, {
			headers: {
				Authorization: token,
			},
		})
			.then((res) => resolve(res?.data))
			.catch((err) => reject(err));
	});
export const signUp = (userInfo) =>
	new Promise((resolve, reject) => {
		API.post('/user/add', userInfo, {
			headers: {
				'Content-Type': 'application/json',
			},
		})
			.then((res) => resolve(res?.data))
			.catch((err) => reject(err));
	});
export const distpatchLoginToRedux = (dispatch) => {
	dispatch({ type: REDUX.LOG_IN });
};
export const updateUserInfoRedux = (dispatch, payload) => {
	dispatch({ type: REDUX.UPDATE_USER_INFO, payload: payload });
};

export const sendInquiry = (data) =>
	new Promise((resolve, reject) => {
		API.post('/contacts', data)
			.then((res) => resolve(res?.data))
			.catch((err) => reject(err));
	});

export const verifyEmail = (data) =>
	new Promise((resolve, reject) => {
		API.post('/user/verify', data)
			.then((res) => resolve(res?.data))
			.catch((err) => reject(err));
	});
export const updateUserInfo = (token, info, id) =>
	new Promise((resolve, reject) => {
		API.put(`/user/${id}`, info, {
			headers: {
				Authorization: token,
			},
		})
			.then((res) => resolve(res?.data))
			.catch((err) => reject(err));
	});
export const getOrderHistorySync = (userId, token) => async (dispatch) => {
	try {
		const res = await API.get(`/orders/search?customerId=${userId}`, {
			headers: {
				Authorization: `Bearer ${token}`,
				'Content-Type': 'application/json',
			},
		});
		console.log('Histore trong acion', res);
		dispatch(updateOrderHistoryCreator(res.data));
	} catch (err) {
		console.log('get order history sync err', err);
		dispatch(updateOrderHistoryCreator([]));
	}
};

export const useCoupon = (userId, voucherCode, oldArr = [], token) => async (
	dispatch
) => {
	try {
		const sendData = JSON.stringify({
			CodeVoucher: voucherCode,
			CustomerId: userId,
		});
		const res = await API.post('/usevouchers', sendData, {
			headers: {
				Authorization: `Bearer ${token}`,
				'Content-Type': 'application/json',
			},
		});
		const newArr = [...oldArr].filter((v) => v.code !== voucherCode);
		console.log('use voucher success', res);
		dispatch(updateCouponListCreator(newArr));
	} catch (err) {
		console.log('get list used voucher err', err);
		dispatch(updateCouponListCreator(oldArr));
	}
};

export const changePassword = (token, pass, id) =>
	new Promise((resolve, reject) => {
		API.put(`/customers/changepassword`, pass, {
			headers: {
				Authorization: `Bearer ${token}`,
				'Content-Type': 'application/json',
			},
		})
			.then((res) => resolve(res?.data))
			.catch((err) => reject(err));
	});
export const getAllCoupon = (userId) => async (dispatch) => {
	try {
		const { data } = await API.get(`/vouchers/customer/${userId}`);
		console.log('Voucher lay duowc ne', data);
		dispatch(updateCouponListCreator(data));
	} catch (err) {
		console.log('get coupon list err', err);
		dispatch(updateCouponListCreator([]));
	}
};
export const sendEmailToRecoveryPassword = (email) =>
	new Promise((resolve, reject) => {
		API.post('/user/send-fp', email)
			.then((res) => resolve(res?.data))
			.catch((err) => reject(err));
	});
export const sendRecoveryPassWord = (pass) =>
	new Promise((resolve, reject) => {
		API.post('/user/forget', pass)
			.then((res) => resolve(res?.data))
			.catch((err) => reject(err));
	});

const updateOrderHistoryCreator = (payload) => ({
	type: REDUX.UPDATE_ORDER_HISTORY,
	payload,
});
const updateCouponListCreator = (payload) => ({
	type: REDUX.UPDATE_COUPON_LIST,
	payload,
});
export const logout = () => {};
