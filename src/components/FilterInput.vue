<template>
  <div id="top-color">

  </div>
  <div>
    <p>根据文本过滤竞争词</p>
    <el-input v-model="input" placeholder="Please input" clearable style="width: 140px"/>
    <el-button type="primary" id="include-btn">Include</el-button>
    <el-button type="danger" id="exclude-btn">Exclude</el-button>
  </div>

</template>

<script>
export default {
  name: "FilterInput"
}
</script>
<script setup>
import { ref } from 'vue'
const input = ref('')
</script>

<style lang="less" scoped>
#include-btn{
  margin-right: 0;
}

#exclude-btn{
  margin-left: 0;
}

el-input{
  /*text-align: right;*/
  height: auto;
  width: 100px;
}

#top-color{
  box-sizing: content-box;
  height: 10px;
  background-color: #6666;
}

</style>