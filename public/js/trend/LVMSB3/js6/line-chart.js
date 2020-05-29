$("#list-1").on('change', function() {
    var selVal = $('#list-1').val();
    if (selVal == "time-1") {
      $.ajax({
        url: 'http://10.10.15.20:1880/thd1-DH-6h20s',
        complete: function(json) {
          data = JSON.parse(json.responseText);
    
          Highcharts.chart('chart1', {
            chart: {
                backgroundColor:'rgba(255, 255, 255, 0.9)',
                type: 'line',
                zoomType: 'x'
            },
            title: {
                text: 'LVMSB3-thd-Current',
                style: {
                    color: "#fff"
     
                 }
            },
            subtitle: {
                text: 'Source: PM5350'
            },
            xAxis: {
              categories: data.time
            },
            yAxis: {
                title: {
                    text: '%'
                },
              
            },
            series: [{
                name: 'thdcurrentA',
                data: data.thdcurrentA,
                 pointStart: 0,
                 color:'#66ccff'
            }, {
                name: 'thdcurrentB',
                data: data.thdcurrentB,
                pointStart: 0,
                color:'#ff3333'
            },
          {
                name: 'thdcurrentC',
                data: data.thdcurrentC,
                pointStart: 0,
                color:'yellow'
            },
          {
                name: 'thdcurrentN',
                data: data.thdcurrentN,
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
        url: 'http://10.10.15.20:1880/thd1-DH-24h20s',
        complete: function(json) {
          data = JSON.parse(json.responseText);
    
          Highcharts.chart('chart1', {
            chart: {
                backgroundColor:'rgba(255, 255, 255, 0.9)',
                type: 'line',
                zoomType: 'x'
            },
            title: {
                text: 'LVMSB3-thd-Current',
                style: {
                    color: "#fff"
     
                 }
            },
            subtitle: {
                text: 'Source: PM5350'
            },
            xAxis: {
              categories: data.time
            },
            yAxis: {
                title: {
                    text: '%'
                },
              
            },
            series: [{
                name: 'thdcurrentA',
                data: data.thdcurrentA,
                 pointStart: 0,
                 color:'#66ccff'
            }, {
                name: 'thdcurrentB',
                data: data.thdcurrentB,
                pointStart: 0,
                color:'#ff3333'
            },
          {
                name: 'thdcurrentC',
                data: data.thdcurrentC,
                pointStart: 0,
                color:'yellow'
            },
          {
                name: 'thdcurrentN',
                data: data.thdcurrentN,
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
        url: 'http://10.10.15.20:1880/thd1-DH-7d20s',
        complete: function(json) {
          data = JSON.parse(json.responseText);
    
          Highcharts.chart('chart1', {
            chart: {
                backgroundColor:'rgba(255, 255, 255, 0.9)',
                type: 'line',
                zoomType: 'x'
            },
            title: {
                text: 'LVMSB3-thd-Current',
                style: {
                    color: "#fff"
     
                 }
            },
            subtitle: {
                text: 'Source: PM5350'
            },
            xAxis: {
              categories: data.time
            },
            yAxis: {
                title: {
                    text: '%'
                },
              
            },
            series: [{
                name: 'thdcurrentA',
                data: data.thdcurrentA,
                 pointStart: 0,
                 color:'#66ccff'
            }, {
                name: 'thdcurrentB',
                data: data.thdcurrentB,
                pointStart: 0,
                color:'#ff3333'
            },
          {
                name: 'thdcurrentC',
                data: data.thdcurrentC,
                pointStart: 0,
                color:'yellow'
            },
          {
                name: 'thdcurrentN',
                data: data.thdcurrentN,
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
        url: 'http://10.10.15.20:1880/thd1-DH-30d20s',
        complete: function(json) {
          data = JSON.parse(json.responseText);
    
          Highcharts.chart('chart1', {
            chart: {
                backgroundColor:'rgba(255, 255, 255, 0.9)',
                type: 'line',
                zoomType: 'x'
            },
            title: {
                text: 'LVMSB3-thd-Current',
                style: {
                    color: "#fff"
     
                 }
            },
            subtitle: {
                text: 'Source: PM5350'
            },
            xAxis: {
              categories: data.time
            },
            yAxis: {
                title: {
                    text: '%'
                },
              
            },
            series: [{
                name: 'thdcurrentA',
                data: data.thdcurrentA,
                 pointStart: 0,
                 color:'#66ccff'
            }, {
                name: 'thdcurrentB',
                data: data.thdcurrentB,
                pointStart: 0,
                color:'#ff3333'
            },
          {
                name: 'thdcurrentC',
                data: data.thdcurrentC,
                pointStart: 0,
                color:'yellow'
            },
          {
                name: 'thdcurrentN',
                data: data.thdcurrentN,
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
        url: 'http://10.10.15.20:1880/thd1-DH-6h20s',
        complete: function(json) {
            data = JSON.parse(json.responseText);
    
            Highcharts.chart('chart2', {
                chart: {
                    backgroundColor:'rgba(255, 255, 255, 0.9)',
                    type: 'line',
                    zoomType: 'x'
                },
                title: {
                    text: 'LVMSB3-thd-VolU',
                    style: {
                        color: "#fff"
         
                     }
                },
                subtitle: {
                    text: 'Source: PM5350'
                },
                xAxis: {
                    categories: data.time
                },
                yAxis: {
                    title: {
                        text: '%'
                    },
                      
                },
                
                series: [{
                    name: 'thdvolAB',
                    data: data.thdvolAB,
                    pointStart: 0,
                    color:'#66ccff'
                }, {
                    name: 'thdvolBC',
                    data: data.thdvolBC,
                    pointStart: 0,
                    color:'#ff3333'
                },
                {
                    name: 'thdvolCA',
                    data: data.thdvolCA,
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
        url: 'http://10.10.15.20:1880/thd1-DH-24h20s',
        complete: function(json) {
            data = JSON.parse(json.responseText);
    
            Highcharts.chart('chart2', {
                chart: {
                    backgroundColor:'rgba(255, 255, 255, 0.9)',
                    type: 'line',
                    zoomType: 'x'
                },
                title: {
                    text: 'LVMSB3-thd-VolU',
                    style: {
                        color: "#fff"
         
                     }
                },
                subtitle: {
                    text: 'Source: PM5350'
                },
                xAxis: {
                    categories: data.time
                },
                yAxis: {
                    title: {
                        text: '%'
                    },
                      
                },
                
                series: [{
                    name: 'thdvolAB',
                    data: data.thdvolAB,
                    pointStart: 0,
                    color:'#66ccff'
                }, {
                    name: 'thdvolBC',
                    data: data.thdvolBC,
                    pointStart: 0,
                    color:'#ff3333'
                },
                {
                    name: 'thdvolCA',
                    data: data.thdvolCA,
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
        url: 'http://10.10.15.20:1880/thd1-DH-7d20s',
        complete: function(json) {
            data = JSON.parse(json.responseText);
    
            Highcharts.chart('chart2', {
                chart: {
                    backgroundColor:'rgba(255, 255, 255, 0.9)',
                    type: 'line',
                    zoomType: 'x'
                },
                title: {
                    text: 'LVMSB3-thd-VolU',
                    style: {
                        color: "#fff"
         
                     }
                },
                subtitle: {
                    text: 'Source: PM5350'
                },
                xAxis: {
                    categories: data.time
                },
                yAxis: {
                    title: {
                        text: '%'
                    },
                      
                },
                
                series: [{
                    name: 'thdvolAB',
                    data: data.thdvolAB,
                    pointStart: 0,
                    color:'#66ccff'
                }, {
                    name: 'thdvolBC',
                    data: data.thdvolBC,
                    pointStart: 0,
                    color:'#ff3333'
                },
                {
                    name: 'thdvolCA',
                    data: data.thdvolCA,
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
        url: 'http://10.10.15.20:1880/thd1-DH-30d20s',
        complete: function(json) {
            data = JSON.parse(json.responseText);
    
            Highcharts.chart('chart2', {
                chart: {
                    backgroundColor:'rgba(255, 255, 255, 0.9)',
                    type: 'line',
                    zoomType: 'x'
                },
                title: {
                    text: 'LVMSB3-thd-VolU',
                    style: {
                        color: "#fff"
         
                     }
                },
                subtitle: {
                    text: 'Source: PM5350'
                },
                xAxis: {
                    categories: data.time
                },
                yAxis: {
                    title: {
                        text: '%'
                    },
                      
                },
                
                series: [{
                    name: 'thdvolAB',
                    data: data.thdvolAB,
                    pointStart: 0,
                    color:'#66ccff'
                }, {
                    name: 'thdvolBC',
                    data: data.thdvolBC,
                    pointStart: 0,
                    color:'#ff3333'
                },
                {
                    name: 'thdvolCA',
                    data: data.thdvolCA,
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
        url: 'http://10.10.15.20:1880/thd1-DH-6h20s',
        complete: function(json) {
            data = JSON.parse(json.responseText);
    
            Highcharts.chart('chart3', {
                chart: {
                    backgroundColor:'rgba(255, 255, 255, 0.9)',
                    type: 'line',
                    zoomType: 'x'
                },
                title: {
                    text: 'LVMSB3-thd-VolV',
                    style: {
                        color: "#fff"
         
                     }
                },
                subtitle: {
                    text: 'Source: PM5350'
                },
                xAxis: {
                    categories: data.time
                },
                yAxis: {
                    title: {
                        text: '%'
                    },
                      
                },
                
                series: [{
                    name: 'thdvolAN',
                    data: data.thdvolAN,
                    pointStart: 0,
                    color:'#66ccff'
                }, {
                    name: 'thdvolBN',
                    data: data.thdvolBN,
                    pointStart: 0,
                    color:'#ff3333'
                },
                {
                    name: 'thdvolCN',
                    data: data.thdvolCN,
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
        url: 'http://10.10.15.20:1880/thd1-DH-24h20s',
        complete: function(json) {
            data = JSON.parse(json.responseText);
    
            Highcharts.chart('chart3', {
                chart: {
                    backgroundColor:'rgba(255, 255, 255, 0.9)',
                    type: 'line',
                    zoomType: 'x'
                },
                title: {
                    text: 'LVMSB3-thd-VolV',
                    style: {
                        color: "#fff"
         
                     }
                },
                subtitle: {
                    text: 'Source: PM5350'
                },
                xAxis: {
                    categories: data.time
                },
                yAxis: {
                    title: {
                        text: '%'
                    },
                      
                },
                
                series: [{
                    name: 'thdvolAN',
                    data: data.thdvolAN,
                    pointStart: 0,
                    color:'#66ccff'
                }, {
                    name: 'thdvolBN',
                    data: data.thdvolBN,
                    pointStart: 0,
                    color:'#ff3333'
                },
                {
                    name: 'thdvolCN',
                    data: data.thdvolCN,
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
        url: 'http://10.10.15.20:1880/thd1-DH-7d20s',
        complete: function(json) {
            data = JSON.parse(json.responseText);
    
            Highcharts.chart('chart3', {
                chart: {
                    backgroundColor:'rgba(255, 255, 255, 0.9)',
                    type: 'line',
                    zoomType: 'x'
                },
                title: {
                    text: 'LVMSB3-thd-VolV',
                    style: {
                        color: "#fff"
         
                     }
                },
                subtitle: {
                    text: 'Source: PM5350'
                },
                xAxis: {
                    categories: data.time
                },
                yAxis: {
                    title: {
                        text: '%'
                    },
                      
                },
                
                series: [{
                    name: 'thdvolAN',
                    data: data.thdvolAN,
                    pointStart: 0,
                    color:'#66ccff'
                }, {
                    name: 'thdvolBN',
                    data: data.thdvolBN,
                    pointStart: 0,
                    color:'#ff3333'
                },
                {
                    name: 'thdvolCN',
                    data: data.thdvolCN,
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
        url: 'http://10.10.15.20:1880/thd1-DH-30d20s',
        complete: function(json) {
            data = JSON.parse(json.responseText);
    
            Highcharts.chart('chart3', {
                chart: {
                    backgroundColor:'rgba(255, 255, 255, 0.9)',
                    type: 'line',
                    zoomType: 'x'
                },
                title: {
                    text: 'LVMSB3-thd-VolV',
                    style: {
                        color: "#fff"
         
                     }
                },
                subtitle: {
                    text: 'Source: PM5350'
                },
                xAxis: {
                    categories: data.time
                },
                yAxis: {
                    title: {
                        text: '%'
                    },
                      
                },
                
                series: [{
                    name: 'thdvolAN',
                    data: data.thdvolAN,
                    pointStart: 0,
                    color:'#66ccff'
                }, {
                    name: 'thdvolBN',
                    data: data.thdvolBN,
                    pointStart: 0,
                    color:'#ff3333'
                },
                {
                    name: 'thdvolCN',
                    data: data.thdvolCN,
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

  