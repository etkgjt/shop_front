import React from 'react';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import {
	Home,
	Contact,
	ShopPage,
	Category,
	Cart,
	SingleProduct,
} from './pages';

import { Provider } from 'react-redux';
import store from './redux/store';
import { Header, Footer, Layout } from './components';
import { Container } from 'reactstrap';
import './styles/footer.css';
const AppRoute = () => {
	return (
		<React.Fragment>
			<Provider store={store}>
				<header>
					<Header />
				</header>
				<Switch>
					<Route exact={true} path="/" component={Home} />
					<Route path="/single_product" component={SingleProduct} />
					<Route path="/cart" component={Cart} />
					<Route path="/contact" component={Contact} />
					<Route path="/category" component={Category} />
					<Route path="/shop_page" component={ShopPage} />
				</Switch>
				<footer>
					<div className="footer-containter">
						<Footer />
					</div>
				</footer>
			</Provider>
		</React.Fragment>
	);
};
export default AppRoute;
