export const navigations = [
	{
		name: 'Dashboard',
		path: '/dashboard/analytics',
		icon: 'dashboard',
	},
	{
		name: 'Customer',
		icon: 'people_alt',
		children: [
			{
				name: 'New Customer',
				path: '/customer/new-customer',
				iconText: 'B',
			},
			{
				name: 'Customer List',
				path: '/customer/customer-list',
				iconText: 'E',
			},
			{
				name: 'View Customer',
				path: '/customer/view-customer',
				iconText: 'E',
			},
		],
	},
	{
		name: 'Products',
		icon: 'shopping_cart',
		children: [
			{
				name: 'New Product',
				path: '/product/new-product',
				iconText: 'B',
			},
			{
				name: 'Product List',
				path: '/product/product-list',
				iconText: 'E',
			},
			{
				name: 'View Product',
				path: '/product/view-product',
				iconText: 'E',
			},
		],
	},
	{
		name: 'Orders',
		icon: 'folder',
		children: [
			{
				name: 'Order List',
				path: '/order/order-list',
				iconText: 'E',
			},
			{
				name: 'View Order',
				path: '/order/view-order',
				iconText: 'E',
			},
		],
	},
	{
		name: 'Sign Out',
		icon: 'meeting_room',
		path: '/others/drag-and-drop',
	},
	// {
	// 	name: 'Form',
	// 	icon: 'folder',
	// 	children: [
	// 		{
	// 			name: 'Order List',
	// 			path: '/customer/customer-list',
	// 			iconText: 'E',
	// 		},
	// 		{
	// 			name: 'View Order',
	// 			path: '/customer/view-customer',
	// 			iconText: 'E',
	// 		},
	// 	],
	// },
	// {
	// 	name: 'Sign Out',
	// 	icon: 'meeting_room',
	// 	path: '/others/drag-and-drop',
	// },
	// {
	// 	name: 'Multilevel',
	// 	icon: 'trending_up',
	// 	children: [
	// 		{
	// 			name: 'Level 1',
	// 			icon: 'list',
	// 			children: [
	// 				{
	// 					name: 'Item 1',
	// 					path: '/charts/victory-charts',
	// 					iconText: '1',
	// 				},
	// 				{
	// 					name: 'Item 2',
	// 					path: '/charts/react-vis',
	// 					iconText: '2',
	// 				},
	// 				{
	// 					name: 'Item 3',
	// 					path: '/charts/recharts',
	// 					iconText: '3',
	// 				},
	// 				{
	// 					name: 'Item 4',
	// 					path: '/charts/echarts',
	// 					iconText: '4',
	// 				},
	// 			],
	// 		},
	// 	],
	// },
	// {
	// 	name: 'Utilities',
	// 	icon: 'format_list_bulleted',
	// 	children: [
	// 		{
	// 			name: 'Color',
	// 			path: '/utilities/color',
	// 			iconText: 'C',
	// 		},
	// 		{
	// 			name: 'Spacing',
	// 			path: '/utilities/spacing',
	// 			iconText: 'S',
	// 		},
	// 		{
	// 			name: 'Typography',
	// 			path: '/utilities/typography',
	// 			iconText: 'T',
	// 		},
	// 		{
	// 			name: 'Display',
	// 			path: '/utilities/display',
	// 			iconText: 'D',
	// 		},
	// 	],
	// },
	{
		name: 'Sessions',
		icon: 'trending_up',
		children: [
			{
				name: 'Sign in',
				iconText: 'SI',
				path: '/session/signin',
			},
			{
				name: 'Sign up',
				iconText: 'SU',
				path: '/session/signup',
			},
			{
				name: 'Forgot password',
				iconText: 'FP',
				path: '/session/forgot-password',
			},
			{
				name: 'Error',
				iconText: '404',
				path: '/session/404',
			},
		],
	},

	// {
	// 	name: 'UI Kits',
	// 	icon: 'favorite',
	// 	badge: { value: '50+', color: 'secondary' },
	// 	children: [
	// 		{
	// 			name: 'Auto Complete',
	// 			path: '/material/autocomplete',
	// 			iconText: 'A',
	// 		},
	// 		{
	// 			name: 'Buttons',
	// 			path: '/material/buttons',
	// 			iconText: 'B',
	// 		},
	// 		{
	// 			name: 'Checkbox',
	// 			path: '/material/checkbox',
	// 			iconText: 'C',
	// 		},
	// 		{
	// 			name: 'Dialog',
	// 			path: '/material/dialog',
	// 			iconText: 'D',
	// 		},
	// 		{
	// 			name: 'Expansion Panel',
	// 			path: '/material/expansion-panel',
	// 			iconText: 'E',
	// 		},
	// 		{
	// 			name: 'Form',
	// 			path: '/material/form',
	// 			iconText: 'F',
	// 		},
	// 		{
	// 			name: 'Icons',
	// 			path: '/material/icons',
	// 			iconText: 'I',
	// 		},
	// 		{
	// 			name: 'Menu',
	// 			path: '/material/menu',
	// 			iconText: 'M',
	// 		},
	// 		{
	// 			name: 'Progress',
	// 			path: '/material/progress',
	// 			iconText: 'P',
	// 		},
	// 		{
	// 			name: 'Radio',
	// 			path: '/material/radio',
	// 			iconText: 'R',
	// 		},
	// 		{
	// 			name: 'Switch',
	// 			path: '/material/switch',
	// 			iconText: 'S',
	// 		},
	// 		{
	// 			name: 'Slider',
	// 			path: '/material/slider',
	// 			iconText: 'S',
	// 		},
	// 		{
	// 			name: 'Snackbar',
	// 			path: '/material/snackbar',
	// 			iconText: 'S',
	// 		},
	// 		{
	// 			name: 'Table',
	// 			path: '/material/table',
	// 			iconText: 'T',
	// 		},
	// 	],
	// },

	// {
	// 	name: 'Map',
	// 	icon: 'add_location',
	// 	path: '/map',
	// },
];
