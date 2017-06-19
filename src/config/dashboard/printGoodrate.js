import util from '../chartFunc'

function getDefaultOption (text) {
  return {
    title: [{
      textStyle: {
        color: '#fff',
        fontSize: 25,
        fontWeight: 'lighter' // 100
      },
      text,
      left: 'center'
    }],
    'connectNulls': true,
    'calculable': true,
    'tooltip': {
      'trigger': 'axis',
      axisPointer: {
        type: 'cross'
      }
    },
    'dataZoom': [{
      'type': 'inside',
      'realtime': true,
      'start': 0,
      'end': 100
    }],
    'legend': {
      'data': [],
      'x2': '5%',
      'y': '12%',
      'itemGap': 20,
      'textStyle': {
        'fontSize': 16,
        color: '#ddd'
      },
      'show': true
    },
    'xAxis': [{
      'type': 'time',
      'nameLocation': 'middle',
      nameGap: 40,
      nameTextStyle: {
        color: '#fff'
      }
    }],
    'yAxis': [{
      'type': 'value',
      splitArea: {
        show: false
      },
      splitLine: {
        'show': false
      }
    }]
  }
}

function option (data, chartType = 'line') {
  let defaultOption = getDefaultOption(data.title);
  if (data.rows == 0 || typeof data.rows =='undefined') {
    return defaultOption;
  }
  let uniLegend = util.arrUnique(data.data.map(item => item[0]))
  let legendData = uniLegend.map(item => {
    return {
      name: item,
      icon: 'pin'
    }
  })

  let series = uniLegend.map(legend => {
    let seriesData = []
    data.data.forEach(item => {
      if (item[0] == legend) {
        seriesData.push([util.convertString2Date(item[1]), item[2]])
      }
    })
    return util.getBarSeries({name: legend,type: chartType,data: seriesData})
  })
  defaultOption.legend.data = legendData
  defaultOption.yAxis.name = data.header[2].title
  defaultOption.series = series
  return defaultOption
}
export default option
