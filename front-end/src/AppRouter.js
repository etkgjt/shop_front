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
	PaymentMethod,
	SignIn,
	SignUp,
	UserInfo,
} from './pages';

import { Provider } from 'react-redux';
import store from './redux/store';
import { Header, Footer, Layout } from './components';
import { Container, Row } from 'reactstrap';
import './styles/footer.css';
import './styles/appRoute.css';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import MyModal from './components/MyModal';

const AppRoute = () => {
	let location = useLocation();
	return (
		<React.Fragment>
			<Provider store={store}>
				<header>
					<Header />
				</header>

				{/* <TransitionGroup>
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
				</TransitionGroup> */}
				<Switch>
					<Route exact={true} path="/" component={Home} />
					<Route path="/single_product" component={SingleProduct} />
					<Route path="/cart" component={Cart} />
					<Route path="/contact" component={Contact} />
					<Route path="/category" component={Category} />
					<Route path="/shop_page" component={ShopPage} />
					<Route path="/confirmation" component={Confirmation} />
					<Route path="/checkout" component={Checkout} />
					<Route path="/payment" component={PaymentMethod} />
					<Route path="/sign_in" component={SignIn} />
					<Route path="/sign_up" component={SignUp} />
					<Route path="/user_info" component={UserInfo} />
				</Switch>
				{/* <MyModal /> */}
				<footer
					className="box-shadow footer-background"
					style={{ color: 'white' }}
				>
					<div className="footer-containter">
						<Footer />
					</div>
					<Row
						style={{
							width: '100%',
							height: '50px',
						}}
						className="justify-content-center align-items-center small-footer m-0 p-0"
					>
						<p
							style={{
								textAlign: 'center',
								color: 'white',
								paddingTop: 15,
							}}
						>
							© 2018 Copyright: MDBootstrap.com
						</p>
					</Row>
				</footer>
			</Provider>
		</React.Fragment>
	);
};
export default AppRoute;
