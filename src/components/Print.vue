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
        <p slot="title">此处放置一些说明文字</p>
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
        <p slot="title">此处放置一些说明文字</p>
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
        column: {
          goodRate: [{
              type: 'index',
              width: 60,
              align: 'center'
            },
            {
              title: '品种',
              key: 'prod'
            },
            {
              title: '好品率',
              key: 'value'
            },
            {
              title: '评价等级',
              key: 'desc'
            }
          ],
          openNum: [{
              type: 'index',
              width: 60,
              align: 'center'
            },
            {
              title: '品种',
              key: 'prod'
            },
            {
              title: '开包量',
              key: 'value'
            },
            {
              title: '评价等级',
              key: 'desc'
            }
          ],
          // 机检漏检
          machineWeak:'',
          plateNum: '',
          uncheckedNum: '',
          question: '',
          risk: '',
          qfj: '',
          spc: ''
        },
        goodRate: [],
        openNum: [],
        plateNum: [],
        uncheckedNum: [],
        question: [],
        risk: [],
        qfj: [],
        spc: [],
      }
    },
    computed: {
      goodRateScore() {

        let subScore = kpi.print.goodRate.score;
        let sum = 0;

        let levelList = this.goodRate.map(item => {
          let level = kpi.print.goodRate.level[item[0]];
          let score = subScore / this.goodRate.length;
          let data = util.getScoreLevel({
            data: item[2],
            level,
            score,
            type: 0
          });
          sum += data.score;
          return Object.assign({
            prod: item[0],
            value: item[2]
          }, data);
        });

        let percent = sum * 100 / subScore;

        return {
          score: parseFloat(sum.toFixed(3)),
          percent: parseFloat(percent.toFixed(2)),
          detail: levelList,
          color: this.getLevelColor(percent)
        }
      },
      openNumScore() {
        let subScore = kpi.print.openNum.score;
        let sum = 0;
        let levelList = this.openNum.map(item => {
          let level = kpi.print.openNum.level[item[0]];
          let score = subScore / this.openNum.length;
          let data = util.getScoreLevel({
            data: item[4],
            level,
            score,
            type: 1
          });
          sum += data.score;
          return Object.assign({
            prod: item[0],
            value: item[4]
          }, data);
        });

        let percent = sum * 100 / subScore;
        levelList = _.sortBy(levelList, item => item.prod);
        return {
          score: parseFloat(sum.toFixed(3)),
          percent: parseFloat(percent.toFixed(2)),
          detail: levelList,
          color: this.getLevelColor(percent)
        }
      },
      plateScore() {

      },
      // 漏废
      uncheckedScore() {

      },
      questionScore() {

      },
      riskScore() {

      },
      qfjScore() {

      },
      SPCScore() {

      },
      printScore: {
        get() {
          return this.$store.state.score.print;
        },
        set(val) {
          this.setPrintScore(val);
        }
      }
    },
    methods: {
      ...mapMutations([
        // 'setPrintGoodRate','setOpenNum','setPlateNum','setUncheckedNum','setQuestion','setRisk','setQfj','setSPC',
        'setPrintScore'
      ]),
      getLevelColor(score) {
        if (score >= 80) {
          return 'green';
        } else if (score >= 60) {
          return 'yellow';
        }
        return 'red';
      },
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
          this.openNum = res.data.data;
        })
      },
      // 耐印率
      getPlatePrintNum() {

      },
      // 漏废
      getUncheckedNum() {

      },
      // 未检
      getNoCheckNum() {

      },
      // 质量问题发布
      getQualityQuestion() {

      },
      // 风险隐患排查
      getQualityRisk() {

      },
      // 清分拒钞
      getUncheckByQFJ() {

      },
      // 过程质量控制水平
      getSPCScore() {

      },
      // 计算总分
      calcSubScore() {
        this.printScore = 155;
      },
      init() {
        this.calcSubScore();
        this.getGoodRate();
        this.getOpenNum();
      }
    },
    created() {
      this.init();
    }
  }

</script>
