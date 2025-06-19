---
title: 接口与类型别名
---

# 接口与类型别名

TypeScript 用 interface 和 type 定义对象结构。

## interface

```ts
interface Person {
  name: string;
  age: number;
}
```

## type

```ts
type Point = {
  x: number;
  y: number;
}
```

## 区别
- interface 可扩展、合并
type 更灵活，可用于联合类型等

## 小结
合理选择 interface 和 type 能提升代码可维护性。 