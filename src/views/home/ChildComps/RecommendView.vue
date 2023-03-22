<template>
  <div class="recommend">
    <div class="recommed-item" v-for="(item, index) in recommends.slice(0, 4)" :key="item.id">
      <a href="javascript:void(0);" @click="goD(item.id)">
        <img :src="item.cover_url" alt="">
      </a>
      <div>
        {{item.title}}
      </div>
    </div>
<!--    <div class="recommed-item">
      <a href="javascript:void(0);">
        <img :src="img" alt="">
      </a>
    </div>
    <div class="recommed-item">
      <a href="javascript:void(0);">
        <img :src="img" alt="">
      </a>
    </div>
    <div class="recommed-item">
      <a href="javascript:void(0);">
        <img :src="img" alt="">
      </a>
    </div>-->
  </div>
</template>

<script>
import {useRouter} from 'vue-router'

export default {
  name: "RecommendView",
  // 接收
  data() {
    return {
      img: require('../../../assets/images/ad3.png')
    }
  },
  props: {
    recommends: {
      type: Array,
      default() {
        return []
      }
    }
  },
  setup() {
    const router = useRouter()

    const goD = id =>{
      router.push({path: '/detail', query:{id}})
      // router.push({path: `/detail/${id}`})
    }

    return {
      goD,
    }
  }
}
</script>

<style scoped lang="scss">
  .recommend {
    display: flex;
    border-bottom: 8px solid #eee;
    padding: 15px 0px 20px;
    text-align: center;
    .recommed-item {
      flex: 1;
      font-size: 12px;
      img {
        width: 70px;
        height: 80px;
        margin-bottom: 10px;
      }
    }
  }
</style>
