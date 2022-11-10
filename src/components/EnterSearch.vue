<template>
  <el-input-number v-model="num" :step="2" step-strictly />
</template>

<script setup>
import { ref } from 'vue'
const num = ref(2)
</script>
<script>
export default {
  name: "EnterSearch"
}
</script>


<style scoped>

</style>
