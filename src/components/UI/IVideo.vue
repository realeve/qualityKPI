<template>
  <video class="up_video" loop muted autoplay>
    <source src="./static/video/up.mp4" type="video/mp4">
    <!--<source src="imgs/flowers.webm" type="video/webm">-->
  </video>
</template>
<style scoped>
  .up_video {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 10%;
    object-fit: cover;
  }

</style>
<script>
  export default {}

</script>
