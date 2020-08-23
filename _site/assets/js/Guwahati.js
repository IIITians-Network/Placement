//JS file for IIIT  Guwahati placement

let myChart1 = document.getElementById('myChart1').getContext('2d');

Chart.defaults.global.defaultFontFamily = 'Lato';
Chart.defaults.global.defaultFontSize = 18;
Chart.defaults.global.defaultFontColor = '#777';

let secondBatch = new Chart(myChart1, {
	type: 'bar',
	data: {
		labels: ['ECE', 'CSE', 'Overall'],

		datasets: [
			{
				label: 'Total Students registered',
				data: [27, 32, 59],
				//backgroundColor:'green',
				backgroundColor: '#00CED1',
				boderWidth: 4,
				borderColor: '#777',
				hoverBorderWidth: 2,
				hoverBorderColor: '#000',
			},
			{
				label: 'Total job offered',
				data: [11, 49, 60],
				backgroundColor: '#0000CD',
				boderWidth: 4,
				borderColor: '#777',
				hoverBorderWidth: 2,
				hoverBorderColor: '#000',
			},
			{
				label: 'Total Students selected',
				data: [10, 25, 35],
				//backgroundColor:'green',
				backgroundColor: '#000080',
				boderWidth: 4,
				borderColor: '#777',
				hoverBorderWidth: 2,
				hoverBorderColor: '#000',
			},
			{
				label: 'Students going for higher studies',
				data: [16, 4, 20],
				//backgroundColor:'green',
				backgroundColor: '#8B008B',
				boderWidth: 4,
				borderColor: '#777',
				hoverBorderWidth: 2,
				hoverBorderColor: '#000',
			},

			{
				label: 'Students starting their own company',
				data: [1, 0, 1],
				//backgroundColor:'green',
				backgroundColor: '#00BFFF',
				boderWidth: 4,
				borderColor: '#777',
				hoverBorderWidth: 2,
				hoverBorderColor: '#000',
			},
			{
				label: 'Average salary in LPA',
				data: [5.19, 12.75, 10.1],
				//backgroundColor:'green',
				backgroundColor: '#1E90FF',
				boderWidth: 4,
				borderColor: '#777',
				hoverBorderWidth: 2,
				hoverBorderColor: '#000',
			},
			{
				label: 'Highest Salary in LPA',
				data: [7, 56, 56],
				//backgroundColor:'green',
				backgroundColor: '#4B0082',
				boderWidth: 4,
				borderColor: '#777',
				hoverBorderWidth: 2,
				hoverBorderColor: '#000',
			},
		],
	},
	options: {
		maintainAspectRatio: false,
		scales: {
			yAxes: [
				{
					stacked: false,
					gridLines: {
						display: true,
						color: 'rgba(255,99,132,0.2)',
					},
				},
			],
			xAxes: [
				{
					gridLines: {
						display: false,
					},
				},
			],
		},
		legend: {
			position: 'bottom',
			labels: {
				fontColor: '#000',
			},
		},
	},
});

let myChart2 = document.getElementById('myChart2').getContext('2d');

Chart.defaults.global.defaultFontFamily = 'Lato';
Chart.defaults.global.defaultFontSize = 18;
Chart.defaults.global.defaultFontColor = '#777';

let pie1 = new Chart(myChart2, {
	type: 'pie',
	data: {
		labels: ['ECE', 'CSE', 'Overall'],

		datasets: [
			{
				label: 'Percentage of students placed',
				data: [37, 83, 60],
				//backgroundColor:'green',
				backgroundColor: [
					'rgba(0, 191, 255, 0.8)',
					'rgba(0, 0, 255, 0.8)',
					'rgba(0, 255, 255, 0.8)',
				],

				boderWidth: 4,
				borderColor: '#777',
				hoverBorderWidth: 2,
				hoverBorderColor: '#000',
			},
		],
	},
	options: {
		maintainAspectRatio: false,
		// scales: {
		// 	yAxes: [
		// 		{
		// 			stacked: false,
		// 			gridLines: {
		// 				display: false,
		// 			},
		// 		},
		// 	],
		// 	xAxes: [
		// 		{
		// 			gridLines: {
		// 				display: false,
		// 			},
		// 		},
		// 	],
		// },
		legend: {
			position: 'bottom',
			labels: {
				fontColor: '#000',
			},
		},
	},
});

