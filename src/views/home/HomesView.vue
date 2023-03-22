<template>
  <div id="home">
    <nav-bar>
      <template #default>图书兄弟</template>
    </nav-bar>

    <div class="my-swipe">
      <img :src="img">
    </div>

    <div class="">
      <recommend-view :recommends="recommends"></recommend-view>

      <tab-control :titles="['畅销','新品','精选']"></tab-control>

    </div>

  </div>
</template>

<script>
import NavBar from "@/components/common/navbar/NavBar";
import RecommendView from "@/views/home/ChildComps/RecommendView";
import TabControl from "@/components/content/tabControl/TabControl";

import {ref, onMounted} from 'vue';
import {getHomeAllData} from '@/network/home';

export default {
  name: "HomesView",
  data() {
    return {
      img: require('../../assets/images/ad1.png')
    }
  },
  setup() {

    const recommends = ref([])

    onMounted(()=>{
      getHomeAllData().then(res=>{
        console.log(res);
        recommends.value = res.data.goods.data;
      },err=>{
        console.log('getHomeAllData方法调用失败了！')
      })
    })

    return {
      recommends,
    }

  },
  components: {
    RecommendView,
    NavBar,
    TabControl,
  }
}
</script>

<style scoped lang="scss">
  img {
    width: 100%;
    height: auto !important;
    max-height: 200px;
  }
</style>
