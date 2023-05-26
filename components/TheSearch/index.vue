<script lang="ts">
export default {
  name: 'TheSearch',
  inheritAttrs: false
};
</script>
<script setup lang="ts">
import { CloseIcon24, SearchIcon24 } from '@/assets/icons';
import { InputInstance } from 'element-plus';
import { computed, ref, useAttrs } from 'vue';
const props = defineProps<{
  modelValue: string;
  size?: 'small';
}>();
const emit = defineEmits<{
  (e: 'update:modelValue', data: string): void;
}>();
const inputRef = ref<InputInstance>();
const model = computed({
  get() {
    return props.modelValue;
  },
  set(newVal) {
    emit('update:modelValue', newVal);
  }
});
const handleClear = () => {
  model.value = '';
  inputRef.value?.focus();
};
const attrs = useAttrs();
const restAttrs = computed(() =>
  Object.keys(attrs)
    .filter((key) => !['class'].includes(key))
    .reduce((obj, key) => {
      (obj as any)[key] = attrs[key];
      return obj;
    }, {})
);
</script>

<template>
  <form class="search" :class="[$attrs.class, { [`search--${size}`]: size }]">
    <el-input
      v-bind="restAttrs"
      ref="inputRef"
      v-model="model"
      :class="{
        filled: model.length
      }"
    >
      <template #append>
        <el-button
          class="el-input__clear"
          circle
          text
          :icon="CloseIcon24"
          native-type="button"
          @click="handleClear"
        />
        <el-button circle plain :icon="SearchIcon24" native-type="submit" />
      </template>
    </el-input>
  </form>
</template>

<style scoped></style>
