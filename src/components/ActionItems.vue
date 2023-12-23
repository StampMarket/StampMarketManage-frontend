<script setup>
import { NSpace, NButton, NIcon } from "naive-ui";
import { ReorderFourOutline as OrderIcon } from "@vicons/ionicons5";
import {StarOutline as StarIcon,
        PeopleOutline as UserIcon
} from "@vicons/ionicons5";
import { useRouter} from "vue-router";

const router = useRouter();
</script>

<template>
  <n-space>
    <n-button @click="router.push('/')" strong>
      <template #icon>
        <n-icon>
          <star-icon />
        </n-icon>
      </template>
      工作台
    </n-button>
    <n-button @click="router.push('/stamp')" strong>
      <template #icon>
        <n-icon>
          <order-icon />
        </n-icon>
      </template>
      邮票管理
    </n-button>

  </n-space>
</template>

<style scoped>

</style>