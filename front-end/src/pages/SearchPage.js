import React, { useState } from 'react';
import { Col, Container, Row } from 'reactstrap';
import '../styles/pageTitle.css';
import '../styles/shopPage.css';
import '../styles/forAll.css';
import { useSelector, useDispatch } from 'react-redux';
import { Button, CircularProgress } from '@material-ui/core';
import { ShopItem } from '../components';
import { addToCart } from '../redux/actions/cartAction';
const SearchPage = () => {
	const productsDataRedux = useSelector(
		(state) => state?.shopReducer?.smartPhone
	);
	const [numberOfItem, setNumberOfItem] = useState(10);
	const dispatch = useDispatch();
	const [data, setData] = useState(productsDataRedux ? productsDataRedux : []);
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
	return (
		<Container fluid className="gradient-background p-0">
			<section className="shop-container">
				<Container fluid className="w-75">
					<Row>
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
};
export default SearchPage;
