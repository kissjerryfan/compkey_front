<template>
  <el-input v-model="input" size="large" placeholder="请输入要搜索的信息" clearable />
</template>

<script setup>
  import { ref } from 'vue'
  const input = ref('')
</script>
<script>
export default {
  name: "EnterSearch"
}
</script>


<style scoped>

</style>
