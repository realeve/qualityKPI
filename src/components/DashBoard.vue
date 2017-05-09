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
        title:'DashBoard'
      }
    },   
    methods:{
      // 纸机好品率
      getPGoodRate(){

      },
      // 好品率
      getGoodRate(){

      },
      // 产量完成情况
     getPrintNum(){

     },
     // 完成率
     getPrintRate(){

     },
     // OpenNum
     getOpenNum(){

     }

    }
  }

</script>
