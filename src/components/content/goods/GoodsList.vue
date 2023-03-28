<template>
  <div class="goods-list">
    <goods-list-item v-for="(item, index) in goods" :key="index" :product="item">
    </goods-list-item>
  </div>
</template>

<script>
import GoodsListItem from "@/components/content/goods/GoodsListItem";

export default {
  name: "GoodsList",
  components: {
    GoodsListItem,
  },
  props: {
    goods:{
      type:Array,
      default() {
        return [];
      }
    }
  }
}
</script>

<style scoped lang="scss">
  .goods-list {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-between;
    padding: 5px;
  }
</style>
