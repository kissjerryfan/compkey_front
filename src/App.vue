<template>
  <el-row>
    <el-col :span="24">
      <div id="header1">
        <img src="../src/assets/logo1.png" style="height: 45px; float: left; position: absolute; left: 15px; top: 17px;">
      </div>
    </el-col>
  </el-row>
  <el-row class="search">
    <el-col :span="8" class="input">
      <el-input v-model="inputLeft" id="inputs" size="large" placeholder="请输入要搜索的信息" clearable />
    </el-col>
    <el-col :span="4">
      <el-button type="primary" size="large" id="searchBtn" onclick="searchBtnClick()" plain>Search</el-button>
    </el-col>
    <el-col :span="7">
    </el-col>
  </el-row>
  <el-row>
    <el-col :span="17">
      <div id="top-color1">

      </div>
      <el-table :data="tableData" :key="num" id="mainTable" @row-click="handleTableRow" height="594" style="width: 100%">
        <el-table-column prop="seedWords" label="SeedWords" width="390" />
        <el-table-column prop="compWords" label="CompWords" width="210" />
        <el-table-column prop="comp" label="Comp" width="420"/>
      </el-table>
    </el-col>
    <el-col :span="1" class="nothing">

    </el-col>
    <el-col :span="6">
      <div id="top-color2">

      </div>
      <div>
        <p class="filterText">过滤竞争词</p>
        <el-input v-model="inputRight" placeholder="请输入过滤词" clearable style="width: 180px;"/>
        <el-button type="primary" id="include-btn" style="margin-left: 13px" @click="include">Include</el-button>
        <el-button type="danger" id="exclude-btn" @click="exclude">Exclude</el-button>
        <div class="includeFather" v-if="includeFlag === 1">
          <div class="includeFont">必须包含：</div>
          <div class="include">{{inputRight}} <el-button type="danger" :icon="Delete" circle class="selectedDelete" @click="deleteCondition"/></div>
        </div>
        <div class="excludeFather" v-else-if="excludeFlag === 1">
          <div class="excludeFont">必须不包含：</div>
          <div class="exclude">{{inputRight}} <el-button type="danger" :icon="Delete" circle class="selectedDelete" @click="deleteCondition"/></div>
        </div>
      </div>
      <div id="top-color3">

      </div>
      <el-row>
        <div id="header2">
          My List:
        </div>
      </el-row>
      <el-row>
        <el-empty description="点击关键词以添加到列表" style="width: 350px;" v-if="word_list.length === 0"/>
        <el-table :data="word_list" @cell-click="pageJumping" stripe style="width: 356px" v-else>
          <el-table-column prop="word" label="WordList" width="100"/>
          <el-table-column width="150">
            <template v-slot="scope1">
              <el-rate v-model="value2" :colors="colors" @change="rateChange(scope1.$index)" size="small" @click="scoreRate(scope1.$index)"></el-rate>
            </template>
          </el-table-column>
          <el-table-column>
            <template v-slot="scope">
              <div style=" text-align: -webkit-center">
                <el-button type="danger" :icon="Delete" circle @click="handleDelete(scope.$index)"/>
              </div>
            </template>
          </el-table-column>
        </el-table>
      </el-row>
    </el-col>
  </el-row>
</template>

<script setup>
import { ref } from 'vue'
import {Delete} from "@element-plus/icons-vue";
// import { toRaw } from '@vue/reactivity'
const inputLeft = ref('')
// const inputRight = ref('')
const tableData = ref([
]);
const colors = ref(['#99A9BF', '#F7BA2A', '#FF9900'])
import compKeyService from "@/service/CompkeyService";

window.onload = function () {
  var searchBtn = document.getElementById("searchBtn")
  searchBtn.searchBtnClick = async function () {
    let inputString = document.getElementById("inputs").value
    let tableContent = document.getElementById("mainTable")
    console.log(inputString)
    let param = {statement: inputString}
    let params = await compKeyService.getCompWordList(param)
    console.log(param)
    console.log(params.data)
    console.log(params.data.length)
    // for(let i=0;i<params.data.length;i++) {
    //   console.log(params.data[i].key)
    //   console.log(params.data[i].value)
    //   console.log(params.data[i].seedWord)
    // }
    if(tableData.value != null) {
      tableData.value.splice(0,tableData.value.length)
    }
    for(let i=0;i<=params.data.length;i++){
      // if (tableData == undefined) {
      //   tableData = new Array();
      // }
      let obj = {}
      obj.seedWords = params.data[i].seedWord
      obj.compWords = params.data[i].key
      obj.comp = params.data[i].value
      tableData.value.push(obj);
    }
  }
}
</script>
<script>

import compkeyService from "@/service/CompkeyService";
import {toRaw} from "@vue/reactivity";

