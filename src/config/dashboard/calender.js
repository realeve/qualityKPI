var cellSize = [80, 80];
var pieRadius = 30;

function getVirtulData() {
  var date = +echarts.number.parseDate('2017-05-01');
  var end = +echarts.number.parseDate('2017-06-01');
  var dayTime = 3600 * 24 * 1000;
  var data = [];
  for (var time = date; time < end; time += dayTime) {
    data.push([
      echarts.format.formatTime('yyyy-MM-dd', time),
      Math.floor(Math.random() * 10 * 1000)
    ]);
  }
  return data;
}

function getPieSeries(scatterData, chart) {
  return echarts.util.map(scatterData, function(item, index) {
    var center = chart.convertToPixel('calendar', item);
    return {
      id: index + 'pie',
      type: 'pie',
      center: center,
      label: {
        normal: {
          formatter: '{c}',
          position: 'inside'
        }
      },
      radius: pieRadius,
      data: [{
        name: '钞纸',
        value: Math.round(Math.random() * 24)
      }, {
        name: '印钞',
        value: Math.round(Math.random() * 24)
      }]
    };
  });
}

function getPieSeriesUpdate(scatterData, chart) {
  return echarts.util.map(scatterData, function(item, index) {
    var center = chart.convertToPixel('calendar', item);
    return {
      id: index + 'pie',
      center: center
    };
  });
}

var scatterData = getVirtulData();

option = {
  tooltip: {},
  legend: {
    data: ['钞纸', '印钞'],
    bottom: 20
  },
  calendar: {
    top: 'middle',
    left: 'center',
    orient: 'vertical',
    cellSize: cellSize,
    yearLabel: {
      show: false,
      textStyle: {
        fontSize: 30
      }
    },
    dayLabel: {
      margin: 20,
      firstDay: 1,
      nameMap: ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六']
    },
    monthLabel: {
      show: false
    },
    range: ['2017-05']
  },
  series: [{
    id: 'label',
    type: 'scatter',
    coordinateSystem: 'calendar',
    symbolSize: 1,
    label: {
      normal: {
        show: true,
        formatter: function(params) {
          return echarts.format.formatTime('d', params.value[0]);
        },
        offset: [-cellSize[0] / 2 + 10, -cellSize[1] / 2 + 10],
        textStyle: {
          color: '#000',
          fontSize: 12
        }
      }
    },
    data: scatterData
  }]
};

if (!app.inNode) {
  var pieInitialized;
  setTimeout(function() {
    pieInitialized = true;
    myChart.setOption({
      series: getPieSeries(scatterData, myChart)
    });
  }, 10);

  app.onresize = function() {
    if (pieInitialized) {
      myChart.setOption({
        series: getPieSeriesUpdate(scatterData, myChart)
      });
    }
  };
}

// 热力图
function getVirtulData(year) {
    year = year || '2017';
    var date = +echarts.number.parseDate(year + '-01-01');
    var end = +echarts.number.parseDate((+year + 1) + '-01-01');
    var dayTime = 3600 * 24 * 1000;
    var data = [];
    for (var time = date; time < end; time += dayTime) {
        data.push([
            echarts.format.formatTime('yyyy-MM-dd', time),
            Math.floor(Math.random() * 1000)
        ]);
    }
    return data;
}

option = {
    tooltip: {
        position: 'top'
    },
    visualMap: {
        min: 0,
        max: 1000,
        calculable: true,
        orient: 'horizontal',
        left: 'center',
        top: 'top'
    },

    calendar: [
    {
        range: '2017',
        cellSize: ['auto', 20]
    }],

    series: [{
        type: 'heatmap',
        coordinateSystem: 'calendar',
        calendarIndex: 0,
        data: getVirtulData(2017)
    }]

};


// 热力气泡图
function getVirtulData(year) {
    year = year || '2017';
    var date = +echarts.number.parseDate(year + '-01-01');
    var end = +echarts.number.parseDate((+year + 1) + '-01-01');
    var dayTime = 3600 * 24 * 1000;
    var data = [];
    for (var time = date; time < end; time += dayTime) {
        data.push([
            echarts.format.formatTime('yyyy-MM-dd', time),
            Math.floor(Math.random() * 10000)
        ]);
    }
    return data;
}

var data = getVirtulData(2016);

option = {
    backgroundColor: '#404a59',

    title: {
        top: 30,
        text: '2016年某人每天的步数',
        subtext: '数据纯属虚构',
        left: 'center',
        textStyle: {
            color: '#fff'
        }
    },
    tooltip : {
        trigger: 'item'
    },
    legend: {
        top: '30',
        left: '100',
        data:['步数', 'Top 12'],
        textStyle: {
            color: '#fff'
        }
    },
    calendar: [{
        top: 100,
        left: 'center',
        range: ['2016-01-01', '2016-06-30'],
        splitLine: {
            show: true,
            lineStyle: {
                color: '#000',
                width: 4,
                type: 'solid'
            }
        },
        yearLabel: {
            formatter: '{start}  1st',
            textStyle: {
                color: '#fff'
            }
        },
        itemStyle: {
            normal: {
                color: '#323c48',
                borderWidth: 1,
                borderColor: '#111'
            }
        }
    }, {
        top: 340,
        left: 'center',
        range: ['2016-07-01', '2016-12-31'],
        splitLine: {
            show: true,
            lineStyle: {
                color: '#000',
                width: 4,
                type: 'solid'
            }
        },
        yearLabel: {
            formatter: '{start}  2nd',
            textStyle: {
                color: '#fff'
            }
        },
        itemStyle: {
            normal: {
                color: '#323c48',
                borderWidth: 1,
                borderColor: '#111'
            }
        }
    }],
    series : [
        {
            name: '步数',
            type: 'scatter',
            coordinateSystem: 'calendar',
            data: data,
            symbolSize: function (val) {
                return val[1] / 500;
            },
            itemStyle: {
                normal: {
                    color: '#ddb926'
                }
            }
        },
        {
            name: '步数',
            type: 'scatter',
            coordinateSystem: 'calendar',
            calendarIndex: 1,
            data: data,
            symbolSize: function (val) {
                return val[1] / 500;
            },
            itemStyle: {
                normal: {
                    color: '#ddb926'
                }
            }
        },
        {
            name: 'Top 12',
            type: 'effectScatter',
            coordinateSystem: 'calendar',
            calendarIndex: 1,
            data: data.sort(function (a, b) {
                return b[1] - a[1];
            }).slice(0, 12),
            symbolSize: function (val) {
                return val[1] / 500;
            },
            showEffectOn: 'render',
            rippleEffect: {
                brushType: 'stroke'
            },
            hoverAnimation: true,
            itemStyle: {
                normal: {
                    color: '#f4e925',
                    shadowBlur: 10,
                    shadowColor: '#333'
                }
            },
            zlevel: 1
        },
        {
            name: 'Top 12',
            type: 'effectScatter',
            coordinateSystem: 'calendar',
            data: data.sort(function (a, b) {
                return b[1] - a[1];
            }).slice(0, 12),
            symbolSize: function (val) {
                return val[1] / 500;
            },
            showEffectOn: 'render',
            rippleEffect: {
                brushType: 'stroke'
            },
            hoverAnimation: true,
            itemStyle: {
                normal: {
                    color: '#f4e925',
                    shadowBlur: 10,
                    shadowColor: '#333'
                }
            },
            zlevel: 1
        }
    ]
};

