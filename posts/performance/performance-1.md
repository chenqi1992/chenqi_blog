---
title: 懒加载与按需加载
---

# 懒加载与按需加载

懒加载和按需加载是提升前端性能的重要手段。

## 懒加载
只在需要时才加载资源，如图片懒加载：

```html
<img src="placeholder.jpg" data-src="real.jpg" loading="lazy" />
```

## 按需加载
代码分割，路由懒加载：

```js
const Home = () => import('./Home.vue')
```

## 小结
合理使用懒加载和按需加载能显著提升页面加载速度。 