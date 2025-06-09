---
title: 泛型的使用
---

# 泛型的使用

泛型让函数和类支持多种类型，提高复用性。

## 泛型函数

```ts
function identity<T>(arg: T): T {
  return arg;
}
```

## 泛型接口

```ts
interface Box<T> {
  value: T;
}
```

## 小结
泛型是 TypeScript 强大类型系统的重要组成部分。 