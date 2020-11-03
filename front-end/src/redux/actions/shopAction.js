import { REDUX } from '../store/type';
import { API } from '../../untils/api';

export const getShopData = () =>
	new Promise((resolve, reject) => {
		API.get('/product')
			.then((res) => resolve(res?.data))
			.catch((err) => reject(err));
	});

export const dataSplitter = (array) => {
	console.log('data trong funcSplit', array);
	const smartPhone = [...array.filter((v) => v?.category?.id === 1)];
	console.log('smart phone trong userAction ne', smartPhone);
	const laptop = [...array.filter((v) => v?.category?.id === 1)];
	const tablet = [...array.filter((v) => v?.caterory?.id === 1)];
	const accessories = [...array.filter((v) => v?.caterory?.id === 1)];
	return {
		smartPhone,
		laptop,
		tablet,
		accessories,
	};
};

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
