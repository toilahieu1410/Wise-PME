$(function() {


    $.ajax({
      url: 'http://10.10.15.20:1880/voltages87-6h',
      complete: function(json) {
        data = JSON.parse(json.responseText);
        
        Highcharts.chart('chart2', {
       
            chart: {
                type: 'column',
                zoomType: 'xy'
            },
            title: {
                text: 'Vol U'
            },
            xAxis: {
                categories: data.time
              },
            yAxis: {
                tickInterval: 2,
                max:400,
                min:380,
                range:50, 
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
                   area: {
                        fillOpacity: 1,
                       // fillColor:'red'
                     //  color:'red'
                    },
              
            },
           series: [{
                name: 'VolAB',
                data: data.VolAB,
                  
            }, {
                name: 'VolBC',
                data: data.VolBC,
               
            },
            {
                name: 'VolCA',
                data: data.VolCA,
                   
            },
            
        
            ]
        });


        Highcharts.chart('chart4', {
            chart: {
                type: 'column',
                zoomType: 'xy'
            },
            title: {
                text: 'Vol V - Barchart'
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
              area: {
                   fillOpacity: 1,
                  // fillColor:'red'
                //  color:'red'
               },
         
       },
           series: [{
                name: 'VolAN',
                data: data.VolAN,

            }, {
                name: 'VolBN',
                data: data.VolBN,

            },
            {
                name: 'VolCN',
                data: data.VolCN,

            },
            ]
        });


        Highcharts.chart('chart5', {
            chart: {
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
  