---
title: React Props 属性
---

# React Props 属性

Props（属性）用于父组件向子组件传递数据。

## 传递 Props

```jsx
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

<Welcome name="React" />
```

## Props 的只读性
Props 是只读的，子组件不能修改从父组件接收到的 props。

## 默认 Props
可以为组件设置默认 props：

```jsx
function Button({ type = 'primary' }) {
  return <button className={type}>按钮</button>;
}
```

## 小结
合理使用 props 可以实现组件间的数据传递和复用。 