import { REDUX } from '../store/type';
import pics1 from '../../assets/popular1.png';
import pics2 from '../../assets/popular2.png';
import pics3 from '../../assets/popular3.png';
import pics4 from '../../assets/popular4.png';
import pics5 from '../../assets/popular5.png';
import pics6 from '../../assets/popular6.png';
const initialState = {
	products: [
		{
			name: 'Thermo Ball Etip Gloves',
			price: 20,
			img: pics1,
			dateArrive: '2019-05-29',
			buyingTimes: 9,
		},
		{
			name: 'Thermo Ball Etip Gloves',
			price: 30.5,
			img: pics2,
			dateArrive: '2020-10-12',
			buyingTimes: 20,
		},

		{
			name: 'Thermo Ball Etip Gloves',
			price: 292,
			img: pics3,
			dateArrive: '2020-01-12',
			buyingTimes: 18,
		},

		{
			name: 'Thermo Ball Etip Gloves',
			price: 421,
			img: pics4,
			dateArrive: '2019-12-02',
			buyingTimes: 5,
		},

		{
			name: 'Thermo Ball Etip Gloves',
			price: 220,
			img: pics5,
			dateArrive: '2020-03-25',
			buyingTimes: 2,
		},

		{
			name: 'Thermo Ball Etip Gloves',
			price: 201,
			img: pics6,
			dateArrive: '2020-10-08',
			buyingTimes: 80,
		},
		{
			name: 'Thermo Ball Etip Gloves',
			price: 20,
			img: pics1,
			dateArrive: '2019-05-29',
			buyingTimes: 9,
		},
		{
			name: 'Thermo Ball Etip Gloves',
			price: 30.5,
			img: pics2,
			dateArrive: '2020-10-12',
			buyingTimes: 20,
		},

		{
			name: 'Thermo Ball Etip Gloves',
			price: 292,
			img: pics3,
			dateArrive: '2020-01-12',
			buyingTimes: 18,
		},

		{
			name: 'Thermo Ball Etip Gloves',
			price: 421,
			img: pics4,
			dateArrive: '2019-12-02',
			buyingTimes: 5,
		},

		{
			name: 'Thermo Ball Etip Gloves',
			price: 220,
			img: pics5,
			dateArrive: '2020-03-25',
			buyingTimes: 2,
		},

		{
			name: 'Thermo Ball Etip Gloves',
			price: 201,
			img: pics6,
			dateArrive: '2020-10-08',
			buyingTimes: 80,
		},
		{
			name: 'Thermo Ball Etip Gloves',
			price: 20,
			img: pics1,
			dateArrive: '2019-05-29',
			buyingTimes: 9,
		},
		{
			name: 'Thermo Ball Etip Gloves',
			price: 30.5,
			img: pics2,
			dateArrive: '2020-10-12',
			buyingTimes: 20,
		},

		{
			name: 'Thermo Ball Etip Gloves',
			price: 292,
			img: pics3,
			dateArrive: '2020-01-12',
			buyingTimes: 18,
		},

		{
			name: 'Thermo Ball Etip Gloves',
			price: 421,
			img: pics4,
			dateArrive: '2019-12-02',
			buyingTimes: 5,
		},

		{
			name: 'Thermo Ball Etip Gloves',
			price: 220,
			img: pics5,
			dateArrive: '2020-03-25',
			buyingTimes: 2,
		},

		{
			name: 'Thermo Ball Etip Gloves',
			price: 201,
			img: pics6,
			dateArrive: '2020-10-08',
			buyingTimes: 80,
		},
		{
			name: 'Thermo Ball Etip Gloves',
			price: 20,
			img: pics1,
			dateArrive: '2019-05-29',
			buyingTimes: 9,
		},
		{
			name: 'Thermo Ball Etip Gloves',
			price: 30.5,
			img: pics2,
			dateArrive: '2020-10-12',
			buyingTimes: 20,
		},

		{
			name: 'Thermo Ball Etip Gloves',
			price: 292,
			img: pics3,
			dateArrive: '2020-01-12',
			buyingTimes: 18,
		},

		{
			name: 'Thermo Ball Etip Gloves',
			price: 421,
			img: pics4,
			dateArrive: '2019-12-02',
			buyingTimes: 5,
		},

		{
			name: 'Thermo Ball Etip Gloves',
			price: 220,
			img: pics5,
			dateArrive: '2020-03-25',
			buyingTimes: 2,
		},

		{
			name: 'Thermo Ball Etip Gloves',
			price: 201,
			img: pics6,
			dateArrive: '2020-10-08',
			buyingTimes: 80,
		},
		{
			name: 'Thermo Ball Etip Gloves',
			price: 20,
			img: pics1,
			dateArrive: '2019-05-29',
			buyingTimes: 9,
		},
		{
			name: 'Thermo Ball Etip Gloves',
			price: 30.5,
			img: pics2,
			dateArrive: '2020-10-12',
			buyingTimes: 20,
		},

		{
			name: 'Thermo Ball Etip Gloves',
			price: 292,
			img: pics3,
			dateArrive: '2020-01-12',
			buyingTimes: 18,
		},

		{
			name: 'Thermo Ball Etip Gloves',
			price: 421,
			img: pics4,
			dateArrive: '2019-12-02',
			buyingTimes: 5,
		},

		{
			name: 'Thermo Ball Etip Gloves',
			price: 220,
			img: pics5,
			dateArrive: '2020-03-25',
			buyingTimes: 2,
		},

		{
			name: 'Thermo Ball Etip Gloves',
			price: 201,
			img: pics6,
			dateArrive: '2020-10-08',
			buyingTimes: 80,
		},
		{
			name: 'Thermo Ball Etip Gloves',
			price: 20,
			img: pics1,
			dateArrive: '2019-05-29',
			buyingTimes: 9,
		},
		{
			name: 'Thermo Ball Etip Gloves',
			price: 30.5,
			img: pics2,
			dateArrive: '2020-10-12',
			buyingTimes: 20,
		},

		{
			name: 'Thermo Ball Etip Gloves',
			price: 292,
			img: pics3,
			dateArrive: '2020-01-12',
			buyingTimes: 18,
		},

		{
			name: 'Thermo Ball Etip Gloves',
			price: 421,
			img: pics4,
			dateArrive: '2019-12-02',
			buyingTimes: 5,
		},

		{
			name: 'Thermo Ball Etip Gloves',
			price: 220,
			img: pics5,
			dateArrive: '2020-03-25',
			buyingTimes: 2,
		},

		{
			name: 'Thermo Ball Etip Gloves',
			price: 201,
			img: pics6,
			dateArrive: '2020-10-08',
			buyingTimes: 80,
		},
		{
			name: 'Thermo Ball Etip Gloves',
			price: 20,
			img: pics1,
			dateArrive: '2019-05-29',
			buyingTimes: 9,
		},
		{
			name: 'Thermo Ball Etip Gloves',
			price: 30.5,
			img: pics2,
			dateArrive: '2020-10-12',
			buyingTimes: 20,
		},

		{
			name: 'Thermo Ball Etip Gloves',
			price: 292,
			img: pics3,
			dateArrive: '2020-01-12',
			buyingTimes: 18,
		},

		{
			name: 'Thermo Ball Etip Gloves',
			price: 421,
			img: pics4,
			dateArrive: '2019-12-02',
			buyingTimes: 5,
		},

		{
			name: 'Thermo Ball Etip Gloves',
			price: 220,
			img: pics5,
			dateArrive: '2020-03-25',
			buyingTimes: 2,
		},

		{
			name: 'Thermo Ball Etip Gloves',
			price: 201,
			img: pics6,
			dateArrive: '2020-10-08',
			buyingTimes: 80,
		},
		{
			name: 'Thermo Ball Etip Gloves',
			price: 20,
			img: pics1,
			dateArrive: '2019-05-29',
			buyingTimes: 9,
		},
		{
			name: 'Thermo Ball Etip Gloves',
			price: 30.5,
			img: pics2,
			dateArrive: '2020-10-12',
			buyingTimes: 20,
		},

		{
			name: 'Thermo Ball Etip Gloves',
			price: 292,
			img: pics3,
			dateArrive: '2020-01-12',
			buyingTimes: 18,
		},

		{
			name: 'Thermo Ball Etip Gloves',
			price: 421,
			img: pics4,
			dateArrive: '2019-12-02',
			buyingTimes: 5,
		},

		{
			name: 'Thermo Ball Etip Gloves',
			price: 220,
			img: pics5,
			dateArrive: '2020-03-25',
			buyingTimes: 2,
		},

		{
			name: 'Thermo Ball Etip Gloves',
			price: 201,
			img: pics6,
			dateArrive: '2020-10-08',
			buyingTimes: 80,
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
