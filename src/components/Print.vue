<template>
  <div class="content">
    <Row>
      <Col span="12">
      <Card dis-hover :bordered="false">
        <p slot="title">1.好品率({{goodRateScore.subScore}})
          <Tag :color="goodRateScore.color"> {{goodRateScore.percent}} %</Tag>
        </p>
        <Table :columns="column.goodRate" :data="goodRateScore.detail" size="small"></Table>
      </Card>
      <Card dis-hover :bordered="false">
        <p slot="title">2.开包量({{openNumScore.subScore}})
          <Tag :color="openNumScore.color"> {{openNumScore.percent}} %</Tag>
        </p>
        <Table :columns="column.openNum" :data="openNumScore.detail" size="small"></Table>
      </Card>
      <Card dis-hover :bordered="false">
        <p slot="title">3.耐印量({{plateScore.subScore}})
          <Tag :color="plateScore.color"> {{plateScore.percent}} %</Tag>
        </p>
        <Table :columns="column.plateNum" :data="plateScore.detail" size="small"></Table>
      </Card>
      <Card dis-hover :bordered="false">
        <p slot="title">4.机检漏废({{machineWeak.subScore}})
          <Tag :color="machineWeak.color"> {{machineWeak.percent}} %</Tag>
        </p>
        <Table :columns="column.machineWeak" :data="machineWeak.detail" size="small"></Table>
      </Card>
      <Card dis-hover :bordered="false">
        <p slot="title">5.机检未检({{uncheckedScore.subScore}})
          <Tag :color="uncheckedScore.color"> {{uncheckedScore.percent}} %</Tag>
        </p>
        <Table :columns="column.uncheckedNum" :data="uncheckedScore.detail" size="small"></Table>
      </Card>
      </Col>
      <Col span="12">
      <Card dis-hover :bordered="false">
        <p slot="title">6.小开作废率({{fakeRate.subScore}})
          <Tag :color="fakeRate.color"> {{fakeRate.percent}} %</Tag>
        </p>
        <Table :columns="column.fakeRate" :data="fakeRate.detail" size="small"></Table>
      </Card>
      <Card dis-hover :bordered="false">
        <p slot="title">7.清分机拒检({{qfjScore.subScore}})
          <Tag :color="qfjScore.color"> {{qfjScore.percent}} %</Tag>
        </p>
        <Table :columns="column.qfj" :data="qfjScore.detail" size="small"></Table>
      </Card>
      <Card dis-hover :bordered="false">
        <p slot="title">8.过程质量控制水平({{SPCScore.subScore}})
          <Tag :color="SPCScore.color"> {{SPCScore.percent}} %</Tag>
        </p>
        <Table :columns="column.spc" :data="SPCScore.detail" size="small"></Table>
      </Card>
      <Card dis-hover :bordered="false">
        <p slot="title">9.质量问题发布({{questionScore.subScore}})
          <Tag :color="questionScore.color"> {{questionScore.percent}} %</Tag>
        </p>
        <Table :columns="column.question" :data="questionScore.detail" size="small"></Table>
      </Card>
      <Card dis-hover :bordered="false">
        <p slot="title">10.风险隐患排查({{riskScore.subScore}})
          <Tag :color="riskScore.color"> {{riskScore.percent}} %</Tag>
        </p>
        <Table :columns="column.risk" :data="riskScore.detail" size="small"></Table>
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
        // 'procRateScore'
      ])
    },
  }

</script>
