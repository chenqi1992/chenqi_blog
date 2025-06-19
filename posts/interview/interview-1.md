---
title: 事件循环机制
---

# 事件循环机制

事件循环（Event Loop）是 JavaScript 执行异步任务的核心机制。

## 执行流程
- 同步任务进入主线程
- 异步任务进入任务队列
- 主线程空闲时取出队列任务执行

## 宏任务与微任务
- 宏任务：setTimeout、setInterval、I/O
- 微任务：Promise.then、MutationObserver

## 示例

```js
console.log(1)
setTimeout(() => console.log(2))
Promise.resolve().then(() => console.log(3))
console.log(4)
// 输出顺序：1 4 3 2
```

## 小结
理解事件循环有助于分析异步代码执行顺序。 