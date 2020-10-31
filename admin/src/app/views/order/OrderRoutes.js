import { Route } from 'react-router-dom';

import OrderList from './OrderList';
import ViewOrder from './ViewOrder';
const getRouteObject = (path, component) => (
	<Route path={path} component={component} />
);
const orderRoutes = [
	getRouteObject('/order/order-list', OrderList),
	getRouteObject('/order/view-order', ViewOrder),
];

export default orderRoutes;
