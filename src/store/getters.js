// vues-computed

import util from '../config/common'
import settings from '../config/settings'
import kpi from '../config/scoreKPI'
import _ from 'lodash'

let getters = {
  goodRateScore(state) {
    return util.calcScoreDetail({
      dataNum: kpi.print.goodRate,
      valIdx: 2,
      numArr: state.print.goodRate,
      type: kpi.scoreType.DESC
    });
  },
  openNumScore(state) {
    return util.calcScoreDetail({
      dataNum: kpi.print.openNum,
      valIdx: 4,
      numArr: state.print.openNum,
      type: kpi.scoreType.ASC
    });
  },
  plateScore(state) {
    let numArr = state.print.plateNum.filter(item => item[0] != '钢制金属版');
    return util.calcScoreDetail({
      dataNum: kpi.print.plateNum,
      valIdx: 1,
      numArr,
      type: kpi.scoreType.DESC
    });
  },
  machineWeak(state) {
    return util.calcScoreDetail({
      dataNum: kpi.print.machineWeak,
      valIdx: 3,
      numArr: state.print.openNum,
      type: kpi.scoreType.ASC
    });
  },
  fakeRate(state) {
    return util.calcScoreDetail({
      dataNum: kpi.print.fakeRate,
      valIdx: 6,
      numArr: state.print.openNum,
      type: kpi.scoreType.ASC
    });
  },
  // 未检
  uncheckedScore(state) {
    return util.calcScoreDetail({
      dataNum: kpi.print.uncheckedNum,
      valIdx: 1,
      numArr: state.print.uncheckedNum,
      type: kpi.scoreType.ASC
    });
  },
  questionScore(state) {
    let score = 0;
    let subScore = kpi.print.question.score;
    let ratio = 100 / subScore;
    let detail = state.print.question.map(item => {
      score += ((item[0] == '已完成') ? 0.05 : .1) * item[1];
      return {
        prod: item[0],
        value: item[1]
      };
    })
    score = subScore - score;
    return {
      score: parseFloat((Math.max(score, 0)).toFixed(2)),
      percent: parseFloat((ratio * score).toFixed(2)),
      color: util.getLevelColor(score * ratio),
      subScore: kpi.print.question.score,
      detail
    };
  },
  riskScore(state) {
    let score = 0;
    let subScore = kpi.print.risk.score;
    let ratio = 100 / subScore;
    let detail = state.print.risk.map(item => {
      score += ((item[0] == '已完成') ? 0.05 : 0.1) * item[1];
      return {
        prod: item[0],
        value: item[1]
      };
    })
    score = subScore - score;
    return {
      score: parseFloat((Math.max(score, 0)).toFixed(2)),
      percent: parseFloat((ratio * score).toFixed(2)),
      color: util.getLevelColor(score * ratio),
      subScore: kpi.print.risk.score,
      detail
    };
  },
  qfjScore(state) {
    return util.calcScoreDetail({
      dataNum: kpi.print.qfj,
      valIdx: 1,
      numArr: state.print.qfj,
      type: kpi.scoreType.ASC
    });
  },
  SPCScore(state) {
    return util.calcScoreDetail({
      dataNum: kpi.print.spc,
      valIdx: 1,
      numArr: state.print.spc,
      type: kpi.scoreType.DESC
    });
  },
  procRateScore(state) {
    let sum = 0;
    let sub = 0;
    // console.log(state.print.procRate);
    let detail = state.print.procRate.map(item => {
      sum += parseInt(item[1]);
      if (item[0] == '裁封') {
        sub = item[1];
      }
      return {
        prod: item[0],
        value: item[1]
      };
    })

    let percent = parseFloat((sub / sum) * 100).toFixed(2);
    let score = parseFloat((kpi.print.procRate.score * percent / 100).toFixed(2));
    return {
      score,
      percent,
      color: util.getLevelColor(percent),
      detail
    };
  },
  pGoodRateScore(state) {
    return util.calcScoreDetail({
      dataNum: kpi.paper.goodRate,
      valIdx: 4,
      numArr: state.paper.goodRate,
      type: kpi.scoreType.DESC
    });
  },
  cGoodRateScore(state) {
    return util.calcScoreDetail({
      dataNum: kpi.paper.cGoodRate,
      valIdx: 4,
      numArr: state.paper.cGoodRate,
      type: kpi.scoreType.DESC
    });
  },
  pkgRateScore(state) {
    return util.calcScoreDetail({
      dataNum: kpi.paper.pkgRate,
      valIdx: 3,
      numArr: state.paper.pkgRate,
      type: kpi.scoreType.DESC
    });
  },
  rePkgRateScore(state) {
    return util.calcScoreDetail({
      dataNum: kpi.paper.rePkgRate,
      valIdx: 6,
      numArr: state.paper.pkgRate,
      type: kpi.scoreType.ASC
    });
  },
  abnormalScore(state) {
    return util.calcScoreDetail({
      dataNum: kpi.paper.abnormal,
      valIdx: 1,
      numArr: state.paper.abnormal,
      type: kpi.scoreType.ASC
    });
  },
  pQuestionScore(state) {
    let score = 0;
    let detail = state.paper.question.map(item => {
      score += ((item[0] == '已完成') ? 0.5 : 1) * item[1];
      return {
        prod: item[0],
        value: item[1]
      };
    })
    score = (1 - score / kpi.paper.question.subScore) * 100;
    return {
      score: parseFloat((score / 100 * kpi.paper.question.score).toFixed(2)),
      percent: parseFloat(score.toFixed(2)),
      color: util.getLevelColor(score),
      detail
    };
  },
  PSPCScore(state) {
    return util.calcScoreDetail({
      dataNum: kpi.paper.spc,
      valIdx: 1,
      numArr: state.paper.spc,
      type: kpi.scoreType.DESC
    });
  }
}

export default getters
