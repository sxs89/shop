<template>
  <div class="backTop" @click="backtop">

  </div>
</template>

<script>
export default {
  name: "BackTop",
  data() {
    return {
      img: require('../../../assets/images/up.jpg')
    }
  },
  setup(props, {emit}) {
    return {
      backtop:()=>{
        emit('btop')
      }
    }
  }

}
</script>

<style scoped lang="scss">
  .backTop {
    position: fixed;
    right: 30px;
    bottom: 150px;
    z-index: 99;
    width: 40px;
    height: 40px;
    background: #fefefe url("../../../assets/images/up.jpg") no-repeat center center;
    border-radius: 50%;
  }
</style>
