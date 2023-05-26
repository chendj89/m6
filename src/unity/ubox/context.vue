<template>
  <div style="padding: 4px 10px">
    <div>123</div>
    <NButton type="success" size="small" @click="success">哈哈</NButton>
  </div>
</template>

<script setup lang="ts" name="uboxContent">
const { msg = 'hello', onClose = () => {} } = defineProps(['msg', 'onClose'])
let timer:any=null;
timer=setInterval(()=>{
  console.log(1)
},1000)
onBeforeUnmount(()=>{
  clearInterval(timer)
})

const success = () => {
  onClose({ msg, fromContext: '121' })
}
</script>

<style scoped></style>
