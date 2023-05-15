<template>
  <div style="padding: 50px;display: flex; flex-wrap: wrap; gap: 10px;align-items: flex-start;">
    <UIosWidge></UIosWidge>
    <div class="uGridWidget">
      <div
        class="uGridWidget-icon"
        v-for="item in data.children"
        :key="item.mid"
      >
        <img :src="item.face" alt="" />
      </div>
    </div>
    <div class="uGridWidget dark">
      <div
        class="uGridWidget-icon"
        v-for="item in data.children"
        :key="item.mid"
      >
        <img :src="item.face" alt="" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import UIosWidge from '@/unity/uIsoWidget'
const data: any = ref({
  children: []
})
fetch(
  'https://api.bilibili.com/x/relation/followings?vmid=352318038&pn=1&ps=20&order=desc&order_type=attention'
)
  .then((res) => res.json())
  .then((result: any) => {
    data.value.children = result.data.list.slice(0, 10)
  })
</script>

<style lang="scss" scoped>
.uGridWidget {
  --width: 240px;
  --gap: 10px;
  --radius: 8px;
  display: flex;
  padding: var(--gap);
  flex-wrap: wrap;
  gap: var(--gap);
  width: var(--width);
  border-radius: var(--radius);
  background-color: rgba(#fff, 0.8);
  backdrop-filter: saturate(180%) blur(8px);
  box-shadow: 0 0 6px 1px rgba(180, 180, 180, 0.2);
  &.dark {
    background: rgba(#000, 0.5);
  }
  &-icon {
    width: calc(var(--width) / 5 - var(--gap) * 6 / 5);
    height: calc(var(--width) / 5 - var(--gap) * 6 / 5);
    img {
      display: block;
      width: 100%;
      height: 100%;
      border-radius: 4px;
    }
  }
}
</style>
