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
export const saveUserInfoRedux = (dispatch, payload) => {
	dispatch({ type: REDUX.LOG_IN, payload });
};
export const logout = () => {};
