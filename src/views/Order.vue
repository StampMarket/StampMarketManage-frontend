<script setup>
import {ref} from "vue";
import {NButton, NCard, NForm, NFormItem, NGi, NGrid, NInput, NModal} from "naive-ui";


const Stamps = ref([
  {
    "id": 0,
    "name": "新增邮票0",
    "description": "测试用的新邮票",
    "width": 10,
    "height": 20,
    "publishDate": "2023-12-12",
    "price": 1.23
  },
  {
    "id": 1,
    "name": "新增邮票1",
    "description": "测试用的新邮票",
    "width": 10,
    "height": 20,
    "publishDate": "2023-12-12",
    "price": 1.23
  },
  {
    "id": 2,
    "name": "新增邮票2",
    "description": "测试用的新邮票",
    "width": 10,
    "height": 20,
    "publishDate": "2023-12-12",
    "price": 1.23
  },
  {
    "id": 4,
    "name": "新增邮票",
    "description": "测试用的新邮票",
    "width": 10,
    "height": 20,
    "publishDate": "2023-12-12",
    "price": 1.23
  }
])
const showModal = ref(false)
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
const handleSelectionChange = (selection) => {
  multipleSelection.value = selection;
  console.log(multipleSelection.value);
}

const openEdit = (stamp) => {
  showModal.value = true;
  var obj = JSON.parse(JSON.stringify(stamp)); // deep copy, otherwise the change will be written back to Stamps
  stampModel.value = obj;
}

const comfirmChange = () => {
  // write change back to Stamps
  const stamp = stampModel.value;
  const index = Stamps.value.findIndex(x => x.id === stamp.id);
  Stamps.value[index] = stamp;
  // close modal
  showModal.value = false;

}
</script>

<template>
  <h1 class="text-3xl pb-2">邮票管理</h1>
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
        <n-button @click="comfirmChange">Confirm</n-button>
      </n-form>
    </n-card>

    <!--      <n-form-item path="password" label="密码">-->
    <!--        <n-input-->
    <!--            v-model:value="model.password"-->
    <!--            type="password"-->
    <!--            @input="handlePasswordInput"-->
    <!--            @keydown.enter.prevent-->
    <!--        />-->
    <!--      </n-form-item>-->
    <!--      <n-form-item-->
    <!--          ref="rPasswordFormItemRef"-->
    <!--          first-->
    <!--          path="reenteredPassword"-->
    <!--          label="重复密码"-->
    <!--      >-->
    <!--        <n-input-->
    <!--            v-model:value="model.reenteredPassword"-->
    <!--            :disabled="!model.password"-->
    <!--            type="password"-->
    <!--            @keydown.enter.prevent-->
    <!--        />-->
    <!--      </n-form-item>-->
    <!--      <n-row :gutter="[0, 24]">-->
    <!--        <n-col :span="24">-->
    <!--          <div style="display: flex; justify-content: flex-end">-->
    <!--            <n-button-->
    <!--                :disabled="model.age === null"-->
    <!--                round-->
    <!--                type="primary"-->
    <!--                @click="handleValidateButtonClick"-->
    <!--            >-->
    <!--              验证-->
    <!--            </n-button>-->
    <!--          </div>-->
    <!--        </n-col>-->
    <!--      </n-row>-->
  </n-modal>


</template>

<style scoped>

</style>