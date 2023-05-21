<template>
  <div
    style="
      padding: 50px;
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
      align-items: flex-start;
      background: #e5ecef;
    "
  >
    <UIosWidge></UIosWidge>
    <div class="uMusic">
      <div class="uMusic-title">
        <div>云音乐国电榜</div>
      </div>
      <div class="uMusic-body">
        <div class="uMusic-item">
          <a href="http://" target="_blank">
            <img
              class="uMusic-item-icon"
              src="https://avatars.githubusercontent.com/u/105529957"
              alt=""
            />
          </a>
          <div class="uMusic-item-content">
            <div class="uMusic-item-name">Please Stay With Me</div>
            <div class="uMusic-item-desc">Martin Carlos</div>
          </div>
          <div class="uMusic-item-bagde">热门</div>
        </div>
        <div class="uMusic-item">
          <a href="http://" target="_blank">
            <img
              class="uMusic-item-icon"
              src="https://avatars.githubusercontent.com/u/105529957"
              alt=""
            />
          </a>
          <div class="uMusic-item-content">
            <div class="uMusic-item-name">Please Stay With Me</div>
            <div class="uMusic-item-desc">Martin Carlos</div>
          </div>
          <div class="uMusic-item-bagde">热门</div>
        </div>
        <div class="uMusic-item">
          <a href="http://" target="_blank">
            <img
              class="uMusic-item-icon"
              src="https://avatars.githubusercontent.com/u/105529957"
              alt=""
            />
          </a>
          <div class="uMusic-item-content">
            <div class="uMusic-item-name">Please Stay With Me</div>
            <div class="uMusic-item-desc">Martin Carlos</div>
          </div>
          <div class="uMusic-item-bagde">热门</div>
        </div>
      </div>
    </div>
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
    <div class="job-card">
      <div class="job-card-header">
        <svg
          viewBox="0 -13 512 512"
          xmlns="http://www.w3.org/2000/svg"
          style="background-color: #2e2882"
        >
          <g fill="#feb0a5">
            <path
              d="M256 92.5l127.7 91.6L512 92 383.7 0 256 91.5 128.3 0 0 92l128.3 92zm0 0M256 275.9l-127.7-91.5L0 276.4l128.3 92L256 277l127.7 91.5 128.3-92-128.3-92zm0 0"
            ></path>
            <path d="M127.7 394.1l128.4 92 128.3-92-128.3-92zm0 0"></path>
          </g>
          <path
            d="M512 92L383.7 0 256 91.5v1l127.7 91.6zm0 0M512 276.4l-128.3-92L256 275.9v1l127.7 91.5zm0 0M256 486.1l128.4-92-128.3-92zm0 0"
            fill="#feb0a5"
          ></path>
        </svg>
        <div class="menu-dot"></div>
      </div>
      <div class="job-card-title">UI / UX Designer</div>
      <div class="job-card-subtitle">
        The User Experience Designer position exists to create compelling and
        digital user experience through excellent design...
      </div>
      <div class="job-detail-buttons">
        <button class="search-buttons detail-button">Full Time</button>
        <button class="search-buttons detail-button">Min. 1 Year</button>
        <button class="search-buttons detail-button">Senior Level</button>
      </div>
      <div class="job-card-buttons">
        <button class="search-buttons card-buttons">Apply Now</button>
        <button class="search-buttons card-buttons-msg">Messages</button>
      </div>
    </div>
    <div
      class="oDialog"
      :style="{ width: box.width + 'px', height: box.height + 'px' }"
    >
      <div id="header" class="oDialog-header">标题</div>
      <div class="oDialog-content">
        <div class="oDialog-resize"></div>
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

import useDialog2 from '@/plugins/useDialog2'
// import Aa from './aa.vue'
// const dialog2 = useDialog2()
// dialog2({
//   com: Aa,
//   opts: {
//     title: '00',
//     params: {}
//   }
// })
import { drag, unDrag } from '@/hooks/useDialogDragger'
onMounted(() => {
  drag(document.getElementById('header') as HTMLElement)
})

