$("#list-1").on('change', function() {
  var selVal = $('#list-1').val();
  if (selVal == "time-1") {
    $.ajax({
      url: 'http://10.10.15.20:1880/powers87-6h20s',
      complete: function(json) {
        data = JSON.parse(json.responseText);
  
        Highcharts.chart('chart1', {
          chart: {
            backgroundColor:'rgba(255, 255, 255, 0.9)',
              type: 'line',
              zoomType: 'x'
          },
          title: {
              text: 'LVMSB1-Power'
          },
          subtitle: {
              text: 'Source: PM5350'
          },
          xAxis: {
            categories: data.time
          },
          yAxis: {
              title: {
                  text: 'kW'
              },
            
          },
          series: [{
              name: 'PowerA',
              data: data.powerA,
               pointStart: 0,
               color:'#66ccff'
          }, {
              name: 'PowerB',
              data: data.powerB,
              pointStart: 0,
              color:'#ff3333'
          },
        {
              name: 'PowerC',
              data: data.powerC,
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
      url: 'http://10.10.15.20:1880/powers87-24h20s',
      complete: function(json) {
        data = JSON.parse(json.responseText);
  
        Highcharts.chart('chart1', {
          chart: {
            backgroundColor:'rgba(255, 255, 255, 0.9)',
              type: 'line',
              zoomType: 'x'
          },
          title: {
              text: 'LVMSB1-Power'
          },
          subtitle: {
              text: 'Source: PM5350'
          },
          xAxis: {
            categories: data.time
          },
          yAxis: {
              title: {
                  text: 'kW'
              },
            
          },
          series: [{
              name: 'PowerA',
              data: data.powerA,
               pointStart: 0,
               color:'#66ccff'
          }, {
              name: 'PowerB',
              data: data.powerB,
              pointStart: 0,
              color:'#ff3333'
          },
        {
              name: 'PowerC',
              data: data.powerC,
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
      url: 'http://10.10.15.20:1880/powers87-7d20s',
      complete: function(json) {
        data = JSON.parse(json.responseText);
  
        Highcharts.chart('chart1', {
          chart: {
            backgroundColor:'rgba(255, 255, 255, 0.9)',
              type: 'line',
              zoomType: 'x'
          },
          title: {
              text: 'LVMSB1-Power'
          },
          subtitle: {
              text: 'Source: PM5350'
          },
          xAxis: {
            categories: data.time
          },
          yAxis: {
              title: {
                  text: 'kW'
              },
            
          },
          series: [{
              name: 'PowerA',
              data: data.powerA,
               pointStart: 0,
               color:'#66ccff'
          }, {
              name: 'PowerB',
              data: data.powerB,
              pointStart: 0,
              color:'#ff3333'
          },
        {
              name: 'PowerC',
              data: data.powerC,
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
      url: 'http://10.10.15.20:1880/powers87-30d20s',
      complete: function(json) {
        data = JSON.parse(json.responseText);
  
        Highcharts.chart('chart1', {
          chart: {
            backgroundColor:'rgba(255, 255, 255, 0.9)',
              type: 'line',
              zoomType: 'x'
          },
          title: {
              text: 'LVMSB1-Power'
          },
          subtitle: {
              text: 'Source: PM5350'
          },
          xAxis: {
            categories: data.time
          },
          yAxis: {
              title: {
                  text: 'kW'
              },
            
          },
          series: [{
              name: 'PowerA',
              data: data.powerA,
               pointStart: 0,
               color:'#66ccff'
          }, {
              name: 'PowerB',
              data: data.powerB,
              pointStart: 0,
              color:'#ff3333'
          },
        {
              name: 'PowerC',
              data: data.powerC,
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
  $("#list-2").on('change', function() {
    var selVal = $('#list-2').val();
    if (selVal == "time-1") {
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
                    selected: true,
                    color:'#66ccff'
                }, {
                    name: 'PowerB',
                    y: data.percentB,
                    color:'#ff3333'
                }, {
                    name: 'PowerC',
                    y: data.percentC,
                    color:'yellow'
                }]
            }]
        });
  
    
        },
        error: function() {
          console.log('there was an error!');
        }
      });
     } else if (selVal == "time-2") {
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
                    selected: true,
                    color:'#66ccff'
                }, {
                    name: 'PowerB',
                    y: data.percentB,
                    color:'#ff3333'
                }, {
                    name: 'PowerC',
                    y: data.percentC,
                    color:'yellow'
                }]
            }]
        });
    
        },
        error: function() {
          console.log('there was an error!');
        }
      });
     }  else if (selVal == "time-3") {
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
                    selected: true,
                    color:'#66ccff'
                }, {
                    name: 'PowerB',
                    y: data.percentB,
                    color:'#ff3333'
                }, {
                    name: 'PowerC',
                    y: data.percentC,
                    color:'yellow'
                }]
            }]
        });
    
        },
        error: function() {
          console.log('there was an error!');
        }
      });
     }  else if (selVal == "time-4") {
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
                    selected: true,
                    color:'#66ccff'
                }, {
                    name: 'PowerB',
                    y: data.percentB,
                    color:'#ff3333'
                }, {
                    name: 'PowerC',
                    y: data.percentC,
                    color:'yellow'
                }]
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
        url: 'http://10.10.15.20:1880/powers87-6h20s',
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
        url: 'http://10.10.15.20:1880/powers87-24h20s',
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
        url: 'http://10.10.15.20:1880/powers87-7d20s',
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
        url: 'http://10.10.15.20:1880/powers87-30d20s',
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

    // $(function() {


    //   $.ajax({
    //     url: 'http://10.10.15.20:1880/last-powers87',
    //     complete: function(json) {
    //       data = JSON.parse(json.responseText);
          
    //       Highcharts.chart('chart2', {
    //           chart: {
    //               plotBackgroundColor: null,
    //               plotBorderWidth: null,
    //               plotShadow: false,
    //               type: 'pie'
    //           },
    //           title: {
    //               text: 'LVMSB1-Power'
    //           },
    //           tooltip: {
    //               pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    //           },
    //           accessibility: {
    //               point: {
    //                   valueSuffix: '%'
    //               }
    //           },
    //           plotOptions: {
    //               pie: {
    //                   allowPointSelect: true,
    //                   cursor: 'pointer',
    //                   dataLabels: {
    //                       enabled: true,
    //                       format: '<b>{point.name}</b>: {point.percentage:.1f} %'
    //                   }
    //               }
    //           },
    //           series: [{
    //               name: 'Power',
    //               colorByPoint: true,
    //               data: [{
    //                   name: 'PowerA',
    //                   y: data.percentA,
    //                   sliced: true,
    //                   selected: true
    //               }, {
    //                   name: 'PowerB',
    //                   y: data.percentB
    //               }, {
    //                   name: 'PowerC',
    //                   y: data.percentC
    //               }]
    //           }]
    //       });
             
  
    //       Highcharts.chart('chart3', {
    //           chart: {
    //               type: 'column',
    //               zoomType: 'x'
    //           },
    //           title: {
    //               text: 'Vol-LL'
    //           },
    //              xAxis: {
    //               categories: data.time
    //           },
    //           yAxis: {
    //               tickInterval: 2,
    //               max:400,
    //               min:370,
    //               range:50, 
    //               
    //               title: {
    //                   text: 'Vol'
    //               }
          
    //           },
    //           tooltip: {
    //               pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y}</b> <br/>',
    //               shared: true
    //           },
    //           plotOptions: {
    //                    line: {
    //                   dataLabels: {
    //                       enabled: true
    //                   },
    //                   enableMouseTracking: false
    //               },
               
    //           },
    //          series: [{
    //               name: 'VolLL',
    //               data: data.VolLL,
    //                    pointStart: 0,color:'orange'
    //           }, 
    //           ]
    //       });
  
  
    //       Highcharts.chart('chart6', {
    //           chart: {
    //               type: 'column',
    //               zoomType: 'x'
    //           },
    //           title: {
    //               text: 'Vol-LN'
    //           },
    //              xAxis: {
    //               categories: data.time
    //           },
    //           yAxis: {
    //               tickInterval: 5,
    //               max:235,
    //               min:222,
    //                
    //               title: {
    //                   text: 'Vol'
    //               }
          
    //           },
    //           plotOptions: {
    //                    line: {
    //                   dataLabels: {
    //                       enabled: true
    //                   },
    //                   enableMouseTracking: false
    //               },
               
    //           },
    //          series: [{
    //               name: 'VolLN',
    //               data: data.VolLN,
    //                    pointStart: 0,color:'orange'
    //           }, 
    //           ]
    //       });
    
    //     },
    //     error: function() {
    //       console.log('there was an error!');
    //     }
    //   });
    
    // });
    