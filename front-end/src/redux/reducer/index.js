import { combineReducers } from 'redux';
import cartReducer from './cartReducer';
import favoriteReducer from './favoriteReducer';
import userReducer from './userReducer';
const reducers = combineReducers({ cartReducer, favoriteReducer, userReducer });
export default reducers;
