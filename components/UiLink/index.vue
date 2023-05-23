<script lang="ts">
export default {
  name: 'UiLink'
};
</script>
<script setup lang="ts">
import { FunctionalComponent, SVGAttributes } from 'vue';

defineProps<{
  size?: 'small' | 'default';
  icon?: FunctionalComponent<SVGAttributes>;
  rightIcon?: FunctionalComponent<SVGAttributes>;
  disabled?: boolean;
}>();
</script>
<template>
  <a
    v-bind="$attrs"
    class="link"
    :class="{
      'is-small': size === 'small',
      'is-disabled': disabled
    }"
  >
    <el-icon v-if="icon">
      <component :is="icon" />
    </el-icon>
    <span v-if="$slots.default">
      <slot />
    </span>
    <el-icon v-if="rightIcon" class="el-icon--right">
      <component :is="rightIcon" />
    </el-icon>
  </a>
</template>

<style scoped></style>