let myChart3 = document.getElementById('myChart3').getContext('2d');

Chart.defaults.global.defaultFontFamily = 'Lato';
Chart.defaults.global.defaultFontSize = 18;
Chart.defaults.global.defaultFontColor = '#777';

let firstBatch = new Chart(myChart3, {
	type: 'bar',
	data: {
		labels: ['ECE', 'CSE', 'Overall'],

		datasets: [
			{
				label: 'Total Students registered',
				data: [26, 32, 58],
				//backgroundColor:'green',
				backgroundColor: '#00CED1',
				boderWidth: 4,
				borderColor: '#777',
				hoverBorderWidth: 2,
				hoverBorderColor: '#000',
			},
			{
				label: 'Total job offered',
				data: [13, 30, 43],
				backgroundColor: '#0000CD',
				boderWidth: 4,
				borderColor: '#777',
				hoverBorderWidth: 2,
				hoverBorderColor: '#000',
			},
			{
				label: 'Total Students selected',
				data: [11, 22, 33],
				//backgroundColor:'green',
				backgroundColor: '#000080',
				boderWidth: 4,
				borderColor: '#777',
				hoverBorderWidth: 2,
				hoverBorderColor: '#000',
			},
			{
				label: 'Students going for higher studies',
				data: [5, 2, 7],
				//backgroundColor:'green',
				backgroundColor: '#8B008B',
				boderWidth: 4,
				borderColor: '#777',
				hoverBorderWidth: 2,
				hoverBorderColor: '#000',
			},

			{
				label: 'Students starting their own company',
				data: [1, 1, 2],
				//backgroundColor:'green',
				backgroundColor: '#00BFFF',
				boderWidth: 4,
				borderColor: '#777',
				hoverBorderWidth: 2,
				hoverBorderColor: '#000',
			},

			{
				label: 'Average salary in LPA',
				data: [6.56, 6.7, 6.68],
				//backgroundColor:'green',
				backgroundColor: '#1E90FF',
				boderWidth: 4,
				borderColor: '#777',
				hoverBorderWidth: 2,
				hoverBorderColor: '#000',
			},
			{
				label: 'Highest Salary in LPA',
				data: [15, 17, 17],
				//backgroundColor:'green',
				backgroundColor: '#4B0082',
				boderWidth: 4,
				borderColor: '#777',
				hoverBorderWidth: 2,
				hoverBorderColor: '#000',
			},
		],
	},
	options: {
		maintainAspectRatio: false,
		scales: {
			yAxes: [
				{
					stacked: false,
					gridLines: {
						display: true,
						color: 'rgba(255,99,132,0.2)',
					},
				},
			],
			xAxes: [
				{
					gridLines: {
						display: false,
					},
				},
			],
		},
		legend: {
			position: 'bottom',
			labels: {
				fontColor: '#000',
			},
		},
	},
});

let myChart4 = document.getElementById('myChart4').getContext('2d');

Chart.defaults.global.defaultFontFamily = 'Lato';
Chart.defaults.global.defaultFontSize = 18;
Chart.defaults.global.defaultFontColor = '#777';

let pie2 = new Chart(myChart4, {
	type: 'pie',
	data: {
		labels: ['ECE', 'CSE', 'Overall'],

		datasets: [
			{
				label: 'Percentage of students placed',
				data: [65.4, 78.1, 72.4],
				//backgroundColor:'green',
				backgroundColor: [
					'rgba(0, 191, 255, 0.8)',
					'rgba(0, 0, 255, 0.8)',
					'rgba(0, 255, 255, 0.8)',
				],

				boderWidth: 4,
				borderColor: '#777',
				hoverBorderWidth: 2,
				hoverBorderColor: '#000',
			},
		],
	},
	options: {
		maintainAspectRatio: false,
		// scales: {
		// 	yAxes: [
		// 		{
		// 			stacked: false,
		// 			gridLines: {
		// 				display: false,
		// 			},
		// 		},
		// 	],
		// 	xAxes: [
		// 		{
		// 			gridLines: {
		// 				display: false,
		// 			},
		// 		},
		// 	],
		// },
		legend: {
			position: 'bottom',
			labels: {
				fontColor: '#000',
			},
		},
	},
});