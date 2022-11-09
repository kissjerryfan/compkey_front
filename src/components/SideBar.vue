<template>
  <FilterInput></FilterInput>
  <MyList></MyList>
</template>

<script>
import FilterInput from "@/components/FilterInput";
import MyList from "@/components/MyList";

export default {
  name: "SideBar",
  components: {
    FilterInput,
    MyList
  }
}
</script>

<style scoped>

</style>