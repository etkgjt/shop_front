import { API } from '../../untils/api';

export const SET_USER_DATA = 'USER_SET_DATA';
export const REMOVE_USER_DATA = 'USER_REMOVE_DATA';
export const USER_LOGGED_OUT = 'USER_LOGGED_OUT';

export const userLogin = (userInfo) =>
	new Promise((resolve, reject) => {
		API.post('/api/logn', userInfo, {
			headers: {
				'Content-Type': 'application/json',
			},
		})
			.then((res) => resolve(res?.data))
			.catch((err) => reject(err));
	});
export const getUserInfo = (token, userName) =>
	new Promise((resolve, reject) => {
		API.get(`/api/user?value=${userName}`, {
			headers: {
				Authorization: token,
			},
		})
			.then((res) => resolve(res?.data))
			.catch((err) => reject(err));
	});
