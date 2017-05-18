<template>
  <div class="content">
    <Row>
      <Col span="11">
      <Card dis-hover :bordered="false">
        <p slot="title">1.纸机好品率
          <Tag :color="pGoodRateScore.color"> {{pGoodRateScore.percent}} 分</Tag>
        </p>
        <Table :columns="column.goodRate" :data="pGoodRateScore.detail" size="small"></Table>
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
        <p slot="title">2.切纸机好品率
          <Tag :color="cGoodRateScore.color"> {{cGoodRateScore.percent}} 分</Tag>
        </p>
        <Table :columns="column.goodRate" :data="cGoodRateScore.detail" size="small"></Table>
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
        <p slot="title">3.一次封包率
          <Tag :color="pkgRateScore.color"> {{pkgRateScore.percent}} 分</Tag>
        </p>
        <Table :columns="column.pkgRate" :data="pkgRateScore.detail" size="small"></Table>
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
        <p slot="title">4.返工率
          <Tag :color="rePkgRateScore.color"> {{rePkgRateScore.percent}} 分</Tag>
        </p>
        <Table :columns="column.rePkgRate" :data="rePkgRateScore.detail" size="small"></Table>
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
        <p slot="title">5.质量问题发布
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
        <p slot="title">6.过程质量控制水平
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
        <p slot="title">7.异常轴数量(好品率相差5以上)
          <Tag :color="abnormalScore.color"> {{abnormalScore.percent}} 分</Tag>
        </p>
        <Table :columns="column.abnormal" :data="abnormalScore.detail" size="small"></Table>
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
        cGoodRate: [],
        pkgRate: [],
        question: [],
        spc: [],
        abnormal: []
      }
    },
    computed: {
      column() {
        return {
          goodRate: util.getColumnList(['品种', '好品率']),
          pkgRate: util.getColumnList(['品种', '一次封包率']),
          rePkgRate: util.getColumnList(['品种', '返工率']),
          question: util.getColumnList(['状态', '问题数'], false),
          spc: util.getColumnList(['品种', '得分']),
          abnormal:util.getColumnList(['品种','异常轴个数'])
        };
      },
      pGoodRateScore() {
        return util.calcScoreDetail({
          dataNum: kpi.paper.goodRate,
          valIdx: 4,
          numArr: this.goodRate,
          type: kpi.scoreType.DESC
        });
      },
      cGoodRateScore() {
        return util.calcScoreDetail({
          dataNum: kpi.paper.cGoodRate,
          valIdx: 4,
          numArr: this.cGoodRate,
          type: kpi.scoreType.DESC
        });
      },
      pkgRateScore() {
        return util.calcScoreDetail({
          dataNum: kpi.paper.pkgRate,
          valIdx: 3,
          numArr: this.pkgRate,
          type: kpi.scoreType.DESC
        });
      },
      rePkgRateScore() {
        return util.calcScoreDetail({
          dataNum: kpi.paper.rePkgRate,
          valIdx: 6,
          numArr: this.pkgRate,
          type: kpi.scoreType.ASC
        });
      },
      abnormalScore() {
        return util.calcScoreDetail({
          dataNum: kpi.paper.abnormal,
          valIdx: 1,
          numArr: this.abnormal,
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
        score = (1 - score / kpi.paper.question.subScore) * 100;
        return {
          score: parseFloat((score / 100 * kpi.paper.question.score).toFixed(2)),
          percent: parseFloat(score.toFixed(2)),
          color: util.getLevelColor(score),
          detail
        };
      },
      SPCScore() {
        return util.calcScoreDetail({
          dataNum: kpi.paper.spc,
          valIdx: 1,
          numArr: this.spc,
          type: kpi.scoreType.DESC
        });
      },
      subScore() {
        let sum = 0;
        Object.keys(kpi.paper).forEach(item => sum += kpi.paper[item].score);

        let curScore = this.pGoodRateScore.score + this.cGoodRateScore.score + this.pkgRateScore.score + this.rePkgRateScore
          .score + this.abnormalScore.score +  this.questionScore.score +  this.SPCScore.score ;
        return (curScore / sum * 100).toFixed(2);
      },
      paperScore: {
        get() {
          return this.$store.state.score.paper;
        },
        set(val) {
          this.setPaperScore(val);
        }
      },
    },
    watch: {
      subScore(val) {
        this.paperScore = val;
      }
    },
    methods: {
      ...mapMutations([
        'setPaperScore'
      ]),
      splitCutData(data) {
        let goodRate = [],
          cGoodRate = [];
        data.data.forEach(item => {
          if (item[1] == '纸机') {
            goodRate.push(item);
          } else {
            cGoodRate.push(item);
          }
        })
        this.goodRate = goodRate;
        this.cGoodRate = cGoodRate;
      },
      // 纸机好品率
      getPGoodRate() {
        if (process.env.NODE_ENV == 'development') {
          let data = require('../config/api/paperGoodrate_id123.json');
          this.splitCutData(data);
          return;
        }
        axios.get(api.paper.goodRate, {
          params: util.getDateRange()
        }).then(res => {
          this.splitCutData(res.data);
        })
      },
      // 成品率
      // getWellRate() {

      // },
      // 封包率
      getPkgRate() {
        if (process.env.NODE_ENV == 'development') {
          let data = require('../config/api/packageRate_id116.json');
          this.pkgRate = data.data;
          return;
        }
        axios.get(api.paper.goodRate, {
          params: util.getDateRange()
        }).then(res => {
          this.pkgRate = res.data.data;
        });
      },
      // 纸机、切纸机好品率相差过大
      getAbnormalNum() {
        if (process.env.NODE_ENV == 'development') {
          let data = require('../config/api/paperAbnormal_id469.json');
          this.abnormal = data.data;
          return;
        }
        axios.get(api.paper.goodRate, {
          params: util.getDateRange()
        }).then(res => {
          this.abnormal = res.data.data;
        });
      },
      // 质量问题发布
      getQualityQuestion() {
        if (process.env.NODE_ENV == 'development') {
          let data = require('../config/api/paperQuestion_id470.json');
          this.question = data.data;
          return;
        }
        axios.get(api.paper.question, {
          params: util.getDateRange()
        }).then(res => {
          this.question = res.data.data;
        })
      },
      // 过程质量控制水平
      getSPCScore() {
        if (process.env.NODE_ENV == 'development') {
          let data = require('../config/api/paperSPC_id60.json');
          this.spc = data.data;
          return;
        }
        axios.get(api.paper.spc, {
          params: util.getDateRange()
        }).then(res => {
          this.spc = res.data.data;
        })
      },
      init() {
        this.getPGoodRate();
        this.getPkgRate();
        this.getAbnormalNum();
        this.getQualityQuestion();
        this.getSPCScore();
      }
    },
    created() {
      this.init();
    }
  }

</script>
