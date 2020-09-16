import { REDUX } from '../../redux/store/type';
const initialState = {
	loggedIn: false,
	userInfo: {
		email: '',
		token: '',
		name: '',
		id: '',
	},
};
export default userReducer = (state = initialState, action) => {
	switch (action.type) {
		case REDUX.LOG_IN: {
			return { ...state };
		}
		case REDUX.LOG_OUT: {
			return { ...state };
		}
		case REDUX.CLEAR_DATA: {
			return { ...state };
		}
		default: {
			return state;
		}
	}
};
