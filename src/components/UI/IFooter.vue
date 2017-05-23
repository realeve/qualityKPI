<template>
  <div>
    <div class="layout-copy">
      2017 &copy; {{title}}
    </div>
    <Back-top/>
  </div>
</template>
<style scoped>
  .layout-copy {
    text-align: center;
    padding: 20px 0;
    color: #aeb7b4;
    /*background: #050508;*/
  }

</style>
<script>
  export default {
    data() {
      return {
        title: '质量管理KPI评价体系'
      }
    }
  }

</script>
