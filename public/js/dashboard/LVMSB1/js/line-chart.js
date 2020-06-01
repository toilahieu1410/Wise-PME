$("#list-1").on('change', function() {
  var selVal = $('#list-1').val();
  if (selVal == "time-1") {
    $.ajax({
      url: 'http://10.10.15.20:1880/voltages87-6h',
      complete: function(json) {
        data = JSON.parse(json.responseText);
  
        Highcharts.chart('chart1', {
          chart: {
            backgroundColor:'rgba(255, 255, 255, 0.9)',
              type: 'line',
              zoomType: 'x'
          },
          title: {
              text: 'LVMSB1-Vol-U',
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
                  text: 'Vol'
              },
            
          },
          series: [{
              name: 'VolAB',
              data: data.VolAB,
               pointStart: 0,
               color:'#66ccff'
          }, {
              name: 'VolBC',
              data: data.VolBC,
              pointStart: 0,
              color:'#ff3333'
          },
        {
              name: 'VolCA',
              data: data.VolCA,
              pointStart: 0,
              color:'yellow'
          },
        {
              name: 'VolLL',
              data: data.VolLL,
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
      url: 'http://10.10.15.20:1880/voltages87-24h',
      complete: function(json) {
        data = JSON.parse(json.responseText);
  
        Highcharts.chart('chart1', {
          chart: {
            backgroundColor:'rgba(255, 255, 255, 0.9)',
              type: 'line',
              zoomType: 'x'
          },
          title: {
              text: 'LVMSB1-Vol-U',
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
                  text: 'Vol'
              },
            
          },
          series: [{
              name: 'VolAB',
              data: data.VolAB,
               pointStart: 0,
               color:'#66ccff',
          }, {
              name: 'VolBC',
              data: data.VolBC,
              pointStart: 0,
              color:'#ff3333',
          },
        {
              name: 'VolCA',
              data: data.VolCA,
              pointStart: 0,
              color:'yellow',
          },
        {
              name: 'VolLL',
              data: data.VolLL,
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
      url: 'http://10.10.15.20:1880/voltages87-7d',
      complete: function(json) {
        data = JSON.parse(json.responseText);
  
        Highcharts.chart('chart1', {
          chart: {
            backgroundColor:'rgba(255, 255, 255, 0.9)',
              type: 'line',
              zoomType: 'x'
          },
          title: {
              text: 'LVMSB1-Vol-U',
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
                  text: 'Vol'
              },
            
          },
          series: [{
              name: 'VolAB',
              data: data.VolAB,
               pointStart: 0,
               color:'#66ccff',
          }, {
              name: 'VolBC',
              data: data.VolBC,
              pointStart: 0,
              color:'#ff3333',
          },
        {
              name: 'VolCA',
              data: data.VolCA,
              pointStart: 0,
              color:'yellow',
          },
        {
              name: 'VolLL',
              data: data.VolLL,
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
      url: 'http://10.10.15.20:1880/voltages87-30d',
      complete: function(json) {
        data = JSON.parse(json.responseText);
  
        Highcharts.chart('chart1', {
          chart: {
            backgroundColor:'rgba(255, 255, 255, 0.9)',
              type: 'line',
              zoomType: 'x'
          },
          title: {
              text: 'LVMSB1-Vol-U',
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
                  text: 'Vol'
              },
            
          },
          series: [{
              name: 'VolAB',
              data: data.VolAB,
               pointStart: 0,
               color:'#66ccff',
          }, {
              name: 'VolBC',
              data: data.VolBC,
              pointStart: 0,
              color:'#ff3333',
          },
        {
              name: 'VolCA',
              data: data.VolCA,
              pointStart: 0,
              color:'yellow',
          },
        {
              name: 'VolLL',
              data: data.VolLL,
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
        url: 'http://10.10.15.20:1880/voltages87-6h',
        complete: function(json) {
          data = JSON.parse(json.responseText);
    
          Highcharts.chart('chart2', {
        
            chart: {
              backgroundColor:'rgba(255, 255, 255, 0.9)',
                type: 'column',
                zoomType: 'x'
            },
            title: {
                text: 'LVMSB1-Vol-U',
                style: {
                    color: "#fff"
     
                 }
            },
            xAxis: {
                categories: data.time
              },
            yAxis: {
                tickInterval: 2,
                max:405,
                min:380,
                range:50, 
                
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
                color:'#66ccff',
                  
            }, {
                name: 'VolBC',
                data: data.VolBC,
                color:'#ff3333',
                
            },
            {
                name: 'VolCA',
                data: data.VolCA,
                color:'yellow',
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
        url: 'http://10.10.15.20:1880/voltages87-24h',
        complete: function(json) {
          data = JSON.parse(json.responseText);
    
          Highcharts.chart('chart2', {
        
            chart: {
              backgroundColor:'rgba(255, 255, 255, 0.9)',
                type: 'column',
                zoomType: 'x'
            },
            title: {
                text: 'LVMSB1-Vol-U',
                style: {
                    color: "#fff"
     
                 }
            },
            xAxis: {
                categories: data.time
              },
            yAxis: {
                tickInterval: 2,
                max:405,
                min:380,
                range:50, 
                
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
                color:'#66ccff',
                  
            }, {
                name: 'VolBC',
                data: data.VolBC,
                color:'#ff3333',
                
            },
            {
                name: 'VolCA',
                data: data.VolCA,
                color:'yellow',
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
        url: 'http://10.10.15.20:1880/voltages87-7d',
        complete: function(json) {
          data = JSON.parse(json.responseText);
    
          Highcharts.chart('chart2', {
        
            chart: {
              backgroundColor:'rgba(255, 255, 255, 0.9)',
                type: 'column',
                zoomType: 'x'
            },
            title: {
                text: 'LVMSB1-Vol-U',
                style: {
                    color: "#fff"
     
                 }
            },
            xAxis: {
                categories: data.time
              },
            yAxis: {
                tickInterval: 2,
                max:405,
                min:380,
                range:50, 
                
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
                color:'#66ccff',
                  
            }, {
                name: 'VolBC',
                data: data.VolBC,
                color:'#ff3333',
                
            },
            {
                name: 'VolCA',
                data: data.VolCA,
                color:'yellow',
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
        url: 'http://10.10.15.20:1880/voltages87-30d',
        complete: function(json) {
          data = JSON.parse(json.responseText);
    
          Highcharts.chart('chart2', {
        
            chart: {
              backgroundColor:'rgba(255, 255, 255, 0.9)',
                type: 'column',
                zoomType: 'x'
            },
            title: {
                text: 'LVMSB1-Vol-U',
                style: {
                    color: "#fff"
     
                 }
            },
            xAxis: {
                categories: data.time
              },
            yAxis: {
                tickInterval: 2,
                max:405,
                min:380,
                range:50, 
                
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
                color:'#66ccff',
                  
            }, {
                name: 'VolBC',
                data: data.VolBC,
                color:'#ff3333',
                
            },
            {
                name: 'VolCA',
                data: data.VolCA,
                color:'yellow',
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

$("#list-3").on('change', function() {
      var selVal = $('#list-3').val();
      if (selVal == "time-1") {
        $.ajax({
          url: 'http://10.10.15.20:1880/voltages87-6h',
          complete: function(json) {
            data = JSON.parse(json.responseText);
      
      
            Highcharts.chart('chart3', {
              chart: {
                backgroundColor:'rgba(255, 255, 255, 0.9)',
                  type: 'column',
                  zoomType: 'x'
              },
              title: {
                  text: 'LVMSB1-Vol-LL',
                  style: {
                      color: "#fff"
       
                   }
              },
                  xAxis: {
                  categories: data.time
              },
              yAxis: {
                  tickInterval: 2,
                  max:405,
                  min:370,
                  range:50, 
                  
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
                  pointStart: 0,
                  color:'yellow'
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
          url: 'http://10.10.15.20:1880/voltages87-24h',
          complete: function(json) {
            data = JSON.parse(json.responseText);
    
            Highcharts.chart('chart3', {
              chart: {
                backgroundColor:'rgba(255, 255, 255, 0.9)',
                  type: 'column',
                  zoomType: 'x'
              },
              title: {
                  text: 'LVMSB1-Vol-LL',
                  style: {
                      color: "#fff"
       
                   }
              },
                  xAxis: {
                  categories: data.time
              },
              yAxis: {
                  tickInterval: 2,
                  max:405,
                  min:370,
                  range:50, 
                  
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
                  pointStart: 0,
                  color:'yellow'
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
          url: 'http://10.10.15.20:1880/voltages87-7d',
          complete: function(json) {
            data = JSON.parse(json.responseText);
    
            Highcharts.chart('chart3', {
              chart: {
                backgroundColor:'rgba(255, 255, 255, 0.9)',
                  type: 'column',
                  zoomType: 'x'
              },
              title: {
                  text: 'LVMSB1-Vol-LL',
                  style: {
                      color: "#fff"
       
                   }
              },
                  xAxis: {
                  categories: data.time
              },
              yAxis: {
                  tickInterval: 2,
                  max:405,
                  min:370,
                  range:50, 
                  
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
                  pointStart: 0,
                  color:'yellow'
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
          url: 'http://10.10.15.20:1880/voltages87-30d',
          complete: function(json) {
            data = JSON.parse(json.responseText);
    
            Highcharts.chart('chart3', {
              chart: {
                backgroundColor:'rgba(255, 255, 255, 0.9)',
                  type: 'column',
                  zoomType: 'x'
              },
              title: {
                  text: 'LVMSB1-Vol-LL',
                  style: {
                      color: "#fff"
       
                   }
              },
                  xAxis: {
                  categories: data.time
              },
              yAxis: {
                  tickInterval: 2,
                  max:405,
                  min:370,
                  range:50, 
                  
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
                  pointStart: 0,
                  color:'yellow'
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

$("#list-4").on('change', function() {
  var selVal = $('#list-4').val();
  if (selVal == "time-1") {
    $.ajax({
      url: 'http://10.10.15.20:1880/voltages87-6h',
      complete: function(json) {
        data = JSON.parse(json.responseText);
  
        Highcharts.chart('chart4', {
          chart: {
            backgroundColor:'rgba(255, 255, 255, 0.9)',
              type: 'line',
              zoomType: 'x'
          },
          title: {
              text: 'LVMSB1-Vol-V',
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
                  text: 'Vol'
              },
                // 
          },
          
          series: [{
              name: 'VolAN',
              data: data.VolAN,
              pointStart: 0,
              color:'#66ccff',
          }, {
              name: 'VolBN',
              data: data.VolBN,
              pointStart: 0,
              color:'#ff3333',
          },
          {
              name: 'VolCN',
              data: data.VolCN,
              pointStart: 0,
              color:'yellow',
          },
          {
              name: 'VolLN',
              data: data.VolLN,
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
      url: 'http://10.10.15.20:1880/voltages87-24h',
      complete: function(json) {
        data = JSON.parse(json.responseText);
  
        Highcharts.chart('chart4', {
          chart: {
            backgroundColor:'rgba(255, 255, 255, 0.9)',
              type: 'line',
              zoomType: 'x'
          },
          title: {
              text: 'LVMSB1-Vol-V',
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
                  text: 'Vol'
              },
                
          },
          
         series: [{
              name: 'VolAN',
              data: data.VolAN,
              pointStart: 0,
              color:'#66ccff',
          }, {
              name: 'VolBN',
              data: data.VolBN,
              pointStart: 0,
              color:'#ff3333',
          },
          {
              name: 'VolCN',
              data: data.VolCN,
              pointStart: 0,
              color:'yellow',
          },
          {
              name: 'VolLN',
              data: data.VolLN,
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
      url: 'http://10.10.15.20:1880/voltages87-7d',
      complete: function(json) {
        data = JSON.parse(json.responseText);
  
        Highcharts.chart('chart4', {
          chart: {
            backgroundColor:'rgba(255, 255, 255, 0.9)',
              type: 'line',
              zoomType: 'x'
          },
          title: {
              text: 'LVMSB1-Vol-V',
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
                  text: 'Vol'
              },
                
          },
          
         series: [{
              name: 'VolAN',
              data: data.VolAN,
              pointStart: 0,
              color:'#66ccff',
          }, {
              name: 'VolBN',
              data: data.VolBN,
              pointStart: 0,
              color:'#ff3333',
          },
          {
              name: 'VolCN',
              data: data.VolCN,
              pointStart: 0,
              color:'yellow',
          },
          {
              name: 'VolLN',
              data: data.VolLN,
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
      url: 'http://10.10.15.20:1880/voltages87-30d',
      complete: function(json) {
        data = JSON.parse(json.responseText);
  
        Highcharts.chart('chart4', {
          chart: {
            backgroundColor:'rgba(255, 255, 255, 0.9)',
              type: 'line',
              zoomType: 'x'
          },
          title: {
              text: 'LVMSB1-Vol-V',
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
                  text: 'Vol'
              },
                
          },
          
         series: [{
              name: 'VolAN',
              data: data.VolAN,
              pointStart: 0,
              color:'#66ccff',
          }, {
              name: 'VolBN',
              data: data.VolBN,
              pointStart: 0,
              color:'#ff3333',
          },
          {
              name: 'VolCN',
              data: data.VolCN,
              pointStart: 0,
              color:'yellow',
          },
          {
              name: 'VolLN',
              data: data.VolLN,
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

$("#list-5").on('change', function() {
  var selVal = $('#list-5').val();
  if (selVal == "time-1") {
    $.ajax({
      url: 'http://10.10.15.20:1880/voltages87-6h',
      complete: function(json) {
        data = JSON.parse(json.responseText);
  
        Highcharts.chart('chart5', {
          chart: {
            backgroundColor:'rgba(255, 255, 255, 0.9)',
              type: 'column',
              zoomType: 'x'
          },
          title: {
              text: 'LVMSB1-Vol-V',
              style: {
                  color: "#fff"
   
               }
          },
              xAxis: {
              categories: data.time
          },
          yAxis: {
              tickInterval: 5,
              max:235,
              min:222,
                
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
              color:'#66ccff',

          }, {
              name: 'VolBN',
              data: data.VolBN,
              color:'#ff3333',

          },
          {
              name: 'VolCN',
              data: data.VolCN,
              color:'yellow',

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
      url: 'http://10.10.15.20:1880/voltages87-24h',
      complete: function(json) {
        data = JSON.parse(json.responseText);
        Highcharts.chart('chart5', {
          chart: {
            backgroundColor:'rgba(255, 255, 255, 0.9)',
              type: 'column',
              zoomType: 'x'
          },
          title: {
              text: 'LVMSB1-Vol-V',
              style: {
                  color: "#fff"
   
               }
          },
              xAxis: {
              categories: data.time
          },
          yAxis: {
              tickInterval: 5,
              max:235,
              min:222,
                
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
              color:'#66ccff',

          }, {
              name: 'VolBN',
              data: data.VolBN,
              color:'#ff3333',

          },
          {
              name: 'VolCN',
              data: data.VolCN,
              color:'yellow',

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
      url: 'http://10.10.15.20:1880/voltages87-7d',
      complete: function(json) {
        data = JSON.parse(json.responseText);
  
        Highcharts.chart('chart5', {
          chart: {
            backgroundColor:'rgba(255, 255, 255, 0.9)',
              type: 'column',
              zoomType: 'x'
          },
          title: {
              text: 'LVMSB1-Vol-V',
              style: {
                  color: "#fff"
   
               }
          },
              xAxis: {
              categories: data.time
          },
          yAxis: {
              tickInterval: 5,
              max:235,
              min:222,
                
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
              color:'#66ccff',

          }, {
              name: 'VolBN',
              data: data.VolBN,
              color:'#ff3333',

          },
          {
              name: 'VolCN',
              data: data.VolCN,
              color:'yellow',

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
      url: 'http://10.10.15.20:1880/voltages87-30d',
      complete: function(json) {
        data = JSON.parse(json.responseText);
  
        Highcharts.chart('chart5', {
          chart: {
            backgroundColor:'rgba(255, 255, 255, 0.9)',
              type: 'column',
              zoomType: 'x'
          },
          title: {
              text: 'LVMSB1-Vol-V',
              style: {
                  color: "#fff"
   
               }
          },
              xAxis: {
              categories: data.time
          },
          yAxis: {
              tickInterval: 5,
              max:235,
              min:222,
                
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
              color:'#66ccff',

          }, {
              name: 'VolBN',
              data: data.VolBN,
              color:'#ff3333',

          },
          {
              name: 'VolCN',
              data: data.VolCN,
              color:'yellow',

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

$("#list-6").on('change', function() {
  var selVal = $('#list-6').val();
  if (selVal == "time-1") {
    $.ajax({
      url: 'http://10.10.15.20:1880/voltages87-6h',
      complete: function(json) {
        data = JSON.parse(json.responseText);
  
  
   
        Highcharts.chart('chart6', {
          chart: {
            backgroundColor:'rgba(255, 255, 255, 0.9)',
              type: 'column',
              zoomType: 'x'
          },
          title: {
              text: 'LVMSB1-Vol-LN',
              style: {
                  color: "#fff"
   
               }
          },
             xAxis: {
              categories: data.time
          },
          yAxis: {
              tickInterval: 5,
              max:235,
              min:222,
               
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
              pointStart: 0,
              color:'yellow'
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
      url: 'http://10.10.15.20:1880/voltages87-24h',
      complete: function(json) {
        data = JSON.parse(json.responseText);

     
        Highcharts.chart('chart6', {
          chart: {
            backgroundColor:'rgba(255, 255, 255, 0.9)',
              type: 'column',
              zoomType: 'x'
          },
          title: {
              text: 'LVMSB1-Vol-LN',
              style: {
                  color: "#fff"
   
               }
          },
             xAxis: {
              categories: data.time
          },
          yAxis: {
              tickInterval: 5,
              max:235,
              min:222,
               
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
              pointStart: 0,
              color:'yellow'
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
      url: 'http://10.10.15.20:1880/voltages87-7d',
      complete: function(json) {
        data = JSON.parse(json.responseText);

    
        Highcharts.chart('chart6', {
          chart: {
            backgroundColor:'rgba(255, 255, 255, 0.9)',
              type: 'column',
              zoomType: 'x'
          },
          title: {
              text: 'LVMSB1-Vol-LN',
              style: {
                  color: "#fff"
   
               }
          },
             xAxis: {
              categories: data.time
          },
          yAxis: {
              tickInterval: 5,
              max:235,
              min:222,
               
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
              pointStart: 0,
              color:'yellow'
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
      url: 'http://10.10.15.20:1880/voltages87-30d',
      complete: function(json) {
        data = JSON.parse(json.responseText);

     
        Highcharts.chart('chart6', {
          chart: {
            backgroundColor:'rgba(255, 255, 255, 0.9)',
              type: 'column',
              zoomType: 'x'
          },
          title: {
              text: 'LVMSB1-Vol-LN',
              style: {
                  color: "#fff"
   
               }
          },
             xAxis: {
              categories: data.time
          },
          yAxis: {
              tickInterval: 5,
              max:235,
              min:222,
               
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
              pointStart: 0,
              color:'yellow'
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