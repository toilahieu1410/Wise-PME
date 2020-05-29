$(function() {


    $.ajax({
      url: 'http://10.10.15.20:1880/powers87-24h',
      complete: function(json) {
        data = JSON.parse(json.responseText);
        
        Highcharts.chart('chart4', {
            chart: {
                backgroundColor:'rgba(255, 255, 255, 0.9)',
                type: 'column',
                zoomType: 'x'
            },
            title: {
                text: 'So sánh năng lượng các pha - LVMSB1'
            },
            xAxis: {
                categories: data.time
            },
            yAxis: {
                min: 0,
                title: {
                    text: 'kW'
                },
                stackLabels: {
                    enabled: true,
                    style: {
                        fontWeight: 'bold',
                        color: ( // theme
                            Highcharts.defaultOptions.title.style &&
                            Highcharts.defaultOptions.title.style.color
                        ) || 'gray'
                    }
                }
            },
            legend: {
                align: 'right',
                x: -30,
                verticalAlign: 'top',
                y: 25,
                floating: true,
                backgroundColor:
                    Highcharts.defaultOptions.legend.backgroundColor || 'white',
                borderColor: '#CCC',
                borderWidth: 1,
                shadow: false
            },
            tooltip: {
                headerFormat: '<b>{point.x}</b><br/>',
                pointFormat: '{series.name}: {point.y}<br/>Total: {point.stackTotal}'
            },
            plotOptions: {
                column: {
                    stacking: 'normal',
                    dataLabels: {
                        enabled: true
                    }
                }
            },
            series: [{
                name: 'powerA',
                data: data.powerA
            }, {
                name: 'powerB',
                data: data.powerB
            }, {
                name: 'powerC',
                data: data.powerC
            }]
        });
  
      },
      error: function() {
        console.log('there was an error!');
      }
    });
  
  });

  $(function() {


    $.ajax({
      url: 'http://10.10.15.20:1880/powers972-24h',
      complete: function(json) {
        data = JSON.parse(json.responseText);
        
        Highcharts.chart('chart5', {
            chart: {
                backgroundColor:'rgba(255, 255, 255, 0.9)',
                type: 'column',
                zoomType: 'x'
            },
            title: {
                text: 'So sánh năng lượng các pha - LVMSB2'
            },
            xAxis: {
                categories: data.time
            },
            yAxis: {
                min: 0,
                title: {
                    text: 'kW'
                },
                stackLabels: {
                    enabled: true,
                    style: {
                        fontWeight: 'bold',
                        color: ( // theme
                            Highcharts.defaultOptions.title.style &&
                            Highcharts.defaultOptions.title.style.color
                        ) || 'gray'
                    }
                }
            },
            legend: {
                align: 'right',
                x: -30,
                verticalAlign: 'top',
                y: 25,
                floating: true,
                backgroundColor:
                    Highcharts.defaultOptions.legend.backgroundColor || 'white',
                borderColor: '#CCC',
                borderWidth: 1,
                shadow: false
            },
            tooltip: {
                headerFormat: '<b>{point.x}</b><br/>',
                pointFormat: '{series.name}: {point.y}<br/>Total: {point.stackTotal}'
            },
            plotOptions: {
                column: {
                    stacking: 'normal',
                    dataLabels: {
                        enabled: true
                    }
                }
            },
            series: [{
                name: 'powerA',
                data: data.powerA
            }, {
                name: 'powerB',
                data: data.powerB
            }, {
                name: 'powerC',
                data: data.powerC
            }]
        });
  
      },
      error: function() {
        console.log('there was an error!');
      }
    });
  
  });


  $(function() {


    $.ajax({
      url: 'http://10.10.15.20:1880/powersDH-24h',
      complete: function(json) {
        data = JSON.parse(json.responseText);
        
        Highcharts.chart('chart6', {
            chart: {
                backgroundColor:'rgba(255, 255, 255, 0.9)',
                type: 'column',
                zoomType: 'x'
            },
            title: {
                text: 'So sánh năng lượng các pha - LVMSB3'
            },
            xAxis: {
                categories: data.time
            },
            yAxis: {
                min: 0,
                title: {
                    text: 'kW'
                },
                stackLabels: {
                    enabled: true,
                    style: {
                        fontWeight: 'bold',
                        color: ( // theme
                            Highcharts.defaultOptions.title.style &&
                            Highcharts.defaultOptions.title.style.color
                        ) || 'gray'
                    }
                }
            },
            legend: {
                align: 'right',
                x: -30,
                verticalAlign: 'top',
                y: 25,
                floating: true,
                backgroundColor:
                    Highcharts.defaultOptions.legend.backgroundColor || 'white',
                borderColor: '#CCC',
                borderWidth: 1,
                shadow: false
            },
            tooltip: {
                headerFormat: '<b>{point.x}</b><br/>',
                pointFormat: '{series.name}: {point.y}<br/>Total: {point.stackTotal}'
            },
            plotOptions: {
                column: {
                    stacking: 'normal',
                    dataLabels: {
                        enabled: true
                    }
                }
            },
            series: [{
                name: 'powerA',
                data: data.powerA
            }, {
                name: 'powerB',
                data: data.powerB
            }, {
                name: 'powerC',
                data: data.powerC
            }]
        });
  
      },
      error: function() {
        console.log('there was an error!');
      }
    });
  
  });