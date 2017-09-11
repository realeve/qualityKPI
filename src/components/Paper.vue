<template>
  <div class="content">
    <Row>
      <Col span="12">
      <Card dis-hover :bordered="false">
        <p slot="title">1.纸机好品率({{pGoodRateScore.subScore}})
          <Tag :color="pGoodRateScore.color"> {{pGoodRateScore.percent}} %</Tag>
        </p>
        <Table :columns="column.goodRate" :data="pGoodRateScore.detail" size="small"></Table>
      </Card>
      <Card dis-hover :bordered="false">
        <p slot="title">2.切纸机好品率({{cGoodRateScore.subScore}})
          <Tag :color="cGoodRateScore.color"> {{cGoodRateScore.percent}} %</Tag>
        </p>
        <Table :columns="column.goodRate" :data="cGoodRateScore.detail" size="small"></Table>
      </Card>
      <Card dis-hover :bordered="false">
        <p slot="title">3.一次封包率({{pkgRateScore.subScore}})
          <Tag :color="pkgRateScore.color"> {{pkgRateScore.percent}} %</Tag>
        </p>
        <Table :columns="column.pkgRate" :data="pkgRateScore.detail" size="small"></Table>
      </Card>
      <Card dis-hover :bordered="false">
        <p slot="title">4.返工率({{rePkgRateScore.subScore}})
          <Tag :color="rePkgRateScore.color"> {{rePkgRateScore.percent}} %</Tag>
        </p>
        <Table :columns="column.rePkgRate" :data="rePkgRateScore.detail" size="small"></Table>
      </Card>
      </Col>
      <Col span="12">
      <Card dis-hover :bordered="false">
        <p slot="title">5.质量问题发布({{pQuestionScore.subScore}})
          <Tag :color="pQuestionScore.color"> {{pQuestionScore.percent}} %</Tag>
        </p>
        <Table :columns="column.question" :data="pQuestionScore.detail" size="small"></Table>
      </Card>
      <Card dis-hover :bordered="false">
        <p slot="title">6.过程质量控制水平({{PSPCScore.subScore}})
          <Tag :color="PSPCScore.color"> {{PSPCScore.percent}} %</Tag>
        </p>
        <Table :columns="column.spc" :data="PSPCScore.detail" size="small"></Table>
      </Card>
      <Card dis-hover :bordered="false">
        <p slot="title">7.异常轴(好品率差>5%)比例({{abnormalScore.subScore}})
          <Tag :color="abnormalScore.color"> {{abnormalScore.percent}} %</Tag>
        </p>
        <Table :columns="column.abnormal" :data="abnormalScore.detail" size="small"></Table>
      </Card>
      </Col>
    </Row>
  </div>
</template>
<style scoped>
  .content {
    font-size: 12pt;
  }
  .ivu-card{
    padding-left:5px;
    padding-right:5px;
  }
</style>
<script>
  import util from '../config/common';
  import {
    mapGetters
  } from 'vuex';

  export default {
    computed: {
      column() {
        return {
          goodRate: util.getColumnList(['品种', '好品率']),
          pkgRate: util.getColumnList(['品种', '一次封包率']),
          rePkgRate: util.getColumnList(['品种', '返工率']),
          question: util.getColumnList(['状态', '问题数'], false),
          spc: util.getColumnList(['品种', '得分']),
          abnormal:util.getColumnList(['品种','异常轴比例'])
        };
      },
      ...mapGetters([
        'pGoodRateScore',
        'cGoodRateScore',
        'pkgRateScore',
        'rePkgRateScore',
        'abnormalScore',
        'pQuestionScore',
        'PSPCScore',
      ])
    },
  }

</script>
