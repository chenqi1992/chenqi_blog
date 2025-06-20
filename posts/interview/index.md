# 前端面试指南

全面的前端面试准备指南，涵盖技术基础、算法题目、系统设计和面试技巧。

## 📚 文章目录

### 面试题解析
- [JavaScript 基础面试题](./interview-1.md) - 核心概念和常见问题
- [React 面试题精选](./interview-2.md) - React 生态系统面试重点
- [CSS 与布局面试题](./interview-3.md) - 样式和布局相关问题
- [算法与数据结构](./interview-4.md) - 前端常见算法题
- [系统设计面试](./interview-5.md) - 前端架构设计题目

## 🎯 面试准备路径

### 📚 基础知识巩固
1. **JavaScript 核心** - 原型链、闭包、异步编程
2. **HTML/CSS** - 语义化、布局、响应式设计
3. **浏览器原理** - 渲染机制、性能优化
4. **网络协议** - HTTP/HTTPS、TCP/IP 基础

### 🚀 框架与工具
1. **React/Vue** - 框架原理和最佳实践
2. **状态管理** - Redux、Vuex、Pinia
3. **构建工具** - Webpack、Vite、Rollup
4. **工程化** - 代码规范、测试、CI/CD

### 🧠 算法与思维
1. **数据结构** - 数组、链表、树、图
2. **算法基础** - 排序、搜索、动态规划
3. **系统设计** - 架构思维、扩展性设计
4. **问题解决** - 分析能力、逻辑思维

## 💼 面试类型分析

### 技术面试
- **基础知识** - 概念理解和原理解释
- **代码实现** - 现场编程和算法题
- **项目经验** - 技术选型和问题解决
- **系统设计** - 架构设计和扩展性

### 行为面试
- **项目经历** - STAR 方法描述项目
- **团队协作** - 沟通能力和协作经验
- **学习能力** - 技术成长和自我提升
- **职业规划** - 发展方向和目标

## 🔥 高频面试题

### JavaScript 核心
```javascript
// 1. 防抖和节流实现
function debounce(func, delay) {
  let timeoutId
  return function (...args) {
    clearTimeout(timeoutId)
    timeoutId = setTimeout(() => func.apply(this, args), delay)
  }
}

function throttle(func, delay) {
  let lastCall = 0
  return function (...args) {
    const now = Date.now()
    if (now - lastCall >= delay) {
      lastCall = now
      func.apply(this, args)
    }
  }
}

// 2. 深拷贝实现
function deepClone(obj, map = new WeakMap()) {
  if (obj === null || typeof obj !== 'object') return obj
  if (obj instanceof Date) return new Date(obj)
  if (obj instanceof Array) return obj.map(item => deepClone(item, map))
  if (map.has(obj)) return map.get(obj)
  
  const cloned = {}
  map.set(obj, cloned)
  
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      cloned[key] = deepClone(obj[key], map)
    }
  }
  
  return cloned
}

// 3. Promise 实现
class MyPromise {
  constructor(executor) {
    this.state = 'pending'
    this.value = undefined
    this.reason = undefined
    this.onFulfilledCallbacks = []
    this.onRejectedCallbacks = []
    
    const resolve = (value) => {
      if (this.state === 'pending') {
        this.state = 'fulfilled'
        this.value = value
        this.onFulfilledCallbacks.forEach(fn => fn())
      }
    }
    
    const reject = (reason) => {
      if (this.state === 'pending') {
        this.state = 'rejected'
        this.reason = reason
        this.onRejectedCallbacks.forEach(fn => fn())
      }
    }
    
    try {
      executor(resolve, reject)
    } catch (error) {
      reject(error)
    }
  }
  
  then(onFulfilled, onRejected) {
    // Promise/A+ 规范实现
    // ... 详细实现
  }
}
```

### React 相关
```jsx
// 1. 自定义 Hook 实现
function useLocalStorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key)
      return item ? JSON.parse(item) : initialValue
    } catch (error) {
      return initialValue
    }
  })
  
  const setValue = (value) => {
    try {
      setStoredValue(value)
      window.localStorage.setItem(key, JSON.stringify(value))
    } catch (error) {
      console.error(error)
    }
  }
  
  return [storedValue, setValue]
}

// 2. 高阶组件实现
function withLoading(WrappedComponent) {
  return function WithLoadingComponent(props) {
    if (props.isLoading) {
      return <div>Loading...</div>
    }
    return <WrappedComponent {...props} />
  }
}

// 3. Context 使用
const ThemeContext = createContext()

function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light')
  
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}
```

### 算法题目
```javascript
// 1. 两数之和
function twoSum(nums, target) {
  const map = new Map()
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i]
    if (map.has(complement)) {
      return [map.get(complement), i]
    }
    map.set(nums[i], i)
  }
  return []
}

// 2. 最长不重复子串
function lengthOfLongestSubstring(s) {
  const set = new Set()
  let left = 0, maxLength = 0
  
  for (let right = 0; right < s.length; right++) {
    while (set.has(s[right])) {
      set.delete(s[left])
      left++
    }
    set.add(s[right])
    maxLength = Math.max(maxLength, right - left + 1)
  }
  
  return maxLength
}

// 3. 二叉树遍历
function inorderTraversal(root) {
  const result = []
  
  function traverse(node) {
    if (node) {
      traverse(node.left)
      result.push(node.val)
      traverse(node.right)
    }
  }
  
  traverse(root)
  return result
}
```

## 🎨 系统设计题目

### 前端架构设计
- **单页应用架构** - 路由、状态管理、组件设计
- **微前端架构** - 模块联邦、子应用通信
- **组件库设计** - API 设计、主题系统、文档
- **性能优化方案** - 加载优化、渲染优化、监控

### 具体场景
- **电商网站首页** - 商品展示、搜索、购物车
- **实时聊天应用** - 消息同步、在线状态、文件传输
- **数据可视化平台** - 图表渲染、数据处理、交互设计
- **内容管理系统** - 权限控制、内容编辑、发布流程

## 📖 面试技巧

### 准备阶段
1. **简历优化** - 突出技术亮点和项目经验
2. **项目梳理** - 准备 3-5 个代表性项目
3. **知识体系** - 构建完整的技术知识图谱
4. **模拟练习** - 找朋友或同事进行模拟面试

### 面试过程
1. **思路清晰** - 先理解题目，再给出解决方案
2. **代码规范** - 注意代码风格和最佳实践
3. **主动沟通** - 遇到问题及时与面试官沟通
4. **时间管理** - 合理分配各个环节的时间

### 常见问题应对
- **不会的问题** - 诚实说明，展示学习能力
- **项目细节** - 准备技术难点和解决方案
- **职业规划** - 结合公司发展谈个人目标
- **薪资期望** - 了解市场行情，合理期望

## 📚 学习资源

- [JavaScript 高级程序设计](https://book.douban.com/subject/10546125/)
- [你不知道的 JavaScript](https://github.com/getify/You-Dont-Know-JS)
- [React 官方文档](https://reactjs.org/)
- [Vue 官方文档](https://vuejs.org/)
- [MDN Web 文档](https://developer.mozilla.org/)
- [LeetCode 算法题](https://leetcode.com/)

## 💡 备考建议

1. **系统学习** - 构建完整的知识体系
2. **项目实践** - 通过项目巩固理论知识
3. **定期复习** - 保持知识的新鲜度
4. **模拟练习** - 提高面试表现能力
5. **持续学习** - 关注技术发展趋势

---

*面试不仅是技术能力的展示，更是综合素质的体现*
