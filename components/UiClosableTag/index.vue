<script lang="ts">
export default {
  name: 'UiClosableTag'
};
</script>
<script setup lang="ts">
import { CloseIcon12 } from '@/assets/icons';
import { ButtonInstance } from 'element-plus';
import { computed, inject, ref } from 'vue';
import { closableTagGroupKey } from '@/assets/libs';

const closableTagGroupValue = inject(closableTagGroupKey);
const props = defineProps<{
  type?: 'plain';
  size?: 'xs' | 's';
  notClosed?: boolean;
  value?: number | string;
}>();
const emit = defineEmits<{
  (e: 'click', data: { type: typeof props.type }): void;
  (e: 'close', data?: typeof props.value): void;
}>();
const closeButtonRef = ref<ButtonInstance>();
const handleClose = () => {
  if (props.value && closableTagGroupValue) {
    closableTagGroupValue.value.includes(props.value)
      ? (closableTagGroupValue.value = closableTagGroupValue.value.filter(
          (el) => el !== props.value
        ))
      : null;
  }
  if (props.value) emit('close', props.value);
  else emit('close');
};
const handleClick = () => {
  emit('click', { type: props.type });
  if (props.value && closableTagGroupValue) {
    !closableTagGroupValue.value.includes(props.value)
      ? closableTagGroupValue.value.push(props.value)
      : null;
  }
};
const showCloseButton = computed(
  () =>
    (closableTagGroupValue &&
      props.value &&
      closableTagGroupValue.value.includes(props.value)) ||
    (!closableTagGroupValue && !props.value && !props.notClosed)
);
</script>
<template>
  <button
    class="closable-tag"
    :class="{
      [`closable-tag--${type}`]: type,
      [`closable-tag--${size}`]: size,
      'closable-tag--plain':
        (closableTagGroupValue &&
          value &&
          !closableTagGroupValue.includes(value)) ||
        (!closableTagGroupValue && !value && type === 'plain')
    }"
    type="button"
    @click="handleClick"
  >
    <div class="closable-tag__content"><slot /></div>
    <el-button
      v-if="showCloseButton"
      ref="closeButtonRef"
      :icon="CloseIcon12"
      circle
      text
      size="small"
      class="closable-tag__close"
      @click.stop="handleClose"
    />
  </button>
</template>

<style scoped></style>
