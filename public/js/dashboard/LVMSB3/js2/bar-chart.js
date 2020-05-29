$(function() {


    $.ajax({
      url: 'http://10.10.15.20:1880/currents87-6h',
      complete: function(json) {
        data = JSON.parse(json.responseText);
        
        Highcharts.chart('chart2', {
       
            chart: {
                type: 'column',
                zoomType: 'xy'
            },
            title: {
                text: 'Current A - B - C'
            },
            xAxis: {
                categories: data.time
              },
            yAxis: {
                tickInterval: 2,
                max:20,
                min:0,
                range:0, 
                minorTickInterval: 0.1,
                title: {
                    text: 'Ampe'
                }
        
            },
            plotOptions: {
                     line: {
                    dataLabels: {
                        enabled: true
                    },
                    enableMouseTracking: false
                },
                   area: {
                        fillOpacity: 1,
                       // fillColor:'red'
                     //  color:'red'
                    },
              
            },
           series: [{
                name: 'CurrentA',
                data: data.CurrentA,
                  
            }, {
                name: 'CurrentB',
                data: data.CurrentB,
               
            },
            {
                name: 'CurrentC',
                data: data.CurrentC,
                   
            },
            
        
            ]
        });
           

        Highcharts.chart('chart3', {
            chart: {
                type: 'column',
                zoomType: 'xy'
            },
            title: {
                text: 'CurrentAvg'
            },
               xAxis: {
                categories: data.time
            },
            yAxis: {
                tickInterval: 5,
                max:15,
                min:0,
                range:0, 
                minorTickInterval: 0.1,
                title: {
                    text: 'Ampe'
                }
        
            },
            tooltip: {
                pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y}</b> <br/>',
                shared: true
            },
            plotOptions: {
                     line: {
                    dataLabels: {
                        enabled: true
                    },
                    enableMouseTracking: false
                },
             
            },
           series: [{
                name: 'VolLL',
                data: data.CurrentAvg,
                     pointStart: 0,color:'orange'
            }, 
            ]
        });
  
      },
      error: function() {
        console.log('there was an error!');
      }
    });
  
  });
  