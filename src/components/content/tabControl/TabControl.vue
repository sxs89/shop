<template>
  <div class="tab-container">
    <div v-for="(item, index) in titles" :key="index" @click="itemClick(index)"
         class="tab-container-item" :class="{active: index==currentIndex}">
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
import {ref} from 'vue'


export default {
  name: "TabControl",
  props: {  // 接收父组件传输过来的值
    titles:{
      type:Array,
      default() {
        return [];
      }
    }
  },
  setup(props, {emit}) {
    const currentIndex = ref(0);

    const itemClick = index => {
      // console.log(index);
      currentIndex.value = index
      emit('tabClick', index)
    }

    return {
      currentIndex,
      itemClick,
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

    /**css3新属性， 悬停*/
    position: sticky;
    top: 45px;
    z-index: 9;

    .tab-container-item {
      flex: 1;
      span {
        padding: 6px;
      }
    }
    .active {
      color: var(--color-tint);
      span {
        border-bottom: 3px solid var(--color-tint);
      }
    }
  }

</style>
