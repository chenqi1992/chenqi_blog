---
title: 类型断言与类型守卫
---

# 类型断言与类型守卫

TypeScript 提供类型断言和类型守卫提升类型安全。

## 类型断言

```ts
let someValue: any = 'hello';
let strLength: number = (someValue as string).length;
```

## 类型守卫

```ts
function isString(x: any): x is string {
  return typeof x === 'string';
}
```

## 小结
类型断言和守卫让代码更健壮。 