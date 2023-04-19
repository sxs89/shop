<template>

  <router-view></router-view>
  <hr>

  <nav id="nav">

    <router-link class="tab-bar-item" to="/setUp">
      <div class="icon">
        <i class="iconfont icon-Home"></i>
      </div>
      <div>组合Api</div>
    </router-link>

    <router-link class="tab-bar-item" to="/login">
      <div class="icon">
        <i class="iconfont icon-Home"></i>
      </div>
      <div>登录</div>
    </router-link>

    <router-link class="tab-bar-item" to="/">
      <div class="icon">
        <i class="iconfont icon-Home"></i>
      </div>
      <div>首页</div>
    </router-link>

    <router-link class="tab-bar-item" to="/category">
      <div class="icon">
        <i class="iconfont icon-fenlei"></i>
      </div>
      <div>分类</div>
    </router-link>

    <router-link class="tab-bar-item" to="/">
      <van-badge :content="$store.state.cartCount" max="9">
        <div class="icon">
          <i class="iconfont icon-cart"></i>
        </div>
      </van-badge>

      <div>购物车</div>
    </router-link>

    <router-link class="tab-bar-item" to="/">
      <div class="icon">
        <i class="iconfont icon-user"></i>
      </div>
      <div>我的</div>
    </router-link>
  </nav>


<!--  <img src="@/assets/images/ad1.png">-->
<!--  <img :src="imgUrl">-->


</template>

<script>
export default {
  data(){
    return{
      imgUrl:require("assets/images/ad3.png")
    }
  }
}
</script>

<style lang="scss">
@import "@/assets/css/base.css";
@import "@/assets/css/fonts/iconfont.css";


#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  background: #F6F6F6;
  display: flex;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  box-shadow: 0 -3px 0px rgba(100,100,100,0.1);


  padding: 30px;

  .tab-bar-item {
    height: 50px;
    flex: 1;
    text-align: center;
    font-size: var(--font-size);
    .icon {
      margin-top: 5px;
      vertical-align: middle;
    }

    div {
      padding-top: 3px;
    }
  }


}


#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}



</style>
