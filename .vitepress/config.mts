import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "chenqi_blob",
  description: "a blob ",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'React',
        items: [
          { text: '组件基础', link: '/posts/react/react-1' },
          { text: '状态管理', link: '/posts/react/react-2' },
          { text: '生命周期', link: '/posts/react/react-3' },
          { text: '事件处理', link: '/posts/react/react-4' },
          { text: 'Props 属性', link: '/posts/react/react-5' },
        ]
      },
      {
        text: 'Vue3',
        items: [
          { text: 'Composition API 入门', link: '/posts/vue3/vue3-1' },
          { text: 'Teleport 传送门', link: '/posts/vue3/vue3-2' },
          { text: 'Reactive 响应式系统', link: '/posts/vue3/vue3-3' },
          { text: 'Fragment 多根节点', link: '/posts/vue3/vue3-4' },
          { text: 'emits 事件声明', link: '/posts/vue3/vue3-5' },
        ]
      },
      {
        text: '前端性能优化',
        items: [
          { text: '懒加载与按需加载', link: '/posts/performance/performance-1' },
          { text: '资源压缩与合并', link: '/posts/performance/performance-2' },
          { text: '浏览器缓存优化', link: '/posts/performance/performance-3' },
          { text: '首屏加载优化', link: '/posts/performance/performance-4' },
          { text: '图片优化策略', link: '/posts/performance/performance-5' },
        ]
      },
      {
        text: 'TypeScript',
        items: [
          { text: '基本类型', link: '/posts/ts/ts-1' },
          { text: '接口与类型别名', link: '/posts/ts/ts-2' },
          { text: '泛型的使用', link: '/posts/ts/ts-3' },
          { text: '类型断言与类型守卫', link: '/posts/ts/ts-4' },
          { text: '类型推断与类型兼容', link: '/posts/ts/ts-5' },
        ]
      },
      {
        text: '前端面试题',
        items: [
          { text: '事件循环机制', link: '/posts/interview/interview-1' },
          { text: '防抖与节流', link: '/posts/interview/interview-2' },
          { text: '虚拟DOM原理', link: '/posts/interview/interview-3' },
          { text: '跨域及解决方案', link: '/posts/interview/interview-4' },
          { text: '前端路由原理', link: '/posts/interview/interview-5' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
