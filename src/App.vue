<template>
  <el-row>
    <el-col :span="24">
      <div id="header">
        <img src="../src/assets/logo1.png" style="height: 45px; float: left; position: absolute; left: 15px; top: 17px;">
      </div>
    </el-col>
  </el-row>
  <el-row class="search">
    <el-col :span="8" class="input">
      <el-input v-model="input" size="large" placeholder="请输入要搜索的信息" clearable />
    </el-col>
    <el-col :span="4">
      <el-button type="primary" size="large" plain>Search</el-button>
    </el-col>
    <el-col :span="7">
    </el-col>
  </el-row>
  <el-row>
    <el-col :span="17">
      <div id="top-color">

      </div>
      <el-table :data="tableData" @row-click="handleTableRow" height="604" style="width: 100%">
        <el-table-column prop="seedWords" label="SeedWords" width="700" />
        <el-table-column prop="compWords" label="CompWords" width="180" />
        <el-table-column prop="comp" label="Comp" width="100"/>
      </el-table>
    </el-col>
    <el-col :span="1" class="nothing">

    </el-col>
    <el-col :span="6">
      <div id="top-color">

      </div>
      <div>
        <p>过滤竞争词</p>
        <el-input v-model="input" placeholder="请输入过滤词" clearable style="width: 180px;"/>
        <el-button type="primary" id="include-btn" style="margin-left: 13px">Include</el-button>
        <el-button type="danger" id="exclude-btn">Exclude</el-button>
      </div>
      <div id="top-color">

      </div>
      <el-row>
        <div id="header">
          My List:
        </div>
      </el-row>
      <el-row>
        <el-empty description="点击关键词以添加到列表" style="width: 350px;" v-if="word_list.length === 0"/>
        <el-table :data="word_list" stripe style="width: 350px" v-else>
          <el-table-column prop="word" label="WordList" style="width: content-box"/>
        </el-table>
      </el-row>
    </el-col>
  </el-row>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
export default {
  name: 'App',
  components: {

  },
  data : function (){
    return {
      word_list : [{word: "a"}]
    }
  }
}
</script>
<script setup>
import { ref } from 'vue'
const input = ref('')
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

body{
  background-color: #f7f8fa;
}

.search {
  margin-top: 15px;
  margin-bottom: 15px;
}

.input{
  margin-left: 250px;
}

.searchBtn{
  margin-left: 100px;
}

body{
  padding: 0;
  margin: 0;
}
</style>
