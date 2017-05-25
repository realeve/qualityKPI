<template>
  <div>
    <IFullPage/>
    <div class="content">
      <div ref="main" class="chart-main"></div>
      <Row>
        <Col span="12">
        <div ref="goodrate" class="chart"></div>
        </Col>
        <Col span="12">
        <div ref="goodratePaper" class="chart"></div>
        </Col>

        <Col span="12">
        <div ref="nocheck" class="chart"></div>
        </Col>
        <Col span="12">
        <div ref="abnormal" class="chart"></div>
        </Col>

        <Col span="12">
        <div ref="opennum" class="chart"></div>
        </Col>
        <Col span="12">
        <div ref="packagerate" class="chart"></div>
        </Col>

        <Col span="24">
        <div ref="question" class="chart" style="height:230px;"></div>
        </Col>
        <Col span="12">
        <div ref="plate" class="chart"></div>
        </Col>
        <Col span="12">
        <div ref="reason" class="chart2"></div>
        </Col>
        <Col span="12">
        <div ref="prodnum" class="chart"></div>
        </Col>
        <Col span="12">
        <div ref="prodGauge" class="chart"></div>
        </Col>
      </Row>
    </div>
  </div>

</template>
<style scoped>
  .content,
  .layout-content {
    font-size: 12pt;
  }

  .chart-main {
    width: 100%;
    height: 250px;
  }

  .chart {
    height: 350px;
    padding-top: 25px;
  }

  .chart2 {
    height: 450px;
    padding-top: 25px;
  }

</style>
<script>
  import echarts from 'echarts';
  import 'echarts-liquidfill';
  import {
    mapActions
  } from 'vuex';

  import util from '../config/common';
  import theme from '../config/echartsTheme';

  import chartFormatter from '../config/dashboard/index';

  import IFullPage from '@/components/UI/IFullPage';
  export default {
    components: {
      IFullPage
    },
    computed: {
      score() {
        return this.$store.state.score;
      },
      chart() {
        return {
          main: echarts.init(this.$refs.main),
          goodrate: echarts.init(this.$refs.goodrate, theme),
          goodratePaper: echarts.init(this.$refs.goodratePaper, theme),
          opennum: echarts.init(this.$refs.opennum, theme),
          abnormal: echarts.init(this.$refs.abnormal, theme),
          nocheck: echarts.init(this.$refs.nocheck, theme),
          packagerate: echarts.init(this.$refs.packagerate, theme),
          plate: echarts.init(this.$refs.plate, theme),
          question: echarts.init(this.$refs.question, theme),
          reason: echarts.init(this.$refs.reason, theme),
          prodnum:echarts.init(this.$refs.prodnum,theme),
          prodGauge:echarts.init(this.$refs.prodGauge,theme),
        }
      },
      option() {
        return {
          main: chartFormatter.main.option(this.score),
          goodrate: chartFormatter.getLineOption(this.print.goodrate),
          goodratePaper: chartFormatter.getLineOption(this.paper.goodrate),
          opennum: chartFormatter.getLineOption(this.print.opennum),
          abnormal: chartFormatter.calenderMonth(this.paper.abnormal),
          nocheck: chartFormatter.getLineOption(this.print.nocheck),
          packagerate: chartFormatter.getLineOption(this.paper.packagerate),
          plate: chartFormatter.calenderMonth(this.print.plate),
          question: chartFormatter.calender(this.print.question),
          reason: chartFormatter.sankey(this.paper.reason),
          prodnum:chartFormatter.getLineOption(this.print.prodnum),
          prodGauge:chartFormatter.pictorialBar(this.print.prodnum),
        }
      },
      bread: {
        get() {
          return this.$store.state.bread;
        },
        set(val) {
          this.$store.commit('setBread', val);
        }
      },
      print() {
        return this.$store.state.dashboard.print;
      },
      paper() {
        return this.$store.state.dashboard.paper;
      }
    },
    watch: {
      'score.print' () {
        this.chart.main.setOption(this.option.main);
      },
      'score.paper' () {
        this.chart.main.setOption(this.option.main);
      },
      'print.goodrate' () {
        this.chart.goodrate.setOption(this.option.goodrate);
      },
      'paper.goodrate' () {
        this.chart.goodratePaper.setOption(this.option.goodratePaper);
      },
      'print.opennum' () {
        this.chart.opennum.setOption(this.option.opennum);
      },
      'paper.abnormal' () {
        this.chart.abnormal.setOption(this.option.abnormal);
      },
      'print.nocheck' () {
        this.chart.nocheck.setOption(this.option.nocheck);
      },
      'paper.packagerate' () {
        this.chart.packagerate.setOption(this.option.packagerate);
      },
      'print.plate' () {
        this.chart.plate.setOption(this.option.plate);
      },
      'print.question' () {
        this.chart.question.setOption(this.option.question);
      },
      'paper.reason' () {
        this.chart.reason.setOption(this.option.reason);
      },
      'print.prodnum' () {
        this.chart.prodnum.setOption(this.option.prodnum);
        this.option.prodGauge.title.text = '产品生产计划完成率';
        this.chart.prodGauge.setOption(this.option.prodGauge);
      },
    },
    methods: {
      resizeChart() {
        Object.keys(this.chart).forEach(key=>this.chart[key].resize());
      },
      initEvent() {
        // 水泡图点击事件
        this.chart.main.on('click', param => {
          let router = param.seriesIndex == 0 ? '/print/' : '/paper';
          this.$router.push(router);
          this.bread = util.getBread(router);
          this.$store.commit('setActiveMenu', router);
        });

        window.onresize = () => {
          this.resizeChart();
        }

        // 图表连接(legend需要相同，否则报错)
        // echarts.connect([this.chart.goodrate,this.chart.opennum]);

      },
      ...mapActions(['initDashboard'])
    },
    mounted() {
      // 路由使用keep-alive，无需每次加载数据,对于不保持状态的路由，使用activated更新数据
      this.initEvent();
      this.initDashboard();
    }
  }

</script>
