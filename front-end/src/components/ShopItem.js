import React from 'react';
import { Button, Col, Row } from 'reactstrap';
import MyRating from './MyRating';
import '../styles/material.css';
import '../styles/pageTitle.css';
import '../styles/shopPage.css';
import { useHistory } from 'react-router-dom';
const ShopItem = ({ addToCart, item, idx, dispatch }) => {
	const history = useHistory();
	return (
		<Col
			className="p-3 mt-1"
			xl="4"
			lg="12"
			md="12"
			sm="12"
			key={`${item.name}-${idx}`}
		>
			<Col className="button-container-box-shadow">
				<div className="mb-50 text-center single_items pt-5">
					<img src={item.img?.[0]}></img>
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
								onClick={() => history.push('/single_product', item)}
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
	);
};
export default ShopItem;
