---
title: 类型推断与类型兼容
---

# 类型推断与类型兼容

TypeScript 能自动推断变量类型，并支持结构化类型兼容。

## 类型推断

```ts
let x = 123; // 推断为 number
```

## 类型兼容

```ts
interface A { name: string }
interface B { name: string; age: number }
let a: A = { name: 'Tom' }
let b: B = { name: 'Jerry', age: 18 }
a = b // B 兼容 A
```

## 小结
类型推断和兼容让 TypeScript 更易用。 