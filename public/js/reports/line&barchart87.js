$(function() {


    $.ajax({
      url: 'http://10.10.15.20:1880/voltages87-max',
      complete: function(json) {
        data = JSON.parse(json.responseText);
  
        Highcharts.chart('chart10', {
            chart: {
                backgroundColor:'rgba(255, 255, 255, 0.9)',
                zoomType: 'x'
            },

            title: {
                text: 'LVMSB1-Voltages-U-Max' ,
                style: {
                    color: "#fff"
                 }
            },
        
            subtitle: {
                text: 'Source: PM5320'
            },
        
            yAxis: {
                title: {
                    text: 'Vol'
                }
            },
        
            xAxis: {
                categories: data.time
            },
        
            legend: {
                layout: 'vertical',
                align: 'right',
                verticalAlign: 'middle'
            },
        
            series: [{
                name: 'VolAB',
                data: data.VolABmax,
                color:'#66ccff'
            }, {
                name: 'VolBC',
                data: data.VolBCmax,
                color:'#ff3333'
            }, {
                name: 'VolCA',
                data: data.VolCAmax,
                color:'yellow'
            }],
        
            responsive: {
                rules: [{
                    condition: {
                        maxWidth: 500
                    },
                    chartOptions: {
                        legend: {
                            layout: 'horizontal',
                            align: 'center',
                            verticalAlign: 'bottom'
                        }
                    }
                }]
            }
        
        });

        Highcharts.chart('chart11', {
            chart: {
                backgroundColor:'rgba(255, 255, 255, 0.9)',
                type: 'area',
                zoomType: 'x'
            },
            title: {
                text: 'LVMSB1-VolLL-Max',
                style: {
                    color: "#fff"
                 }
            },

            legend: {
                layout: 'vertical',
                align: 'left',
                verticalAlign: 'top',
                x: 70,
                y: 10,
                floating: true,
                borderWidth: 1,
                backgroundColor:
                    Highcharts.defaultOptions.legend.backgroundColor || '#FFFFFF'
            },
            xAxis: {
                categories: data.time
            },
            yAxis: {
                tickInterval: 5,
                // max:405,
                // min:380,
                range:10, 
                
                title: {
                    text: 'Vol'
                }
        
            },
            plotOptions: {
                area: {
                    fillOpacity: 0.5
                }
            },
            credits: {
                enabled: false
            },
            series: [{
                name: 'VolLL',
                data:  data.VolLLmax,
                color:'#70db70'
            }]
        });

        Highcharts.chart('chart12', {
            chart: {
                backgroundColor:'rgba(255, 255, 255, 0.9)',
                zoomType: 'x'
            },

            title: {
                text: 'LVMSB1-Voltages-V-Max',
                style: {
                    color: "#fff"
                 }
            },
        
            subtitle: {
                text: 'Source: PM5320'
            },
        
            yAxis: {
                title: {
                    text: 'Vol'
                }
            },
        
            xAxis: {
                categories:data.time
            },
        
            legend: {
                layout: 'vertical',
                align: 'right',
                verticalAlign: 'middle'
            },
        
            series: [{
                name: 'VolAN',
                data: data.VolANmax,
                color:'#66ccff'
            }, {
                name: 'VolBN',
                data: data.VolBNmax,
                color:'#ff3333'
            }, {
                name: 'VolCN',
                data: data.VolCNmax,
                color:'yellow'
            }],
        
            responsive: {
                rules: [{
                    condition: {
                        maxWidth: 500
                    },
                    chartOptions: {
                        legend: {
                            layout: 'horizontal',
                            align: 'center',
                            verticalAlign: 'bottom'
                        }
                    }
                }]
            }
        
        });
        Highcharts.chart('chart13', {
            chart: {
                backgroundColor:'rgba(255, 255, 255, 0.9)',
                type: 'area',
                zoomType: 'x'
            },
            title: {
                text: 'LVMSB1-VolLN-Max',
                style: {
                    color: "#fff"
                 }
            },

            legend: {
                layout: 'vertical',
                align: 'left',
                verticalAlign: 'top',
                x: 70,
                y: 10,
                floating: true,
                borderWidth: 1,
                backgroundColor:
                Highcharts.defaultOptions.legend.backgroundColor || '#FFFFFF'
            },
            xAxis: {
                categories: data.time
            },
            yAxis: {
                // tickInterval: 5,
                // max:250,
                // min:150,
                range:10, 
                
                title: {
                    text: 'Vol'
                }
        
            },
            plotOptions: {
                area: {
                    fillOpacity: 0.5
                }
            },
            credits: {
                enabled: false
            },
            series: [{
                name: 'VolLN',
                data: data.VolLNmax,
                color:'#70db70'
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
      url: 'http://10.10.15.20:1880/currents87-max',
      complete: function(json) {
        data = JSON.parse(json.responseText);
  
        Highcharts.chart('chart14', {
            chart: {
                backgroundColor:'rgba(255, 255, 255, 0.9)',
                zoomType: 'x'
            },

            title: {
                text: 'LVMSB1-Currents-Max',
                style: {
                    color: "#fff"
                 }
            },
        
            subtitle: {
                text: 'Source: PM5320'
            },
        
            yAxis: {
                title: {
                    text: 'A'
                }
            },
        
            xAxis: {
                categories: data.time
            },
        
            legend: {
                layout: 'vertical',
                align: 'right',
                verticalAlign: 'middle'
            },
        
            series: [{
                name: 'CurrentA',
                data: data.CurrentAmax,
                color:'#66ccff'
            }, {
                name: 'CurrentB',
                data: data.CurrentBmax,
                color:'#ff3333'
            }, {
                name: 'CurrentC',
                data: data.CurrentCmax,
                color:'yellow'
            }],
        
            responsive: {
                rules: [{
                    condition: {
                        maxWidth: 500
                    },
                    chartOptions: {
                        legend: {
                            layout: 'horizontal',
                            align: 'center',
                            verticalAlign: 'bottom'
                        }
                    }
                }]
            }
        
        });
        Highcharts.chart('chart15', {
            chart: {
                backgroundColor:'rgba(255, 255, 255, 0.9)',
                type: 'area',
                zoomType: 'x'
            },
            title: {
                text: 'LVMSB1-CurrentAvg-Max',
                style: {
                    color: "#fff"
                 }
            },

            legend: {
                layout: 'vertical',
                align: 'left',
                verticalAlign: 'top',
                x: 70,
                y: 10,
                floating: true,
                borderWidth: 1,
                backgroundColor:
                    Highcharts.defaultOptions.legend.backgroundColor || '#FFFFFF'
            },
            xAxis: {
                categories: data.time
            },
            yAxis: {
                tickInterval: 5,
                // max:405,
                // min:380,
                range:30, 
                
                title: {
                    text: 'A'
                }
        
            },
            plotOptions: {
                area: {
                    fillOpacity: 0.5
                }
            },
            credits: {
                enabled: false
            },
            series: [{
                name: 'CurrentAng',
                data: data.CurrentAvgmax,
                color:'#70db70'
            }]
        });


      },
      error: function() {
        console.log('there was an error!');
      }
    });
  
  });


//THD
$(function() {


    $.ajax({
      url: 'http://10.10.15.20:1880/THD-currentA87-max',
      complete: function(json) {
        data = JSON.parse(json.responseText);
  
        Highcharts.chart('chart16', {
            chart: {
                backgroundColor:'rgba(255, 255, 255, 0.9)',
                zoomType: 'x'
            },

            title: {
                text: 'LVMSB1-THD-Max',
                style: {
                    color: "#fff"
                 }
            },
        
            subtitle: {
                text: 'Source: PM5320'
            },
        
            yAxis: {
                title: {
                    text: '%'
                }
            },
        
            xAxis: {
                categories: data.time
            },
        
            legend: {
                layout: 'vertical',
                align: 'right',
                verticalAlign: 'middle'
            },
        
            series: [{
                name: 'THDcurrentA',
                data: data.THDcurrentAmax,
                color:'#66ccff'
            }, {
                name: 'THDcurrentB',
                data: data.THDcurrentBmax,
                color:'#ff3333'
            }, {
                name: 'THDcurrentC',
                data: data.THDcurrentCmax,
                color:'yellow'
            }],
        
            responsive: {
                rules: [{
                    condition: {
                        maxWidth: 500
                    },
                    chartOptions: {
                        legend: {
                            layout: 'horizontal',
                            align: 'center',
                            verticalAlign: 'bottom'
                        }
                    }
                }]
            }
        
        });
        Highcharts.chart('chart17', {
            chart: {
                backgroundColor:'rgba(255, 255, 255, 0.9)',
                type: 'area',
                zoomType: 'x'
            },
            title: {
                text: 'LVMSB1-THD-CurrentN-Max',
                style: {
                    color: "#fff"
                 }
            },

            legend: {
                layout: 'vertical',
                align: 'left',
                verticalAlign: 'top',
                x: 70,
                y: 10,
                floating: true,
                borderWidth: 1,
                backgroundColor:
                    Highcharts.defaultOptions.legend.backgroundColor || '#FFFFFF'
            },
            xAxis: {
                categories: data.time
            },
            yAxis: {
                tickInterval: 5,
                // max:405,
                // min:380,
                // range:100, 
                
                title: {
                    text: '%'
                }
        
            },
            plotOptions: {
                area: {
                    fillOpacity: 0.5
                }
            },
            credits: {
                enabled: false
            },
            series: [{
                name: 'THD-Current N',
                data: data.THDcurrentNmax,
                color:'#70db70'
            }]
        });


        Highcharts.chart('chart18', {
            chart: {
                backgroundColor:'rgba(255, 255, 255, 0.9)',
                zoomType: 'x'
            },

            title: {
                text: 'LVMSB1-THD-VolU-Max',
                style: {
                    color: "#fff"
                 }
            },
        
            subtitle: {
                text: 'Source: PM5320'
            },
        
            yAxis: {
                title: {
                    text: '%'
                }
            },
        
            xAxis: {
                categories: data.time
            },
        
            legend: {
                layout: 'vertical',
                align: 'right',
                verticalAlign: 'middle'
            },
        
            series: [{
                name: 'THD-VolAB',
                data: data.THDvolABmax,
                color:'#66ccff'
            }, {
                name: 'THD-VolBC',
                data: data.THDvolBCmax,
                color:'#ff3333'
            }, {
                name: 'THD-VolCA',
                data: data.THDvolCAmax,
                color:'yellow'
            }],
        
            responsive: {
                rules: [{
                    condition: {
                        maxWidth: 500
                    },
                    chartOptions: {
                        legend: {
                            layout: 'horizontal',
                            align: 'center',
                            verticalAlign: 'bottom'
                        }
                    }
                }]
            }
        
        });

        Highcharts.chart('chart19', {
            chart: {
                backgroundColor:'rgba(255, 255, 255, 0.9)',
                zoomType: 'x'
            },

            title: {
                text: 'LVMSB1-THD-VolV-Max',
                style: {
                    color: "#fff"
                 }
            },
        
            subtitle: {
                text: 'Source: PM5320'
            },
        
            yAxis: {
                title: {
                    text: '%'
                }
            },
        
            xAxis: {
                categories: data.time
            },
        
            legend: {
                layout: 'vertical',
                align: 'right',
                verticalAlign: 'middle'
            },
        
            series: [{
                name: 'THD-VolAN',
                data: data.THDvolANmax,
                color:'#66ccff'
            }, {
                name: 'THD-VolBN',
                data: data.THDvolBNmax,
                color:'#ff3333'
            }, {
                name: 'THD-VolCN',
                data: data.THDvolCNmax,
                color:'yellow'
            }],
        
            responsive: {
                rules: [{
                    condition: {
                        maxWidth: 500
                    },
                    chartOptions: {
                        legend: {
                            layout: 'horizontal',
                            align: 'center',
                            verticalAlign: 'bottom'
                        }
                    }
                }]
            }
        
        });
      },
      error: function() {
        console.log('there was an error!');
      }
    });
  
  });


  //thd
$(function() {
    $.ajax({
      url: 'http://10.10.15.20:1880/thd1-currentA87-max',
      complete: function(json) {
        data = JSON.parse(json.responseText);
  
        Highcharts.chart('chart20', {
            chart: {
                backgroundColor:'rgba(255, 255, 255, 0.9)',
                zoomType: 'x'
            },
            title: {
                text: 'LVMSB1-thd-Max',
                style: {
                    color: "#fff"
                 }
            },
        
            subtitle: {
                text: 'Source: PM5320'
            },
        
            yAxis: {
                title: {
                    text: '%'
                }
            },
        
            xAxis: {
                categories: data.time
            },
        
            legend: {
                layout: 'vertical',
                align: 'right',
                verticalAlign: 'middle'
            },
        
            series: [{
                name: 'thdcurrentA',
                data: data.thdcurrentAmax,
                color:'#66ccff'
            }, {
                name: 'thdcurrentB',
                data: data.thdcurrentBmax,
                color:'#ff3333'
            }, {
                name: 'thdcurrentC',
                data: data.thdcurrentCmax,
                color:'yellow'
            }],
        
            responsive: {
                rules: [{
                    condition: {
                        maxWidth: 500
                    },
                    chartOptions: {
                        legend: {
                            layout: 'horizontal',
                            align: 'center',
                            verticalAlign: 'bottom'
                        }
                    }
                }]
            }
        
        });
        Highcharts.chart('chart21', {
            chart: {
                backgroundColor:'rgba(255, 255, 255, 0.9)',
                type: 'area',
                zoomType: 'x'
            },
            title: {
                text: 'LVMSB1-THD-CurrentN-Max',
                style: {
                    color: "#fff"
                 }
            },

            legend: {
                layout: 'vertical',
                align: 'left',
                verticalAlign: 'top',
                x: 70,
                y: 10,
                floating: true,
                borderWidth: 1,
                backgroundColor:
                    Highcharts.defaultOptions.legend.backgroundColor || '#FFFFFF'
            },
            xAxis: {
                categories: data.time
            },
            yAxis: {
                tickInterval: 5,
                // max:405,
                // min:380,
                // range:100, 
                
                title: {
                    text: '%'
                }
        
            },
            plotOptions: {
                area: {
                    fillOpacity: 0.5
                }
            },
            credits: {
                enabled: false
            },
            series: [{
                name: 'thd-Current N',
                data: data.thdcurrentNmax,
                color:'#70db70'
            }]
        });


        Highcharts.chart('chart22', {
            chart: {
                backgroundColor:'rgba(255, 255, 255, 0.9)',
                zoomType: 'x'
            },
            title: {
                text: 'LVMSB1-thd-VolU-Max',
                style: {
                    color: "#fff"
                 }
            },
        
            subtitle: {
                text: 'Source: PM5320'
            },
        
            yAxis: {
                title: {
                    text: '%'
                }
            },
        
            xAxis: {
                categories: data.time
            },
        
            legend: {
                layout: 'vertical',
                align: 'right',
                verticalAlign: 'middle'
            },
        
            series: [{
                name: 'thd-VolAB',
                data: data.thdvolABmax,
                color:'#66ccff'
            }, {
                name: 'thd-VolBC',
                data: data.thdvolBCmax,
                color:'#ff3333'
            }, {
                name: 'thd-VolCA',
                data: data.thdvolCAmax,
                color:'yellow'
            }],
        
            responsive: {
                rules: [{
                    condition: {
                        maxWidth: 500
                    },
                    chartOptions: {
                        legend: {
                            layout: 'horizontal',
                            align: 'center',
                            verticalAlign: 'bottom'
                        }
                    }
                }]
            }
        
        });

        Highcharts.chart('chart23', {
            chart: {
                backgroundColor:'rgba(255, 255, 255, 0.9)',
                zoomType: 'x'
            },
            title: {
                text: 'LVMSB1-thd-VolV-Max',
                style: {
                    color: "#fff"
                 }
            },
        
            subtitle: {
                text: 'Source: PM5320'
            },
        
            yAxis: {
                title: {
                    text: '%'
                }
            },
        
            xAxis: {
                categories: data.time
            },
        
            legend: {
                layout: 'vertical',
                align: 'right',
                verticalAlign: 'middle'
            },
        
            series: [{
                name: 'thd-VolAN',
                data: data.thdvolANmax,
                color:'#66ccff'
            }, {
                name: 'thd-VolBN',
                data: data.thdvolBNmax,
                color:'#ff3333'
            }, {
                name: 'thd-VolCN',
                data: data.thdvolCNmax,
                color:'yellow'
            }],
        
            responsive: {
                rules: [{
                    condition: {
                        maxWidth: 500
                    },
                    chartOptions: {
                        legend: {
                            layout: 'horizontal',
                            align: 'center',
                            verticalAlign: 'bottom'
                        }
                    }
                }]
            }
        
        });
      },
      error: function() {
        console.log('there was an error!');
      }
    });
  
  });

