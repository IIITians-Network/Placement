//JS file for IIIT  Vadodara placement

let myChart1 = document.getElementById('myChart1').getContext('2d');

Chart.defaults.global.defaultFontFamily = 'Lato';
Chart.defaults.global.defaultFontSize = 18;
Chart.defaults.global.defaultFontColor = '#000';


let secondBatch = new Chart(myChart1, {
	type: 'bar',
	data: {
		labels: ['B.Tech CSE', 'B.Tech IT', 'M.Tech CSE'],

		datasets: [
            {
				label: 'Batch Strength',
				data: [61, 20, 13],
				//backgroundColor:'green',
				backgroundColor: '#03254c',
				boderWidth: 4,
				borderColor: '#777',
				hoverBorderWidth: 2,
				hoverBorderColor: '#000',
			},
			{
				label: 'Students Eligible',
				data: [58, 16, 9],
				//backgroundColor:'green',
				backgroundColor: '#176BA0',
				boderWidth: 4,
				borderColor: '#777',
				hoverBorderWidth: 2,
				hoverBorderColor: '#000',
			},
			{
				label: 'Jobs offered',
				data: [73, 24, 5],
				backgroundColor: '#2a9df4',
				boderWidth: 4,
				borderColor: '#777',
				hoverBorderWidth: 2,
				hoverBorderColor: '#000',
			},
			{
				label: 'Total Students Placed',
				data: [58, 16, 4],
				//backgroundColor:'green',
				backgroundColor: '#1AC9E6',
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

let myChart3 = document.getElementById('myChart3').getContext('2d');

Chart.defaults.global.defaultFontFamily = 'Lato';
Chart.defaults.global.defaultFontSize = 18;
Chart.defaults.global.defaultFontColor = '#777';

let firstBatch = new Chart(myChart3, {
	type: 'bar',
	data: {
		labels: ['B.Tech CSE', 'B.Tech IT', 'M.Tech CSE'],

		datasets: [
            {
				label: 'Batch Strength',
				data: [63, 30, 6],
				//backgroundColor:'green',
				backgroundColor: '#03254c',
				boderWidth: 4,
				borderColor: '#777',
				hoverBorderWidth: 2,
				hoverBorderColor: '#000',
			},
			{
				label: 'Students Eligible',
				data: [51, 29, 5],
				//backgroundColor:'green',
				backgroundColor: '#176BA0',
				boderWidth: 4,
				borderColor: '#777',
				hoverBorderWidth: 2,
				hoverBorderColor: '#000',
			},
			{
				label: 'Jobs offered',
				data: [67, 38, 5],
				backgroundColor: '#2a9df4',
				boderWidth: 4,
				borderColor: '#777',
				hoverBorderWidth: 2,
				hoverBorderColor: '#000',
			},
			{
				label: 'Total Students Placed',
				data: [49, 29, 4],
				//backgroundColor:'green',
				backgroundColor: '#1AC9E6',
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

