<template>
  <div class="warper first-page">
    <div class="content">
      <div class="slogan">
        <h1>质量综合评价得分</h1>
        <h3>印刷工序：{{score.print}} 分,纸张工序：{{score.paper}} 分</h3>
      </div>
    </div>
  </div>
</template>
<style scoped>
  .warper {
    width: 100%;
    overflow: hidden;
    position: relative;
  }

  .first-page {
    height: 540px;
    margin-top: -540px;
    color: #fff;
  }

  .first-page .content {
    width: 1100px;
    height: 100%;
    position: absolute;
    left: 0;
    right: 0;
    margin: 0 auto;
  }

  .slogan {
    position: absolute;
    top: 194px;
    right: 204px;
    z-index: 2;
    font-weight: 300;
  }

  .slogan h1 {
    font-size: 40px;
    margin-bottom: 16px;
    font-weight: 300;
  }

  .slogan h3 {
    font-size: 18px;
    font-weight: 300;
  }

</style>
<script>
  export default {
    computed: {
      score() {
        return this.$store.state.score;
      }
    }
  }

</script>
