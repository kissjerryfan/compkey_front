<template>
  <FilterInput style="margin-bottom: 20px; position: absolute"></FilterInput>
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

<style lang="less" scoped>
//FilterInput{
//  display: flex;
//  position: absolute;
//  right: 0px;
//  width: 80px;
//}
</style>