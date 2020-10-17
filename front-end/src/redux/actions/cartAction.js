import { REDUX } from '../store/type';

export const addToCart = (dispatch, item) => {
	dispatch({ type: REDUX.ADD_TO_CART, payload: item });
};
export const removeFromCart = (dispatch, item) => {
	dispatch({ type: REDUX.REMOVE_FROM_CART, payload: item });
};
export const updateItem = (dispatch, item) => {
	dispatch({ type: REDUX.UPDATE_ITEM, payload: item });
};
export const clearCart = (dispatch) => {
	dispatch({ type: REDUX.CLEAR_CART });
};
