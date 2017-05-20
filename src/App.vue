<template>
  <div class="layout">
    <ISlogan/>
    <IMenu/>
    <IContainer/>
    <IFooter/>
  </div>
</template>
<script>
  import ISlogan from '@/components/UI/ISlogan';
  import IMenu from '@/components/UI/IMenu';
  import IContainer from '@/components/UI/IContainer';
  import IFooter from '@/components/UI/IFooter';

  import {
    mapActions
  } from 'vuex';

  export default {
    components: {
      ISlogan,
      IMenu,
      IContainer,
      IFooter
    },
    methods: {
      ...mapActions(['getGoodRate','getOpenNum','getPlatePrintNum','getNoCheckNum','getQualityQuestion','getQualityRisk','getUncheckByQFJ','getSPCScore','getProcRate']),
      init() {
        this.getGoodRate();
        this.getOpenNum();
        this.getPlatePrintNum();
        this.getNoCheckNum();
        this.getProcRate();
        this.getQualityQuestion();
        this.getQualityRisk();
        this.getUncheckByQFJ();
        this.getSPCScore();
      }
    },
    created() {
      this.init();
    }
  }

</script>

<style scoped lang="less">
  @import "assets/css/app.css";
  .layout {
    border: 1px solid #d7dde4;
    background: #f5f7f9;
  }

</style>
