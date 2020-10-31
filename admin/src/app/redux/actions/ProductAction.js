import { API } from '../../untils/api';
import { REDUX } from '../type';

export const getAllProducts = async () =>
	new Promise((resolve, reject) => {
		API.get('/api/product')
			.then((res) => resolve(res?.data))
			.catch((err) => reject(err));
	});
export const addNewProduct = async (product, token) =>
	new Promise((resolve, reject) => {
		API.post('/api/product/add', product, {
			headers: {
				Authorization: token,
			},
		})
			.then((res) => resolve(res?.data))
			.catch((err) => reject(err));
	});

export const updateProductsRedux = (dispatch, payload) => {
	dispatch({ type: REDUX.UPDATE_PRODUCTS, payload: payload });
};
