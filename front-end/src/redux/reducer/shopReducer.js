import { REDUX } from '../store/type';

const initialState = {
	products: [],
	laptop: [],
	smartPhone: [],
	tablet: [],
	accessories: [],
};

const shopReducer = (state = initialState, action) => {
	switch (action.type) {
		case REDUX.UPDATE_SHOP_DATA: {
			return {
				...state,
				products: action.payload,
			};
		}
		case REDUX.CLEAR_SHOP_DATA: {
			return { ...initialState };
		}
		case REDUX.UPDATE_LAPTOP_DATA: {
			return {
				...state,
				laptop: action.payload,
			};
		}
		case REDUX.UPDATE_ACCESSORIES_DATA: {
			return {
				...state,
				accessories: action.payload,
			};
		}
		case REDUX.UPDATE_SMART_PHONE_DATA: {
			return {
				...state,
				smartPhone: action.payload,
			};
		}
		case REDUX.UPDATE_TABLET_DATA: {
			return {
				...state,
				tablet: action.payload,
			};
		}
		default: {
			return {
				...state,
			};
		}
	}
};
export default shopReducer;
