<template>
  <div class="content">
    <div ref="main" class="chart-main"></div>
    <div ref="goodrate" class="chart-main"></div>
  </div>
</template>
<style scoped>
  .content,
  .layout-content {
    font-size: 12pt;
  }

  .chart-main {
    width: 100%;
    height: 300px;
  }

</style>
<script>
  import echarts from 'echarts';
  import 'echarts-liquidfill';

  import util from '../config/common';
  import main from '../config/dashboard/main';

  export default {
    computed: {
      score() {
        return this.$store.state.score;
      },
      chart() {
        return {
          main: echarts.init(this.$refs.main),
          goodrate: echarts.init(this.$refs.goodrate)
        }
      },
      option() {
        let goodrateOption = main.option(this.score);
        goodrateOption.title = goodrateOption.title[1];
        goodrateOption.title.text = '2.好品率';
        return {
          main: main.option(this.score),
          goodrate: goodrateOption
        }
      },
      bread: {
        get() {
          return this.$store.state.bread;
        },
        set(val) {
          this.$store.commit('setBread', val);
        }
      }
    },
    watch: {
      'score.print' (val) {
        this.updateMainChart();
      },
      'score.paper' (val) {
        this.updateMainChart();
      }
    },
    methods: {
      // 纸机好品率
      getPGoodRate() {

      },
      // 好品率
      getGoodRate() {

      },
      // 产量完成情况
      getPrintNum() {

      },
      // 完成率
      getPrintRate() {

      },
      // OpenNum
      getOpenNum() {

      },
      updateMainChart() {
        this.chart.main.setOption(this.option.main);
        this.chart.goodrate.setOption(this.option.goodrate);
      },
      resizeChart() {
        this.chart.main.resize();
        this.chart.goodrate.resize();
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
      }
    },
    mounted() {
      // 路由使用keep-alive，无需每次加载数据,对于不保持状态的路由，使用activated更新数据
      this.updateMainChart();
      this.initEvent();
    }
  }

</script>
