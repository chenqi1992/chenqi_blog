---
title: 首屏加载优化
---

# 首屏加载优化

首屏加载速度直接影响用户体验。

## 优化方法
- 关键资源优先加载
- SSR/静态化提升首屏渲染速度
- 预加载（preload/prefetch）

## 示例

```html
<link rel="preload" href="main.css" as="style">
```

## 小结
关注首屏加载，提升整体性能感知。 