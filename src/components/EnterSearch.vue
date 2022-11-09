<template>
  <el-input v-model="input" placeholder="Please input" clearable/>
</template>

<script setup>
import {ref} from 'vue'

const input = ref('')
</script>
<script>
export default {
  name: "EnterSearch"
}
</script>

<style scoped>

</style>
