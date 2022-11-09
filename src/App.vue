<template>
<!--  <img alt="Vue logo" src="./assets/logo.png">-->
<!--  <HelloWorld msg="Welcome to Your Vue.js App"/>-->
  <MyHeader></MyHeader>
  <EnterSearch></EnterSearch>
  <WordsDisplay></WordsDisplay>
  This is main page
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import MyHeader from "@/components/Header";
import WordsDisplay from "@/components/WordsDisplay";
import EnterSearch from "@/components/EnterSearch";
export default {
  name: 'App',
  components: {
    MyHeader,
    WordsDisplay,
    EnterSearch
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