export default {
  name: 'App',
  components: {

  },
  data : function (){
    return {
      word_list : [],
      tableData: [],
      click_list : [],
      value2 : null,
      inputRight : "",
      includeFlag : 0,
      excludeFlag : 0,
      num : 0,
      tempTableData : []
    }
  },
  methods: {
    handleTableRow(row, event, column) {
      console.log(row,event,column)
      let compList = {};
      compList.seedWords = row.seedWords
      compList.compWords = row.compWords
      compList.comp = row.comp
      this.click_list.push(compList)
      let ref = {word : compList.compWords}
      this.word_list.push(ref)
      compkeyService.sendSelectedWord(compList)
    },
    handleDelete(row_id) {
      console.log(row_id)
      this.word_list.splice(row_id, row_id+1)
    },
    scoreRate(row_id) {
      console.log(row_id)
      console.log(this.value2)

      let param = {}
      let comp = toRaw(this.click_list.splice(row_id, row_id+1))[0]
      console.log(comp)
      param.seed = comp.seedWords
      param.compkey = comp.compWords
      param.compDegree = comp.comp
      param.score = this.value2
      console.log(param)
      compkeyService.sendScore(param)
    },
    pageJumping : function (row,column,cell,event){
      console.log(row,column,cell,event)
      let word = toRaw(row).word
      //let word = cell.word
      console.log(word)
      //let word = toRaw(this.word_list.splice(row_id, row_id + 1))
      if(column.label == "WordList"){
        let url = "https://cn.bing.com/search?q=" + word
        window.open(url)
      }
      console.log(word)
    },
    rateChange(row_id){
      console.log(row_id)

    },
    include(){
      let word = this.inputRight
      this.includeFlag = 1
      this.excludeFlag = 0
      // console.log(toRaw(this.tableData).length)
      this.tempTableData = []
      for(let i=0;i<toRaw(this.tableData).length;i++){
        this.tempTableData.push(toRaw(this.tableData)[i])
      }
      for(let i=0;i<toRaw(this.tableData).length;i++){
        console.log(toRaw(this.tableData[i]))
        // console.log(toRaw(this.tableData[i]).value)
        if(toRaw(this.tableData[i]).compWords != word) {
          toRaw(this.tableData).splice(i,i+1)
        }
        // console.log(this.tableData)
      }
      this.num++;
    },
    exclude(){
      let word = this.inputRight
      this.excludeFlag = 1
      this.includeFlag = 0
      this.tempTableData = []
      for(let i=0;i<toRaw(this.tableData).length;i++){
        this.tempTableData.push(toRaw(this.tableData)[i])
      }
      // console.log(word)
      for(let i=0;i<toRaw(this.tableData).length;i++){
        // console.log(toRaw(this.tableData[i]))
        // console.log(toRaw(this.tableData[i]).value)
        if(toRaw(this.tableData[i]).compWords == word) {
          toRaw(this.tableData).splice(i,i+1)
        }
        // console.log(this.tableData)
      }
      console.log(this.tempTableData)
      this.num++;
    },
    deleteCondition(){
      this.includeFlag = 0
      this.excludeFlag = 0
      this.tableData = []
      for(let i=0;i<toRaw(this.tempTableData).length;i++){
        this.tableData.push(toRaw(this.tempTableData)[i])
      }
      this.inputRight = ""
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
  padding-top: 0;
}

.filterText {
  margin-left: 2px;
}

body{
  background-color: #f7f8fa;
  padding: 0;
  margin: 0;
}

.search {
  margin-top: 20px;
}

.input{
  margin-left: 250px;
}

.includeFather {
  display: table;
}

.excludeFather {
  display: table;
}

#top-color1{
  box-sizing: content-box;
  height: 3px;
  background-color: #434343;
  margin-top: 20px;
}

#top-color2{
  box-sizing: content-box;
  height: 3px;
  background-color: #434343;
  margin-top: 20px;
}

#top-color3{
  box-sizing: content-box;
  height: 3px;
  background-color: #434343;
  margin-top: 20px;
}

#header1{
  background-color: #b3d4f5;
  top: 0;
  height: 80px;
  width: auto;
  margin-top: 0;
}

#header2{
  text-align: left;
  margin-top: 10px;
  margin-bottom: 10px;
  font: 18px bold;
}

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

.include{
  background-color: #79bbff;
  height: 40px;
  width: 340px;
  margin-left: 4px;
  margin-top: 5px;
  border-radius: 5px;
  color: #000000;
  text-align: left;
  padding-left: 10px;
  padding-top: 15px;
  line-height: 27px;
}

.includeFont{
  color: #97c0f2;
  text-align: left;
  padding-left: 2px;
  margin-top: 10px;
  margin-bottom: 10px;
}

.selectedDelete {
  position: absolute;
  top: 162px;
  right: 0px;
}

.exclude{
  background-color: #ffccd5;
  height: 40px;
  width: 340px;
  margin-left: 4px;
  margin-top: 5px;
  border-radius: 5px;
  color: #000000;
  text-align: left;
  padding-left: 10px;
  padding-top: 15px;
}

.excludeFont{
  color: #ec8497;
  text-align: left;
  padding-left: 10px;
}

.selectedDelete{
  float: right;
  margin-right: 10px;
}

</style>
