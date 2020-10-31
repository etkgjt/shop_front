import ProductList from './ProductList';
import NewProduct from './NewProduct';
import ViewProducts from './ViewProduct';
import { Route } from 'react-router-dom';

const getRouteObject = (path, component) => (
	<Route path={path} component={component} />
);
const productRoutes = [
	getRouteObject('/product/new-product', NewProduct),
	getRouteObject('/product/product-list', ProductList),
	getRouteObject('/product/view-product', ViewProducts),
];

export default productRoutes;
