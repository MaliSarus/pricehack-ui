<script lang="ts">
export default {
  name: 'UiClosableTagGroup'
};
</script>
<script setup lang="ts">
import { computed, provide } from 'vue';
import { closableTagGroupKey } from '@/assets/libs';

const props = defineProps<{
  modelValue: (string | number)[];
}>();
const emit = defineEmits<{
  (e: 'update:modelValue', data: typeof props.modelValue): void;
}>();
const value = computed({
  get() {
    return props.modelValue;
  },
  set(newVal) {
    emit('update:modelValue', newVal);
  }
});
provide(closableTagGroupKey, value);
</script>
<template>
  <div class="closable-tag-group">
    <slot />
  </div>
</template>

<style scoped></style>
