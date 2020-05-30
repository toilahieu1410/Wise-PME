
$(function() {


  $.ajax({
    url: 'http://10.10.15.20:1880/power-hour87',
    complete: function(json) {
      data = JSON.parse(json.responseText);
      
      Highcharts.chart('chart1', {
     
          chart: {
            backgroundColor:'rgba(255, 255, 255, 0.9)',
              type: 'column',
              zoomType: 'x'
          },
          title: {
              text: 'Biểu đồ sử dụng điện theo giờ - LVMSB1'
          },
          xAxis: {
              categories: data.time
            },
            yAxis: {
              tickInterval: 3,
               minorTickInterval: 0.1,
              title: {
                  text: 'kWh'
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
              name: 'Văn Phòng 87',
              data: data.Hour,
                
          }, 

          
      
          ]
      });

    },
    error: function() {
      console.log('there was an error!');
    }
  });

});


$(function() {


  $.ajax({
    url: 'http://10.10.15.20:1880/power-hour972',
    complete: function(json) {
      data = JSON.parse(json.responseText);
      

      Highcharts.chart('chart2', {
     
        chart: {
          backgroundColor:'rgba(255, 255, 255, 0.9)',
            type: 'column',
            zoomType: 'x'
        },
        title: {
            text: 'Biểu đồ sử dụng điện theo giờ - LVMSB2'
        },
        xAxis: {
            categories: data.time
          },
          yAxis: {
            tickInterval: 3,
             minorTickInterval: 0.1,
            title: {
                text: 'kWh'
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
            name: 'Kho 972',
            data: data.Hour,
              
        }, 

        
    
        ]
    });



    },
    error: function() {
      console.log('there was an error!');
    }
  });

});


$(function() {


  $.ajax({
    url: 'http://10.10.15.20:1880/power-hourDH',
    complete: function(json) {
      data = JSON.parse(json.responseText);
      

      Highcharts.chart('chart3', {
     
        chart: {
          backgroundColor:'rgba(255, 255, 255, 0.9)',
            type: 'column',
            zoomType: 'x'
        },
        title: {
            text: 'Biểu đồ sử dụng điện theo giờ - LVMSB1'
        },
        xAxis: {
            categories: data.time
          },
          yAxis: {
            tickInterval: 3,
             minorTickInterval: 0.1,
            title: {
                text: 'kWh'
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
            name: 'Xưởng',
            data: data.Hour,
              
        }, 

        
    
        ]
    });



    },
    error: function() {
      console.log('there was an error!');
    }
  });

});

$(function() {


  $.ajax({
    url: 'http://10.10.15.20:1880/power87-day',
    complete: function(json) {
      data = JSON.parse(json.responseText);
      

      Highcharts.chart('chart7', {
     
        chart: {
          backgroundColor:'rgba(255, 255, 255, 0.9)',
            type: 'column',
            zoomType: 'x'
        },
        title: {
            text: 'Biểu đồ sử dụng điện theo ngày - LVMSB1'
        },
        xAxis: {
            categories: data.time
          },
          yAxis: {
            tickInterval: 3,
            // max:8,
            // min:0,
             minorTickInterval: 0.1,
            title: {
                text: 'kWh'
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
            name: 'LVMSB1',
            data: data.powerDay87,
              
        }, 

        
    
        ]
    });



    },
    error: function() {
      console.log('there was an error!');
    }
  });

});

$(function() {


  $.ajax({
    url: 'http://10.10.15.20:1880/power972-day',
    complete: function(json) {
      data = JSON.parse(json.responseText);
      

      Highcharts.chart('chart8', {
     
        chart: {
          backgroundColor:'rgba(255, 255, 255, 0.9)',
            type: 'column',
            zoomType: 'x'
        },
        title: {
            text: 'Biểu đồ sử dụng điện theo ngày - LVMSB2'
        },
        xAxis: {
            categories: data.time
          },
          yAxis: {
            tickInterval: 3,
            // max:8,
            // min:0,
             minorTickInterval: 0.1,
            title: {
                text: 'kWh'
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
            name: 'LVMSB2',
            data: data.powerDay972,
              
        }, 

        
    
        ]
    });



    },
    error: function() {
      console.log('there was an error!');
    }
  });

});

