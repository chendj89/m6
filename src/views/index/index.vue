<template>
  <div>
    <uDropdown v-model="options" size="small">
      <n-button type="primary">添加路由</n-button>
    </uDropdown>
    <div style="margin-top:50px">
      <acx></acx>
    </div>
  </div>
</template>
<script lang="ts" setup name="Index">
import loadVirtual from '@/virtual'
import uDropdown from '@/unity/uDropdown'
import { encrypt, decrypt } from '@/utils/encryption'
import { useRouter } from 'vue-router'
import type { userInfo } from "@/types/users";

import acx from './a.tsx';


const router = useRouter()

/**
 * 添加动态路由
 */
const addRoute = () => {
  const name = 'virtual1'
  if (!router.hasRoute(name)) {
    loadVirtual({ name })
  }
  router.push(name)
}

const options:UserInfo[] = [
  {
    label: '用户名',
    key: 'username'
  }
]

const myKey = '九转灵山'
const myData = {
  name: myKey,
  version: '1.0.0',
  menu: ['1', 2, 3]
}
let str = encrypt(myData, myKey)
console.log('src', str)
let unstr = decrypt(str, myKey)
console.log('unstr', unstr)
</script>

<style scoped></style>
