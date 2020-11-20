import { REDUX } from '../store/type';
import { API } from '../../untils/api';

export const dataSplitter = (array = []) => {
	const smartPhone = [...array]?.filter((v) => v?.category?.id === 1);

	const laptop = [...array]?.filter((v) => v?.category?.id === 2);
	const tablet = [...array]?.filter((v) => v?.category?.id === 3);
	const accessories = [...array]?.filter((v) => v?.category?.id > 3);

	return {
		smartPhone,
		laptop,
		tablet,
		accessories,
		all: array,
	};
};
export const loadShopDataSync = () => async (dispatch) => {
	try {
		dispatch(loading());
		const { data } = await API.get('/product');

		const { smartPhone, laptop, tablet, accessories, all } = dataSplitter(
			data
		);
		console.log(tablet, accessories);
		dispatch(updateAllShopDataCreator(all));
		dispatch(updateSmartPhoneDataCreator(smartPhone));
		dispatch(updateLaptopDataCreator(laptop));
		dispatch(updateTabletDataCreator(tablet));
		dispatch(updateAccessoriesDataCreator(accessories));
		dispatch(loadSuccess());
	} catch (err) {
		console.log('load data err', err);
		dispatch(loadError());
	}
};

export const sendCommentToServer = (data) =>
	new Promise((resolve, reject) => {
		API.post(`/comment/add`, data)
			.then((res) => resolve(res?.data))
			.catch((err) => reject(err));
	});
export const getFavoriteList = (userId) =>
	new Promise((resolve, reject) => {
		API.get(`/favorite?user=${userId}`)
			.then((res) => resolve(res?.data))
			.catch((err) => reject(err));
	});

export const addToFavorite = (data) =>
	new Promise((resolve, reject) => {
		API.post('/favorite', data)
			.then((res) => resolve(res?.data))
			.catch((err) => reject(err));
	});
export const removeFromFavorite = (data) =>
	new Promise((resolve, reject) => {
		API.put('/favorite', data)
			.then((res) => resolve(res?.data))
			.catch((err) => reject(err));
	});

export const updateReduxShopData = (dispatch, products) => {
	dispatch({ type: REDUX.UPDATE_SHOP_DATA, payload: products });
};
export const clearReduxShopData = (dispatch) => {
	dispatch({ type: REDUX.CLEAR_SHOP_DATA });
};
export const updateReduxLaptopItems = (dispatch, products) => {
	dispatch({ type: REDUX.UPDATE_LAPTOP_DATA, payload: products });
};
export const updateReduxSmartPhoneItems = (dispatch, products) => {
	dispatch({ type: REDUX.UPDATE_SMART_PHONE_DATA, payload: products });
};
export const updateReduxTabletItems = (dispatch, products) => {
	dispatch({ type: REDUX.UPDATE_TABLET_DATA, payload: products });
};
export const updateReduxAccessoriesItems = (dispatch, products) => {
	dispatch({ type: REDUX.UPDATE_ACCESSORIES_DATA, payload: products });
};
export const updateReduxFavoriteList = (dispatch, payload) => {
	dispatch({ type: REDUX.UPDATE_FAVORITE_LIST, payload });
};
export const loading = () => ({ type: REDUX.LOADING });
export const loadError = () => ({ type: REDUX.LOAD_ERROR });
export const loadSuccess = () => ({ type: REDUX.LOAD_SUCCESS });
export const updateAllShopDataCreator = (payload) => ({
	type: REDUX.UPDATE_SHOP_DATA,
	payload,
});
export const updateSmartPhoneDataCreator = (payload) => ({
	type: REDUX.UPDATE_SMART_PHONE_DATA,
	payload,
});
export const updateLaptopDataCreator = (payload) => ({
	type: REDUX.UPDATE_LAPTOP_DATA,
	payload,
});
export const updateTabletDataCreator = (payload) => ({
	type: REDUX.UPDATE_TABLET_DATA,
	payload,
});
export const updateAccessoriesDataCreator = (payload) => ({
	type: REDUX.UPDATE_ACCESSORIES_DATA,
	payload,
});
