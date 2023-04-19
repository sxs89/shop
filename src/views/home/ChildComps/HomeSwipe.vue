<template>

  <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white" lazy-render>
    <van-swipe-item v-for="(item, index) in banners" :key="index">
      <img :src="item.img_url" alt="">
    </van-swipe-item>
  </van-swipe>

</template>

<script>
export default {
  name: "HomeSwipe",
  props: {
    banners:Array,
    default(){
      return [];
    }
  }
}
</script>

<style scoped lang="scss">

.my-swipe {
  max-height: 280px;
}

img {
  width: 100%;
  height: auto;
}
</style>
