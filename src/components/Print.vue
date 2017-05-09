<template>
  <div class="content">
    {{title}}
  </div>
</template>
<style scoped>
  .content {
    font-size:12pt;
  }
</style>
<script>
  import axios from 'axios';
  import util from '../common/common';
  
  export default {
    data(){
      return {
        title:'数据'
      }
    },
    computed:{
      goodRateScore(){

      },
      openNumScore(){

      },
      plateScore(){

      },
      uncheckScore(){

      },
      questionScore(){

      },
      riskScore(){

      },
      qfjScore(){

      },
      SPCScore(){

      },
      subScore(){

      }
    },
    methods:{
      // 好品率
      getGoodRate(){

      },
      // 开包量
      getOpenNum(){

      },
      // 耐印率
      getPlatePrintNum(){

      },
      // 漏废
      getUncheckNum(){

      },
      // 未检
      getNoCheckNum(){

      },
      // 质量问题发布
      getQualityQuestion(){

      },
      // 风险隐患排查
      getQualityRisk(){

      },
      // 清分拒钞
      getUncheckByQFJ(){

      },
      // 过程质量控制水平
      getSPCScore(){

      }
    }
  }

</script>
