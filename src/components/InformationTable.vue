<template>
  <el-table :data="tableData" height="250" style="width: 100%">
    <el-table-column prop="seedWords" label="SeedWords" width="180" />
    <el-table-column prop="compWords" label="CompWords" width="180" />
    <el-table-column prop="comp" label="Comp" />
  </el-table>
</template>

<script setup>
const tableData = [
  {
    seedWords: '中国',
    compWords: '中国',
    comp: '0.98',
  },
  {
    seedWords: '中国',
    compWords: '美国',
    comp: '0.9',
  }
]
</script>
<script>
export default {
  name: "InformationTable"
}
</script>

<style scoped>

</style>
