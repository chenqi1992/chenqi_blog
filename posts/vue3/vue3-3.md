---
title: Reactive 响应式系统
---

# Reactive 响应式系统

Vue3 的响应式系统基于 Proxy 实现，性能更优。

## reactive 基本用法

```js
<script setup>
import { reactive } from 'vue'
const state = reactive({ count: 0 })
function increment() {
  state.count++
}
</script>

<template>
  <button @click="increment">{{ state.count }}</button>
</template>
```

## 小结
Vue3 的响应式系统更强大，使用更简单。 