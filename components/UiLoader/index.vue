<script setup lang="ts">
defineOptions({
  name: 'UiLoader'
});
</script>

<template>
  <div class="lds-dual-ring"></div>
</template>

<style lang="scss" scoped>
.lds-dual-ring {
  display: inline-block;
  width: 80px;
  height: 80px;
  color: var(--text-tertiary-color);
  &::after {
    content: ' ';
    display: block;
    width: 64px;
    height: 64px;
    margin: 8px;
    border-radius: 50%;
    border: 6px solid currentColor;
    border-color: currentColor rgba(var(--white-color--rgb), 0) currentColor
      rgba(var(--white-color--rgb), 0);
    animation: lds-dual-ring 1.2s linear infinite;
  }
}
@keyframes lds-dual-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
