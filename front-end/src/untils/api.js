import axios from 'axios';
import { BASE_URL } from '../constants/constants';
export const API = axios.create({
	baseURL: BASE_URL,
	timeout: 5000,
	headers: {
		Accept: 'application/json',
		'Content-Type': 'application/json',
		Authorization: `Bearer ${accessToken}`,
	},
});
export const a = () => {};

