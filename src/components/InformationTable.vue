<template>
  <div id="top-color">

  </div>
  <el-table :data="tableData" @row-click="handleTableRow" height="612" style="width: 100%">
    <el-table-column prop="seedWords" label="SeedWords" width="700" />
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
  },
  {
    seedWords: '中国',
    compWords: '美国',
    comp: '0.9',
  },
  {
    seedWords: '中国',
    compWords: '美国',
    comp: '0.9',
  },
  {
    seedWords: '中国',
    compWords: '美国',
    comp: '0.9',
  },
  {
    seedWords: '中国',
    compWords: '美国',
    comp: '0.9',
  },
  {
    seedWords: '中国',
    compWords: '美国',
    comp: '0.9',
  },
  {
    seedWords: '中国',
    compWords: '美国',
    comp: '0.9',
  },
  {
    seedWords: '中国',
    compWords: '美国',
    comp: '0.9',
  },
  {
    seedWords: '中国',
    compWords: '美国',
    comp: '0.9',
  },
  {
    seedWords: '中国',
    compWords: '美国',
    comp: '0.9',
  },
  {
    seedWords: '中国',
    compWords: '美国',
    comp: '0.9',
  },
  {
    seedWords: '中国',
    compWords: '美国',
    comp: '0.9',
  },
  {
    seedWords: '中国',
    compWords: '美国',
    comp: '0.9',
  },
  {
    seedWords: '中国',
    compWords: '美国',
    comp: '0.9',
  }
]
</script>
<script>
import { getCurrentInstance } from 'vue'
export default {
  setup(){

  },
  name: "InformationTable",
  data() {
    return {
      tableData: []
    }
  },
  methods: {
    handleTableRow(row, event, column) {
      console.log(row,event,column)
      let compList = new Object();
      compList.seedWords = row.seedWords
      compList.compWords = row.compWords
      compList.comp = row.comp
      const {proxy} = getCurrentInstance()
      proxy.mittBus.emit('comp_key', compList)
    }
  }
}
</script>


<style scoped>
  #top-color{
    box-sizing: content-box;
    height: 3px;
    background-color: #434343;
  }
</style>
