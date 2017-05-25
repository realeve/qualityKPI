<template>
  <div class="layout-content" :class="{chartpage}">   
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>
<style scoped>
  .layout-content {
    min-height: 500px;
    margin: 15px;
    overflow: hidden;
    background: #fff;
    border-radius: 4px;
    padding: 15px;
  }

  .chartpage {
    background: none;
    /*background: url('../../assets/img/chartbg.jpg') #050508 center center no-repeat;
    background-size: cover;*/
    margin: 0;
    margin-top: 15px;
    border-radius: 0;
    color: #e2e2e2;
    min-height: 600px;
  }

</style>
<script>
  export default {
    computed: {
      chartpage() {
        return this.$route.path == '/dashboard' || this.$route.path == '/';
      }
    }
  }

</script>
