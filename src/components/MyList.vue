<template>
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
</template>

<script>
export default {
  name: "MyList",
  data() {
    return {
      word_list: [
        // {word: "a"},
        // {word: "b"}
      ]
    }
  }
}
</script>

<style scoped>
#top-color{
  box-sizing: content-box;
  height: 3px;
  background-color: #434343;
  margin-top: 20px;
}

#header{
  text-align: left;
  margin-top: 5px;
  font: 18px bold;
}
</style>