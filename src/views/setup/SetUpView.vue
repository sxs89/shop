<template>
  <div>
    <p>{{data.num}}</p>
    <br>
    {{data.msg}}
    <button @click="add">++</button>
  </div>
</template>

<script>
import {reactive, computed} from 'vue'

export default {
  name: "SetUpView",
  setup(){
    const data = reactive({
      num: 0,
      msg: "this is a test",
    })

    const add = () =>{
      data.num++
    }

    return {
      data,
      add,
    }

  }
}
</script>

<style scoped>

</style>
