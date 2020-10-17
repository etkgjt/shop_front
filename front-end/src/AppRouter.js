import React from 'react';
import {
	BrowserRouter,
	Link,
	Route,
	Switch,
	useLocation,
} from 'react-router-dom';
import {
	Home,
	Contact,
	ShopPage,
	Category,
	Cart,
	SingleProduct,
	Checkout,
	Confirmation,
} from './pages';

import { Provider } from 'react-redux';
import store from './redux/store';
import { Header, Footer, Layout } from './components';
import { Container } from 'reactstrap';
import './styles/footer.css';
import './styles/appRoute.css';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

const AppRoute = () => {
	let location = useLocation();
	return (
		<React.Fragment>
			<Provider store={store}>
				<header>
					<Header />
				</header>

				<TransitionGroup>
					<CSSTransition
						timeout={{ enter: 500 }}
						classNames="fadeLeft"
						key={location.key}
					>
						<Switch>
							<Route exact={true} path="/" component={Home} />
							<Route path="/single_product" component={SingleProduct} />
							<Route path="/cart" component={Cart} />
							<Route path="/contact" component={Contact} />
							<Route path="/category" component={Category} />
							<Route path="/shop_page" component={ShopPage} />
							<Route path="/confirmation" component={Confirmation} />
							<Route path="/checkout" component={Checkout} />
						</Switch>
					</CSSTransition>
				</TransitionGroup>
				{/* <Switch>
					<Route exact={true} path="/" component={Home} />
					<Route path="/single_product" component={SingleProduct} />
					<Route path="/cart" component={Cart} />
					<Route path="/contact" component={Contact} />
					<Route path="/category" component={Category} />
					<Route path="/shop_page" component={ShopPage} />
					<Route path="/confirmation" component={Confirmation} />
					<Route path="/checkout" component={Checkout} />
				</Switch> */}

				<footer className="box-shadow mt-5">
					<div className="footer-containter">
						<Footer />
					</div>
				</footer>
			</Provider>
		</React.Fragment>
	);
};
export default AppRoute;
