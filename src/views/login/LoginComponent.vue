<template>
  <n-el>
    <NButton @click="run">弹窗</NButton>
  </n-el>
</template>

<script setup lang="ts" name="Login">
import { useUBox } from '@/unity/ubox/useUBox'
const box=useUBox();
const run = async () => {
  console.log(1)
  const res=await box()
  console.log(res)
  console.log(2)
}
</script>

<style lang="scss" scoped></style>
