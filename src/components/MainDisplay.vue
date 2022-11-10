<template>
  <EnterSearch></EnterSearch>
  <InformationTable></InformationTable>
</template>

<script>
import EnterSearch from "@/components/EnterSearch";
import InformationTable from "@/components/InformationTable";
export default {
  name: "MainDisplay",
  components: {
    InformationTable,
    EnterSearch
  }
}
</script>

<style scoped>

</style>
