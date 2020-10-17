import { REDUX } from '../store/type';

export const getShopData = () => {};
export const updateReduxShopData = (dispatch, products) => {
	dispatch({ type: REDUX.UPDATE_SHOP_DATA, payload: products });
};
export const clearReduxShopData = (dispatch) => {
	dispatch({ type: REDUX.CLEAR_SHOP_DATA });
};
