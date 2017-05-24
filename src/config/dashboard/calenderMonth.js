import echarts from 'echarts'
import util from '../chartFunc'
import common from '../common'
import _ from 'lodash'

function getVirtulData () {
  let now = common.getNow(6)
  let dateArr = now.split('-')
  let date = +echarts.number.parseDate(now.substr(0, 7) + '-01')
  let nextMonth = parseInt(dateArr[1]) + 1
  let monthStr = dateArr[0] + (nextMonth > 9 ? '-' : '-0') + nextMonth
  if (nextMonth > 12) {
    monthStr = (parseInt(dateArr[0]) + 1) + '-01'
  }
  let end = +echarts.number.parseDate(monthStr + '-01')
  let dayTime = 3600 * 24 * 1000
  let data = []
  for (let time = date; time < end; time += dayTime) {
    data.push([
      echarts.format.formatTime('yyyy-MM-dd', time),
      Math.floor(Math.random() * 5)
    ])
  }
  return data
}

function handleData (calcData) {
  let dateName = calcData.data.map(item => item[1])
  dateName = util.arrUnique(dateName)
  return dateName.map(date => {
    let arr = calcData.data.filter(item => item[1] == date)
    let sum = 0
    arr.forEach(item => {
      sum += parseInt(item[2])
    })
    return [util.convertString2Date(date), sum]
  })
}

function handlePieData (calcData) {
  let plateName = calcData.data.map(item => item[0])
  plateName = util.arrUnique(plateName)
  return plateName.map(plate => {
    let arr = calcData.data.filter(item => item[0] == plate)
    let sum = 0
    arr.forEach(item => {
      sum += parseInt(item[2])
    })
    return {
      name: plate,
      value: sum
    }
  })
}

function getDateByMonth (month, year) {
  let monthDate = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
  month = parseInt(month)
  if (month != '2') {
    return monthDate[month]
  }

  // 闰月
  if (year % 100 == 0 && year % 400 == 0) {
    return 29
  }else if (year % 100 != 0 && year % 4 == 0) {
    return 29
  }else {
    return 28
  }
}

function getMonthRange () {
  let now = common.getNow(6)
  let dateArr = now.split('-')
  let start = now.substr(0, 7) + '-01'
  dateArr[2] = getDateByMonth(dateArr[1], dateArr[0])
  let end = dateArr.join('-')
  return [start, end]
}

let option = function (calData) {
  let calenderData = handleData(calData)
  let pieData = handlePieData(calData)

  let range = getMonthRange()
  let getDataStack = function (dateName) {
    let date = dateName.replace(/-/g, '')
    let stack = calData.data.filter(item => item[1] == date)
    let strArr = stack.map(item => `${item[0]}: ${item[2]}`)
    return strArr.join('<br>')
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
      position: 'top',
      formatter(param) {
        if (param.seriesIndex == 0) {
          return '<b>' + param.value[0] + '</b><br>' + getDataStack(param.value[0])
        }else {
          return '<b>' + param.name + '</b><br>' + param.value + ' (' + param.percent + '%)'
        }
      }
    },
    // visualMap: {
    //   // type: 'piecewise',
    //   min: 0,
    //   max: 5,
    //   calculable: true,
    //   orient: 'horizontal',
    //   left: '12%',
    //   bottom: '0',
    //   textStyle: {
    //     color: '#fff'
    //   },
    //   color: ['#f80012', '#2061d7']
    // },
    calendar: [
      {
        range,
        cellSize: ['40', '40'],
        orient: 'vertical',
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
          margin: 5,
          textStyle: {
            color: '#fff'
          }
        },
        monthLabel: {
          nameMap: 'cn',
          textStyle: {
            color: '#fff'
          }
        },
        yearLabel: {
          show: false
        }
      }],
    series: [
      {
        type: 'scatter',
        coordinateSystem: 'calendar',
        data: calenderData,
        symbolSize: function (val) {
          return val[1] * 5
        },
        itemStyle: {
          normal: {
            color: '#ddb926'
          }
        }
      },
      // {
      //   type: 'heatmap',
      //   coordinateSystem: 'calendar',
      //   calendarIndex: 0,
      //   data: calenderData
      // },
      {
        type: 'pie',
        data: pieData,
        radius: [30, 80],
        center: ['75%', '50%'],
        // roseType: 'area',
        itemStyle: {
          normal: {
            lableLine: {
              length: 2,
              length2: 2,
              smooth: true
            }
          }
        }
      }]

  }
}

export default option
