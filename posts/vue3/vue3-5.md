---
title: emits 事件声明
---

# emits 事件声明

Vue3 推荐在组件中通过 `emits` 选项声明自定义事件。

## 基本用法

```js
<script setup>
defineEmits(['submit'])
</script>
```

## 好处
- 明确事件接口
- 更好的类型推断

## 小结
事件声明让组件通信更规范。 