import { BASE_URL } from '../../constants/constants';
import { API } from '../../untils/api';
import axios from 'axios';
import { REDUX } from '../store/type';

export const login = (userName, password) => {
	const data = JSON.stringify({ username: userName, password: password });
	return new Promise((resolve, reject) => {
		console.log(data);
		API.post('/login', data)
			.then((res) => resolve(res?.data))
			.catch((err) => reject(err));
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
		API.post('/contact/add', data)
			.then((res) => resolve(res?.data))
			.catch((err) => reject(err));
	});

export const verifyEmail = (data) =>
	new Promise((resolve, reject) => {
		API.post('/verify', data)
			.then((res) => resolve(res?.data))
			.catch((err) => reject(err));
	});
export const logout = () => {};
