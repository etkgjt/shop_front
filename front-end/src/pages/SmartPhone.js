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
import { SMART_PHONE_BRAND } from '../constants/constants';
import { Button, CircularProgress } from '@material-ui/core';
import moment from 'moment';
import {
	dataSplitter,
	getShopData,
	updateReduxAccessoriesItems,
	updateReduxLaptopItems,
	updateReduxSmartPhoneItems,
	updateReduxTabletItems,
} from '../redux/actions/shopAction';

const _renderItems = (dispatch, data, maxNum) => {
	let tempArr = [...data];

	return tempArr.map((item, idx) => {
		if (idx < maxNum)
			return (
				<ShopItem
					key={`${idx}-${item?.name}`}
					addToCart={addToCart}
					item={item}
					idx={idx}
					dispatch={dispatch}
				/>
			);
		return <div />;
	});
};
const SmartPhone = memo(() => {
	console.log('shopage render ne');
	const dispatch = useDispatch();
	const productsDataRedux = useSelector(
		(state) => state?.shopReducer?.smartPhone
	);
	const [data, setData] = useState(productsDataRedux ? productsDataRedux : []);

	const [orderBy, setOrderBy] = useState(0);
	// const [categoryFilter, setCategoryFilter] = useState([]);
	const [brandFilter, setBrandFilter] = useState([]);
	const [priceFilter, setPriceFilter] = useState({ min: -1, max: -1 });
	const [colorFilter, setColorFilter] = useState([]);

	const [numberOfItem, setNumberOfItem] = useState(10);

	const initialData = async () => {
		try {
			console.log('init data ne');
			const dataRes = await getShopData();
			console.log('data lay duoc ne', dataRes);
			const { smartPhone, laptop, tablet, accessories } = dataSplitter(
				dataRes
			);
			console.log('smart phone ne', smartPhone);
			updateReduxLaptopItems(dispatch, laptop);
			updateReduxSmartPhoneItems(dispatch, smartPhone);
			updateReduxTabletItems(dispatch, tablet);
			updateReduxAccessoriesItems(dispatch, accessories);
		} catch (err) {
			console.log('Sync data err', err);
		}
	};
	useEffect(() => {
		console.log('Price filter', priceFilter);
	}, [priceFilter]);
	useEffect(() => {
		console.log('Long chay lan dau thoi ne', productsDataRedux);

		if (!productsDataRedux || !productsDataRedux.length) {
			initialData();
		}
	}, []);
	useEffect(() => {
		console.log('data ne', productsDataRedux);
		if (productsDataRedux && productsDataRedux.length) {
			setData(productsDataRedux);
		}
	}, [productsDataRedux]);

	const _onFilterClick = () => {
		console.log('Filte brand ne');
		let temp = [...productsDataRedux];
		if (brandFilter && brandFilter.length) {
			let newBrandFilterList = brandFilter.reduce((a, b) => {
				return [...a, ...temp.filter((v) => v.brand === b.value)];
			}, []);
			temp = newBrandFilterList;
		}
		if (colorFilter && colorFilter.length) {
			let newBrandFilterList = temp.reduce((a, b) => {
				return [...a, ...temp.filter((v) => v.brand === b.value)];
			}, []);
			temp = newBrandFilterList;
		}
		const x =
			priceFilter?.[0] <= priceFilter[1] ? priceFilter?.[0] : priceFilter[1];
		const y =
			priceFilter?.[0] >= priceFilter[1] ? priceFilter?.[0] : priceFilter[1];
		if ((x && y) || x || y) {
			temp = temp.filter(
				(v) => v?.price >= x * 1000000 && v?.price <= y * 1000000
			);
		}
		switch (orderBy) {
			case 0:
				temp = temp.sort((a, b) => b.price * 1 - a.price * 1);
				break;
			case 1:
				temp = temp.sort((a, b) => a.price * 1 - b.price * 1);
				break;
			case 2:
				temp = temp.sort((a, b) => {
					if (moment(a.dateArrive).isBefore(moment(b.dateArrive)))
						return 1;
					if (moment(a.dateArrive).isAfter(moment(b.dateArrive)))
						return -1;
					if (moment(a.dateArrive).isSame(moment(b.dateArrive))) return 0;
				});
				break;
			case 3:
				temp = temp.sort((a, b) => b.buyingTimes * 1 - a.buyingTimes * 1);
				break;
			default:
				break;
		}
		setData(temp);
	};

	return (
		<Container fluid className="gradient-background p-0">
			{/* <CustomCarousel /> */}

			<TopAdCarousel />
			<section className="shop-container">
				<Container fluid className="w-75">
					<Row>
						<Col lg="3" md="6">
							<MyFilterPanel
								onFilterClick={() => _onFilterClick()}
								brands={SMART_PHONE_BRAND}
								orderBy={orderBy}
								brandFilter={brandFilter}
								priceFilter={priceFilter}
								colorFilter={colorFilter}
								setOrderBy={setOrderBy}
								// setCategoryFilter={setCategoryFilter}
								setBrandFilter={setBrandFilter}
								setPriceFilter={setPriceFilter}
								setColorFilter={setColorFilter}
							/>
						</Col>
						<Col lg="9" md="6" classNam="p-0">
							<Row className="m-0 p-0 pt-5 justify-content-center">
								{data && data.length ? (
									_renderItems(dispatch, data, numberOfItem)
								) : (
									<CircularProgress />
								)}
							</Row>
							{data && data.length > numberOfItem ? (
								<Row className="justify-content-center align-items-center">
									<Button
										color="primary"
										border
										onClick={() => setNumberOfItem((old) => old + 10)}
									>
										See more...
									</Button>
								</Row>
							) : (
								<div />
							)}
						</Col>
					</Row>
					{/* <ShopMethod /> */}
				</Container>
			</section>
		</Container>
	);
});

export default SmartPhone;
