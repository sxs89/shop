<template>
  <div class="nav-bar">
    <div @click="goback" class="left">
      <slot name="left">
        <img :src="img">
      </slot>
    </div>
    <div class="center">
      <slot>EWSHOP</slot>
    </div>
    <div class="right">
      <slot name="right"></slot>
    </div>
  </div>

</template>

<script>
import {useRouter} from 'vue-router'
export default {
  name: "NavBar",
  data(){
    return {
      img: require("../../../assets/images/left.png")
    }
  },
  setup() {
    const router = useRouter()
    const goback = ()=>{
      router.go(-1);
    }
    return {
      goback,
    }
  }
}
</script>

<style scoped lang="scss">
  .nav-bar {
    background: var(--color-tint);
    color: #fff;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 9;
    height: 45px;
    line-height: 45px;
    text-align: center;
    display: flex;
    .left {
      width: 60px;
      padding: 10px;
      margin-bottom: 20px;
      img {
        width: 25px;
        height: 25px;
      }
    }
    .center {
      flex: 1;
    }
    .right {
      width: 60px;
      padding: 12px;
      margin-bottom: 20px;
    }

  }
</style>
