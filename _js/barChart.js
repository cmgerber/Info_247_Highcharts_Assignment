$(document).ready(function()

    var option_barchart = {
        chart: {
          renderTo: "bar-chart",
          type: 'column'
        },
        title: {
          text: 'Year to Date Budget per Department'
        },
        xAxis: {
          categories: [
           //fill countries here
          ]
        },
        yAxis: {
          title: {
            text: 'Percent of total budget used'
          }
        },
        credits: {
            enabled: false
        },
        tooltip: {
          headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
          pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' + '<td style="padding:0"><b>{point.y:.1f}</b></td></tr>',
          footerFormat: '</table>',
          shared: false,
          useHTML: true
        },
        plotOptions: {
          column: {
            pointPadding: 0.2,
            borderWidth: 0
          }
        },
        series: []
      }