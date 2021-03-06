$(function() {


    $.ajax({
      url: 'http://10.10.15.20:1880/last-powers87',
      complete: function(json) {
        data = JSON.parse(json.responseText);
        
        Highcharts.chart('chart2', {
            chart: {
                backgroundColor:'rgba(255, 255, 255, 0.9)',
                plotBackgroundColor: null,
                plotBorderWidth: null,
                plotShadow: false,
                type: 'pie'
            },
            title: {
                text: 'LVMSB1-Power'
            },
            tooltip: {
                pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
            },
            accessibility: {
                point: {
                    valueSuffix: '%'
                }
            },
            plotOptions: {
                pie: {
                    allowPointSelect: true,
                    cursor: 'pointer',
                    dataLabels: {
                        enabled: true,
                        format: '<b>{point.name}</b>: {point.percentage:.1f} %'
                    }
                }
            },
            series: [{
                name: 'Power',
                colorByPoint: true,
                data: [{
                    name: 'PowerA',
                    y: data.percentA,
                    sliced: true,
                    selected: true
                }, {
                    name: 'PowerB',
                    y: data.percentB
                }, {
                    name: 'PowerC',
                    y: data.percentC
                }]
            }]
        });
           

        Highcharts.chart('chart3', {
            chart: {
                backgroundColor:'rgba(255, 255, 255, 0.9)',
                type: 'column',
                zoomType: 'xy'
            },
            title: {
                text: 'Vol-LL'
            },
               xAxis: {
                categories: data.time
            },
            yAxis: {
                tickInterval: 2,
                max:400,
                min:370,
                range:50, 
                minorTickInterval: 0.1,
                title: {
                    text: 'Vol'
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
                data: data.VolLL,
                     pointStart: 0,color:'orange'
            }, 
            ]
        });


        Highcharts.chart('chart6', {
            chart: {
                backgroundColor:'rgba(255, 255, 255, 0.9)',
                type: 'column',
                zoomType: 'xy'
            },
            title: {
                text: 'Vol-LN'
            },
               xAxis: {
                categories: data.time
            },
            yAxis: {
                tickInterval: 5,
                max:235,
                min:222,
                 minorTickInterval: 0.1,
                title: {
                    text: 'Vol'
                }
        
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
                name: 'VolLN',
                data: data.VolLN,
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
  