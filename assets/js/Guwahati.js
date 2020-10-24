//JS file for IIIT  Guwahati placement
let myChart5 = document.getElementById('myChart5').getContext('2d');

Chart.defaults.global.defaultFontFamily = 'Lato';
Chart.defaults.global.defaultFontSize = 18;
Chart.defaults.global.defaultFontColor = '#000';

let thirdbatch = new Chart(myChart5, {
	type: 'bar',
	data: {
		labels: ['ECE', 'CSE', 'Overall'],

		datasets: [
			{
				label: 'Students registered',
				data: [26, 32, 58],
				//backgroundColor:'green',
				backgroundColor: '#03254c',
				boderWidth: 4,
				borderColor: '#777',
				hoverBorderWidth: 2,
				hoverBorderColor: '#000',
			},
			{
				label: 'Jobs offered',
				data: [13, 30, 43],
				backgroundColor: '#1167b1',
				boderWidth: 4,
				borderColor: '#777',
				hoverBorderWidth: 2,
				hoverBorderColor: '#000',
			},
			{
				label: 'Total Students selected',
				data: [11, 22, 33],
				//backgroundColor:'green',
				backgroundColor: '#176BA0',
				boderWidth: 4,
				borderColor: '#777',
				hoverBorderWidth: 2,
				hoverBorderColor: '#000',
			},
			{
				label: ' Going for higher studies',
				data: [5, 2, 7],
				//backgroundColor:'green',
				backgroundColor: '#2a9df4',
				boderWidth: 4,
				borderColor: '#777',
				hoverBorderWidth: 2,
				hoverBorderColor: '#000',
			},

			{
				label: ' Starting their own company',
				data: [1, 1, 2],
				//backgroundColor:'green',
				backgroundColor: '#1AC9E6',
				boderWidth: 4,
				borderColor: '#777',
				hoverBorderWidth: 2,
				hoverBorderColor: '#000',
			},

			{
				label: 'Average salary (LPA)',
				data: [6.56, 6.7, 6.68],
				//backgroundColor:'green',
				backgroundColor: '#19AADE',
				boderWidth: 4,
				borderColor: '#777',
				hoverBorderWidth: 2,
				hoverBorderColor: '#000',
			},
			{
				label: 'Highest Salary (LPA) ',
				data: [15, 17, 17],
				//backgroundColor:'green',
				backgroundColor: '#1BD4BD',
				boderWidth: 4,
				borderColor: '#777',
				hoverBorderWidth: 2,
				hoverBorderColor: '#000',
			},
			{
				label: 'Percentage of Students Placed(%) ',
				data: [65.4, 78.1, 72.4],
				//backgroundColor:'green',
				backgroundColor: '#29066B',
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



// let myChart3 = document.getElementById('myChart3').getContext('2d');

// Chart.defaults.global.defaultFontFamily = 'Lato';
// Chart.defaults.global.defaultFontSize = 18;
// Chart.defaults.global.defaultFontColor = '#000';

// let firstBatch = new Chart(myChart3, {
// 	type: 'bar',
// 	data: {
// 		labels: ['ECE', 'CSE', 'Overall'],

// 		datasets: [
// 			{
// 				label: 'Students registered',
// 				data: [26, 32, 58],
// 				//backgroundColor:'green',
// 				backgroundColor: '#03254c',
// 				boderWidth: 4,
// 				borderColor: '#777',
// 				hoverBorderWidth: 2,
// 				hoverBorderColor: '#000',
// 			},
// 			{
// 				label: 'Jobs offered',
// 				data: [13, 30, 43],
// 				backgroundColor: '#1167b1',
// 				boderWidth: 4,
// 				borderColor: '#777',
// 				hoverBorderWidth: 2,
// 				hoverBorderColor: '#000',
// 			},
// 			{
// 				label: 'Total Students selected',
// 				data: [11, 22, 33],
// 				//backgroundColor:'green',
// 				backgroundColor: '#176BA0',
// 				boderWidth: 4,
// 				borderColor: '#777',
// 				hoverBorderWidth: 2,
// 				hoverBorderColor: '#000',
// 			},
// 			{
// 				label: ' Going for higher studies',
// 				data: [5, 2, 7],
// 				//backgroundColor:'green',
// 				backgroundColor: '#2a9df4',
// 				boderWidth: 4,
// 				borderColor: '#777',
// 				hoverBorderWidth: 2,
// 				hoverBorderColor: '#000',
// 			},

// 			{
// 				label: ' Starting their own company',
// 				data: [1, 1, 2],
// 				//backgroundColor:'green',
// 				backgroundColor: '#1AC9E6',
// 				boderWidth: 4,
// 				borderColor: '#777',
// 				hoverBorderWidth: 2,
// 				hoverBorderColor: '#000',
// 			},

// 			{
// 				label: 'Average salary (LPA)',
// 				data: [6.56, 6.7, 6.68],
// 				//backgroundColor:'green',
// 				backgroundColor: '#19AADE',
// 				boderWidth: 4,
// 				borderColor: '#777',
// 				hoverBorderWidth: 2,
// 				hoverBorderColor: '#000',
// 			},
// 			{
// 				label: 'Highest Salary (LPA) ',
// 				data: [15, 17, 17],
// 				//backgroundColor:'green',
// 				backgroundColor: '#1BD4BD',
// 				boderWidth: 4,
// 				borderColor: '#777',
// 				hoverBorderWidth: 2,
// 				hoverBorderColor: '#000',
// 			},
// 			{
// 				label: 'Percentage of Students Placed(%) ',
// 				data: [37, 83, 60],
// 				//backgroundColor:'green',
// 				backgroundColor: '#29066B',
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
		labels: ['ECE', 'CSE', 'Overall'],

		datasets: [
			{
				label: 'Students registered',
				data: [20,25,40],
				//backgroundColor:'green',
				backgroundColor: '#03254c',
				boderWidth: 4,
				borderColor: '#777',
				hoverBorderWidth: 2,
				hoverBorderColor: '#000',
			},
			{
				label: 'Jobs offered',
				data: [16, 30, 46],
				backgroundColor: '#1167b1',
				boderWidth: 4,
				borderColor: '#777',
				hoverBorderWidth: 2,
				hoverBorderColor: '#000',
			},
			{
				label: 'Total Students selected',
				data: [12, 22, 34],
				//backgroundColor:'green',
				backgroundColor: '#176BA0',
				boderWidth: 4,
				borderColor: '#777',
				hoverBorderWidth: 2,
				hoverBorderColor: '#000',
			},
			{
				label: ' Going for higher studies',
				data: [3, 2, 5],
				//backgroundColor:'green',
				backgroundColor: '#2a9df4',
				boderWidth: 4,
				borderColor: '#777',
				hoverBorderWidth: 2,
				hoverBorderColor: '#000',
			},

			{
				label: ' Starting their own company',
				data: [0, 0, 2],
				//backgroundColor:'green',
				backgroundColor: '#1AC9E6',
				boderWidth: 4,
				borderColor: '#777',
				hoverBorderWidth: 2,
				hoverBorderColor: '#000',
			},

			{
				label: 'Average salary (LPA)',
				data: [8.1, 11, 10.2],
				//backgroundColor:'green',
				backgroundColor: '#19AADE',
				boderWidth: 4,
				borderColor: '#777',
				hoverBorderWidth: 2,
				hoverBorderColor: '#000',
			},
			{
				label: 'Highest Salary (LPA) ',
				data: [12, 17, 17],
				//backgroundColor:'green',
				backgroundColor: '#1BD4BD',
				boderWidth: 4,
				borderColor: '#777',
				hoverBorderWidth: 2,
				hoverBorderColor: '#000',
			},
			{
				label: 'Percentage of Students Placed(%) ',
				data: [60, 88, 76],
				//backgroundColor:'green',
				backgroundColor: '#29066B',
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

let myChart1 = document.getElementById('myChart1').getContext('2d');

Chart.defaults.global.defaultFontFamily = 'Lato';
Chart.defaults.global.defaultFontSize = 18;
Chart.defaults.global.defaultFontColor = '#000';

let secondBatch = new Chart(myChart1, {
	type: 'bar',
	data: {
		labels: ['ECE', 'CSE', 'Overall'],

		datasets: [
			{
				label: 'Students registered',
				data: [27, 32, 59],
				//backgroundColor:'green',
				backgroundColor: '#03254c',
				boderWidth: 4,
				borderColor: '#777',
				hoverBorderWidth: 2,
				hoverBorderColor: '#000',
			},
			{
				label: 'Jobs offered',
				data: [11, 49, 60],
				backgroundColor: '#1167b1',
				boderWidth: 4,
				borderColor: '#777',
				hoverBorderWidth: 2,
				hoverBorderColor: '#000',
			},
			{
				label: 'Total Students selected',
				data: [10, 25, 35],
				//backgroundColor:'green',
				backgroundColor: '#176BA0',
				boderWidth: 4,
				borderColor: '#777',
				hoverBorderWidth: 2,
				hoverBorderColor: '#000',
			},
			{
				label: 'Going for higher studies',
				data: [16, 4, 20],
				//backgroundColor:'green',
				backgroundColor: '#2a9df4',
				boderWidth: 4,
				borderColor: '#777',
				hoverBorderWidth: 2,
				hoverBorderColor: '#000',
			},

			{
				label: 'Starting their own company',
				data: [1, 0, 1],
				//backgroundColor:'green',
				backgroundColor: '#1AC9E6',
				boderWidth: 4,
				borderColor: '#777',
				hoverBorderWidth: 2,
				hoverBorderColor: '#000',
			},
			{
				label: 'Average salary (LPA)',
				data: [5.19, 12.75, 10.1],
				//backgroundColor:'green',
				backgroundColor: '#19AADE',
				boderWidth: 4,
				borderColor: '#777',
				hoverBorderWidth: 2,
				hoverBorderColor: '#000',
			},
			{
				label: 'Highest Salary (LPA)',
				data: [7, 56, 56],
				//backgroundColor:'green',
				backgroundColor: '#1BD4BD',
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
