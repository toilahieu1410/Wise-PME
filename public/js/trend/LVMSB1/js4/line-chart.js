$("#list-1").on('change', function() {
  var selVal = $('#list-1').val();
  if (selVal == "time-1") {
    $.ajax({
      url: 'http://10.10.15.20:1880/frequency87-6h20s',
      complete: function(json) {
        data = JSON.parse(json.responseText);
  
        Highcharts.chart('chart1', {
          chart: {
            backgroundColor:'rgba(255, 255, 255, 0.9)',
              type: 'line',
              zoomType: 'x'
          },
          title: {
              text: 'LVMSB1-Frequency'
          },
          subtitle: {
              text: 'Source: PM5350'
          },
          xAxis: {
            categories: data.time
          },
          yAxis: {
              title: {
                  text: 'Hz'
              },
            
          },
          series: [{
              name: 'Frequency',
              data: data.frequency87,
               pointStart: 0
          }]
      
      
      });
  
      },
      error: function() {
        console.log('there was an error!');
      }
    });
   } else if (selVal == "time-2") {
    $.ajax({
      url: 'http://10.10.15.20:1880/frequency87-24h20s',
      complete: function(json) {
        data = JSON.parse(json.responseText);
  
        Highcharts.chart('chart1', {
          chart: {
            backgroundColor:'rgba(255, 255, 255, 0.9)',
              type: 'line',
              zoomType: 'x'
          },
          title: {
              text: 'LVMSB1-Frequency'
          },
          subtitle: {
              text: 'Source: PM5350'
          },
          xAxis: {
            categories: data.time
          },
          yAxis: {
              title: {
                  text: 'Hz'
              },
            
          },
          series: [{
              name: 'Frequency',
              data: data.frequency87,
               pointStart: 0
          }]
      
      
      });
  
      },
      error: function() {
        console.log('there was an error!');
      }
    });
   }  else if (selVal == "time-3") {
    $.ajax({
      url: 'http://10.10.15.20:1880/frequency87-7d20s',
      complete: function(json) {
        data = JSON.parse(json.responseText);
  
        Highcharts.chart('chart1', {
          chart: {
            backgroundColor:'rgba(255, 255, 255, 0.9)',
              type: 'line',
              zoomType: 'x'
          },
          title: {
              text: 'LVMSB1-Frequency'
          },
          subtitle: {
              text: 'Source: PM5350'
          },
          xAxis: {
            categories: data.time
          },
          yAxis: {
              title: {
                  text: 'Hz'
              },
            
          },
          series: [{
              name: 'Frequency',
              data: data.frequency87,
               pointStart: 0
          }]
      
      
      });
  
      },
      error: function() {
        console.log('there was an error!');
      }
    });
   }  else if (selVal == "time-4") {
    $.ajax({
      url: 'http://10.10.15.20:1880/frequency87-30d20s',
      complete: function(json) {
        data = JSON.parse(json.responseText);
  
        Highcharts.chart('chart1', {
          chart: {
            backgroundColor:'rgba(255, 255, 255, 0.9)',
              type: 'line',
              zoomType: 'x'
          },
          title: {
              text: 'LVMSB1-Frequency'
          },
          subtitle: {
              text: 'Source: PM5350'
          },
          xAxis: {
            categories: data.time
          },
          yAxis: {
              title: {
                  text: 'Hz'
              },
            
          },
          series: [{
              name: 'Frequency',
              data: data.frequency87,
               pointStart: 0
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
        url: 'http://10.10.15.20:1880/frequency87-6h20s',
        complete: function(json) {
          data = JSON.parse(json.responseText);
    
          Highcharts.chart('chart3', {
            chart: {
              backgroundColor:'rgba(255, 255, 255, 0.9)',
                type: 'line',
                zoomType: 'x'
            },
            title: {
                text: 'Vol V'
            },
            subtitle: {
                text: 'Source: PM5350'
            },
            xAxis: {
                categories: data.time
            },
            yAxis: {
                title: {
                    text: 'Vol'
                },
                  
            },
            
            series: [{
                name: 'VolAN',
                data: data.VolAN,
                     pointStart: 0
            }, {
                name: 'VolBN',
                data: data.VolBN,
                    pointStart: 0
            },
            {
                name: 'VolCN',
                data: data.VolCN,
                            pointStart: 0
            },
            {
                name: 'VolLN',
              data: data.VolLN,
                      pointStart: 0
            }]
        });
    
        },
        error: function() {
          console.log('there was an error!');
        }
      });
     } else if (selVal == "time-2") {
      $.ajax({
        url: 'http://10.10.15.20:1880/frequency87-24h20s',
        complete: function(json) {
          data = JSON.parse(json.responseText);
          Highcharts.chart('chart3', {
            chart: {
              backgroundColor:'rgba(255, 255, 255, 0.9)',
                type: 'line',
                zoomType: 'x'
            },
            title: {
                text: 'Vol V'
            },
            subtitle: {
                text: 'Source: PM5350'
            },
            xAxis: {
                categories: data.time
            },
            yAxis: {
                title: {
                    text: 'Vol'
                },
                  
            },
            
            series: [{
                name: 'VolAN',
                data: data.VolAN,
                     pointStart: 0
            }, {
                name: 'VolBN',
                data: data.VolBN,
                    pointStart: 0
            },
            {
                name: 'VolCN',
                data: data.VolCN,
                            pointStart: 0
            },
            {
                name: 'VolLN',
              data: data.VolLN,
                      pointStart: 0
            }]
        });
    
        },
        error: function() {
          console.log('there was an error!');
        }
      });
     }  else if (selVal == "time-3") {
      $.ajax({
        url: 'http://10.10.15.20:1880/frequency87-7d20s',
        complete: function(json) {
          data = JSON.parse(json.responseText);
    
          Highcharts.chart('chart3', {
            chart: {
              backgroundColor:'rgba(255, 255, 255, 0.9)',
                type: 'line',
                zoomType: 'x'
            },
            title: {
                text: 'Vol V'
            },
            subtitle: {
                text: 'Source: PM5350'
            },
            xAxis: {
                categories: data.time
            },
            yAxis: {
                title: {
                    text: 'Vol'
                },
                  
            },
            
            series: [{
                name: 'VolAN',
                data: data.VolAN,
                     pointStart: 0
            }, {
                name: 'VolBN',
                data: data.VolBN,
                    pointStart: 0
            },
            {
                name: 'VolCN',
                data: data.VolCN,
                            pointStart: 0
            },
            {
                name: 'VolLN',
              data: data.VolLN,
                      pointStart: 0
            }]
        });
    
        },
        error: function() {
          console.log('there was an error!');
        }
      });
     }  else if (selVal == "time-4") {
      $.ajax({
        url: 'http://10.10.15.20:1880/frequency87-30d20s',
        complete: function(json) {
          data = JSON.parse(json.responseText);
    
          Highcharts.chart('chart3', {
            chart: {
              backgroundColor:'rgba(255, 255, 255, 0.9)',
                type: 'line',
                zoomType: 'x'
            },
            title: {
                text: 'Vol V'
            },
            subtitle: {
                text: 'Source: PM5350'
            },
            xAxis: {
                categories: data.time
            },
            yAxis: {
                title: {
                    text: 'Vol'
                },
                  
            },
            
            series: [{
                name: 'VolAN',
                data: data.VolAN,
                     pointStart: 0
            }, {
                name: 'VolBN',
                data: data.VolBN,
                    pointStart: 0
            },
            {
                name: 'VolCN',
                data: data.VolCN,
                            pointStart: 0
            },
            {
                name: 'VolLN',
              data: data.VolLN,
                      pointStart: 0
            }]
        });
    
        },
        error: function() {
          console.log('there was an error!');
        }
      });
     } 
     
    
    });
