<template>
<!--  <img alt="Vue logo" src="./assets/logo.png">-->
<!--  <HelloWorld msg="Welcome to Your Vue.js App"/>-->
  <el-row>
    <el-col :span="24">
      <MyHeader></MyHeader>
    </el-col>
  </el-row>
  <el-row>
    <el-col :span="18">
      <MainDisplay></MainDisplay>
    </el-col>
    <el-col :span="5.8">
      <SideBar></SideBar>
    </el-col>
    <el-col :span="0.2"></el-col>
  </el-row>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import MyHeader from "@/components/Header";
import EnterSearch from "@/components/EnterSearch";
import SideBar from "@/components/SideBar";
import MainDisplay from "@/components/MainDisplay";
export default {
  name: 'App',
  components: {
    MyHeader,
    EnterSearch,
    SideBar,
    MainDisplay
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
