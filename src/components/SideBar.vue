<template>
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
</template>

<script>
import FilterInput from "@/components/FilterInput";
import MyList from "@/components/MyList";

export default {
  name: "SideBar",
}
</script>

<style lang="less" scoped>
//FilterInput{
//  display: flex;
//  position: absolute;
//  right: 0px;
//  width: 80px;
//}
</style>