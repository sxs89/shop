<template>
  <nav id="nav">
    <router-link class="tab-bar-item" to="/">
      <div class="icon">
        <i></i>
      </div>
      <div>首页</div>
    </router-link>
  </nav>

  <router-view></router-view>

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

<style>
@import "@/assets/css/base.css";

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
