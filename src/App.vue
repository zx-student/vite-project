<template>
  <div>
    <el-button type="primary" size="default" :icon="Plus">主要按钮</el-button>
    <el-button type="success" size="small" :icon="Edit">编辑按钮</el-button>
    <div>
      <svg-icon name="edit" color="red" width="20px" height="20px"></svg-icon>
      <div class="text">111</div>
    </div>
  </div>
</template>

<script setup lang="ts">
// 引入element图标组件
import { Plus, Edit } from '@element-plus/icons-vue'
</script>

<style lang="scss" scoped>
.text {
  color: $color2;
}
</style>
