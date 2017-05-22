// 数组去重
function arrUnique (uArr) {
  var arr = []
  var set = new Set(uArr)
  set.forEach(function (item) {
    arr.push(item)
  })
  return arr
}

function getBarSeries (option) {
  let itemStyle = {
    'normal': {
      'label': {
        'show': false,
        'position': 'insideTop',
        'formatter': '{c}'
      },
      'barBorderRadius': [2, 2, 0, 0],
      'borderColor': 'rgba(255,255,255,0.95)',
      'borderWidth': 0,
      'lineStyle': {
        'width': 1
      }
    }
  }
  let lineStyle = {
    'normal': {
      'width': 2,
      'type': 'solid',
    }
  }
  let barMaxWidth = 100
  let barMinHeight = 15
  return {
    name: option.name,
    type: option.type,
    data: option.data,
    smooth: true,
    barMaxWidth,
    barMinHeight,
    itemStyle,
    lineStyle,
    symbolSize: '2',
    sampling: 'average',
    symbol: 'circle'
  }
}

function convertString2Date(str){
  return [str.substring(0,4),str.substring(4,6),str.substring(6,8)].join('-');
}

export default {
  arrUnique,
  convertString2Date,
getBarSeries}
