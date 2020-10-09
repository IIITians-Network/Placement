//JS file for IIIT  Pune placement

let myChart1 = document.getElementById('myChart1').getContext('2d');

Chart.defaults.global.defaultFontFamily = 'Lato';
Chart.defaults.global.defaultFontSize = 18;
Chart.defaults.global.defaultFontColor = '#000';
Chart.defaults.global.legend.display = false;

let secondBatch = new Chart(myChart1, {
	type: 'bar',
	data: {
		labels: ['Highest Package(LPA)','Average Package(LPA)','Lowest Package(LPA)'],

		datasets: [
			{
				
                data : [36,7.58,5],
				//backgroundColor:'green',
				backgroundColor: [
                    '#03254c',
                    '#1167b1'
                ],
				boderWidth: 4,
				borderColor: '#777',
				hoverBorderWidth: 2,
                hoverBorderColor: '#000',
                lineWidth:1
                
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