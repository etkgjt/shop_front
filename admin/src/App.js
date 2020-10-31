import './App.css';
import React, { Fragment } from 'react';
import { Provider } from 'react-redux';
import { store } from './app/redux/Store';
import { Switch } from 'react-router-dom';
import productRoutes from './app/views/product/ProductRoutes';
import customerRoutes from './app/views/customer/CustomerRoutes';
const routes = [...customerRoutes];
function App() {
	return (
		// <Fragment>
		// 	<Provider store={store}>{/* <Switch>{routes}</Switch> */}</Provider>
		// </Fragment>
		<div></div>
	);
}

export default App;
