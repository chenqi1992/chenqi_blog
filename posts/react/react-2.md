---
title: React 状态管理
---

# React 状态管理

状态（State）是 React 组件中用于存储数据的对象。

## useState Hook
在函数组件中，可以使用 `useState` Hook 管理状态：

```jsx
import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>增加</button>
    </div>
  );
}
```

## 状态提升
当多个组件需要共享状态时，可以将状态提升到它们的共同父组件。

## 小结
合理管理状态是构建复杂 React 应用的关键。 