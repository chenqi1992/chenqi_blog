---
title: React 组件基础
---

# React 组件基础

React 是一个用于构建用户界面的 JavaScript 库。组件是 React 的核心概念之一。

## 什么是组件
组件可以看作是独立的、可复用的 UI 单元。每个组件都有自己的状态和生命周期。

## 函数组件与类组件
- **函数组件**：使用 JavaScript 函数定义。
- **类组件**：使用 ES6 class 定义。

```jsx
// 函数组件示例
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

// 类组件示例
class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}
```

## 组件的使用
组件可以像 HTML 标签一样被使用：

```jsx
<Welcome name="React" />
```

## 小结
掌握组件的基本用法是学习 React 的第一步。 