$(function() {


  $.ajax({
    url: 'http://10.10.15.20:1880/powerDH-day',
    complete: function(json) {
      data = JSON.parse(json.responseText);
      

      Highcharts.chart('chart9', {
     
        chart: {
          backgroundColor:'rgba(255, 255, 255, 0.9)',
            type: 'column',
            zoomType: 'x'
        },
        title: {
            text: 'Biểu đồ sử dụng điện theo ngày - LVMSB3'
        },
        xAxis: {
            categories: data.time
          },
          yAxis: {
            tickInterval: 3,
            // max:8,
            // min:0,
             minorTickInterval: 0.1,
            title: {
                text: 'kWh'
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
            name: 'LVMSB3',
            data: data.powerDayDH,
              
        }, 

        
    
        ]
    });



    },
    error: function() {
      console.log('there was an error!');
    }
  });

});


$(function() {


  $.ajax({
    url: 'http://10.10.15.20:1880/power87-month',
    complete: function(json) {
      data = JSON.parse(json.responseText);
      

      Highcharts.chart('chart11', {
     
        chart: {
          backgroundColor:'rgba(255, 255, 255, 0.9)',
            type: 'column',
            zoomType: 'x'
        },
        title: {
            text: 'Biểu đồ sử dụng điện theo tháng - LVMSB1',
            style: {
              color: "#fff"
          }
        },
        xAxis: {
            categories: data.month
          },
          yAxis: {
            tickInterval: 3,
            // max:8,
            // min:0,
             minorTickInterval: 0.1,
            title: {
                text: 'kWh'
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
            name: 'LVMSB1',
            data: data.value,
              
        }, 

        
    
        ]
    });



    },
    error: function() {
      console.log('there was an error!');
    }
  });

});

$(function() {


  $.ajax({
    url: 'http://10.10.15.20:1880/power972-month',
    complete: function(json) {
      data = JSON.parse(json.responseText);
      

      Highcharts.chart('chart12', {
     
        chart: {
          backgroundColor:'rgba(255, 255, 255, 0.9)',
            type: 'column',
            zoomType: 'x'
        },
        title: {
            text: 'Biểu đồ sử dụng điện theo tháng - LVMSB2',
            style: {
              color: "#fff"
          }
        },
        xAxis: {
            categories: data.month
          },
          yAxis: {
            tickInterval: 3,
            // max:8,
            // min:0,
             minorTickInterval: 0.1,
            title: {
                text: 'kWh'
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
            name: 'LVMSB2',
            data: data.value,
              
        }, 

        
    
        ]
    });



    },
    error: function() {
      console.log('there was an error!');
    }
  });

});

$(function() {


  $.ajax({
    url: 'http://10.10.15.20:1880/powerDH-month',
    complete: function(json) {
      data = JSON.parse(json.responseText);
      

      Highcharts.chart('chart13', {
     
        chart: {
          backgroundColor:'rgba(255, 255, 255, 0.9)',
            type: 'column',
            zoomType: 'x'
        },
        title: {
            text: 'Biểu đồ sử dụng điện theo tháng - LVMSB3',
            style: {
              color: "#fff"
          }
        },
        xAxis: {
            categories: data.month
          },
          yAxis: {
            tickInterval: 3,
            // max:8,
            // min:0,
             minorTickInterval: 0.1,
            title: {
                text: 'kWh'
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
            name: 'LVMSB3',
            data: data.value,
              
        }, 

        
    
        ]
    });



    },
    error: function() {
      console.log('there was an error!');
    }
  });

});