//JS file for IIIT  Kurnool placement

// let myChart1 = document.getElementById('myChart1').getContext('2d');

// Chart.defaults.global.defaultFontFamily = 'Lato';
// Chart.defaults.global.defaultFontSize = 18;
// Chart.defaults.global.defaultFontColor = '#777';

// let secondBatch = new Chart(myChart1, {
// 	type: 'bar',
// 	data: {
// 		labels: ['Students 	Registered(%)','No of offers received','Offers received(%)','Average Package(LPA)','Highest Package(LPA)'],

// 		datasets: [
// 			{
				
//                 data : [36,26,72.2,4.77,10.5],
// 				//backgroundColor:'green',
// 				backgroundColor: [
//                     '#C4E538',
//                     '#A3CB38',
//                     '#009432',
// 						'#1dd1a1',
// 						'#55E6C1'
//                 ],
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
Chart.defaults.global.defaultFontColor = '#000';
Chart.defaults.global.legend.display = false;

let firstBatch = new Chart(myChart3, {
	type: 'bar',
	data: {
		labels: ['Students 	Registered(%)','No of offers received','Offers received(%)','Average Package(LPA)','Highest Package(LPA)'],
		datasets: [
			{
				
				 data : [36,26,72.2,4.77,10.5],
				//backgroundColor:'green',
				backgroundColor: [
					'#03254c',
                    '#1167b1',
                    '#176BA0',
					'#2a9df4',
					'#1AC9E6'
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

