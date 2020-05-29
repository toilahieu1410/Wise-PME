


$(function() {


    $.ajax({
      url: 'http://10.10.15.20:1880/power-day-lvmsb', 
      complete: function(json) {
        data = JSON.parse(json.responseText);
        
        Highcharts.chart('chart10', {
            chart: {
                backgroundColor:'rgba(255, 255, 255, 0.9)',
                type: 'column',
                zoomType: "x"
            },
            title: {
                text: 'So sánh năng lượng sử dụng theo ngày'
            },
          
            xAxis: {
                categories: data.time,
                crosshair: true
            },
            yAxis: {
                min: 0,
                title: {
                    text: 'kWh'
                }
            },
            tooltip: {
                headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
                pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                    '<td style="padding:0"><b>{point.y:.1f} kWh</b></td></tr>',
                footerFormat: '</table>',
                shared: true,
                useHTML: true
            },
            plotOptions: {
                column: {
                    pointPadding: 0.2,
                    borderWidth: 0
                }
            },
            series: [{
                name: 'LVMSB1',
                data: data.powerDay87
        
            }, {
                name: 'LVMSB2',
                data: data.powerDay972
        
            }, {
                name: 'LVMSB3',
                data: data.powerDayDH
        
            }]
        });
  
      },
      error: function() {
        console.log('there was an error!');
      }
    });
  
  });