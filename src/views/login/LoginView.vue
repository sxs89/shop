<template>
  <div>Login 登录</div>
</template>

<script>
import {onMounted} from "vue";
import {getLogin} from '@/network/home';

export default {
  name: "LoginView",
  setup() {

    onMounted(()=>{
      getLogin().then(res=>{
        console.log(res);
        // sessionStorage.setItem("user", JSON.stringify(res.data))
        //
        //
        //
        // sessionStorage.getItem("user")
        //
        // sessionStorage.clear("user")
      },err=>{

      })
    })
  }
}
</script>

<style scoped lang="scss">

</style>
