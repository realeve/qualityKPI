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
    computed: {
      score() {
        this.printScore();
        return this.$store.state.score.print;
      }
    },
    methods: {
      ...mapActions(['initPrint', 'printScore'])
    },
    watch: {
      score() {}
    },
    created() {
      this.initPrint();
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
