<template>
  <div class="content">
    <Row>
      <Col span="12">
      <Card dis-hover :bordered="false">
        <p slot="title">1.纸机好品率
          <Tag :color="pGoodRateScore.color"> {{pGoodRateScore.percent}} 分</Tag>
        </p>
        <Table :columns="column.goodRate" :data="pGoodRateScore.detail" size="small"></Table>
      </Card>
      <Card dis-hover :bordered="false">
        <p slot="title">2.切纸机好品率
          <Tag :color="cGoodRateScore.color"> {{cGoodRateScore.percent}} 分</Tag>
        </p>
        <Table :columns="column.goodRate" :data="cGoodRateScore.detail" size="small"></Table>
      </Card>
      <Card dis-hover :bordered="false">
        <p slot="title">3.一次封包率
          <Tag :color="pkgRateScore.color"> {{pkgRateScore.percent}} 分</Tag>
        </p>
        <Table :columns="column.pkgRate" :data="pkgRateScore.detail" size="small"></Table>
      </Card>
      <Card dis-hover :bordered="false">
        <p slot="title">4.返工率
          <Tag :color="rePkgRateScore.color"> {{rePkgRateScore.percent}} 分</Tag>
        </p>
        <Table :columns="column.rePkgRate" :data="rePkgRateScore.detail" size="small"></Table>
      </Card>
      </Col>
      <Col span="12">
      <Card dis-hover :bordered="false">
        <p slot="title">5.质量问题发布
          <Tag :color="pQuestionScore.color"> {{pQuestionScore.percent}} 分</Tag>
        </p>
        <Table :columns="column.question" :data="pQuestionScore.detail" size="small"></Table>
      </Card>
      <Card dis-hover :bordered="false">
        <p slot="title">6.过程质量控制水平
          <Tag :color="PSPCScore.color"> {{PSPCScore.percent}} 分</Tag>
        </p>
        <Table :columns="column.spc" :data="PSPCScore.detail" size="small"></Table>
      </Card>
      <Card dis-hover :bordered="false">
        <p slot="title">7.异常轴数量(好品率相差5以上)
          <Tag :color="abnormalScore.color"> {{abnormalScore.percent}} 分</Tag>
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
          abnormal:util.getColumnList(['品种','异常轴个数'])
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
