---
title: React 事件处理
---

# React 事件处理

React 事件处理与原生 DOM 事件类似，但有一些区别。

## 事件绑定
事件名采用小驼峰命名法，如 `onClick`。

```jsx
<button onClick={handleClick}>点击我</button>
```

## 事件对象
React 事件对象是合成事件，兼容所有浏览器。

```jsx
function handleClick(event) {
  alert('按钮被点击');
}
```

## 阻止默认行为

```jsx
function handleSubmit(e) {
  e.preventDefault();
  // 处理表单提交
}
```

## 小结
掌握事件处理是开发交互式应用的基础。 