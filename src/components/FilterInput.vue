<template>
  <div id="top-color">

  </div>
  <div>
    <p>根据文本过滤竞争词</p>
    <el-input v-model="input" placeholder="Please input" clearable style="width: 180px;"/>
    <el-button type="primary" id="include-btn" style="margin-left: 13px">Include</el-button>
    <el-button type="danger" id="exclude-btn">Exclude</el-button>
  </div>

</template>

<script>
export default {
  name: "FilterInput",
  data(){
    return {
      filter: {

      }
    }
  },
  methods: {

  }
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

.el-input{
  /*text-align: right;*/
  height: auto;
  width: 200px;
}

#top-color{
  box-sizing: content-box;
  height: 3px;
  background-color: #434343;
}

p{
  text-align: left;
}

</style>
