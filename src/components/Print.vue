<template>
  <div class="content">
    <Row>
      <Col span="11">
      <Card dis-hover :bordered="false">
        <p slot="title">1.好品率
          <Tag :color="goodRateScore.color"> {{goodRateScore.percent}} 分</Tag>
        </p>
        <Table :columns="column.goodRate" :data="goodRateScore.detail" size="small"></Table>
      </Card>
      </Col>
      <Col span="11" offset="2">
      <Card dis-hover :bordered="false">
        <p slot="title">历史数据</p>
        <p> 日历图，显示各类型数据的得分情况，颜色标红绿橙 </p>
      </Card>
      </Col>
    </Row>
    <Row>
      <Col span="11">
      <Card dis-hover :bordered="false">
        <p slot="title">2.开包量
          <Tag :color="openNumScore.color"> {{openNumScore.percent}} 分</Tag>
        </p>
        <Table :columns="column.openNum" :data="openNumScore.detail" size="small"></Table>
      </Card>
      </Col>
      <Col span="11" offset="2">
      <Card dis-hover :bordered="false">
        <p slot="title">历史数据</p>
        <p> 日历图，显示各类型数据的得分情况，颜色标红绿橙 </p>
      </Card>
      </Col>
    </Row>
    <Row>
      <Col span="11">
      <Card dis-hover :bordered="false">
        <p slot="title">3.耐印量
          <Tag :color="plateScore.color"> {{plateScore.percent}} 分</Tag>
        </p>
        <Table :columns="column.plateNum" :data="plateScore.detail" size="small"></Table>
      </Card>
      </Col>
      <Col span="11" offset="2">
      <Card dis-hover :bordered="false">
        <p slot="title">历史数据</p>
        <p> 日历图，显示各类型数据的得分情况，颜色标红绿橙 </p>
      </Card>
      </Col>
    </Row>
    <Row>
      <Col span="11">
      <Card dis-hover :bordered="false">
        <p slot="title">4.机检漏废
          <Tag :color="machineWeak.color"> {{machineWeak.percent}} 分</Tag>
        </p>
        <Table :columns="column.machineWeak" :data="machineWeak.detail" size="small"></Table>
      </Card>
      </Col>
      <Col span="11" offset="2">
      <Card dis-hover :bordered="false">
        <p slot="title">历史数据</p>
        <p> 日历图，显示各类型数据的得分情况，颜色标红绿橙 </p>
      </Card>
      </Col>
    </Row>
    <Row>
      <Col span="11">
      <Card dis-hover :bordered="false">
        <p slot="title">5.机检未检
          <Tag :color="uncheckedScore.color"> {{uncheckedScore.percent}} 分</Tag>
        </p>
        <Table :columns="column.uncheckedNum" :data="uncheckedScore.detail" size="small"></Table>
      </Card>
      </Col>
      <Col span="11" offset="2">
      <Card dis-hover :bordered="false">
        <p slot="title">历史数据</p>
        <p> 日历图，显示各类型数据的得分情况，颜色标红绿橙 </p>
      </Card>
      </Col>
    </Row>
    <Row>
      <Col span="11">
      <Card dis-hover :bordered="false">
        <p slot="title">6.码后核查工艺执行率
          <Tag :color="procRateScore.color"> {{procRateScore.percent}} 分</Tag>
        </p>
        <Table :columns="column.procRate" :data="procRateScore.detail" size="small"></Table>
      </Card>
      </Col>
      <Col span="11" offset="2">
      <Card dis-hover :bordered="false">
        <p slot="title">历史数据</p>
        <p> 日历图，显示各类型数据的得分情况，颜色标红绿橙 </p>
      </Card>
      </Col>
    </Row>
    <Row>
      <Col span="11">
      <Card dis-hover :bordered="false">
        <p slot="title">7.小开作废率
          <Tag :color="fakeRate.color"> {{fakeRate.percent}} 分</Tag>
        </p>
        <Table :columns="column.fakeRate" :data="fakeRate.detail" size="small"></Table>
      </Card>
      </Col>
      <Col span="11" offset="2">
      <Card dis-hover :bordered="false">
        <p slot="title">历史数据</p>
        <p> 日历图，显示各类型数据的得分情况，颜色标红绿橙 </p>
      </Card>
      </Col>
    </Row>
    <Row>
      <Col span="11">
      <Card dis-hover :bordered="false">
        <p slot="title">8.清分机拒检
          <Tag :color="qfjScore.color"> {{qfjScore.percent}} 分</Tag>
        </p>
        <Table :columns="column.qfj" :data="qfjScore.detail" size="small"></Table>
      </Card>
      </Col>
      <Col span="11" offset="2">
      <Card dis-hover :bordered="false">
        <p slot="title">历史数据</p>
        <p> 日历图，显示各类型数据的得分情况，颜色标红绿橙 </p>
      </Card>
      </Col>
    </Row>
    <Row>
      <Col span="11">
      <Card dis-hover :bordered="false">
        <p slot="title">9.过程质量控制水平
          <Tag :color="SPCScore.color"> {{SPCScore.percent}} 分</Tag>
        </p>
        <Table :columns="column.spc" :data="SPCScore.detail" size="small"></Table>
      </Card>
      </Col>
      <Col span="11" offset="2">
      <Card dis-hover :bordered="false">
        <p slot="title">历史数据</p>
        <p> 日历图，显示各类型数据的得分情况，颜色标红绿橙 </p>
      </Card>
      </Col>
    </Row>
    <Row>
      <Col span="11">
      <Card dis-hover :bordered="false">
        <p slot="title">10.质量问题发布
          <Tag :color="questionScore.color"> {{questionScore.percent}} 分</Tag>
        </p>
        <Table :columns="column.question" :data="questionScore.detail" size="small"></Table>
      </Card>
      </Col>
      <Col span="11" offset="2">
      <Card dis-hover :bordered="false">
        <p slot="title">历史数据</p>
        <p> 日历图，显示各类型数据的得分情况，颜色标红绿橙 </p>
      </Card>
      </Col>
    </Row>
    <Row>
      <Col span="11">
      <Card dis-hover :bordered="false">
        <p slot="title">11.风险隐患排查
          <Tag :color="riskScore.color"> {{riskScore.percent}} 分</Tag>
        </p>
        <Table :columns="column.risk" :data="riskScore.detail" size="small"></Table>
      </Card>
      </Col>
      <Col span="11" offset="2">
      <Card dis-hover :bordered="false">
        <p slot="title">历史数据</p>
        <p> 日历图，显示各类型数据的得分情况，颜色标红绿橙 </p>
      </Card>
      </Col>
    </Row>
  </div>
