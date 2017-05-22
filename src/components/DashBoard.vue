<template>
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
    </Row>
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
    padding-top:25px;
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

  import main from '../config/dashboard/main';
  import getLineOption from '../config/dashboard/printGoodrate';

  export default {
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
        }
      },
      option() {
        return {
          main: main.option(this.score),
          goodrate: getLineOption(this.print.goodrate),
          goodratePaper: getLineOption(this.paper.goodrate),
          opennum:getLineOption(this.print.opennum),
          abnormal:getLineOption(this.paper.abnormal),
          nocheck:getLineOption(this.print.nocheck),
          packagerate:getLineOption(this.paper.packagerate),
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
      'print.goodrate'(){
        this.chart.goodrate.setOption(this.option.goodrate);
      },
      'paper.goodrate'(){
        this.chart.goodratePaper.setOption(this.option.goodratePaper);
      },
      'print.opennum'(){
        this.chart.opennum.setOption(this.option.opennum);
      },
      'paper.abnormal'(){
        this.chart.abnormal.setOption(this.option.abnormal);
      },
      'print.nocheck'(){
        this.chart.nocheck.setOption(this.option.nocheck);
      },
      'paper.packagerate'(){
        this.chart.packagerate.setOption(this.option.packagerate);
      },
    },
    methods: {    
      resizeChart() {
        this.chart.main.resize();
        this.chart.goodrate.resize();
        this.chart.goodratePaper.resize();
        this.chart.opennum.resize();
        this.chart.abnormal.resize();
        this.chart.nocheck.resize();
        this.chart.packagerate.resize();
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
