<template>
  <div
    style="
      padding: 50px;
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
      align-items: flex-start;
    "
  >
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
    <div class="uAli">
      <div class="uAli-content">
        <div class="uAli-title">Hi,你好</div>
        <div class="uAli-desc">添加小组件，可长按小组件自定义</div>
      </div>
      <div class="uAli-menu">
        <a class="uAli-menu-link">
          <img
            class="uAli-menu-icon"
            src="https://api.iconify.design/logos:vue.svg?color=%2310b981"
            alt=""
          />
        </a>
        <a class="uAli-menu-link">
          <img
            class="uAli-menu-icon"
            src="https://api.iconify.design/logos:react.svg?color=%23ffffff"
            alt=""
          />
        </a>
        <a class="uAli-menu-link">
          <img
            class="uAli-menu-icon"
            src="https://pinia.vuejs.org/logo.svg"
            alt=""
          />
        </a>
        <a class="uAli-menu-link">
          <img
            class="uAli-menu-icon"
            src="https://api.iconify.design/vscode-icons:file-type-vite.svg"
            alt=""
          />
        </a>
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

const url = 'https://api.github.com/repos/vuejs/core/releases?per_page=1'
fetch(url)
  .then((response) => response.text())
  .then((html) => {
    // 处理 HTML 内容
    console.log(html)
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
.uAli {
  --width: 240px;
  --gap: 10px;
  --radius: 8px;
  --bg: linear-gradient(45deg, #3595e1, #1677ff);
  display: flex;
  align-items: center;
  width: var(--width);
  border-radius: var(--radius);
  background: var(--bg);
  padding: var(--gap);
  color: #fff;
  background: var(--bg);

  &-title {
    font-size: 16px;
  }
  &-desc {
    font-size: 12px;
    margin-top: calc(var(--gap) / 2);
  }
  &-content {
    flex: 1;
    padding-right: var(--gap);
  }
  &-menu {
    display: inline-flex;
    flex-wrap: wrap;
    gap: var(--gap);
    width: calc(var(--width) / 6.5 * 2 + var(--gap));
    &-link {
      display: inline-block;
      background: rgb(78 78 78 / 25%);
      padding: calc(var(--gap) / 1.2);
      width: calc(var(--width) / 6.5);
      height: calc(var(--width) / 6.5);
      border-radius: var(--radius);
      backdrop-filter: blur(20px);
    }
    &-icon {
      display: block;
      width: 100%;
      height: 100%;
    }
  }
}
</style>
