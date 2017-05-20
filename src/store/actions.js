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
    },
    printScore(store) {
        let sum = 0;
        Object.keys(kpi.print).forEach(item => sum += kpi.print[item].score);
        let curScore = store.getters.goodRateScore.score + store.getters.openNumScore.score + store.getters.plateScore.score + store.getters.machineWeak
            .score + store.getters.fakeRate.score + store.getters.uncheckedScore.score + store.getters.questionScore.score + store.getters.riskScore.score +
            store.getters.qfjScore.score + store.getters.SPCScore.score + store.getters.procRateScore.score;
        store.state.score.print = (curScore / sum * 100).toFixed(2);
    },
    initPrint(store) {
        store.dispatch('getGoodRate');
        store.dispatch('getOpenNum');
        store.dispatch('getPlatePrintNum');
        store.dispatch('getNoCheckNum');
        store.dispatch('getProcRate');
        store.dispatch('getQualityQuestion');
        store.dispatch('getQualityRisk');
        store.dispatch('getUncheckByQFJ');
        store.dispatch('getSPCScore');
    },
    // 纸机好品率
    getPGoodRate(store) {
        function splitCutData(data) {
            let goodRate = [],
                cGoodRate = [];
            data.data.forEach(item => {
                if (item[1] == '纸机') {
                    goodRate.push(item);
                } else {
                    cGoodRate.push(item);
                }
            })
            store.state.paper.goodRate = goodRate;
            store.state.paper.cGoodRate = cGoodRate;
        }

        if (process.env.NODE_ENV == 'development') {
            let data = require('../config/api/paperGoodrate_id123.json');
            splitCutData(data);
            return;
        }
        axios.get(api.paper.goodRate, {
            params: util.getDateRange()
        }).then(res => {
            splitCutData(res.data);
        })
    },
    // 成品率
    // getWellRate() {

    // },
    // 封包率
    getPkgRate(store) {
        if (process.env.NODE_ENV == 'development') {
            let data = require('../config/api/packageRate_id116.json');
            store.state.paper.pkgRate = data.data;
            return;
        }
        axios.get(api.paper.goodRate, {
            params: util.getDateRange()
        }).then(res => {
            store.state.paper.pkgRate = res.data.data;
        });
    },
    // 纸机、切纸机好品率相差过大
    getAbnormalNum(store) {
        if (process.env.NODE_ENV == 'development') {
            let data = require('../config/api/paperAbnormal_id469.json');
            store.state.paper.abnormal = data.data;
            return;
        }
        axios.get(api.paper.goodRate, {
            params: util.getDateRange()
        }).then(res => {
            store.state.paper.abnormal = res.data.data;
        });
    },
    // 质量问题发布
    getPQualityQuestion(store) {
        if (process.env.NODE_ENV == 'development') {
            let data = require('../config/api/paperQuestion_id470.json');
            store.state.paper.question = data.data;
            return;
        }
        axios.get(api.paper.question, {
            params: util.getDateRange()
        }).then(res => {
            store.state.paper.question = res.data.data;
        })
    },
    // 过程质量控制水平
    getPSPCScore(store) {
        if (process.env.NODE_ENV == 'development') {
            let data = require('../config/api/paperSPC_id60.json');
            store.state.paper.spc = data.data;
            return;
        }
        axios.get(api.paper.spc, {
            params: util.getDateRange()
        }).then(res => {
            store.state.paper.spc = res.data.data;
        })
    },
    paperScore(store) {
        let sum = 0;
        Object.keys(kpi.paper).forEach(item => sum += kpi.paper[item].score);
        let curScore = store.getters.pGoodRateScore.score + store.getters.cGoodRateScore.score + store.getters.pkgRateScore.score + store.getters.rePkgRateScore
            .score + store.getters.abnormalScore.score + store.getters.pQuestionScore.score + store.getters.PSPCScore.score;
        store.state.score.paper = (curScore / sum * 100).toFixed(2);
    },
    initPaper(store) {
        store.dispatch('getPGoodRate');
        store.dispatch('getPkgRate');
        store.dispatch('getAbnormalNum');
        store.dispatch('getPQualityQuestion');
        store.dispatch('getPSPCScore');
    },
}

export default actions