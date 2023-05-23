<script lang="ts">
export default {
  name: 'UiAvatar',
  inheritAttrs: false
};
</script>
<script setup lang="ts">
import { AvatarIcon16, AvatarIcon24 } from '@/assets/icons';
import { computed } from 'vue';

const props = defineProps<{
  userName?: string;
  image?: string;
  size?: 'xs' | 's' | 'm' | 'l' | 'xl' | 'xxl';
}>();

//Формирования инициалов
const initials = computed(() => {
  let result = '';
  if (props?.userName)
    result =
      props?.userName.split(' ').length >= 2 // Если userName состоит из двух слов
        ? props?.userName
            .split(' ')
            .slice(0, 2)
            .map((el: string) => el.slice(0, 1))
            .join('')
            .toUpperCase()
        : props?.userName.slice(0, 2).toUpperCase(); // Если userName состоит из одного слова
  return result;
});
</script>
<template>
  <div class="avatar" :class="$attrs.class">
    <el-avatar
      v-if="!userName && !image"
      :icon="size === 'xs' ? AvatarIcon16 : AvatarIcon24"
      :size="(size as any)"
      v-bind="$attrs"
    />
    <el-avatar
      v-else-if="image"
      :src="image"
      :size="(size as any)"
      v-bind="$attrs"
    />
    <el-avatar v-else-if="userName" :size="(size as any)" v-bind="$attrs">
      {{ initials }}
    </el-avatar>
  </div>
</template>

<style scoped></style>
