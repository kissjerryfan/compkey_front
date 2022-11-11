<template>
  <el-row>
    <el-col :span="24">
      <MyHeader></MyHeader>
    </el-col>
  </el-row>
  <el-row class="search">
    <el-col :span="8" class="input">
      <EnterSearch></EnterSearch>
    </el-col>
    <el-col :span="4">
      <InformationSearch class="searchBtn"></InformationSearch>
    </el-col>
    <el-col :span="7">
    </el-col>
  </el-row>
  <el-row>
    <el-col :span="17">
      <InformationTable class="informationTable"></InformationTable>
    </el-col>
    <el-col :span="1" class="nothing">

    </el-col>
    <el-col :span="6">
      <SideBar class="sideBar"></SideBar>
    </el-col>
  </el-row>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import MyHeader from "@/components/Header";
import SideBar from "@/components/SideBar";
import InformationTable from "@/components/InformationTable";
import EnterSearch from "@/components/EnterSearch";
import InformationSearch from "@/components/InformationSearch";
export default {
  name: 'App',
  components: {
    MyHeader,
    SideBar,
    InformationTable,
    EnterSearch,
    InformationSearch
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
