$("#list-1").on('change', function() {
  var selVal = $('#list-1').val();
  if (selVal == "time-1") {
    $.ajax({
      url: 'http://10.10.15.20:1880/currents972-6h20s',
      complete: function(json) {
        data = JSON.parse(json.responseText);
  
        Highcharts.chart('chart1', {
          chart: {
            backgroundColor:'rgba(255, 255, 255, 0.9)',
              type: 'line',
              zoomType: 'x'
          },
          title: {
              text: 'LVMSB2-Current'
          },
          subtitle: {
              text: 'Source: PM5350'
          },
          xAxis: {
            categories: data.time
          },
          yAxis: {
              title: {
                  text: 'Ampe'
              },
            
          },
          series: [{
            name: 'CurrentA',
            data: data.CurrentA,
            pointStart: 0,
            color:'#66ccff'
          }, {
            name: 'CurrentB',
            data: data.CurrentB,
            pointStart: 0,
            color:'#ff3333'
          },
        {
            name: 'CurrentC',
            data: data.CurrentC,
            pointStart: 0,
            color:'yellow'
          },
        {
            name: 'CurrentAvg',
            data: data.CurrentAvg,
            pointStart: 0,
            color:'#70db70'
          }]
      
      
      });

  
      },
      error: function() {
        console.log('there was an error!');
      }
    });
   } else if (selVal == "time-2") {
    $.ajax({
      url: 'http://10.10.15.20:1880/currents972-24h20s',
      complete: function(json) {
        data = JSON.parse(json.responseText);
  
        Highcharts.chart('chart1', {
          chart: {
            backgroundColor:'rgba(255, 255, 255, 0.9)',
              type: 'line',
              zoomType: 'x'
          },
          title: {
              text: 'LVMSB2-Current'
          },
          subtitle: {
              text: 'Source: PM5350'
          },
          xAxis: {
            categories: data.time
          },
          yAxis: {
              title: {
                  text: 'Ampe'
              },
            
          },
          series: [{
            name: 'CurrentA',
            data: data.CurrentA,
            pointStart: 0,
            color:'#66ccff'
          }, {
            name: 'CurrentB',
            data: data.CurrentB,
            pointStart: 0,
            color:'#ff3333'
          },
        {
            name: 'CurrentC',
            data: data.CurrentC,
            pointStart: 0,
            color:'yellow'
          },
        {
            name: 'CurrentAvg',
            data: data.CurrentAvg,
            pointStart: 0,
            color:'#70db70'
          }]
      
      
      });
  
      },
      error: function() {
        console.log('there was an error!');
      }
    });
   }  else if (selVal == "time-3") {
    $.ajax({
      url: 'http://10.10.15.20:1880/currents972-7d20s',
      complete: function(json) {
        data = JSON.parse(json.responseText);
  
        Highcharts.chart('chart1', {
          chart: {
            backgroundColor:'rgba(255, 255, 255, 0.9)',
              type: 'line',
              zoomType: 'x'
          },
          title: {
              text: 'LVMSB2-Current'
          },
          subtitle: {
              text: 'Source: PM5350'
          },
          xAxis: {
            categories: data.time
          },
          yAxis: {
              title: {
                  text: 'Ampe'
              },
            
          },
          series: [{
            name: 'CurrentA',
            data: data.CurrentA,
            pointStart: 0,
            color:'#66ccff'
          }, {
            name: 'CurrentB',
            data: data.CurrentB,
            pointStart: 0,
            color:'#ff3333'
          },
        {
            name: 'CurrentC',
            data: data.CurrentC,
            pointStart: 0,
            color:'yellow'
          },
        {
            name: 'CurrentAvg',
            data: data.CurrentAvg,
            pointStart: 0,
            color:'#70db70'
          }]
      
      
      });
  
      },
      error: function() {
        console.log('there was an error!');
      }
    });
   }  else if (selVal == "time-4") {
    $.ajax({
      url: 'http://10.10.15.20:1880/currents972-30d20s',
      complete: function(json) {
        data = JSON.parse(json.responseText);
  
        Highcharts.chart('chart1', {
          chart: {
            backgroundColor:'rgba(255, 255, 255, 0.9)',
              type: 'line',
              zoomType: 'x'
          },
          title: {
              text: 'LVMSB2-Current'
          },
          subtitle: {
              text: 'Source: PM5350'
          },
          xAxis: {
            categories: data.time
          },
          yAxis: {
              title: {
                  text: 'Ampe'
              },
            
          },
          series: [{
            name: 'CurrentA',
            data: data.CurrentA,
            pointStart: 0,
            color:'#66ccff'
          }, {
            name: 'CurrentB',
            data: data.CurrentB,
            pointStart: 0,
            color:'#ff3333'
          },
        {
            name: 'CurrentC',
            data: data.CurrentC,
            pointStart: 0,
            color:'yellow'
          },
        {
            name: 'CurrentAvg',
            data: data.CurrentAvg,
            pointStart: 0,
            color:'#70db70'
          }]
      
      
      });
  
      },
      error: function() {
        console.log('there was an error!');
      }
    });
   } 
   
  
  });

  $("#list-2").on('change', function() {
    var selVal = $('#list-2').val();
    if (selVal == "time-1") {
        $.ajax({
        url: 'http://10.10.15.20:1880/currents972-6h20s',
        complete: function(json) {
            data = JSON.parse(json.responseText);
            Highcharts.chart('chart2', {
                chart: {
                    backgroundColor:'rgba(255, 255, 255, 0.9)',
                    type: 'column',
                    zoomType: 'x'
                },
                title: {
                    text: 'LVMSB2-Current'
                },
                    xAxis: {
                    categories: data.time
                },
                yAxis: {
                    tickInterval: 5,
                    // max:15,
                    // min:0,
                    // range:0, 
                    
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
                    name: 'CurrentA',
                    data: data.CurrentA,
                     pointStart: 0,
                     color:'#66ccff'
                }, {
                    name: 'CurrentB',
                    data: data.CurrentB,
                    pointStart: 0,
                    color:'#ff3333'
                },
              {
                    name: 'CurrentC',
                    data: data.CurrentC,
                    pointStart: 0,
                    color:'yellow'
                }]
            });
    
    
        },
        error: function() {
            console.log('there was an error!');
        }
        });
        } else if (selVal == "time-2") {
        $.ajax({
        url: 'http://10.10.15.20:1880/currents972-24h20s',
        complete: function(json) {
            data = JSON.parse(json.responseText);
    
            Highcharts.chart('chart2', {
                chart: {
                    backgroundColor:'rgba(255, 255, 255, 0.9)',
                    type: 'column',
                    zoomType: 'x'
                },
                title: {
                    text: 'LVMSB2-Current'
                },
                    xAxis: {
                    categories: data.time
                },
                yAxis: {
                    tickInterval: 5,
                    // max:15,
                    // min:0,
                    // range:0, 
                    
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
                    name: 'CurrentA',
                    data: data.CurrentA,
                     pointStart: 0,
                     color:'#66ccff'
                }, {
                    name: 'CurrentB',
                    data: data.CurrentB,
                    pointStart: 0,
                    color:'#ff3333'
                },
              {
                    name: 'CurrentC',
                    data: data.CurrentC,
                    pointStart: 0,
                    color:'yellow'
                }]
            });
    
    
        },
        error: function() {
            console.log('there was an error!');
        }
        });
        }  else if (selVal == "time-3") {
        $.ajax({
        url: 'http://10.10.15.20:1880/currents972-7d20s',
        complete: function(json) {
            data = JSON.parse(json.responseText);
    
            Highcharts.chart('chart2', {
                chart: {
                    backgroundColor:'rgba(255, 255, 255, 0.9)',
                    type: 'column',
                    zoomType: 'x'
                },
                title: {
                    text: 'LVMSB2-Current'
                },
                    xAxis: {
                    categories: data.time
                },
                yAxis: {
                    tickInterval: 5,
                    // max:15,
                    // min:0,
                    // range:0, 
                    
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
                    name: 'CurrentA',
                    data: data.CurrentA,
                     pointStart: 0,
                     color:'#66ccff'
                }, {
                    name: 'CurrentB',
                    data: data.CurrentB,
                    pointStart: 0,
                    color:'#ff3333'
                },
              {
                    name: 'CurrentC',
                    data: data.CurrentC,
                    pointStart: 0,
                    color:'yellow'
                }]
            });
    
        },
        error: function() {
            console.log('there was an error!');
        }
        });
        }  else if (selVal == "time-4") {
        $.ajax({
        url: 'http://10.10.15.20:1880/currents972-30d20s',
        complete: function(json) {
            data = JSON.parse(json.responseText);
    
            Highcharts.chart('chart2', {
                chart: {
                    backgroundColor:'rgba(255, 255, 255, 0.9)',
                    type: 'column',
                    zoomType: 'x'
                },
                title: {
                    text: 'LVMSB2-Current'
                },
                    xAxis: {
                    categories: data.time
                },
                yAxis: {
                    tickInterval: 5,
                    // max:15,
                    // min:0,
                    // range:0, 
                    
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
                    name: 'CurrentA',
                    data: data.CurrentA,
                     pointStart: 0,
                     color:'#66ccff'
                }, {
                    name: 'CurrentB',
                    data: data.CurrentB,
                    pointStart: 0,
                    color:'#ff3333'
                },
              {
                    name: 'CurrentC',
                    data: data.CurrentC,
                    pointStart: 0,
                    color:'yellow'
                }]
            });
    
        },
        error: function() {
            console.log('there was an error!');
        }
        });
        } 
        
    
    });

