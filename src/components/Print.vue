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
  import util from '../config/common';
  import {
    mapState,
    mapGetters
  } from 'vuex';

  export default {
    data() {
      return {}
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
      ...mapGetters([
        'goodRateScore',
        'openNumScore',
        'plateScore',
        'machineWeak',
        'fakeRate',
        'uncheckedScore',
        'questionScore',
        'riskScore',
        'qfjScore',
        'SPCScore',
        'procRateScore'
      ])
    },
  }

</script>
