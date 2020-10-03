import React, { useCallback, memo, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Container, Row } from 'reactstrap';
import Header from '../components/Header';
import TitleBackground from '../assets/slider_background.png';
import '../styles/pageTitle.css';
import '../styles/confirmation.css';
import { Col } from 'reactstrap';
import { Table } from 'reactstrap';
const ConfirmationDetails = {
	orderInfo: [
		{ label: 'Order Number', value: '0332511060' },
		{ label: 'Data', value: 'Oct 03, 2017' },
		{ label: 'Total', value: 'USD 2210' },
		{ label: 'Payment Method', value: 'Visa' },
	],
	billAddress: [
		{ label: 'Street', value: 'Pham Van Dong' },
		{ label: 'City', value: 'Ho Chi Minh City' },
		{ label: 'Country', value: 'Viet Nam' },
		{ label: 'Postcode', value: '22789' },
	],
	shipAddress: [
		{ label: 'Street', value: 'Dien Bien Phu' },
		{ label: 'City', value: 'Ho Chi Minh City' },
		{ label: 'Country', value: 'Viet Nam' },
		{ label: 'Postcode', value: '22789' },
	],
};
const dataTable = [
	{ product: 'Iphone 7', price: 100, amount: 2 },
	{ product: 'Iphone 8', price: 200, amount: 3 },
	{ product: 'Iphone 10', price: 300, amount: 1 },
	{ product: 'Iphone XR', price: 400, amount: 2 },
	{ product: 'Iphone XS', price: 500, amount: 2 },
];
const SingleConfirmationDetails = ({ title, details = [] }) => {
	console.log('long details', details);
	return (
		<Col lg="6" lx="4" className="single_confirmation_container">
			<div class="sigle_confirmation_details">
				<Col>
					<Row>
						<h4>{title}</h4>
					</Row>
					{details?.map((item, index) => (
						<Row
							className="details_row"
							key={`${item?.label}${item?.value}-${index}`}
						>
							<p class="details_label">{item?.label}</p>
							<span>{item?.value}</span>
						</Row>
					))}
				</Col>
			</div>
		</Col>
	);
};
const TableDetails = memo(({ data }) => (
	<Row>
		<Col lg="12">
			<div className="table_container">
				<div>
					<h4>Order Details</h4>
				</div>

				<Table borderless striped className="details_table">
					<thead>
						<tr>
							<th className="column_title">Product</th>
							<th className="column_title">Quantity</th>
							<th className="column_title">Total</th>
						</tr>
					</thead>

					<tbody>
						{data?.map((item, index) => (
							<tr>
								<td className="product_name">{item?.product}</td>
								<td>x{item?.amount}</td>
								<td className="product_name">
									{item?.price * item?.amount}
								</td>
							</tr>
						))}
						<tr>
							<td className="column_title">Subtotal</td>
							<td></td>
							<td className="product_name">
								{data.reduce((x, y) => {
									return (x += y.amount * y.price);
								}, 0)}
							</td>
						</tr>
						<tr>
							<td className="column_title">Shipping</td>
							<td></td>
							<td className="product_name">$1.000</td>
						</tr>
						<tr>
							<td className="column_title">Quantity</td>
							<td></td>
							<td className="product_name">
								$
								{data.reduce((x, y) => {
									return (x += y.amount * y.price);
								}, 0) + 1000}
							</td>
						</tr>
					</tbody>
				</Table>
			</div>
		</Col>
	</Row>
));
const Confirmation = memo(() => {
	const [isOpen, setIsOpen] = useState(false);
	console.log('load ne');
	const toggle = () => setIsOpen(!isOpen);
	return (
		<Container fluid>
			<Row className="title-container">
				<p class="page-title">Confirmation</p>
			</Row>
			<section class="confirmation-container">
				<Container>
					<Row>
						<Col lg="12">
							<div className="confirmation_title">
								<span>Thank you. Your order has been received.</span>
							</div>
						</Col>
						<SingleConfirmationDetails
							title="Order Info"
							details={ConfirmationDetails.orderInfo}
						/>
						<SingleConfirmationDetails
							title="Billing Address"
							details={ConfirmationDetails.billAddress}
						/>
						<SingleConfirmationDetails
							title="Shipping Address"
							details={ConfirmationDetails.shipAddress}
						/>
					</Row>
					<TableDetails data={dataTable} />
				</Container>
			</section>
		</Container>
	);
});
export default Confirmation;