</template>
<style scoped>
  .content {
    font-size: 12pt;
  }

</style>
<script>
  import axios from 'axios';
  import util from '../config/common';
  import settings from '../config/settings';
  import kpi from '../config/scoreKPI';
  import _ from "lodash";

  let api = settings.api;

  import {
    mapMutations
  } from 'vuex';

  export default {
    data() {
      return {
        goodRate: [],
        openNum: [],
        plateNum: [],
        uncheckedNum: [],
        question: [],
        risk: [],
        qfj: [],
        spc: [],
        procRate: []
      }
    },
    computed: {
      column() {
        return {
          goodRate: util.getColumnList(['品种', '好品率']),
          openNum: util.getColumnList(['品种', '开包量']),
          plateNum: util.getColumnList(['类型', '耐印率']),
          // 机检漏检
          machineWeak: util.getColumnList(['品种', 'OCR多取出']),
          fakeRate: util.getColumnList(['品种', 'OCR小开作废率']),
          uncheckedNum: util.getColumnList(['品种', '机检未检']),
          question: util.getColumnList(['状态', '问题数'], false),
          risk: util.getColumnList(['状态', '问题数'], false),
          qfj: util.getColumnList(['品种', '拒检']),
          spc: util.getColumnList(['品种', '得分']),
          procRate: util.getColumnList(['品种', '大万数'], false),
        };
      },
      goodRateScore() {
        return util.calcScoreDetail({
          dataNum: kpi.print.goodRate,
          valIdx: 2,
          numArr: this.goodRate,
          type: kpi.scoreType.DESC
        });
      },
      openNumScore() {
        return util.calcScoreDetail({
          dataNum: kpi.print.openNum,
          valIdx: 4,
          numArr: this.openNum,
          type: kpi.scoreType.ASC
        });
      },
      plateScore() {
        this.plateNum = this.plateNum.filter(item => item[0] != '钢制金属版');
        return util.calcScoreDetail({
          dataNum: kpi.print.plateNum,
          valIdx: 1,
          numArr: this.plateNum,
          type: kpi.scoreType.DESC
        });
      },
      machineWeak() {
        return util.calcScoreDetail({
          dataNum: kpi.print.machineWeak,
          valIdx: 3,
          numArr: this.openNum,
          type: kpi.scoreType.ASC
        });
      },
      fakeRate() {
        return util.calcScoreDetail({
          dataNum: kpi.print.fakeRate,
          valIdx: 7,
          numArr: this.openNum,
          type: kpi.scoreType.ASC
        });
      },
      // 未检
      uncheckedScore() {
        return util.calcScoreDetail({
          dataNum: kpi.print.uncheckedNum,
          valIdx: 1,
          numArr: this.uncheckedNum,
          type: kpi.scoreType.ASC
        });
      },
      questionScore() {
        let score = 0;
        let detail = this.question.map(item => {
          score += ((item[0] == '已完成') ? 0.5 : 1) * item[1];
          return {
            prod: item[0],
            value: item[1]
          };
        })
        score = (1 - score / kpi.print.question.subScore) * 100;
        return {
          score: parseFloat((score / 100 * kpi.print.question.score).toFixed(2)),
          percent: parseFloat(score.toFixed(2)),
          color: util.getLevelColor(score),
          detail
        };
      },
      riskScore() {
        let score = 0;
        let detail = this.risk.map(item => {
          score += ((item[0] == '已完成') ? 0.5 : 1) * item[1];
          return {
            prod: item[0],
            value: item[1]
          };
        })
        score = (1 - score / kpi.print.risk.subScore) * 100;
        return {
          score: parseFloat((score / 100 * kpi.print.risk.score).toFixed(2)),
          percent: parseFloat(score.toFixed(2)),
          color: util.getLevelColor(score),
          detail
        };
      },
      qfjScore() {
        return util.calcScoreDetail({
          dataNum: kpi.print.qfj,
          valIdx: 1,
          numArr: this.qfj,
          type: kpi.scoreType.ASC
        });
      },
      SPCScore() {
        return util.calcScoreDetail({
          dataNum: kpi.print.spc,
          valIdx: 1,
          numArr: this.spc,
          type: kpi.scoreType.DESC
        });
      },
      subScore() {
        let sum = 0;
        Object.keys(kpi.print).forEach(item => sum += kpi.print[item].score);

        let curScore = this.goodRateScore.score + this.openNumScore.score + this.plateScore.score + this.machineWeak
          .score + this.fakeRate.score + this.uncheckedScore.score + this.questionScore.score + this.riskScore.score +
          this.qfjScore.score + this.SPCScore.score + this.procRateScore.score;
        return (curScore / sum * 100).toFixed(2);
      },
      printScore: {
        get() {
          return this.$store.state.score.print;
        },
        set(val) {
          // methods中提交 mapMutations后，无需以下形式，直接函数映射即可.
          // this.$store.commit('setPrintScore', val);
          this.setPrintScore(val);
        }
      },
      procRateScore() {
        let sum = 0;
        let sub = 0;
        let detail = this.procRate.map(item => {
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
      }
    },
    watch: {
      subScore(val) {
        this.printScore = val;
      }
    },
    methods: {
      ...mapMutations([
        // 'setPrintGoodRate','setOpenNum','setPlateNum','setUncheckedNum','setQuestion','setRisk','setQfj','setSPC',
        'setPrintScore'
      ]),
      // 好品率
      getGoodRate() {
        axios.get(api.print.goodRate, {
          params: util.getDateRange()
        }).then(res => {
          this.goodRate = res.data.data;
        });
      },
      // 开包量
      getOpenNum() {
        axios.get(api.print.openNum, {
          params: util.getDateRange()
        }).then(res => {
          let data = _.sortBy(res.data.data, item => item[0]);
          this.openNum = data;
        })
      },
      // 耐印率
      getPlatePrintNum() {
        if (process.env.NODE_ENV == 'development') {
          let data = require('../config/api/plate.json');
          this.plateNum = data.data;
          return;
        }
        axios.get(api.print.plate, {
          params: util.getDateRange()
        }).then(res => {
          this.plateNum = res.data.data;
        })
      },
      // 未检
      getNoCheckNum() {
        if (process.env.NODE_ENV == 'development') {
          let data = require('../config/api/nochecked.json');
          this.uncheckedNum = data.data;
          return;
        }
        axios.get(api.print.unchecked, {
          params: util.getDateRange()
        }).then(res => {
          this.uncheckedNum = res.data.data;
        })
      },
      // 质量问题发布
      getQualityQuestion() {
        if (process.env.NODE_ENV == 'development') {
          let data = require('../config/api/question.json');
          this.question = data.data;
          return;
        }
        axios.get(api.print.question, {
          params: util.getDateRange()
        }).then(res => {
          this.question = res.data.data;
        })
      },
      // 风险隐患排查
      getQualityRisk() {
        if (process.env.NODE_ENV == 'development') {
          let data = require('../config/api/risk.json');
          this.risk = data.data;
          return;
        }
        axios.get(api.print.risk, {
          params: util.getDateRange()
        }).then(res => {
          this.risk = res.data.data;
        })
      },
      // 清分拒钞
      getUncheckByQFJ() {
        if (process.env.NODE_ENV == 'development') {
          let data = require('../config/api/qfj.json');
          this.qfj = data.data;
          return;
        }
        axios.get(api.print.qfj, {
          params: util.getDateRange()
        }).then(res => {
          this.qfj = res.data.data;
        })
      },
      // 过程质量控制水平
      getSPCScore() {
        if (process.env.NODE_ENV == 'development') {
          let data = require('../config/api/spc.json');
          this.spc = data.data;
          return;
        }
        axios.get(api.print.spc, {
          params: util.getDateRange()
        }).then(res => {
          this.spc = res.data.data;
        })
      },
      getProcRate() {
        if (process.env.NODE_ENV == 'development') {
          let data = require('../config/api/mhProc.json');
          this.procRate = data.data;
          return;
        }
        axios.get(api.print.procRate, {
          params: util.getDateRange()
        }).then(res => {
          this.procRate = res.data.data;
        })
      },
      init() {
        this.getGoodRate();
        this.getOpenNum();
        this.getPlatePrintNum();
        this.getNoCheckNum();
        this.getQualityQuestion();
        this.getQualityRisk();
        this.getUncheckByQFJ();
        this.getSPCScore();
        this.getProcRate();
      }
    },
    created() {
      this.init();
    }
  }

</script>
