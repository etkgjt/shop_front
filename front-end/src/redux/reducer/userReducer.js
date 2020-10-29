import { REDUX } from '../../redux/store/type';
const initialState = {
	loggedIn: false,
	userInfo: {
		email: '',
		name: '',
		id: '',
		token: '',
	},
};
const userReducer = (state = initialState, action) => {
	switch (action.type) {
		case REDUX.LOG_IN: {
			return { ...state, loggedIn: true };
		}
		case REDUX.LOG_OUT: {
			return { ...state, loggedIn: false };
		}
		case REDUX.CLEAR_DATA: {
			return initialState;
		}
		case REDUX.UPDATE_USER_INFO: {
			return {
				...state,
				userInfo: action.payload,
			};
		}
		default: {
			return state;
		}
	}
};
export default userReducer;
