import util from '../chartFunc'
import common from '../common'

let option = function (calData) {
  let data = calData.data.map(item => [util.convertString2Date(item[0]), parseInt(item[1]) + parseInt(item[2])])
  let range = [common.getNow(7), common.getNow()]
  if (calData.rows) {
    let now = common.getNow(6)
    let dateName = now.split('-')
    let lastYear = parseInt(dateName[0]) - 1
    let lastMonth = parseInt(dateName[1]) + 1
    let start = [lastYear , (lastMonth > 9 ? '' : '0') + lastMonth, '01']
    if (lastMonth > 12) {
      start = [dateName[0], '01', '01'];
    }
    range = [start.join('-'), now];
  }
  
  let getDataStack = function(dateName){
    let date = dateName.replace(/-/g,'');
    let stack = calData.data.filter(item=>item[0] == date);
    let strArr = [];
    stack[0].forEach((item,i)=>{
        if(i){
            strArr.push(`${calData.header[i].title}: ${item}`);
        }
    });
    return strArr.join('<br>');
  }
  
  return {
    title: {
      text: calData.title,
      left: 'center',
      textStyle: {
        color: '#fff',
        fontSize: 25,
        fontWeight: 'lighter'
      }
    },
    tooltip: {
      trigger: 'item',
      formatter(param) {
        //param.seriesName + ',' +
        return '<b>'+param.value[0] + '</b><br>' + getDataStack(param.value[0]);
      }
    },
    legend: {
      top: '30',
      left: '100',
      data: ['Top 10'],
      textStyle: {
        color: '#fff'
      }
    },
    calendar: [{
      top: 60,
      left: 'center',
      range,
      // cellSize: [22, 22],
      splitLine: {
        show: true,
        lineStyle: {
          color: '#000',
          width: 4,
          type: 'solid'
        }
      },
      yearLabel: {
        show: false,
        formatter: '{start} 年',
        textStyle: {
          color: '#fff'
        }
      },
      itemStyle: {
        normal: {
          color: 'rgba(50,60,72,0.2)',
          borderWidth: 1,
          borderColor: '#111'
        }
      },
      dayLabel: {
        nameMap: 'cn',
        firstDay: 1,
        textStyle: {
          color: '#fff'
        }
      },
      monthLabel: {
        nameMap: 'cn',
        textStyle: {
          color: '#fff'
        }
      }
    }],
    series: [
      {
        type: 'scatter',
        coordinateSystem: 'calendar',
        data,
        symbolSize: function (val) {
          return val[1] * 2
        },
        itemStyle: {
          normal: {
            color: '#ddb926'
          }
        }
      },
      {
        name: 'Top 10',
        type: 'effectScatter',
        coordinateSystem: 'calendar',
        data: data.sort(function (a, b) {
          return b[1] - a[1]
        }).slice(0, 10),
        symbolSize: function (val) {
          return val[1] * 2
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
  }
}

export default option
