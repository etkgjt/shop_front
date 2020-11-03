import React, { useCallback, memo, useState, useEffect } from 'react';

import { Col, Container, Row } from 'reactstrap';

import {
	TopAdCarousel,
	ShopItem,
	MyFilterPanel,
	ShopMethod,
} from '../components';

import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../redux/actions/cartAction';

import '../styles/pageTitle.css';
import '../styles/shopPage.css';
import '../styles/forAll.css';
import { TABLET_BRAND } from '../constants/constants';
import { CircularProgress } from '@material-ui/core';
import {
	dataSplitter,
	getShopData,
	updateReduxAccessoriesItems,
	updateReduxLaptopItems,
	updateReduxSmartPhoneItems,
	updateReduxTabletItems,
} from '../redux/actions/shopAction';

const _renderItems = (dispatch, data) => {
	let tempArr = [...data];

	return tempArr.map((item, idx) => (
		<ShopItem
			addToCart={addToCart}
			item={item}
			idx={idx}
			dispatch={dispatch}
		/>
	));
};
const Tablet = memo(() => {
	console.log('shopage render ne');
	const dispatch = useDispatch();
	const productsDataRedux = useSelector((state) => state?.shopReducer?.tablet);
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
	// useEffect(() => {
	// 	console.log(
	// 		'filter',
	// 		'orderBy',
	// 		orderBy,
	// 		'categoryFilter',
	// 		categoryFilter,
	// 		'brandFilter',
	// 		brandFilter,
	// 		'priceFilter',
	// 		priceFilter,
	// 		'colorFilter',
	// 		colorFilter
	// 	);
	// 	let tmp = [...data];
	// 	if (categoryFilter.length) {
	// 		tmp = [];
	// 		for (let i = 0; i < categoryFilter.length; i++) {
	// 			tmp.push(
	// 				...[...data].filter(
	// 					(v) => v.category === categoryFilter[i].value
	// 				)
	// 			);
	// 		}
	// 	}
	// 	if (brandFilter.length) {
	// 		for (let i = 0; i < brandFilter.length; i++) {
	// 			tmp.push(
	// 				...[...data].filter((v) => v.brand === brandFilter[i].value)
	// 			);
	// 		}
	// 	}
	// 	if (colorFilter.length) {
	// 		for (let i = 0; i < colorFilter.length; i++) {
	// 			tmp.push(
	// 				...[...data].filter((v) => v.color === colorFilter[i].value)
	// 			);
	// 		}
	// 	}
	// 	setData([...tmp]);
	// }, [orderBy, categoryFilter, brandFilter, priceFilter, colorFilter]);
	const initialData = async () => {
		try {
			const dada = await getShopData();
			console.log(data);
			const { smartPhone, laptop, tablet, accessories } = dataSplitter(data);
			updateReduxLaptopItems(dispatch, laptop);
			updateReduxSmartPhoneItems(dispatch, smartPhone);
			updateReduxTabletItems(dispatch, tablet);
			updateReduxAccessoriesItems(dispatch, accessories);
		} catch (err) {
			console.log('Sync data err', err);
		}
	};
	useEffect(() => {
		if (!productsDataRedux || !productsDataRedux.length) {
			initialData();
		}
	}, []);

	return (
		<Container fluid className="gradient-background p-0">
			{/* <CustomCarousel /> */}

			<TopAdCarousel />
			<section className="shop-container">
				<Container fluid className="w-75">
					<Row>
						<Col lg="3" md="6">
							<MyFilterPanel
								brands={TABLET_BRAND}
								orderBy={orderBy}
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
							<Row className="m-0 p-0 pt-5 justify-content-center">
								{data && data.length ? (
									_renderItems(dispatch, data)
								) : (
									<CircularProgress />
								)}
							</Row>
						</Col>
					</Row>
					<ShopMethod />
				</Container>
			</section>
		</Container>
	);
});

export default Tablet;
