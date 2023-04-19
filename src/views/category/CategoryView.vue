<template>
  <div>
    <nav-bar>
      <template #default>商品分类</template>
    </nav-bar>

    <br>
    <br>
    <br>
    <br>
    <van-button type="primary">主要按钮</van-button>
    <van-button type="success">成功按钮</van-button>
    <van-button type="default">默认按钮</van-button>
    <van-button type="warning">警告按钮</van-button>
    <van-button type="danger">危险按钮</van-button>

  </div>
</template>

<script>
import NavBar from "@/components/common/navbar/NavBar";


export default {
  name: "Category",
  components: {
    NavBar,
  }
}
</script>

<style scoped>

</style>
