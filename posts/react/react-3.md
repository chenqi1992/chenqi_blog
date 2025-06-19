---
title: React 生命周期
---

# React 生命周期

生命周期是指组件从创建到销毁的过程。

## 类组件的生命周期方法
- `componentDidMount`：组件挂载后调用
- `componentDidUpdate`：组件更新后调用
- `componentWillUnmount`：组件卸载前调用

```jsx
class MyComponent extends React.Component {
  componentDidMount() {
    // 初始化
  }
  componentWillUnmount() {
    // 清理
  }
  render() {
    return <div>Hello</div>;
  }
}
```

## 函数组件中的 useEffect
函数组件通过 `useEffect` 模拟生命周期：

```jsx
import { useEffect } from 'react';

useEffect(() => {
  // 组件挂载
  return () => {
    // 组件卸载
  };
}, []);
```

## 小结
理解生命周期有助于更好地控制组件行为。 