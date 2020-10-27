import {
	AppBar,
	Checkbox,
	makeStyles,
	Slide,
	Slider,
	Tab,
	Tabs,
} from '@material-ui/core';

import React, { useCallback, memo, useState, useEffect } from 'react';

import {
	Button,
	Col,
	Container,
	Dropdown,
	DropdownItem,
	DropdownMenu,
	DropdownToggle,
	ListGroup,
	ListGroupItem,
	Navbar,
	NavItem,
	Row,
	UncontrolledDropdown,
} from 'reactstrap';

import moment from 'moment';
import { CustomCarousel, MyCheckboxList, TopAdCarousel } from '../components';
import '../styles/pageTitle.css';
import '../styles/shopPage.css';
import Icon from '@material-ui/core/Icon';

import { useSelector, useDispatch } from 'react-redux';
import { Rating } from '@material-ui/lab';
import Category from './Category';
import { MDBContainer, MDBInput } from 'mdbreact';
import {
	CATEGORY_LIST,
	ITEMS_ORDER_LIST,
	PHONE_BRAND_LIST,
	ITEM_COLORS,
} from '../constants/constants';
import '../styles/forAll.css';
import CustomRadioButton from '../components/CustomRadioButton';
import { addToCart } from '../redux/actions/cartAction';

