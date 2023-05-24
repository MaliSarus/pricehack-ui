<script lang="ts">
export default {
  name: 'UiDropdonwAvatar',
  inheritAttrs: false
};
</script>
<script setup lang="ts">
import { ArrowDownIcon12 } from '@/assets/icons';
defineProps<{
  user: {
    name?: string;
    subtext?: string;
    image?: string;
  };
  size?: 'xs' | 'm' | 'l' | 'xl';
}>();
</script>
<template>
  <el-dropdown
    trigger="click"
    placement="bottom-end"
    popper-class="dropdown-avatar__dropdown"
  >
    <div
      class="dropdown-avatar"
      :class="{ [`dropdown-avatar--${size}`]: size }"
    >
      <div class="dropdown-avatar__avatar">
        <UiAvatar :image="user.image" :user-name="user.name" :size="size" />
      </div>
      <div class="dropdown-avatar__info">
        <div class="dropdown-avatar__text">
          <div v-if="user.name" class="dropdown-avatar__name">
            {{ user.name }}
          </div>
          <div v-if="user.subtext" class="dropdown-avatar__subtext">
            {{ user.subtext }}
          </div>
        </div>
        <div class="dropdown-avatar__toggler">
          <el-icon><ArrowDownIcon12 /></el-icon>
        </div>
      </div>
    </div>
    <template #dropdown>
      <slot />
    </template>
  </el-dropdown>
</template>

<style scoped></style>
