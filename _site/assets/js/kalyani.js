//JS file for IIIT  Kalyani placement

let myChart1 = document.getElementById('myChart1').getContext('2d');

Chart.defaults.global.defaultFontFamily = 'Lato';
Chart.defaults.global.defaultFontSize = 18;
Chart.defaults.global.defaultFontColor = '#000';
Chart.defaults.global.legend.display = false;

let secondBatch = new Chart(myChart1, {
	type: 'bar',
	data: {
		labels: ['Students Eligible','Students appeared','Jobs Offered','Students Selected','Students for Higher Studies','Highest Salary(LPA)','Average Salary(LPA)' ,'Students Placed(%)'],

		datasets: [
			{
				
                data : [60,45,36,31,0,17,6.2,69],
				//backgroundColor:'green',
				backgroundColor: [
					'#03254c',
                    '#1167b1',
                    '#176BA0',
					'#2a9df4',
					'#1AC9E6',
					'#19AADE',
					'#1BD4BD',
					'#29066B'
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

let myChart3 = document.getElementById('myChart3').getContext('2d');

Chart.defaults.global.defaultFontFamily = 'Lato';
Chart.defaults.global.defaultFontSize = 18;
Chart.defaults.global.defaultFontColor = '#000';
Chart.defaults.global.legend.display = false;

let firstBatch = new Chart(myChart3, {
	type: 'bar',
	data: {
		labels: ['Students Eligible','Students appeared','Jobs Offered','Students Selected','Students for Higher Studies','Highest Salary(LPA)','Average Salary(LPA)' ,'Students Placed(%)'],

		datasets: [
			{
				data : [69,56,47,77,0,10,3.4,84],
				//backgroundColor:'green',
                backgroundColor: [
                    '#03254c',
                    '#1167b1',
                    '#176BA0',
					'#2a9df4',
					'#1AC9E6',
					'#19AADE',
					'#1BD4BD',
					'#29066B'
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

let myChart5 = document.getElementById('myChart5').getContext('2d');

Chart.defaults.global.defaultFontFamily = 'Lato';
Chart.defaults.global.defaultFontSize = 18;
Chart.defaults.global.defaultFontColor = '#000';
Chart.defaults.global.legend.display = false;

let thirdBatch = new Chart(myChart5, {
	type: 'bar',
	data: {
		labels: ['Students Eligible','Jobs Offered','Students Selected','Students for Higher Studies','Starting own company','Highest Salary(LPA)','Average Salary(LPA)' ,'Students Placed(%)'],

		datasets: [
			{
				
				data : [40,44,32,2,0,10,4,85],
				//backgroundColor:'green',
                backgroundColor: [
                    '#03254c',
                    '#1167b1',
                    '#176BA0',
					'#2a9df4',
					'#1AC9E6',
					'#19AADE',
					'#1BD4BD',
					'#29066B'
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

