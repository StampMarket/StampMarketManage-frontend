<script setup>
import {onMounted, ref} from "vue";
import {NButton, NCard, NForm, NFormItem, NGi, NGrid, NInput, NModal} from "naive-ui";
import request from "../utils/request.js";
import api from "../utils/api.js";


const Stamps = ref([
  {
    "id": 0,
    "name": "新增邮票0",
    "description": "测试用的新邮票",
    "width": 10,
    "height": 20,
    "publishDate": "2023-12-12",
    "price": 1.23
  }
])
const showModal = ref(false)
const showAppendModal = ref(false)
const multipleTableRef = ref(null)
const multipleSelection = ref([])

const rules = {
  stampModel: {
    name: {
      required: true,
      message: "请输入姓名",
      trigger: "blur"
    }
  }
}
const formRef = ref(null);
const stampModel = ref({
  "id": null,
  "name": "",
  "description": "",
  "width": null,
  "height": null,
  "publishDate": null,
  "price": null
})
const stampToAddModel = ref({
  "id": null,
  "name": "",
  "description": "",
  "width": null,
  "height": null,
  "publishDate": null,
  "price": null
})

const handleSelectionChange = (selection) => {
  multipleSelection.value = selection;
  console.log(multipleSelection.value);
}

const openEdit = (stamp) => {
  showModal.value = true;
  const obj = JSON.parse(JSON.stringify(stamp)); // deep copy, otherwise the change will be written back to Stamps
  stampModel.value = obj;
}

const openAppend = () => {
  showAppendModal.value = true;
}

const confirmChange = () => {
  // write change back to Stamps
  const price = stampModel.value.price;
  request.put(api.updateStamp + '/' + stampModel.value.id, {price: price}, {
    params: {
      'price': price
    }
  }).then((res) => {
    fetchStampList()
    showModal.value = false;
  }).catch((err) => {
    console.log(err)
    alert('修改失败')
  })
  Stamps.value[index] = stamp;
  // close modal
  showModal.value = false;
}

const confirmAppend = () => {
  // write change back to Stamps
  const stamp = stampToAddModel.value;
  request.put(api.addStamp, stamp).then((res) => {
      alert('新增成功')
      fetchStampList()
  }).catch((err) => {
    console.log(err)
    alert('新增失败')
  })
  showAppendModal.value = false;
}

const fetchStampList = () => {
  request.get(api.getStampList).then((res) => {
    Stamps.value = res.data;
  })
}

onMounted(() => {
  fetchStampList()
})
</script>

<template>
  <h1 class="text-3xl pb-2">邮票管理</h1>
  <n-button class="my-2" @click="openAppend" type="info" strong secondary >新增邮票</n-button>
  <el-table :data="Stamps" border style="width: 100%"
            :default-sort="{ prop: 'name', order: 'ascending' }"
            @selection-change="handleSelectionChange"
            ref="multipleTableRef"
  >
    <el-table-column type="selection" width="55"/>
    <el-table-column prop="name" sortable label="Name"/>
    <el-table-column prop="description" label="Description"/>
    <el-table-column prop="width" label="Width"/>
    <el-table-column prop="height" label="Height"/>
    <el-table-column prop="publishDate" sortable label="PublishDate"/>
    <el-table-column prop="price" sortable label="Price"/>
    <el-table-column fixed="right" label="Operations" width="120">
      <template #default="{row}">
        <el-button link type="primary" size="small" @click="openEdit(row)">Edit</el-button>
      </template>
    </el-table-column>
  </el-table>

  <!-- 编辑邮票窗口 -->
  <n-modal v-model:show="showModal" class="bg-gray-100 rounded-lg p-4">
    <n-card class="p-0 w-fit">
      <n-card-header>
        <span class="text-2xl">编辑邮票</span>
      </n-card-header>
      <n-form ref="formRef" :model="stampModel" class="mt-5">
        <n-grid :cols="3" :x-gap="32">
          <n-gi>
            <n-form-item path="name" label="Name">
              <n-input v-model:value="stampModel.name" @keydown.enter.prevent/>
            </n-form-item>
          </n-gi>
          <n-gi>
            <n-form-item path="description" label="Description">
              <n-input v-model:value="stampModel.description" @keydown.enter.prevent/>
            </n-form-item>
          </n-gi>
          <n-gi>
            <n-form-item path="width" label="Width">
              <n-input v-model:value="stampModel.width" @keydown.enter.prevent/>
            </n-form-item>
          </n-gi>
          <n-gi>
            <n-form-item path="height" label="Height">
              <n-input v-model:value="stampModel.height" @keydown.enter.prevent/>
            </n-form-item>
          </n-gi>
          <n-gi>
            <n-form-item path="publishDate" label="PublishDate">
              <n-input v-model:value="stampModel.publishDate" @keydown.enter.prevent/>
            </n-form-item>
          </n-gi>
          <n-gi>
            <n-form-item path="price" label="Price">
              <n-input v-model:value="stampModel.price" @keydown.enter.prevent/>
            </n-form-item>
          </n-gi>
        </n-grid>
        <n-button @click="confirmChange">Confirm</n-button>
      </n-form>
    </n-card>
  </n-modal>

  <!-- 新增邮票窗口 -->
  <n-modal v-model:show="showAppendModal" class="bg-gray-100 rounded-lg p-4">
    <n-card class="p-0 w-fit">
      <n-card-header>
        <span class="text-2xl">新增邮票</span>
      </n-card-header>
      <n-form ref="formRef" :model="stampToAddModel" class="mt-5">
        <n-grid :cols="3" :x-gap="32">
          <n-gi>
            <n-form-item path="name" label="Name">
              <n-input v-model:value="stampToAddModel.name" @keydown.enter.prevent/>
            </n-form-item>
          </n-gi>
          <n-gi>
            <n-form-item path="description" label="Description">
              <n-input v-model:value="stampToAddModel.description" @keydown.enter.prevent/>
            </n-form-item>
          </n-gi>
          <n-gi>
            <n-form-item path="width" label="Width">
              <n-input v-model:value="stampToAddModel.width" @keydown.enter.prevent/>
            </n-form-item>
          </n-gi>
          <n-gi>
            <n-form-item path="height" label="Height">
              <n-input v-model:value="stampToAddModel.height" @keydown.enter.prevent/>
            </n-form-item>
          </n-gi>
          <n-gi>
            <n-form-item path="publishDate" label="PublishDate">
              <n-input v-model:value="stampToAddModel.publishDate" @keydown.enter.prevent/>
            </n-form-item>
          </n-gi>
          <n-gi>
            <n-form-item path="price" label="Price">
              <n-input v-model:value="stampToAddModel.price" @keydown.enter.prevent/>
            </n-form-item>
          </n-gi>
        </n-grid>
        <n-button @click="confirmAppend">Confirm</n-button>
      </n-form>
    </n-card>
  </n-modal>


</template>

<style scoped>

</style>