$("#list-3").on('change', function() {
    var selVal = $('#list-3').val();
    if (selVal == "time-1") {
        $.ajax({
        url: 'http://10.10.15.20:1880/currents972-6h20s',
        complete: function(json) {
            data = JSON.parse(json.responseText);
            Highcharts.chart('chart3', {
                chart: {
                    backgroundColor:'rgba(255, 255, 255, 0.9)',
                    type: 'column',
                    zoomType: 'x'
                },
                title: {
                    text: 'LVMSB2-CurrentAvg'
                },
                    xAxis: {
                    categories: data.time
                },
                yAxis: {
                    tickInterval: 5,
                    // max:15,
                    // min:0,
                    // range:0, 
                    
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
                    name: 'CurrentAvg',
                    data: data.CurrentAvg,
                            pointStart: 0,color:'#70db70'
                }, 
                ]
            });
    
    
        },
        error: function() {
            console.log('there was an error!');
        }
        });
        } else if (selVal == "time-2") {
        $.ajax({
        url: 'http://10.10.15.20:1880/currents972-24h20s',
        complete: function(json) {
            data = JSON.parse(json.responseText);
    
            Highcharts.chart('chart3', {
                chart: {
                    backgroundColor:'rgba(255, 255, 255, 0.9)',
                    type: 'column',
                    zoomType: 'x'
                },
                title: {
                    text: 'LVMSB2-CurrentAvg'
                },
                    xAxis: {
                    categories: data.time
                },
                yAxis: {
                    tickInterval: 5,
                    // max:15,
                    // min:0,
                    // range:0, 
                    
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
                            pointStart: 0,color:'#70db70'
                }, 
                ]
            });
    
    
        },
        error: function() {
            console.log('there was an error!');
        }
        });
        }  else if (selVal == "time-3") {
        $.ajax({
        url: 'http://10.10.15.20:1880/currents972-7d20s',
        complete: function(json) {
            data = JSON.parse(json.responseText);
    
            Highcharts.chart('chart3', {
                chart: {
                    backgroundColor:'rgba(255, 255, 255, 0.9)',
                    type: 'column',
                    zoomType: 'x'
                },
                title: {
                    text: 'LVMSB2-CurrentAvg'
                },
                    xAxis: {
                    categories: data.time
                },
                yAxis: {
                    tickInterval: 5,
                    // max:15,
                    // min:0,
                    // range:0, 
                    
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
                            pointStart: 0,color:'#70db70'
                }, 
                ]
            });
    
        },
        error: function() {
            console.log('there was an error!');
        }
        });
        }  else if (selVal == "time-4") {
        $.ajax({
        url: 'http://10.10.15.20:1880/currents972-30d20s',
        complete: function(json) {
            data = JSON.parse(json.responseText);
    
            Highcharts.chart('chart3', {
                chart: {
                    backgroundColor:'rgba(255, 255, 255, 0.9)',
                    type: 'column',
                    zoomType: 'x'
                },
                title: {
                    text: 'LVMSB2-CurrentAvg'
                },
                    xAxis: {
                    categories: data.time
                },
                yAxis: {
                    tickInterval: 5,
                    // max:15,
                    // min:0,
                    // range:0, 
                    
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
                            pointStart: 0,color:'#70db70'
                }, 
                ]
            });
    
        },
        error: function() {
            console.log('there was an error!');
        }
        });
        } 
        
    
    });
  