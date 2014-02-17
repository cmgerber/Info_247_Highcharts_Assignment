$(document).ready(function(){

	//setup monthly line chart options
	var option_monLineChart ={
		chart: {
			renderTo: "mon-graph"
		},
		title: {
			text: "Monthly Department Spending as % Increase over Budget",
			x: -10, //set it to center
			style: {
				fontSize: '14px'
			}
		},
		subtitle: {
			text: "using projected actual for Nov",
			x: -15,
			style: {
				fontSize: '12px'
			}
		},
		xAxis: {
			categories: [] //place holder
		},
		yAxis: {
			title: {
				text: "Percentage (%)",
				style: {
					fontSize: '10px',
				}
			},
			plotLines: [{
				value: 0,
				width: 2, 
				color: "#191919",
			}],
			gridLineColor: "#ECECEA",
			tickInterval: 10
		},
		tooltip: {
			valueSuffix: "%",
			valueDecimals: 1,
		},
		legend: {
			layout: "vertical",
			align: "right",
			verticalAlign: "middle",
			itemStyle: {
				fontSize: '9px'
			},
			itemMarginTop: 5,
			// floating: true,
		},
		series: []
	}

	//draw YTD line chart
	var option_ytdLineChart ={
		chart: {
			renderTo: "ytd-graph"
		},
		title: {
			text: "YTD Department Spending as % Increase over Budget",
			x: -10, //set it to center
			style: {
				fontSize: '14px'
			}
		},
		subtitle: {
			text: "using projected actual for Nov",
			x: -15,
			style: {
				fontSize: '12px'
			}
		},
		xAxis: {
			categories: [] //place holder
		},
		yAxis: {
			title: {
				text: "Percentage(%)",
				style: {
					fontSize: '10px',
				}
			},
			plotLines: [{
				value: 0,
				width: 2, 
				color: "#191919",
			}],
			gridLineColor: "#ECECEA",
			tickInterval: 10
		},
		tooltip: {
			valueSuffix: "%",
			valueDecimals: 1,
		},
		legend: {
			layout: "vertical",
			align: "right",
			verticalAlign: "middle",
			itemStyle: {
				fontSize: '9px'
			},
			itemMarginTop: 5,
			// floating: true,
		},
		series: []
	}

//draw YTD line chart
	var option_ytdBarChart ={
		chart: {
			renderTo: "ytd-budget-ref",
			type: "column"
		},
		title: {
			text: "Nov YTD Budget per Department ",
			x: 25, //set it to center
			style: {
				fontSize: '14px'
			}
		},
		xAxis: {
			categories: [], //place holder
			labels: {
				rotation: -45,
			}
		},
		yAxis: {
			title: {
				text: "Budget ($)",
				style: {
					fontSize: '10px',
				}
			},
			plotLines: [{
				value: 0,
				width: 1, 
				color: "#191919",
			}],
			gridLineColor: "#ECECEA",
			tickInterval: 1000
		},
		tooltip: {
			valuePreffix: "$",
			valueDecimals: 1,
		},
		legend: {
			layout: "vertical",
			align: "right",
			verticalAlign: "top",
			itemStyle: {
				fontSize: '8px'
			},
			itemMarginTop: 5,
			floating: true,
			enabled: false,
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
				//console.log(option_monLineChart.series);
			}
		}); //end .each lines
		 
		var chart = new Highcharts.Chart(option_monLineChart);
	}); //end .get monthly chart

	//get ytd line chart data
	$.get("_data/ytd_percent_data.csv", function(data){
		var lines = data.split("\r");
		
		$.each(lines, function(lineNo, line){
			// console.log(lineNo, line);
			items = line.split(",");
			if(lineNo == 0){
				$.each(items, function(itemNo, item){
					if(itemNo !=0){
						option_ytdLineChart.xAxis.categories.push(item);
					}
				});
			}
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
				option_ytdLineChart.series.push({
					name: department_name,
					data: department_data,
					// color: series_color[lineNo-1]
				});
				// console.log(option_ytdLineChart.series);
			}
		}); //end .each lines

		var chart = new Highcharts.Chart(option_ytdLineChart);
	}); //end .get ytd_percent.csv

	//get ytd budget bar chart data
	$.get("_data/ytd_nov_budget.csv", function(data){
		var lines = data.split("\r");
		
		department_data = {name: "Nov Budget", data:[]};
		$.each(lines, function(lineNo, line){
			// console.log(lineNo, line);
			items = line.split(",");
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
						option_ytdBarChart.xAxis.categories.push(department_name);
					}
					else{
						department_data.data.push(parseInt(item));
					}
				});
			});
			console.log(department_data);
				option_ytdBarChart.series.push(department_data);

		var chart = new Highcharts.Chart(option_ytdBarChart);
	}); //end .get ytd_nov_budget.csv
}); //end document.ready