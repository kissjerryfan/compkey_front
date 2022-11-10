<template>
<!--  <img alt="Vue logo" src="./assets/logo.png">-->
<!--  <HelloWorld msg="Welcome to Your Vue.js App"/>-->
  <el-row>
    <el-col :span="24">
      <MyHeader></MyHeader>
    </el-col>
  </el-row>
  <el-row>
    <el-col :span="24">
      <EnterSearch></EnterSearch>
    </el-col>
  </el-row>
  <el-row>
    <el-col :span="18">
      <WordsDisplay></WordsDisplay>
    </el-col>
    <el-col :span="6">
      <SideBar></SideBar>
    </el-col>
  </el-row>
  <el-row>
    <el-col :span="18">
      <InformationTable></InformationTable>
    </el-col>
  </el-row>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import MyHeader from "@/components/Header";
import WordsDisplay from "@/components/WordsDisplay";
import EnterSearch from "@/components/EnterSearch";
import SideBar from "@/components/SideBar";
import InformationTable from "@/components/InformationTable";
export default {
  name: 'App',
  components: {
    MyHeader,
    WordsDisplay,
    EnterSearch,
    SideBar,
    InformationTable
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
  padding: 0;
  margin: 0;
}
</style>
