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
import {
  defineComponent,
  getCurrentInstance,
  reactive,
  toRefs,
  onMounted,
  onUnmounted
} from 'vue'
export default {
  setup(){
    const {ctx} = getCurrentInstance()
    onMounted(()=>{
      ctx.mittBus.on('comp_key', (data)=>{
        this.compList = data;
        let res = {'word' : data.seedWords}
        this.word_list.push(res)
      })
    })
    onUnmounted(()=>{
      // 离开时销毁
      ctx.mittBus.off("update")
    })

  },
  name: "MyList",
  data() {
    return {
      word_list: [
        // {word: "a"},
        // {word: "b"}
      ],
      compList : []
    }
  },
  mounted() {

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