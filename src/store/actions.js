import axios from 'axios'
import util from '../config/common'
import settings from '../config/settings'
import kpi from '../config/scoreKPI'
import _ from 'lodash'

let api = settings.api

let actions = {
  // 好品率
  getGoodRate(store) {
    if (process.env.NODE_ENV == 'development') {
      let data = require('../config/api/goodrate.json')
      store.state.print.goodRate = data.data
      return
    }
    axios.get(api.print.goodRate, {
      params: util.getDateRange()
    }).then(res => {
      store.state.print.goodRate = res.data.data
    }).catch(e => {
      console.log(e)
      console.log(api.print.goodRate)
    })
  }, // 开包量
  getOpenNum(store) {
    if (process.env.NODE_ENV == 'development') {
      let data = require('../config/api/openNum.json')
      store.state.print.openNum = data.data
      return
    }
    axios.get(api.print.openNum, {
      params: util.getDateRange()
    }).then(res => {
      let data = _.sortBy(res.data.data, item => item[0])
      store.state.print.openNum = data
    }).catch(e => {
      console.log(e)
      console.log(api.print.openNum)
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
    }).catch(e => {
      console.log(e)
      console.log(api.print.plate)
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
    }).catch(e => {
      console.log(e)
      console.log(api.print.unchecked)
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
    }).catch(e => {
      console.log(e)
      console.log(api.print.question)
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
    }).catch(e => {
      console.log(e)
      console.log(api.print.risk)
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
    }).catch(e => {
      console.log(e)
      console.log(api.print.qfj)
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
    }).catch(e => {
      console.log(e)
      console.log(api.print.spc)
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
    }).catch(e => {
      console.log(e)
      console.log(api.print.procRate)
    })
  },
  printScore(store) {
    let sum = 0
    Object.keys(kpi.print).forEach(item => sum += kpi.print[item].score)
    let curScore = store.getters.goodRateScore.score + store.getters.openNumScore.score + store.getters.plateScore.score + store.getters.machineWeak
      .score + store.getters.fakeRate.score + store.getters.uncheckedScore.score + store.getters.questionScore.score + store.getters.riskScore.score +
    store.getters.qfjScore.score + store.getters.SPCScore.score + store.getters.procRateScore.score
    store.state.score.print = (curScore / sum * 100).toFixed(2)
  },
  initPrint(store) {
    store.dispatch('getGoodRate')
    store.dispatch('getOpenNum')
    store.dispatch('getPlatePrintNum')
    store.dispatch('getNoCheckNum')
    store.dispatch('getProcRate')
    store.dispatch('getQualityQuestion')
    store.dispatch('getQualityRisk')
    store.dispatch('getUncheckByQFJ')
    store.dispatch('getSPCScore')
  },
  // 纸机好品率
  getPGoodRate(store) {
    function splitCutData (data) {
      let goodRate = [],
        cGoodRate = []
      data.data.forEach(item => {
        if (item[1] == '纸机') {
          goodRate.push(item)
        } else {
          cGoodRate.push(item)
        }
      })
      store.state.paper.goodRate = goodRate
      store.state.paper.cGoodRate = cGoodRate
    }

    if (process.env.NODE_ENV == 'development') {
      let data = require('../config/api/paperGoodrate_id123.json')
      splitCutData(data)
      return
    }
    axios.get(api.paper.goodRate, {
      params: util.getDateRange()
    }).then(res => {
      splitCutData(res.data)
    }).catch(e => {
      console.log(e)
      console.log(api.paper.procRate)
    })
  },
  // 成品率
  // getWellRate() {

  // },
  // 封包率
  getPkgRate(store) {
    if (process.env.NODE_ENV == 'development') {
      let data = require('../config/api/packageRate_id116.json')
      store.state.paper.pkgRate = data.data
      return
    }
    axios.get(api.paper.pkgRate, {
      params: util.getDateRange()
    }).then(res => {
      store.state.paper.pkgRate = res.data.data
    }).catch(e => {
      console.log(e)
      console.log(api.paper.pkgRate)
    })
  },
  // 纸机、切纸机好品率相差过大
  getAbnormalNum(store) {
    if (process.env.NODE_ENV == 'development') {
      let data = require('../config/api/paperAbnormal_id469.json')
      store.state.paper.abnormal = data.data
      return
    }
    axios.get(api.paper.abnormalNum, {
      params: util.getDateRange()
    }).then(res => {
      store.state.paper.abnormal = res.data.data
    }).catch(e => {
      console.log(e)
      console.log(api.paper.abnormalNum)
    })
  },
  // 质量问题发布
  getPQualityQuestion(store) {
    if (process.env.NODE_ENV == 'development') {
      let data = require('../config/api/paperQuestion_id470.json')
      store.state.paper.question = data.data
      return
    }
    axios.get(api.paper.question, {
      params: util.getDateRange()
    }).then(res => {
      store.state.paper.question = res.data.data
    }).catch(e => {
      console.log(e)
      console.log(api.paper.question)
    })
  },
  // 过程质量控制水平
  getPSPCScore(store) {
    if (process.env.NODE_ENV == 'development') {
      let data = require('../config/api/paperSPC_id60.json')
      store.state.paper.spc = data.data
      return
    }
    axios.get(api.paper.spc, {
      params: util.getDateRange()
    }).then(res => {
      store.state.paper.spc = res.data.data
    }).catch(e => {
      console.log(e)
      console.log(api.paper.spc)
    })
  },
  paperScore(store) {
    let sum = 0
    Object.keys(kpi.paper).forEach(item => sum += kpi.paper[item].score)
    let curScore = store.getters.pGoodRateScore.score + store.getters.cGoodRateScore.score + store.getters.pkgRateScore.score + store.getters.rePkgRateScore
      .score + store.getters.abnormalScore.score + store.getters.pQuestionScore.score + store.getters.PSPCScore.score
    store.state.score.paper = (curScore / sum * 100).toFixed(2)
  },
  initPaper(store) {
    store.dispatch('getPGoodRate')
    store.dispatch('getPkgRate')
    store.dispatch('getAbnormalNum')
    store.dispatch('getPQualityQuestion')
    store.dispatch('getPSPCScore')
  },
  // 从此处起需要调试
  getDashboardPrintGoodrate(store) {
    if (process.env.NODE_ENV== 'development') {
      let data = require('../config/api/dashboard_print_goodrate.json')
      store.state.dashboard.print.goodrate = data
      return
    }
    axios.get(api.dashboard.print.goodrate, {
      params: util.getDateRange()
    }).then(res => {
      store.state.dashboard.print.goodrate = res.data
    }).catch(e => {
      console.log(e)
      console.log(api.dashboard.print.goodrate)
    })
  },
  getDashboardPaperGoodrate(store) {
    if (process.env.NODE_ENV== 'development') {
      let data = require('../config/api/dashboard_paper_goodrate.json')
      store.state.dashboard.paper.goodrate = data
      return
    }
    axios.get(api.dashboard.paper.goodrate, {
      params: util.getDateRange()
    }).then(res => {
      store.state.dashboard.paper.goodrate = res.data
    }).catch(e => {
      console.log(e)
      console.log(api.dashboard.paper.goodrate)
    })
  },
  getDashboardOpennum(store) {
    if (process.env.NODE_ENV== 'development') {
      let data = require('../config/api/dashboard_opennum.json')
      store.state.dashboard.print.opennum = data
      return
    }
    axios.get(api.dashboard.print.opennum, {
      params: util.getDateRange()
    }).then(res => {
      store.state.dashboard.print.opennum = res.data
    })
  },
  getDashboardAbnormal(store) {
    if (process.env.NODE_ENV== 'development') {
      let data = require('../config/api/dashboard_abnormal.json')
      store.state.dashboard.paper.abnormal = data
      return
    }
    axios.get(api.dashboard.paper.abnormal, {
      params: util.getDateRange()
    }).then(res => {
      store.state.dashboard.paper.abnormal = res.data
    }).catch(e => {
      console.log(e)
      console.log(api.dashboard.paper.abnormal)
    })
  },
  getDashboardNocheck(store) {
    if (process.env.NODE_ENV== 'development') {
      let data = require('../config/api/dashboard_nocheck.json')
      store.state.dashboard.print.nocheck = data
      return
    }
    axios.get(api.dashboard.print.nocheck, {
      params: util.getDateRange()
    }).then(res => {
      store.state.dashboard.print.nocheck = res.data
    }).catch(e => {
      console.log(e)
      console.log(api.dashboard.print.nocheck)
    })
  },
  getDashboardPkgRate(store) {
    if (process.env.NODE_ENV== 'development') {
      let data = require('../config/api/dashboard_packageRate.json')
      store.state.dashboard.paper.packagerate = data
      return
    }
    axios.get(api.dashboard.paper.packagerate, {
      params: util.getDateRange()
    }).then(res => {
      store.state.dashboard.paper.packagerate = res.data
    }).catch(e => {
      console.log(e)
      console.log(api.dashboard.paper.packagerate)
    })
  },
  getDashboardPlate(store) {
    if (process.env.NODE_ENV == 'development') {
      let data = require('../config/api/dashboard_plate_471.json')
      store.state.dashboard.print.plate = data
      return
    }
    axios.get(api.print.plate, {
      params: util.getDateRange()
    }).then(res => {
      store.state.dashboard.print.plate = res.data
    }).catch(e => {
      console.log(e)
      console.log(api.print.plate)
    })
  },
  getDashboardQuestion(store) {
    if (process.env.NODE_ENV == 'development') {
      let data = require('../config/api/dashboard_question_473.json')
      store.state.dashboard.print.question = data
      return
    }
    axios.get(api.print.question, {
      params: util.getDateRange()
    }).then(res => {
      store.state.dashboard.print.question = res.data
    }).catch(e => {
      console.log(e)
      console.log(api.print.question)
    })
  },
  getDashboardPaperReason(store) {
    if (process.env.NODE_ENV== 'development') {
      let data = require('../config/api/dashboard_paper_reason_308.json')
      store.state.dashboard.paper.reason = data
      return
    }
    axios.get(api.dashboard.paper.reason, {
      params: util.getDateRange()
    }).then(res => {
      store.state.dashboard.paper.reason = res.data
    }).catch(e => {
      console.log(e)
      console.log(api.dashboard.paper.reason)
    })
  },
  getDashboardProdNum(store) {
    if (process.env.NODE_ENV== 'development') {
      let data = require('../config/api/dashboard_prodnum_472.json')
      store.state.dashboard.print.prodnum = data
      return
    }
    axios.get(api.dashboard.print.prodnum, {
      params: util.getDateRange()
    }).then(res => {
      store.state.dashboard.print.prodnum = res.data
    }).catch(e => {
      console.log(e)
      console.log(api.dashboard.print.prodnum)
    })
  },
  initDashboard(store) {
    store.dispatch('getDashboardPrintGoodrate')
    store.dispatch('getDashboardPaperGoodrate')
    store.dispatch('getDashboardOpennum')
    store.dispatch('getDashboardAbnormal')
    store.dispatch('getDashboardNocheck')
    store.dispatch('getDashboardPkgRate')
    store.dispatch('getDashboardPlate')
    store.dispatch('getDashboardQuestion')
    store.dispatch('getDashboardPaperReason')
    store.dispatch('getDashboardProdNum')
  }
}

export default actions
