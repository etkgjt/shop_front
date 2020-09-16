import { REDUX } from '../../redux/store/type';
const initialState = {
	cartId: '',
	items: [],
};
export default cartReducer = (state = initialState, action) => {
	switch (action.type) {
		case REDUX.CLEAR_DATA: {
			return {
				...state,
				items: [],
			};
		}
		case REDUX.ADD_TO_CART: {
			return { ...state };
		}
		case REDUX.REMOVE_FROM_CART: {
			return { ...state };
		}
		case REDUX.GET_CART_LIST: {
			return { ...state };
		}
		default: {
			return state;
		}
	}
};
