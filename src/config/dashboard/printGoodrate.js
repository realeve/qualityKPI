import util from '../chartFunc'

function option (data,chartType = 'line') {
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

  return {
    title: [{
      textStyle: {
        color: '#fff',
        fontSize: 25,
        fontWeight: 'lighter' // 100
      },
      text: data.title,
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
      'data': legendData,
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
      // 'name': data.header[1].title,
      'type': 'time',
      'nameLocation': 'middle',
      nameGap: 40,
      nameTextStyle: {
        color: '#fff'
      }
    }],
    'yAxis': [{
      'name': data.header[2].title,
      'type': 'value',
      splitArea: {
        show: false
      },
      splitLine: {
        'show': false
      }
    }],
  series}
}
export default option
