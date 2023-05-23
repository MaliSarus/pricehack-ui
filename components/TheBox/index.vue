<script lang="ts">
export default {
  name: 'TheBox'
};
</script>
<script setup lang="ts">
import { CloseIcon16 } from '@/assets/icons';
defineProps<{
  hideClose?: boolean;
}>();
</script>

<template>
  <el-card class="box">
    <div class="box__header">
      <slot name="header" />
      <el-button
        v-if="!hideClose"
        text
        circle
        class="box__close"
        :icon="CloseIcon16"
        size="small"
      />
    </div>
    <div class="box__body">
      <slot />
    </div>
    <div v-if="$slots.footer" class="box__footer">
      <slot name="footer" />
    </div>
  </el-card>
</template>

<style lang="scss" scoped>
.box {
  --el-card-padding: var(--space-3);
  --el-card-border-radius: var(--buttons-big-radius);
  --el-box-shadow-light: var(--shadow-m);
  --el-card-border-color: rgba(var(--white-color--rgb), 0);
  --el-card-bg-color: var(--white-color);
  &__header {
    display: flex;
  }
  &__body {
    text-align: left;
    padding: 0 var(--space-5) var(--space-5);
  }
  &__close {
    --el-button-text-color: var(--icons-color);
    padding: 0;
    margin-left: auto;
    flex-shrink: 0;
  }
}
</style>
