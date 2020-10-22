import { REDUX } from '../../redux/store/type';
const initialState = {
	cartId: '',
	items: [
		// {
		// 	name: 'Iphone 7',
		// 	color: 'black',
		// 	brand: 'Apple',
		// 	size: '5.4 inch',
		// 	amount: 10,
		// 	price: 130,
		// 	id: '001',
		// },
		// {
		// 	name: 'Iphone 11',
		// 	color: 'black',
		// 	brand: 'Apple',
		// 	size: '5.4 inch',
		// 	amount: 20,
		// 	price: 430,
		// 	id: '002',
		// },
		// {
		// 	name: 'Redmi Note 8',
		// 	color: 'black',
		// 	brand: 'Xiaomi',
		// 	size: '15.4 inch',
		// 	amount: 5,
		// 	price: 220,
		// 	id: '003',
		// },
		// {
		// 	name: 'Samsung Galaxy S7',
		// 	color: 'black',
		// 	brand: 'Samsung',
		// 	size: '6.9 inch',
		// 	amount: 20,
		// 	price: 390,
		// 	id: '004',
		// },
	],
};
const cartReducer = (state = initialState, action) => {
	switch (action.type) {
		case REDUX.CLEAR_DATA: {
			return {
				...state,
				items: [],
			};
		}
		case REDUX.ADD_TO_CART: {
			let idx = [...state.items].findIndex(
				(v) => v.id === action.payload.id
			);
			if (idx === -1) {
				return {
					...state,
					items: [...state.items, { ...action.payload, amount: 1 }],
				};
			}
			let tmpArr = [...state.items];
			tmpArr.splice(idx, 1, {
				...action.payload,
				amount: tmpArr[idx].amount + 1,
			});
			return { ...state, items: [...tmpArr] };
		}
		case REDUX.REMOVE_FROM_CART: {
			let { id } = action.payload;
			let tempArr = [...state.items].filter((v) => v.id !== id);
			return { ...state, items: tempArr };
		}
		case REDUX.UPDATE_ITEM: {
			let tmpArr = [...state.items];
			let idx = state.items.findIndex((v) => v.id === action.payload.id);
			tmpArr.splice(idx, 1, { ...action.payload });
			return {
				...state,
				items: [...tmpArr],
			};
		}
		case REDUX.GET_CART_LIST: {
			return { ...state };
		}
		default: {
			return state;
		}
	}
};
export default cartReducer;
