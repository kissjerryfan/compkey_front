<template>
  <div id="top-color">

  </div>
  <div>
    <p>过滤竞争词</p>
    <el-input v-model="input" placeholder="请输入过滤词" clearable style="width: 180px;"/>
    <el-button type="primary" id="include-btn" style="margin-left: 13px">Include</el-button>
    <el-button type="danger" id="exclude-btn">Exclude</el-button>
  </div>

</template>

<script>
import eventBus from "@/components/eventBus";
export default {
  name: "FilterInput",
  data(){
    return {
      filter: {

      }
    }
  },
  methods: {
    sendFilter(){
      eventBus.$emit("getFilter", this.filter)
    }
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
