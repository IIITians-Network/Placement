//JS file for IIIT  Kota placement

// let myChart1 = document.getElementById('myChart1').getContext('2d');

// Chart.defaults.global.defaultFontFamily = 'Lato';
// Chart.defaults.global.defaultFontSize = 18;
// Chart.defaults.global.defaultFontColor = '#777';

// let secondBatch = new Chart(myChart1, {
// 	type: 'bar',
// 	data: {
// 		labels: ['CSE', 'ECE'],

// 		datasets: [
// 			{
// 				label: ' Eligible Students ',
// 				data: [36, 12],
// 				//backgroundColor:'green',
// 				backgroundColor: '#03254c',
// 				boderWidth: 4,
// 				borderColor: '#777',
// 				hoverBorderWidth: 2,
// 				hoverBorderColor: '#000',
// 			},
// 			{
// 				label: 'Jobs offered',
// 				data: [37, 6],
// 				backgroundColor: '#1167b1',
// 				boderWidth: 4,
// 				borderColor: '#777',
// 				hoverBorderWidth: 2,
// 				hoverBorderColor: '#000',
// 			},
			
// 		],
// 	},
// 	options: {
// 		maintainAspectRatio: false,
// 		scales: {
// 			yAxes: [
// 				{
// 					stacked: false,
// 					gridLines: {
// 						display: true,
// 						color: 'rgba(255,99,132,0.2)',
// 					},
// 				},
// 			],
// 			xAxes: [
// 				{
// 					gridLines: {
// 						display: false,
// 					},
// 				},
// 			],
// 		},
// 		legend: {
// 			position: 'bottom',
// 			labels: {
// 				fontColor: '#000',
// 			},
// 		},
// 	},
// });


let myChart3 = document.getElementById('myChart3').getContext('2d');

Chart.defaults.global.defaultFontFamily = 'Lato';
Chart.defaults.global.defaultFontSize = 18;
Chart.defaults.global.defaultFontColor = '#777';

let firstBatch = new Chart(myChart3, {
	type: 'bar',
	data: {
		labels: ['CSE', 'ECE', 'Total'],

		datasets: [
			{
				label: 'Eligible Students',
				data: [36, 12, 48],
				//backgroundColor:'green',
				backgroundColor: '#176BA0',
				boderWidth: 4,
				borderColor: '#777',
				hoverBorderWidth: 2,
				hoverBorderColor: '#000',
			},
			{
				label: 'Jobs offered',
				data: [37, 6, 43],
				backgroundColor: '#2a9df4',
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


