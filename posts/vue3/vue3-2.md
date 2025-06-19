---
title: Teleport 传送门
---

# Teleport 传送门

Teleport 是 Vue3 新增的一个内置组件，用于将子组件渲染到 DOM 的其他位置。

## 基本用法

```vue
<template>
  <teleport to="body">
    <div class="modal">我是弹窗</div>
  </teleport>
</template>
```

## 应用场景
常用于弹窗、全局提示等需要脱离父组件 DOM 层级的场景。

## 小结
Teleport 提供了更灵活的 DOM 结构控制能力。 