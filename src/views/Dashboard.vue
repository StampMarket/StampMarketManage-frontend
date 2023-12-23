<script setup>
import { NCard, NNumberAnimation, NSpace, NDivider } from 'naive-ui'
import { ref, onMounted } from 'vue'
import request from "../utils/request.js";
import api from "../utils/api.js";

const StampCount = ref(0)
const Stamps = ref([
  {
    "id": 0,
    "name": "新增邮票",
    "description": "测试用的新邮票",
    "width": 10,
    "height": 20,
    "publishDate": "2023-12-12",
    "price": 1.23
  }
])
const numberAnimationInstRef = ref(null)

onMounted(() => {
  request.get(api.getStampList).then((res) => {
    Stamps.value = res.data;
    StampCount.value = res.data.length;
  })
  numberAnimationInstRef.value?.play()
})

</script>

<template>
  <H1 class="text-4xl mb-4">概览</H1>

  <n-card title="工作台" size="medium" :bordered="true">
    <p>
      当前日期：{{ new Date().toLocaleDateString() }}
    </p>
    <br>
    <p class="text-2xl">
      <span class="text-xl">当前邮票数量：</span>
      <n-number-animation ref="numberAnimationInstRef" :from="0" :to="StampCount" />
    </p>
  </n-card>
  <H1 class="text-4xl my-4">邮票展示</H1>
  <n-space class="my-2">
    <n-card v-for="stamp in Stamps" :key="stamp.id" size="medium" :bordered="true" class="transition ease-in-out delay-800 hover:-translate-y-3 hover:scale-105 hover:shadow-xl"
    >
      <h-2 class="text-xl" style="margin-top: 5px">{{stamp.name}}</h-2>
      <template #cover>
        <img src="https://source.unsplash.com/300x300/?stamp">
      </template>
      <p class="my-2">{{stamp.description}}</p>
    </n-card>
  </n-space>
</template>

<style scoped>
</style>