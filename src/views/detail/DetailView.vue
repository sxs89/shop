<template>
  <div>
    <nav-bar>
      <template #default>商品详情页面</template>
    </nav-bar>
    <br>
    <br>
    <br>
    <br>
    商品ID：{{$route.query.id}}
<!--    商品ID：{{$route.params.id}}-->

  </div>
</template>

<script>
import NavBar from "@/components/common/navbar/NavBar";

export default {
  name: "DetailView",
  components: {
    NavBar,
  },
  setup() {

  }
}
</script>

<style scoped>

</style>
