// 同步事件

import axios from 'axios'
import util from '../config/common'
import settings from '../config/settings'
import kpi from '../config/scoreKPI'
import _ from 'lodash'

let api = settings.api

let actions = {
  // 好品率
  getGoodRate(store) {
    axios.get(api.print.goodRate, {
      params: util.getDateRange()
    }).then(res => {
      store.state.print.goodRate = res.data.data
    })
  }, // 开包量
  getOpenNum(store) {
    axios.get(api.print.openNum, {
      params: util.getDateRange()
    }).then(res => {
      let data = _.sortBy(res.data.data, item => item[0])
      store.state.print.openNum = data
    })
  },
  // 耐印率
  getPlatePrintNum(store) {
    if (process.env.NODE_ENV == 'development') {
      let data = require('../config/api/plate.json')
      store.state.print.plateNum = data.data
      return
    }
    axios.get(api.print.plate, {
      params: util.getDateRange()
    }).then(res => {
      store.state.print.plateNum = res.data.data
    })
  },
  // 未检
  getNoCheckNum(store) {
    if (process.env.NODE_ENV == 'development') {
      let data = require('../config/api/nochecked.json')
      store.state.print.uncheckedNum = data.data
      return
    }
    axios.get(api.print.unchecked, {
      params: util.getDateRange()
    }).then(res => {
      store.state.print.uncheckedNum = res.data.data
    })
  },
  // 质量问题发布
  getQualityQuestion(store) {
    if (process.env.NODE_ENV == 'development') {
      let data = require('../config/api/question.json')
      store.state.print.question = data.data
      return
    }
    axios.get(api.print.question, {
      params: util.getDateRange()
    }).then(res => {
      store.state.print.question = res.data.data
    })
  },
  // 风险隐患排查
  getQualityRisk(store) {
    if (process.env.NODE_ENV == 'development') {
      let data = require('../config/api/risk.json')
      store.state.print.risk = data.data
      return
    }
    axios.get(api.print.risk, {
      params: util.getDateRange()
    }).then(res => {
      store.state.print.risk = res.data.data
    })
  },
  // 清分拒钞
  getUncheckByQFJ(store) {
    if (process.env.NODE_ENV == 'development') {
      let data = require('../config/api/qfj.json')
      store.state.print.qfj = data.data
      return
    }
    axios.get(api.print.qfj, {
      params: util.getDateRange()
    }).then(res => {
      store.state.print.qfj = res.data.data
    })
  },
  // 过程质量控制水平
  getSPCScore(store) {
    if (process.env.NODE_ENV == 'development') {
      let data = require('../config/api/spc.json')
      store.state.print.spc = data.data
      return
    }
    axios.get(api.print.spc, {
      params: util.getDateRange()
    }).then(res => {
      store.state.print.spc = res.data.data
    })
  },
  getProcRate(store) {
    if (process.env.NODE_ENV == 'development') {
      let data = require('../config/api/mhProc.json')
      store.state.print.procRate = data.data
      return
    }
    axios.get(api.print.procRate, {
      params: util.getDateRange()
    }).then(res => {
      store.state.print.procRate = res.data.data
    })
  }
}

export default actions
