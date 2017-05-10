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
  import util from '../config/common';
  
  export default {
    data(){
      return {
        title:'纸张数据'
      }
    },
    computed:{
      pGoodRateScore(){

      },
      cGoodRateScore(){

      },
      wellRateScore(){

      },
      pkgRateScore(){

      },
      abnormalNumScore(){

      },
      questionScore(){

      },
      SPCScore(){

      },
      subScore(){

      }
    },
    methods:{
      // 纸机好品率
      getPGoodRate(){

      },
      // 成品率
      getWellRate(){

      },
      // 切纸机好品率
      getCGoodRate(){

      },
      // 封包率
      getPkgRate(){

      },
      // 纸机、切纸机好品率相差过大
      getAbnormalNum(){

      },
      // 质量问题发布
      getQualityQuestion(){

      },
      // 过程质量控制水平
      getSPCScore(){

      }
    }
  }

</script>
