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
    <n-button @click="router.push('/order')" strong>
      <template #icon>
        <n-icon>
          <order-icon />
        </n-icon>
      </template>
      订单管理
    </n-button>
    <n-button @click="router.push('/user')" strong>
      <template #icon>
        <n-icon>
          <user-icon />
        </n-icon>
      </template>
      用户管理
    </n-button>

  </n-space>
</template>

<style scoped>

</style>