import { REDUX } from '../store/type';

const initialState = {
	products: [
		{
			name: 'Thermo Ball Etip Gloves',
			price: 20,
			img:
				'https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/16.jpg',
			dateArrive: '2019-05-29',
			buyingTimes: 9,
			rating: 4.5,
		},

		{
			name: 'Thermo Ball Etip Gloves',
			price: 201,
			img:
				'https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/16.jpg',
			dateArrive: '2020-10-08',
			buyingTimes: 80,
			rating: 5,
		},
		{
			name: 'Thermo Ball Etip Gloves',
			price: 20,
			img:
				'https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/16.jpg',
			dateArrive: '2019-05-29',
			buyingTimes: 9,
			rating: 2,
		},
		{
			name: 'Thermo Ball Etip Gloves',
			price: 30.5,
			img:
				'https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/16.jpg',
			dateArrive: '2020-10-12',
			buyingTimes: 20,
			rating: 4,
		},

		{
			name: 'Thermo Ball Etip Gloves',
			price: 292,
			img:
				'https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/16.jpg',
			dateArrive: '2020-01-12',
			buyingTimes: 18,
			rating: 5,
		},

		{
			name: 'Thermo Ball Etip Gloves',
			price: 421,
			img:
				'https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/16.jpg',
			dateArrive: '2019-12-02',
			buyingTimes: 5,
			rating: 4.5,
		},

		{
			name: 'Thermo Ball Etip Gloves',
			price: 220,
			img:
				'https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/16.jpg',
			dateArrive: '2020-03-25',
			buyingTimes: 2,
			rating: 4.5,
		},

		{
			name: 'Thermo Ball Etip Gloves',
			price: 201,
			img:
				'https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/16.jpg',
			dateArrive: '2020-10-08',
			buyingTimes: 80,
			rating: 4.5,
		},
		{
			name: 'Thermo Ball Etip Gloves',
			price: 20,
			img:
				'https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/16.jpg',
			dateArrive: '2019-05-29',
			buyingTimes: 9,
			rating: 4.5,
		},
		{
			name: 'Thermo Ball Etip Gloves',
			price: 30.5,
			img:
				'https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/16.jpg',
			dateArrive: '2020-10-12',
			buyingTimes: 20,
			rating: 4,
		},

		{
			name: 'Thermo Ball Etip Gloves',
			price: 292,
			img:
				'https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/16.jpg',
			dateArrive: '2020-01-12',
			buyingTimes: 18,
			rating: 5,
		},

		{
			name: 'Thermo Ball Etip Gloves',
			price: 220,
			img:
				'https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/16.jpg',
			dateArrive: '2020-03-25',
			buyingTimes: 2,
			rating: 3,
		},

		{
			name: 'Thermo Ball Etip Gloves',
			price: 201,
			img:
				'https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/16.jpg',
			dateArrive: '2020-10-08',
			buyingTimes: 80,
			rating: 4,
		},
		{
			name: 'Thermo Ball Etip Gloves',
			price: 20,
			img:
				'https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/16.jpg',
			dateArrive: '2019-05-29',
			buyingTimes: 9,
			rating: 4.5,
		},
		{
			name: 'Thermo Ball Etip Gloves',
			price: 30.5,
			img:
				'https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/16.jpg',
			dateArrive: '2020-10-12',
			buyingTimes: 20,
			rating: 3.5,
		},

		{
			name: 'Thermo Ball Etip Gloves',
			price: 292,
			img:
				'https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/16.jpg',
			dateArrive: '2020-01-12',
			buyingTimes: 18,
			rating: 1.5,
		},

		{
			name: 'Thermo Ball Etip Gloves',
			price: 421,
			img:
				'https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/16.jpg',
			dateArrive: '2019-12-02',
			buyingTimes: 5,
			rating: 2.5,
		},

		{
			name: 'Thermo Ball Etip Gloves',
			price: 421,
			img:
				'https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/16.jpg',
			dateArrive: '2019-12-02',
			buyingTimes: 5,
			rating: 3.5,
		},

		{
			name: 'Thermo Ball Etip Gloves',
			price: 220,
			img:
				'https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/16.jpg',
			dateArrive: '2020-03-25',
			buyingTimes: 2,
			rating: 4.5,
		},

		{
			name: 'Thermo Ball Etip Gloves',
			price: 201,
			img:
				'https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/16.jpg',
			dateArrive: '2020-10-08',
			buyingTimes: 80,
			rating: 4.5,
		},
	],
};
const shopReducer = (state = initialState, action) => {
	switch (action.type) {
		case REDUX.UPDATE_SHOP_DATA: {
			return {
				...state,
				products: action.payload,
			};
		}
		case REDUX.CLEAR_SHOP_DATA: {
			return { ...initialState };
		}
		default: {
			return {
				...state,
			};
		}
	}
};
export default shopReducer;
