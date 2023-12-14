<script setup>
import { NSpace, NButton, NIcon } from "naive-ui";
import { ReorderFourOutline as OrderIcon } from "@vicons/ionicons5";
import {StarOutline as StarIcon} from "@vicons/ionicons5";

</script>

<template>
  <n-space>
    <n-button strong>
      <template #icon>
        <n-icon>
          <star-icon />
        </n-icon>
      </template>
      工作台
    </n-button>
    <n-button strong>
      <template #icon>
        <n-icon>
          <order-icon />
        </n-icon>
      </template>
      订单管理
    </n-button>

  </n-space>
</template>

<style scoped>

</style>