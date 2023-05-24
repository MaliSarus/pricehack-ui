<script lang="ts">
export default {
  name: "UiCountryPhoneInput",
};
</script>
<script setup lang="ts">
import { Countries } from "@/assets/libs";
import { computed, ref } from "vue";
import IMask from "imask";

const props = defineProps<{
  modelValue: string;
}>();

const emit = defineEmits<{
  (e: "update:modelValue", data: string): void;
  (e: "countryChange", data: string): void;
  (e: "maskChange", data: string): void;
}>();

const value = computed({
  get() {
    return props.modelValue;
  },
  set(newVal) {
    emit("update:modelValue", newVal);
  },
});

const country = ref<CountryPhoneCode>("RU");
const currentCountry = computed(() =>
  Countries.find((countryItem) => countryItem.iso === country.value)
);
const countryFlag = computed(() => currentCountry.value?.flag);
const countryMask = computed(() => {
  const masks = currentCountry.value?.mask;
  if (Array.isArray(masks)) return masks[0];
  return masks;
});
const countryPlaceholder = computed(() => {
  let result = "";
  result = countryMask.value?.replace(/[{}]/gi, "") as string;
  result = result.replace(/[0-9]/gi, "0") as string;
  return result;
});
const countryCode = computed(() => currentCountry.value?.code);
const countryMaskFunction = computed(() =>
  IMask.createPipe({
    mask: countryMask.value as string,
  })
);
const handleInput = (e: string) => {
  value.value = countryMaskFunction.value(e);
};
const handleCountryChange = (e: string) => {
  value.value = "";
  emit("countryChange", countryCode.value as string);
  emit("maskChange", countryMask.value as string);
};
</script>
<template>
  <el-input
    v-model="value"
    class="country-phone-input"
    inputmode="numeric"
    :placeholder="countryPlaceholder"
    @input="handleInput"
  >
    <template #prepend>
      <el-select
        v-model="country"
        placeholder="Select"
        :validate-event="false"
        @change="handleCountryChange"
      >
        <template #prefix>
          <img :src="countryFlag" alt="" class="country-phone-input__flag" />
        </template>
        <el-option
          v-for="countryItem in Countries"
          :key="countryItem.code"
          :value="countryItem.iso"
        >
          <img :src="countryItem.flag" alt="" class="country-phone-input__flag"
        /></el-option>
      </el-select>
      <span
        class="country-phone-input__code color_text-primary"
        style="margin-left: var(--space-3)"
      >
        {{ countryCode }}
      </span>
    </template>
  </el-input>
</template>

<style scoped></style>
