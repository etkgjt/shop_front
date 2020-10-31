import { Route } from 'react-router-dom';
import CustomerList from './CustomerList';
import NewCustomer from './NewCustomer';
import ViewCustomer from './ViewCustomer';

const getRouteObject = (path, component) => (
	<Route path={path} component={component} />
);
const customerRoutes = [
	getRouteObject('/customer/new-customer', NewCustomer),
	getRouteObject('/customer/customer-list', CustomerList),
	getRouteObject('/customer/view-customer', ViewCustomer),
];
export default customerRoutes;
