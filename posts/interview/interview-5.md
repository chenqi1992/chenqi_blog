---
title: 前端路由原理
---

# 前端路由原理

前端路由用于实现单页应用的页面切换。

## 实现方式
- hash 路由：监听 location.hash 变化
- history 路由：使用 History API

## 示例

```js
window.addEventListener('hashchange', () => {
  // 根据 hash 切换页面
})
```

## 小结
掌握路由原理有助于理解 SPA 的实现机制。 