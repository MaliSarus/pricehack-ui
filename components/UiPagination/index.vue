<script lang="ts">
export default {
  name: 'UiPagination'
};
</script>
<script setup lang="ts">
import { ArrowLeftIcon16, ArrowRightIcon16 } from '@/assets/icons';
import Paginator, { PageState } from 'primevue/paginator';
import { computed } from 'vue';
// eslint-disable-next-line vue/no-setup-props-destructure
const props = defineProps<{
  totalPages: number;
  modelValue: number;
}>();

const emit = defineEmits<{
  (e: 'update:modelValue', data: number): void;
}>();

const currentPage = computed({
  get() {
    return props.modelValue;
  },
  set(newVal) {
    emit('update:modelValue', newVal);
  }
});
const handleChangePage = (event: PageState) => {
  currentPage.value = event.page + 1;
};
</script>
<template>
  <div class="pagination">
    <Paginator
      :rows="1"
      :page-link-size="4"
      :total-records="totalPages"
      template="PrevPageLink PageLinks NextPageLink"
      class="d-md-none"
      @page="handleChangePage"
    >
      <template #prevpagelinkicon>
        <ArrowLeftIcon16 />
      </template>
      <template #nextpagelinkicon>
        <ArrowRightIcon16 />
      </template>
    </Paginator>
    <el-pagination
      v-model:current-page="currentPage"
      :page-size="1"
      background
      layout="prev, pager, next"
      :total="totalPages"
      :prev-icon="ArrowLeftIcon16"
      :next-icon="ArrowRightIcon16"
      :pager-count="6"
      class="hidden-md-and-down"
    />
  </div>
</template>

<style scoped></style>
