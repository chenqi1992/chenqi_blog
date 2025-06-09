---
title: 防抖与节流
---

# 防抖与节流

防抖和节流是前端高频事件优化常用手段。

## 防抖（Debounce）
事件触发后延迟一段时间执行，若期间再次触发则重新计时。

```js
function debounce(fn, delay) {
  let timer
  return function(...args) {
    clearTimeout(timer)
    timer = setTimeout(() => fn.apply(this, args), delay)
  }
}
```

## 节流（Throttle）
规定时间内只执行一次。

```js
function throttle(fn, delay) {
  let last = 0
  return function(...args) {
    const now = Date.now()
    if (now - last > delay) {
      last = now
      fn.apply(this, args)
    }
  }
}
```

## 小结
防抖和节流能有效提升页面性能和用户体验。 