const MyRating = ({ value }) => {
	return (
		<Rating size="large" name="size-large" precision={0.5} value={value} />
	);
};
const ShopMethod = () => (
	<Container className="mt-5 pt-5 justify-content-center">
		<h3 className="text-center">Our services</h3>
		<h4 className="text-center my-4">
			Join thousands of satisfied customers using our template globally.
		</h4>
		<Row className="my-5 py-5">
			<Col xl="3" lg="6" className="px-3">
				<Col
					className="button-container-box-shadow pt-3"
					style={{ backgroundColor: '#1E88E5', color: 'white' }}
				>
					<Row className="px-5 mt-2 justify-content-center ">
						<Icon style={{ fontSize: 70, color: 'white' }}>
							local_shipping_rounded
						</Icon>
					</Row>
					<Row className="px-5 mt-4">
						<h5>Shipping</h5>
					</Row>
					<Row className="px-5 mt-2">
						<p>
							aorem ixpsacdolor sit ameasecur adipisicing elitsf edasd.
						</p>
					</Row>
				</Col>
			</Col>
			<Col xl="3" lg="6" className="px-3">
				<Col
					className="button-container-box-shadow pt-3"
					style={{ backgroundColor: '#1E88E5', color: 'white' }}
				>
					<Row className="px-5 mt-2 justify-content-center">
						<Icon style={{ fontSize: 70 }}>verified_user</Icon>
					</Row>
					<Row className="px-5 mt-4">
						<h5>Security</h5>
					</Row>
					<Row className="px-5 mt-2">
						<p>
							aorem ixpsacdolor sit ameasecur adipisicing elitsf edasd.
						</p>
					</Row>
				</Col>
			</Col>
			<Col xl="3" lg="6" className="px-3">
				<Col
					className="button-container-box-shadow pt-3"
					style={{ color: 'white', backgroundColor: '#1E88E5' }}
				>
					<Row className="px-5 mt-2 justify-content-center">
						<Icon style={{ fontSize: 70 }}>headset_mic_rounded</Icon>
					</Row>
					<Row className="px-5 mt-4">
						<h5>Good Support</h5>
					</Row>
					<Row className="px-5 mt-2">
						<p>
							aorem ixpsacdolor sit ameasecur adipisicing elitsf edasd.
						</p>
					</Row>
				</Col>
			</Col>
			<Col xl="3" lg="6" className="px-3">
				<Col
					className="button-container-box-shadow pt-3"
					style={{ backgroundColor: '#1E88E5', color: 'white' }}
				>
					<Row className="px-5 mt-2 justify-content-center">
						<Icon style={{ fontSize: 70 }}>cached_two_tone</Icon>
					</Row>
					<Row className="px-5 mt-4">
						<h5>Exchanges</h5>
					</Row>
					<Row className="px-5 mt-2">
						<p>
							aorem ixpsacdolor sit ameasecur adipisicing elitsf edasd.
						</p>
					</Row>
				</Col>
			</Col>
		</Row>
	</Container>
);
const _renderItems = (dispatch, data) => {
	let tempArr = [...data];

	return tempArr.map((item, idx) => (
		<Col
			className="p-3 mt-1"
			xl="4"
			lg="12"
			md="12"
			sm="12"
			key={`${item.name}-${idx}`}
		>
			<Col className="button-container-box-shadow">
				<div className="mb-50 text-center single_items bg-primary">
					<img src={item.img}></img>
				</div>
				<Col
					style={{ borderRadius: 5 }}
					className="py-4 d-flex flex-column justify-content-center align-items-center mt-4"
				>
					<p className="text-center m-0 my-1">{item?.name}</p>
					<p className="text-center m-0 my-1">{`$${item?.price}`}</p>
					<p className="text-center m-0 my-1">{`Brand-${item?.brand}`}</p>
					<p className="text-center m-0 my-1">{`Category-${item?.category}`}</p>
					<p className="text-center m-0 my-1">{`Color-${item?.color}`}</p>

					<MyRating value={item?.rating} />
					<Row className="justify-content-around p-0 w-100">
						<Col lg="5" md="12" sm="12" className="w-100 p-0">
							<Button
								className="button-thin-shadow w-100"
								style={{
									borderRadius: 20,
									backgroundColor: '#4285F4',
									color: 'white',
									borderWidth: 0,
									width: '100%',
									fontSize: 13,
									height: 40,
								}}
								onClick={() => addToCart(dispatch, item)}
							>
								Add to cart
							</Button>
						</Col>
						<Col lg="5" md="12" sm="12" className="p-0 w-100">
							<Button
								className="button-thin-shadow"
								style={{
									borderRadius: 20,
									borderWidth: 2,
									borderColor: '#4285F4',
									backgroundColor: 'white',
									color: '#4285F4',
									width: '100%',
									height: 40,
									fontSize: 13,
								}}
							>
								Detail
							</Button>
						</Col>
					</Row>
				</Col>
			</Col>
		</Col>
	));
};
const ShopPage = memo(() => {
	console.log('shopage render ne');
	const dispatch = useDispatch();
	const productsDataRedux = useSelector(
		(state) => state?.shopReducer?.products
	);
	const [data, setData] = useState(productsDataRedux ? productsDataRedux : []);

	const [orderBy, setOrderBy] = useState(0);
	const [categoryFilter, setCategoryFilter] = useState([]);
	const [brandFilter, setBrandFilter] = useState([]);
	const [priceFilter, setPriceFilter] = useState({ min: -1, max: -1 });
	const [colorFilter, setColorFilter] = useState([]);
	useEffect(() => {
		console.log('data ne', productsDataRedux);
		if (productsDataRedux && productsDataRedux.length) {
			setData(productsDataRedux);
		}
	}, [productsDataRedux]);
	useEffect(() => {
		console.log(
			'filter',
			'orderBy',
			orderBy,
			'categoryFilter',
			categoryFilter,
			'brandFilter',
			brandFilter,
			'priceFilter',
			priceFilter,
			'colorFilter',
			colorFilter
		);
		let tmp = [...data];
		if (categoryFilter.length) {
			tmp = [];
			for (let i = 0; i < categoryFilter.length; i++) {
				tmp.push(
					...[...data].filter(
						(v) => v.category === categoryFilter[i].value
					)
				);
			}
		}
		if (brandFilter.length) {
			for (let i = 0; i < brandFilter.length; i++) {
				tmp.push(
					...[...data].filter((v) => v.brand === brandFilter[i].value)
				);
			}
		}
		if (colorFilter.length) {
			for (let i = 0; i < colorFilter.length; i++) {
				tmp.push(
					...[...data].filter((v) => v.color === colorFilter[i].value)
				);
			}
		}
		setData([...tmp]);
	}, [orderBy, categoryFilter, brandFilter, priceFilter, colorFilter]);

	return (
		<Container fluid className="gradient-background p-0">
			{/* <CustomCarousel /> */}

			<TopAdCarousel />
			<section className="shop-container">
				<Container fluid className="w-75">
					<Row>
						<Col lg="3" md="6">
							<FilterPanel
								orderBy={orderBy}
								categoryFilter={categoryFilter}
								brandFilter={brandFilter}
								priceFilter={priceFilter}
								colorFilter={colorFilter}
								setOrderBy={setOrderBy}
								setCategoryFilter={setCategoryFilter}
								setBrandFilter={setBrandFilter}
								setPriceFilter={setPriceFilter}
								setColorFilter={setColorFilter}
							/>
						</Col>
						<Col lg="9" md="6" classNam="p-0">
							<Row className="m-0 p-0 pt-5">
								{_renderItems(dispatch, data)}
							</Row>
						</Col>
					</Row>
					<ShopMethod />
				</Container>
			</section>
		</Container>
	);
});
const FilterPanel = ({
	orderBy = 0,
	categoryFilter = {},
	brandFilter = {},
	priceFilter = {},
	colorFilter = {},
	setOrderBy = () => {},
	setCategoryFilter = () => {},
	setBrandFilter = () => {},
	setPriceFilter = () => {},
	setColorFilter = () => {},
}) => {
	return (
		<Col className="pt-2">
			<h3>Filter By</h3>
			<ListGroup className="z-depth1">
				<ListGroupItem
					style={{
						fontSize: 15,
						margin: 0,
						justifyContent: 'center',
						alignItems: 'center',
						backgroundColor: '#F5F5F5',
						color: '#4285F4',
					}}
				>
					<h6 className="text-start p-0 m-0">Order by</h6>
				</ListGroupItem>
				<CustomRadioButton
					items={ITEMS_ORDER_LIST}
					checkedFunc={setOrderBy}
				/>
			</ListGroup>
			<ListGroup className="mt-3 z-depth1">
				<ListGroupItem
					style={{
						fontSize: 15,
						margin: 0,
						justifyContent: 'center',
						alignItems: 'center',
						backgroundColor: '#F5F5F5',
						color: '#4285F4',
					}}
				>
					<h6 className="text-start p-0 m-0">Category</h6>
				</ListGroupItem>

				<MyCheckboxList
					items={CATEGORY_LIST}
					onCheckedFunc={setCategoryFilter}
				/>
			</ListGroup>
			<ListGroup className="mt-3 z-depth1">
				<ListGroupItem
					style={{
						fontSize: 15,
						margin: 0,
						justifyContent: 'center',
						alignItems: 'center',
						backgroundColor: '#F5F5F5',
						color: '#4285F4',
					}}
				>
					<h6 className="text-start p-0 m-0">Brand</h6>
				</ListGroupItem>
				<MyCheckboxList
					items={PHONE_BRAND_LIST}
					onCheckedFunc={setBrandFilter}
				/>
			</ListGroup>

			<ListGroup className="mt-3 z-depth1">
				<ListGroupItem
					style={{
						fontSize: 15,
						margin: 0,
						justifyContent: 'center',
						alignItems: 'center',
						backgroundColor: '#F5F5F5',
						color: '#4285F4',
					}}
				>
					<h6 className="text-start p-0 m-0">Price</h6>
				</ListGroupItem>

				<ListGroupItem style={{ fontSize: 15, margin: 0 }}>
					<Slider
						valueLabelDisplay="on"
						aria-labelledby="range-slider"
						defaultValue={[10, 50]}
						max={2000}
						onChangeCommitted={(value) => setPriceFilter(value)}
					/>
				</ListGroupItem>
			</ListGroup>
			<ListGroup className="mt-3 z-depth1">
				<ListGroupItem
					style={{
						fontSize: 15,
						margin: 0,
						flexDirection: 'row',
						justifyContent: 'space-around',
						alignItems: 'center',
						backgroundColor: '#F5F5F5',
						color: '#4285F4',
					}}
				>
					<h6 className="text-start p-0 m-0">Color</h6>
				</ListGroupItem>
				<MyCheckboxList
					items={ITEM_COLORS}
					onCheckedFunc={setColorFilter}
				/>
			</ListGroup>
			<ListGroup className="mt-3 z-depth1">
				<ListGroupItem
					style={{
						fontSize: 15,
						margin: 0,
						flexDirection: 'row',
						justifyContent: 'space-around',
						alignItems: 'center',
						backgroundColor: '#F5F5F5',
						color: '#4285F4',
					}}
				>
					<h6 className="text-start p-0 m-0">Rating</h6>
				</ListGroupItem>
				<ListGroupItem style={{ fontSize: 15, margin: 0 }}>
					<Row className="align-items-center pl-3 pt-0">
						<MyRating value={5} />
						<p
							style={{
								fontSize: 12,
								textAlign: 'center',

								marginLeft: 10,
								paddingTop: 10,
							}}
						>
							4 start and more
						</p>
					</Row>
					<Row className="align-items-center pl-3 pt-0">
						<MyRating value={4} />
						<p
							style={{
								fontSize: 12,
								textAlign: 'center',

								marginLeft: 10,
								paddingTop: 10,
							}}
						>
							3 to 3.99
						</p>
					</Row>
					<Row className="align-items-center pl-3 pt-0">
						<MyRating value={3} />
						<p
							style={{
								fontSize: 12,
								textAlign: 'center',

								marginLeft: 10,
								paddingTop: 10,
							}}
						>
							3.00 and less
						</p>
					</Row>
				</ListGroupItem>
			</ListGroup>
		</Col>
	);
};

export default ShopPage;
