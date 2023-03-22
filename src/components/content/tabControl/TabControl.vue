<template>
  <div class="tab-container">
    <div v-for="(item, index) in titles" :key="index" class="tab-container-item">
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabControl",
  props: {  // 接收父组件传输过来的值
    titles:{
      type:Array,
      default() {
        return [];
      }
    }
  }
}
</script>

<style scoped lang="scss">
  .tab-container {
    display: flex;
    text-align: center;
    width: 100%;
    height: 40px;
    line-height: 40px;
    font-size: 14px;
    background: #FFFFFF;
    .tab-container-item {
      flex: 1;
      span {

      }
    }
  }

</style>
