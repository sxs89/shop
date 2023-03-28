<template>
  <div id="home">
    <nav-bar>
      <template #default>图书兄弟</template>
    </nav-bar>


    <div class="wrapper">

      <div class="my-swipe">
        <img :src="img">   <!--第一层 轮播图-->
      </div>
      <div class="">
        <recommend-view :recommends="recommends"></recommend-view>     <!--第二层 热销产品-->
        <tab-control @tabClick="tabClick" :titles="['畅销','新品','精选']"></tab-control>   <!--第三层 商品分类-->
        <goods-list :goods="showGoods"></goods-list>  <!--第四层 列表数据 -->
      </div>

    </div>

  </div>
</template>

<script>
import NavBar from "@/components/common/navbar/NavBar";
import RecommendView from "@/views/home/ChildComps/RecommendView";
import TabControl from "@/components/content/tabControl/TabControl";
import GoodsList from "@/components/content/goods/GoodsList";
import BScroll from 'better-scroll';


import {ref, reactive, onMounted, computed, watchEffect, nextTick} from 'vue';
import {getHomeAllData, getHomeGoods} from '@/network/home';

export default {
  name: "HomesView",
  data() {
    return {
      img: require('../../assets/images/ad1.png')
    }
  },
  setup() {

    const recommends = ref([])

    // 商品列表的数据模型
    const goods = reactive({
      sales:{page:1, list:[]},
      recommend:{page:1, list:[]},
      new:{page:1, list:[]},
    })

    // 声明一个当前tab的索引对应的类型'sales', 'recommend', 'new'
    let currentType = ref('sales')


    // 计算属性，获取当前类型第一页的值
    const showGoods = computed(()=>{
      return goods[currentType.value].list;
    })

    let bscroll = reactive({})

    onMounted(()=>{
      getHomeAllData().then(res=>{
        // console.log(res);
        recommends.value = res.data.goods.data;
      },err=>{
        console.log('getHomeAllData方法调用失败了！')
      })


      // 畅销
      getHomeGoods('sales').then(res=>{
        // console.log(res.data.goods.data);
        goods.sales.list = res.data.goods.data
      })

      // 精选
      getHomeGoods('recommend').then(res=>{
        //console.log(res.data.goods.data);
        goods.recommend.list = res.data.goods.data
      })

      // 新品
      getHomeGoods('new').then(res=>{
        //console.log(res.data.goods.data);
        goods.new.list = res.data.goods.data
      })

      bscroll = new BScroll(document.querySelector('.wrapper'), {
        probeType: 3,   //
        click: true,   // 是否允许点击
        pullUpLoad: true, // 上拉加载更多，默认是false
      })

      /*bscroll.on('scroll', (position)=>{
        // console.log(position.x);
        console.log('sss')
        // console.log(-position.y);
      });*/

      bscroll.on('pullingUp', ()=>{
        console.log('上拉加载更多')

        // 获取下一页数据，加到对应类型的list里面
        const page = goods[currentType.value].page + 1;

        // 畅销
        getHomeGoods(currentType.value, page).then(res=>{
          goods[currentType.value].list.push(...res.data.goods.data);
          goods[currentType.value].page += 1;

          console.log(page);
        })

        bscroll.finishPullUp()

        bscroll.refresh()
      });

    })


    // tab事件
    const tabClick = index => {
      let types = ['sales', 'recommend', 'new']
      currentType.value = types[index]

      bscroll && bscroll.refresh();
    }


    // 监听
    watchEffect(()=>{
      nextTick(()=>{
        bscroll && bscroll.refresh();
      })
    })

    return {
      recommends,
      tabClick,
      currentType,
      showGoods,
    }

  },
  components: {
    RecommendView,
    NavBar,
    TabControl,
    GoodsList,
  }
}
</script>

<style scoped lang="scss">
  img {
    width: 100%;
    height: auto !important;
    max-height: 200px;
  }

  #home {
    height: 100%;
    position: relative;
  }

  .wrapper {
    position: absolute;
    //top: 45px;
    //bottom: 50px;
    left: 0;
    right: 0;
    //overflow: hidden;
  }
</style>
