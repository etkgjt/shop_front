import axios from 'axios';
export const BASE_URL = 'https://d5706882abf7.ngrok.io';
export const API = axios.create({
	baseURL: BASE_URL,
	headers: {
		'Content-Type': 'application/json',
	},
});
