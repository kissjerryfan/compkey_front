<template>
  <p>根据文本过滤竞争词</p>
  <el-input v-model="input" placeholder="输入过滤项" />
  <el-button type="primary" id="include-btn">Include</el-button>
  <el-button type="danger" id="exclude-btn">Exclude</el-button>
</template>

<script>
export default {
  name: "FilterInput"
}
</script>

<style scoped>
#include-btn{
  margin-right: 0;
}
#exclude-btn{
  margin-left: 0;
}

</style>