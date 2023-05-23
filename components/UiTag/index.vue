<script lang="ts">
export default {
  name: 'UiTag'
};
</script>
<script setup lang="ts">
defineProps<{
  type?: 'success' | 'info' | 'warning' | 'danger' | 'error';
}>();
</script>
<template>
  <el-tag
    v-bind="$attrs"
    :type="type !== 'error' ? type : undefined"
    :class="{
      'el-tag--error': type === 'error'
    }"
  >
    <slot />
  </el-tag>
</template>

<style scoped></style>
