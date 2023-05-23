<script lang="ts">
export default {
  name: 'UiRating'
};
</script>
<script setup lang="ts">
import { StarSolidIcon12 } from '@/assets/icons';
</script>
<template>
  <el-rate
    v-bind="$attrs"
    :void-icon="StarSolidIcon12"
    :disabled-void-icon="StarSolidIcon12"
    :icons="[StarSolidIcon12,StarSolidIcon12,StarSolidIcon12]"
  ></el-rate>
</template>

<style scoped></style>
