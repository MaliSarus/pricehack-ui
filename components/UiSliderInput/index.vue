<script lang="ts">
export default {
  name: 'UiSliderInput'
};
</script>
<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps<{
  modelValue: [number, number];
  min: number;
  max: number;
  minText?: string;
  maxText?: string;
}>();
const emit = defineEmits<{
  (e: 'update:modelValue', data: [number, number]): void;
}>();
const value = computed({
  get() {
    return props.modelValue;
  },
  set(newVal) {
    emit('update:modelValue', newVal);
  }
});

const handleChange = () => {
  if (value.value[0] > value.value[1]) {
    value.value[0] = value.value[1];
  }
};
</script>
<template>
  <div class="slider-input">
    <div class="slider-input__slider">
      <el-slider
        v-model="value"
        range
        :min="min"
        :max="max"
        :show-tooltip="false"
      />
    </div>
    <div class="slider-input__inputs">
      <div class="slider-input__input left">
        <el-input
          v-model.number="value[0]"
          :min="min"
          :max="value[1]"
          :controls="false"
          type="number"
          inputmode="numeric"
          @change="handleChange"
        >
          <template v-if="minText" #prepend>{{ minText }}</template>
        </el-input>
      </div>
      <div class="slider-input__input right">
        <el-input
          v-model.number="value[1]"
          :min="value[0]"
          :max="max"
          :controls="false"
          :prepend="maxText"
          type="number"
          inputmode="numeric"
          @change="handleChange"
        >
          <template v-if="maxText" #prepend>{{ maxText }}</template>
        </el-input>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
