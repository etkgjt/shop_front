import { REDUX } from '../store/type';

const initialState = {
	products: [
		{
			name: 'Thermo Ball Etip Gloves 1',
			price: 20,
			img:
				'https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/16.jpg',
			dateArrive: '2013-05-29',
			buyingTimes: 9,
			rating: 4.5,

			color: 0,
			brand: 1,
			size: '6.9 inch',
			id: '001',
			category: 1,
		},

		{
			name: 'Thermo Ball Etip Gloves 2',
			price: 201,
			img:
				'https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/16.jpg',
			dateArrive: '2010-10-08',
			buyingTimes: 20,
			rating: 5,
			color: 1,
			brand: 2,
			size: '6.9 inch',
			id: '002',
			category: 0,
		},
		{
			name: 'Thermo Ball Etip Gloves 3',
			price: 20,
			img:
				'https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/16.jpg',
			dateArrive: '2015-05-29',
			buyingTimes: 23,
			rating: 2,
			color: 2,
			brand: 3,
			size: '6.9 inch',
			id: '003',
			category: 2,
		},
		{
			name: 'Thermo Ball Etip Gloves 4',
			price: 30.5,
			img:
				'https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/16.jpg',
			dateArrive: '2022-10-12',
			buyingTimes: 38,
			rating: 4,
			color: 3,
			brand: 1,
			size: '6.9 inch',
			id: '004',
			category: 1,
		},

		{
			name: 'Thermo Ball Etip Gloves 5',
			price: 292,
			img:
				'https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/16.jpg',
			dateArrive: '2011-01-12',
			buyingTimes: 11,
			rating: 5,
			color: 4,
			brand: 0,
			size: '6.9 inch',
			id: '005',
			category: 0,
		},

		{
			name: 'Thermo Ball Etip Gloves 6',
			price: 421,
			img:
				'https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/16.jpg',
			dateArrive: '2017-12-02',
			buyingTimes: 51,
			rating: 4.5,
			color: 0,
			brand: 2,
			size: '6.9 inch',
			id: '006',
			category: 2,
		},

		{
			name: 'Thermo Ball Etip Gloves 7',
			price: 220,
			img:
				'https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/16.jpg',
			dateArrive: '2016-03-25',
			buyingTimes: 22,
			rating: 4.5,
			color: 1,
			brand: 3,
			size: '6.9 inch',
			id: '007',
			category: 2,
		},

		{
			name: 'Thermo Ball Etip Gloves 8',
			price: 201,
			img:
				'https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/16.jpg',
			dateArrive: '2023-10-08',
			buyingTimes: 84,
			rating: 4.5,
			color: 2,
			brand: 1,
			size: '6.9 inch',
			id: '008',
			category: 0,
		},
		{
			name: 'Thermo Ball Etip Gloves 9',
			price: 20,
			img:
				'https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/16.jpg',
			dateArrive: '2039-05-29',
			buyingTimes: 129,
			rating: 4.5,
			color: 3,
			brand: 2,
			size: '6.9 inch',
			id: '009',
			category: 0,
		},
		{
			name: 'Thermo Ball Etip Gloves 10',
			price: 30.5,
			img:
				'https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/16.jpg',
			dateArrive: '2020-10-12',
			buyingTimes: 30,
			rating: 4,
			color: 4,
			brand: 1,
			size: '6.9 inch',
			id: '0010',
			category: 1,
		},

		{
			name: 'Thermo Ball Etip Gloves 11',
			price: 292,
			img:
				'https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/16.jpg',
			dateArrive: '2019-01-12',
			buyingTimes: 148,
			rating: 5,
			color: 0,
			brand: 3,
			size: '6.9 inch',
			id: '0011',
			category: 2,
		},

		{
			name: 'Thermo Ball Etip Gloves 12',
			price: 220,
			img:
				'https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/16.jpg',
			dateArrive: '2022-03-25',
			buyingTimes: 12,
			rating: 3,
			color: 1,
			brand: 0,
			size: '6.9 inch',
			id: '0012',
			category: 2,
		},

		{
			name: 'Thermo Ball Etip Gloves 13',
			price: 201,
			img:
				'https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/16.jpg',
			dateArrive: '2021-10-08',
			buyingTimes: 20,
			rating: 4,
			color: 2,
			brand: 0,
			size: '6.9 inch',
			id: '0013',
			category: 3,
		},
		{
			name: 'Thermo Ball Etip Gloves 14',
			price: 20,
			img:
				'https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/16.jpg',
			dateArrive: '2019-05-29',
			buyingTimes: 12,
			rating: 4.5,
			color: 3,
			brand: 1,
			size: '6.9 inch',
			id: '0014',
			category: 3,
		},
		{
			name: 'Thermo Ball Etip Gloves 15',
			price: 30.5,
			img:
				'https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/16.jpg',
			dateArrive: '2010-10-12',
			buyingTimes: 20,
			rating: 3.5,
			color: 4,
			brand: 2,
			size: '6.9 inch',
			id: '0015',
			category: 3,
		},

		{
			name: 'Thermo Ball Etip Gloves 16',
			price: 292,
			img:
				'https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/16.jpg',
			dateArrive: '2010-01-12',
			buyingTimes: 18,
			rating: 1.5,
			color: 0,
			brand: 1,
			size: '6.9 inch',
			id: '0016',
			category: 3,
		},

		{
			name: 'Thermo Ball Etip Gloves 17',
			price: 421,
			img:
				'https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/16.jpg',
			dateArrive: '2019-12-02',
			buyingTimes: 5,
			rating: 2.5,
			color: 1,
			brand: 3,
			size: '6.9 inch',
			id: '0017',
			category: 3,
		},

		{
			name: 'Thermo Ball Etip Gloves 18',
			price: 421,
			img:
				'https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/16.jpg',
			dateArrive: '2019-12-02',
			buyingTimes: 5,
			rating: 3.5,
			color: 2,
			brand: 3,
			size: '6.9 inch',
			id: '0018',
			category: 2,
		},

		{
			name: 'Thermo Ball Etip Gloves 19',
			price: 220,
			img:
				'https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/16.jpg',
			dateArrive: '2020-03-25',
			buyingTimes: 2,
			rating: 4.5,
			color: 3,
			brand: 1,
			size: '6.9 inch',
			id: '0019',
			category: 3,
		},

		{
			name: 'Thermo Ball Etip Gloves 20',
			price: 201,
			img:
				'https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/16.jpg',
			dateArrive: '2020-10-08',
			buyingTimes: 2,
			rating: 3,
			color: 4,
			brand: 0,
			size: '6.9 inch',
			id: '0020',
			category: 0,
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
