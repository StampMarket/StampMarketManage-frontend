<script setup>
import Header from "../components/Header.vue";
</script>

<template class="relative">
  <div class="common-layout">
    <el-container class="h-screen">
      <el-header class="border-neutral-900 border-b-gray-200 bg-gray-200 flex flex-col justify-center"><Header class="p-2 "/></el-header>
      <el-main class="p-2 bg-gray-50">
        <router-view/>
      </el-main>
    </el-container>
  </div>
</template>

<style scoped>

</style>