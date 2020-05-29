$("#list-1").on('change', function() {
    var selVal = $('#list-1').val();
    if (selVal == "time-1") {
      $.ajax({
        url: 'http://10.10.15.20:1880/THD-972-6h',
        complete: function(json) {
          data = JSON.parse(json.responseText);
    
          Highcharts.chart('chart1', {
            chart: {
                backgroundColor:'rgba(255, 255, 255, 0.9)',
                type: 'line',
                zoomType: 'x'
            },
            title: {
                text: 'LVMSB2-THD-Current',
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
                name: 'THDcurrentA',
                data: data.THDcurrentA,
                 pointStart: 0,
                 color:'#66ccff',
            }, {
                name: 'THDcurrentB',
                data: data.THDcurrentB,
                pointStart: 0,
                color:'#ff3333',
            },
          {
                name: 'THDcurrentC',
                data: data.THDcurrentC,
                pointStart: 0,
                color:'yellow',
            },
          {
                name: 'THDcurrentN',
                data: data.THDcurrentN,
                pointStart: 0,
                color:'#70db70',
            }]
        
        
        });
    
        },
        error: function() {
          console.log('there was an error!');
        }
      });
     } else if (selVal == "time-2") {
      $.ajax({
        url: 'http://10.10.15.20:1880/THD-972-24h',
        complete: function(json) {
          data = JSON.parse(json.responseText);
    
          Highcharts.chart('chart1', {
            chart: {
                backgroundColor:'rgba(255, 255, 255, 0.9)',
                type: 'line',
                zoomType: 'x'
            },
            title: {
                text: 'LVMSB2-THD-Current',
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
                name: 'THDcurrentA',
                data: data.THDcurrentA,
                 pointStart: 0,
                 color:'#66ccff',
            }, {
                name: 'THDcurrentB',
                data: data.THDcurrentB,
                pointStart: 0,
                color:'#ff3333',
            },
          {
                name: 'THDcurrentC',
                data: data.THDcurrentC,
                pointStart: 0,
                color:'yellow',
            },
          {
                name: 'THDcurrentN',
                data: data.THDcurrentN,
                pointStart: 0,
                color:'#70db70',
            }]
        
        
        });
    
        },
        error: function() {
          console.log('there was an error!');
        }
      });
     }  else if (selVal == "time-3") {
      $.ajax({
        url: 'http://10.10.15.20:1880/THD-972-7d',
        complete: function(json) {
          data = JSON.parse(json.responseText);
    
          Highcharts.chart('chart1', {
            chart: {
                backgroundColor:'rgba(255, 255, 255, 0.9)',
                type: 'line',
                zoomType: 'x'
            },
            title: {
                text: 'LVMSB2-THD-Current',
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
                name: 'THDcurrentA',
                data: data.THDcurrentA,
                 pointStart: 0,
                 color:'#66ccff',
            }, {
                name: 'THDcurrentB',
                data: data.THDcurrentB,
                pointStart: 0,
                color:'#ff3333',
            },
          {
                name: 'THDcurrentC',
                data: data.THDcurrentC,
                pointStart: 0,
                color:'yellow',
            },
          {
                name: 'THDcurrentN',
                data: data.THDcurrentN,
                pointStart: 0,
                color:'#70db70',
            }]
        
        
        });
    
        },
        error: function() {
          console.log('there was an error!');
        }
      });
     }  else if (selVal == "time-4") {
      $.ajax({
        url: 'http://10.10.15.20:1880/THD-972-30d',
        complete: function(json) {
          data = JSON.parse(json.responseText);
    
          Highcharts.chart('chart1', {
            chart: {
                backgroundColor:'rgba(255, 255, 255, 0.9)',
                type: 'line',
                zoomType: 'x'
            },
            title: {
                text: 'LVMSB2-THD-Current',
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
                name: 'THDcurrentA',
                data: data.THDcurrentA,
                 pointStart: 0,
                 color:'#66ccff',
            }, {
                name: 'THDcurrentB',
                data: data.THDcurrentB,
                pointStart: 0,
                color:'#ff3333',
            },
          {
                name: 'THDcurrentC',
                data: data.THDcurrentC,
                pointStart: 0,
                color:'yellow',
            },
          {
                name: 'THDcurrentN',
                data: data.THDcurrentN,
                pointStart: 0,
                color:'#70db70',
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
        url: 'http://10.10.15.20:1880/THD-972-6h',
        complete: function(json) {
            data = JSON.parse(json.responseText);
            Highcharts.chart('chart2', {
            chart: {
                backgroundColor:'rgba(255, 255, 255, 0.9)',
                type: 'line',
                zoomType: 'x'
            },
            title: {
                text: 'LVMSB2-THD-VolU',
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
                name: 'THDvolAB',
                data: data.THDvolAB,
                pointStart: 0,
                color:'#66ccff',
            }, {
                name: 'THDvolBC',
                data: data.THDvolBC,
                pointStart: 0,
                color:'#ff3333',
            },
            {
                name: 'THDvolCA',
                data: data.THDvolCA,
                pointStart: 0,
                color:'yellow',
            }]
        });
    
        },
        error: function() {
            console.log('there was an error!');
        }
        });
        } else if (selVal == "time-2") {
        $.ajax({
        url: 'http://10.10.15.20:1880/THD-972-24h',
        complete: function(json) {
            data = JSON.parse(json.responseText);
    
            Highcharts.chart('chart2', {
            chart: {
                backgroundColor:'rgba(255, 255, 255, 0.9)',
                type: 'line',
                zoomType: 'x'
            },
            title: {
                text: 'LVMSB2-THD-VolU',
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
                name: 'THDvolAB',
                data: data.THDvolAB,
                pointStart: 0,
                color:'#66ccff',
            }, {
                name: 'THDvolBC',
                data: data.THDvolBC,
                pointStart: 0,
                color:'#ff3333',
            },
            {
                name: 'THDvolCA',
                data: data.THDvolCA,
                pointStart: 0,
                color:'yellow',
            }]
        });
    
        },
        error: function() {
            console.log('there was an error!');
        }
        });
        }  else if (selVal == "time-3") {
        $.ajax({
        url: 'http://10.10.15.20:1880/THD-972-7d',
        complete: function(json) {
            data = JSON.parse(json.responseText);
    
            Highcharts.chart('chart2', {
            chart: {
                backgroundColor:'rgba(255, 255, 255, 0.9)',
                type: 'line',
                zoomType: 'x'
            },
            title: {
                text: 'LVMSB2-THD-VolU',
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
                name: 'THDvolAB',
                data: data.THDvolAB,
                pointStart: 0,
                color:'#66ccff',
            }, {
                name: 'THDvolBC',
                data: data.THDvolBC,
                pointStart: 0,
                color:'#ff3333',
            },
            {
                name: 'THDvolCA',
                data: data.THDvolCA,
                pointStart: 0,
                color:'yellow',
            }]
        });
    
        },
        error: function() {
            console.log('there was an error!');
        }
        });
        }  else if (selVal == "time-4") {
        $.ajax({
        url: 'http://10.10.15.20:1880/THD-972-30d',
        complete: function(json) {
            data = JSON.parse(json.responseText);
    
            Highcharts.chart('chart2', {
            chart: {
                backgroundColor:'rgba(255, 255, 255, 0.9)',
                type: 'line',
                zoomType: 'x'
            },
            title: {
                text: 'LVMSB2-THD-VolU',
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
                name: 'THDvolAB',
                data: data.THDvolAB,
                pointStart: 0,
                color:'#66ccff',
            }, {
                name: 'THDvolBC',
                data: data.THDvolBC,
                pointStart: 0,
                color:'#ff3333',
            },
            {
                name: 'THDvolCA',
                data: data.THDvolCA,
                pointStart: 0,
                color:'yellow',
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
        url: 'http://10.10.15.20:1880/THD-972-6h',
        complete: function(json) {
            data = JSON.parse(json.responseText);
    
            Highcharts.chart('chart3', {
                chart: {
                    backgroundColor:'rgba(255, 255, 255, 0.9)',
                    type: 'line',
                    zoomType: 'x'
                },
                title: {
                    text: 'LVMSB2-THD-VolV',
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
                    name: 'THDvolAN',
                    data: data.THDvolAN,
                    pointStart: 0,
                    color:'#66ccff',
                }, {
                    name: 'THDvolBN',
                    data: data.THDvolBN,
                    pointStart: 0,
                    color:'#ff3333',
                },
                {
                    name: 'THDvolCN',
                    data: data.THDvolCN,
                    pointStart: 0,
                    color:'#70db70',
                }]
            });
    
        },
        error: function() {
            console.log('there was an error!');
        }
        });
        } else if (selVal == "time-2") {
        $.ajax({
        url: 'http://10.10.15.20:1880/THD-972-24h',
        complete: function(json) {
            data = JSON.parse(json.responseText);
    
            Highcharts.chart('chart3', {
                chart: {
                    backgroundColor:'rgba(255, 255, 255, 0.9)',
                    type: 'line',
                    zoomType: 'x'
                },
                title: {
                    text: 'LVMSB2-THD-VolV',
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
                    name: 'THDvolAN',
                    data: data.THDvolAN,
                    pointStart: 0,
                    color:'#66ccff',
                }, {
                    name: 'THDvolBN',
                    data: data.THDvolBN,
                    pointStart: 0,
                    color:'#ff3333',
                },
                {
                    name: 'THDvolCN',
                    data: data.THDvolCN,
                    pointStart: 0,
                    color:'#70db70',
                }]
            });
    
        },
        error: function() {
            console.log('there was an error!');
        }
        });
        }  else if (selVal == "time-3") {
        $.ajax({
        url: 'http://10.10.15.20:1880/THD-972-7d',
        complete: function(json) {
            data = JSON.parse(json.responseText);
    
            Highcharts.chart('chart3', {
                chart: {
                    backgroundColor:'rgba(255, 255, 255, 0.9)',
                    type: 'line',
                    zoomType: 'x'
                },
                title: {
                    text: 'LVMSB2-THD-VolV',
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
                    name: 'THDvolAN',
                    data: data.THDvolAN,
                    pointStart: 0,
                    color:'#66ccff',
                }, {
                    name: 'THDvolBN',
                    data: data.THDvolBN,
                    pointStart: 0,
                    color:'#ff3333',
                },
                {
                    name: 'THDvolCN',
                    data: data.THDvolCN,
                    pointStart: 0,
                    color:'#70db70',
                }]
            });
    
        },
        error: function() {
            console.log('there was an error!');
        }
        });
        }  else if (selVal == "time-4") {
        $.ajax({
        url: 'http://10.10.15.20:1880/THD-972-30d',
        complete: function(json) {
            data = JSON.parse(json.responseText);
    
            Highcharts.chart('chart3', {
                chart: {
                    backgroundColor:'rgba(255, 255, 255, 0.9)',
                    type: 'line',
                    zoomType: 'x'
                },
                title: {
                    text: 'LVMSB2-THD-VolV',
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
                    name: 'THDvolAN',
                    data: data.THDvolAN,
                    pointStart: 0,
                    color:'#66ccff',
                }, {
                    name: 'THDvolBN',
                    data: data.THDvolBN,
                    pointStart: 0,
                    color:'#ff3333',
                },
                {
                    name: 'THDvolCN',
                    data: data.THDvolCN,
                    pointStart: 0,
                    color:'#70db70',
                }]
            });
    
        },
        error: function() {
            console.log('there was an error!');
        }
        });
        } 
        
    
    });

  