const isResizing = ref(false)
const startX = ref(0)
const startY = ref(0)
const startWidth = ref(0)
const startHeight = ref(0)
const box = ref({
  width: 320,
  height: 300
})
const startResize = (event: MouseEvent) => {
  isResizing.value = true
  startX.value = event.pageX
  startY.value = event.pageY
  startWidth.value = box.value.width
  startHeight.value = box.value.width
  window.addEventListener('mousemove', resize)
  window.addEventListener('mouseup', stopResize)
}

const resize = (event: MouseEvent) => {
  if (isResizing.value) {
    const width = startWidth.value + (event.pageX - startX.value)
    const height = startHeight.value + (event.pageY - startY.value)
    box.value.width = width
    box.value.height = height
  }
}

const stopResize = () => {
  isResizing.value = false
  window.removeEventListener('mousemove', resize)
  window.removeEventListener('mouseup', stopResize)
}
</script>

<style lang="scss" scoped>
.oDialog {
  position: fixed;
  left: 0;
  top: 0;
  width: 320px;
  height: 300px;
  background-color: #ff5c00;
  resize: both;
  overflow: auto;
  min-width: 200px;
  min-height: 300px;
  // max-width: 600px;
  // max-height: 360px;
  aspect-ratio: 1/1;
  &::-webkit-resizer {
    background-image: url('@/assets/svgs/shop.svg');
    background-repeat: no-repeat;
    background-size: contain;
    width: 20px;
    height: 20px;
  }
  &-header {
    height: 36px;
    background-color: #ff5c00;
    cursor: move;
  }
  &-resize {
    display: none;
    position: absolute;
    right: 0;
    bottom: 0;
    width: 36px;
    height: 36px;
    background-color: #fff;
  }
}

.uGridWidget {
  --width: 280px;
  --gap: 10px;
  --radius: 8px;
  --count: 5;
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
    // width: calc(var(--width) / 7 - var(--gap) * 7 / 7);
    width: 35px;
    height: 35px;
    img {
      display: block;
      width: 100%;
      height: 100%;
      border-radius: 4px;
    }
  }
}
.uAli {
  --width: 280px;
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
.uMusic {
  background: #fff;
  box-shadow: 0 0 6px 1px rgba(180, 180, 180, 0.2);
  width: 280px;
  border-radius: 8px;
  &-title {
    display: flex;
    padding: 8px 10px;
    font-weight: bold;
  }
  &-body {
    padding-bottom: 10px;
  }
  &-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 10px;
    &-icon {
      display: block;
      width: 36px;
      height: 36px;
      border-radius: 8px;
    }
    &-content {
      flex: 1;
      padding: 0 10px;
    }
    &-bagde {
      font-size: 12px;
      color: #ff5c00;
    }
    &-name {
      font-size: 14px;
    }
    &-desc {
      font-size: 14px;
      color: #999;
    }
  }
}
.menu-dot {
  background-color: var(--placeholder-color);
  box-shadow: -6px 0 0 0 var(--placeholder-color),
    6px 0 0 0 var(--placeholder-color);
  width: 4px;
  height: 4px;
  border: 0;
  padding: 0;
  border-radius: 50%;
  margin-left: auto;
  margin-right: 8px;
}
.job-card {
  width: 320px;
  height: 280px;
  padding: 20px 16px;
  background-color: var(--header-bg-color);
  background: #e91e63;
  border-radius: 8px;
  cursor: pointer;
  transition: 0.2s;
  &:hover {
    transform: scale(1.02);
  }
  svg {
    width: 46px;
    padding: 10px;
    border-radius: 8px;
  }
  &-title {
    font-weight: 600;
    margin-top: 16px;
    font-size: 14px;
  }
  &-subtitle {
    color: var(--subtitle-color);
    font-size: 13px;
    margin-top: 14px;
    line-height: 1.6em;
  }
  &-header {
    display: flex;
    align-items: flex-start;
  }
}
.job-card-buttons {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-top: 4px;
}
.search-buttons {
  --active-color: #0162ff;
  --button-color: #fff;
  border: none;
  color: var(--button-color);
  background-color: var(--active-color);
  padding: 8px 10px;
  border-radius: 6px;
  font-size: 13px;
  font-weight: 600;
  margin-top: 14px;
}
.detail-button {
  background-color: var(--active-light-color);
  color: var(--active-color);
  font-size: 11px;
  font-weight: 500;
  padding: 6px 8px;
  border-radius: 4px;
}
</style>
