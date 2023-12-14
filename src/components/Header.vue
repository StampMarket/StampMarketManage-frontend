<script setup>
import ActionItems from "../components/ActionItems.vue";
import { h } from "vue";
import { NIcon, NDropdown, NButton } from "naive-ui";
import {
  PersonCircleOutline as UserIcon,
  Pencil as EditIcon,
  LogOutOutline as LogoutIcon
} from '@vicons/ionicons5'

const rederIcon = (icon) => {
  return () => {
    return h(NIcon, null, {
      default: () => h(icon)
    })
  }
}

const options = [
  {
    label: '用户资料',
    key: "user"
  },
  {
    label: '修改密码',
  key: "edit"
  },
  {
    label: '退出登录',
    key: "logout"
  }
]
</script>

<template>
  <div class="vaw-nav-bar-wrapper">
    <ActionItems />
    <div style="flex: 1"></div>
    <div class="right-wrapper">
    </div>
    <div class="avatar-wrapper">
      <n-dropdown :options="options">
        <n-button>用户资料</n-button>
      </n-dropdown>
    </div>
  </div>
</template>

<style scoped>
.vaw-nav-bar-wrapper {
  /* height: $logoHeight;
  max-height: $logoHeight;
  min-height: $logoHeight; */
  overflow: hidden;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  border-bottom: 1px solid var(--border-color);

  .avatar-wrapper {
    padding-right: 15px;
  }

  .right-wrapper {
    height: 100%;
  }
}
</style>