---
title: Composition API 入门
---

# Composition API 入门

Vue3 推出了 Composition API，使得逻辑复用和代码组织更加灵活。

## 基本用法

```js
<script setup>
import { ref } from 'vue'
const count = ref(0)
function increment() {
  count.value++
}
</script>

<template>
  <button @click="increment">{{ count }}</button>
</template>
```

## 小结
Composition API 让 Vue 组件逻辑更加清晰和可复用。 