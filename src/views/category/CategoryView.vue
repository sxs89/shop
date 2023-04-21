<template>
  <div id="cate">
    <nav-bar>
      <template #default>商品分类</template>
    </nav-bar>


    <div id="mainbox">
      <div class="leftmenu">
        <van-sidebar v-model="activekey" style="width: 130px;">
          <van-collapse v-model="activeNames" accordion>
            <van-collapse-item v-for="(item, index) in categorys" :key="index"
                               :title="item.name" :name="item.name">

              <van-sidebar-item
                v-for="sub in item.children" :key="sub.id"
                :title="sub.name"
                @click="getGoods(sub.id)"
              />

            </van-collapse-item>

          </van-collapse>
        </van-sidebar>

      </div>

      <div class="ordertab">
        <van-tabs v-model:active="active" @click-tab="tabClick">
          <van-tab title="销量排行"></van-tab>
          <van-tab title="价格排序"></van-tab>
          <van-tab title="评论排序"></van-tab>
        </van-tabs>
      </div>

      <div class="goodslist">
        <div class="content">
          <van-card v-for="item in showGoods"
              :num="item.comments_count"
              :tag="item.comments_count > 10 ? '流行' : '热销'"
              price="2.00"
              :desc="item.updated_at.substr(0, 10)"
              :title="item.title"
              :thumb="item.cover_url"
              origin-price="10.00"
          >
            <template #price>
              <small style="color: red">$100.00</small>
            </template>
          </van-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from "@/components/common/navbar/NavBar";

import {getCategory, getCategoryGoods} from "@/network/category";
import {onMounted, ref, reactive, computed} from "vue";

export default {
  name: "Category",
  components: {
    NavBar,
  },

  setup(){

    let active = ref(0)
    let activeNames = ref([0])
    let activekey = ref(0)


    // 获取分类信息
    const categorys = ref([])

    // 当前分类的ID
    let currentCid = ref(0);
    // 当前排序的参数
    let currentOrder = ref('sales')
    // 数据模型
    const goods = reactive({
      sales: {page:1, list:[]},
      price: {page:1, list:[]},
      comments_count: {page:1, list:[]}
    });

    // 计算属性，获取选项的对应数据
    const showGoods = computed(()=>{
      return goods[currentOrder.value ].list
    });


    // 初始化数据的方法
    const init = () =>{
      getCategoryGoods('sales', currentCid.value).then(res=>{
        // console.log(res);
        goods.sales.list = res.data.goods.data;
      });
      getCategoryGoods('price', currentCid.value).then(res=>{
        // console.log(res);
        goods.price.list = res.data.goods.data;
      });
      getCategoryGoods('comments_count', currentCid.value).then(res=>{
        // console.log(res);
        goods.comments_count.list = res.data.goods.data;
      });
    }

    onMounted(()=>{
      getCategory().then(res=>{
        categorys.value = res.data.categories;
      });
      init();

    });

    // 左侧分类数据
    const getGoods = (cid)=>{
      currentCid.value = cid;
      currentOrder.value = 'sales';
      active.value = 0;
      init();
      // console.log(currentCid.value);
      // console.log(currentOrder.value);
    }

    // 头部标签数据
    const tabClick = (index) =>{
      let orders = ['sales', 'price', 'comments_count'];
      currentOrder.value = orders[index.name]
      // console.log(currentCid.value);
      // console.log(currentOrder.value);

    }

    return {
      active,
      activeNames,
      tabClick,
      activekey,
      categorys,
      currentCid,
      getGoods,
      showGoods,
    }
  }
}
</script>

<style lang="scss">
  #cate {

  }
</style>

<style scoped lang="scss">
#mainbox {
  margin-top: 45px;
  display: flex;
  .leftmenu {
    position: fixed;
    top: 95px;
    left: 0;
    width: 150px;
  }

  .ordertab {
    flex: 1;
    float: right;
    height: 50px;
    z-index: 9;
    position: fixed;
    top: 45px;
    right: 0;
    left: 130px;
  }

  .goodslist {
    flex: 1;
    position: absolute;
    top: 100px;
    left: 130px;
    right: 0;
    height: 100vh;
    padding: 10px;
    text-align: left !important;
  }

}
</style>
