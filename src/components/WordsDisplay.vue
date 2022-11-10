<template>
  <div class="common-layout">
    <el-container>
      <el-header>Header</el-header>
      <el-container>
        <el-aside width="200px">Aside</el-aside>
        <el-main>Main</el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import eventBus from "@/components/eventBus";
export default {
  name: "WordsDisplay",
  data(){
    return {
      filter:{}
    }
  },
  methods:{
    getFilter(){
      eventBus.$on("getFilter", (data)=>{
          this.filter = data;
      })
    }
  }
}
</script>

<style scoped>

</style>
