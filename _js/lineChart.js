$(document).ready(function(){

	//setup monthly line chart options
	var option_monLineChart ={
		chart: {
			renderTo: "mon-graph"
		},
		title: {
			text: "Monthly Departmental Spending as % Increase over Budget",
			x: -10, //set it to center
			style: {
				fontSize: '14px'
			}
		},
		xAxis: {
			categories: [] //place holder
		},
		yAxis: {
			title: {
				text: "Percentage(%)",
				style: {
					fontSize: '9px',
				}
			},
			plotLines: [{
				value: 0,
				width: 2, 
				color: "#191919",
			}],
			gridLineColor: "#ECECEA",
		},
		tooltip: {
			valueSuffix: "%",
			valueDecimals: 1,
		},
		legend: {
			layout: "vertical",
			align: "right",
			verticalAlign: "top",
			itemStyle: {
				fontSize: '8px'
			},
			floating: true,
		},
		series: []
	}

	// //initialize data variables
	
	$.get('_data/month_percent.csv', function(data){
		var lines = data.split("\n");

		$.each(lines, function(lineNo, line){
			var items = line.split(",");

			if (lineNo == 0){
				//get the month. First value is blank, so skip
				$.each(items, function(itemNo, item){
					if (itemNo != 0){
						option_monLineChart.xAxis.categories.push(item)
					}
				});
			} //end if lineNo == 0
			else if (line!=""){
				var department_name = "";
				var department_data = [];
				$.each(items, function(itemNo, item){
					if (itemNo ==0){
						switch(item){
							case "Information Technology": 
								department_name = "IT";
								break;
							case "Technical Support": 
								department_name = "TS";
								break;
							case "Human Resources":
								department_name = "HR";
								break;
							default:
								department_name = item;
						}
					}
					else{
						department_data.push(parseFloat(item) * 100);
					}
				});
				option_monLineChart.series.push({
					name: department_name,
					data: department_data,
					// color: series_color[lineNo-1]
				});
				console.log(option_monLineChart.series);
			}
		}); //end .each lines
		 
		var chart = new Highcharts.Chart(option_monLineChart);
	}); //end .get
});