<template>
  <el-button color="#626aef" :dark="isDark" plain>Include</el-button>
  <el-button color="#626aef" :dark="isDark" plain>Exclude</el-button>
</template>

<script>
export default {
  name: "FilterInput"
}
</script>
<script setup>
  import { isDark } from '~/composables/dark'
</script>

<style scoped>

</style>