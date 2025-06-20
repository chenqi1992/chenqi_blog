import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Chenqi's Blog",
  description: "Frontend Development Blog",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Blog', link: '/posts/' },
      {
        text: '技术专栏',
        items: [
          { text: '前端工程化', link: '/posts/frontend-engineering/' },
          { text: 'React 专栏', link: '/posts/react/' },
          { text: 'TypeScript 专栏', link: '/posts/ts/' },
          { text: '性能优化', link: '/posts/performance/' },
          { text: 'Vue 3 专栏', link: '/posts/vue3/' },
          { text: '开发工具', link: '/posts/development-tools/' },
          { text: '面试指南', link: '/posts/interview/' }
        ]
      }
    ],

    sidebar: {
      '/posts/frontend-engineering/': [
        {
          text: '🏗️ 前端工程化',
          items: [
            { text: '📖 专栏导读', link: '/posts/frontend-engineering/' },
            { text: '现代前端构建工具深度对比', link: '/posts/frontend-engineering/modern-frontend-build-tools' }
          ]
        }
      ],
      '/posts/react/': [
        {
          text: '⚛️ React 基础',
          items: [
            { text: '📖 专栏导读', link: '/posts/react/' },
            { text: 'React 组件基础', link: '/posts/react/react-1' },
            { text: '状态管理与数据流', link: '/posts/react/react-2' },
            { text: '生命周期与副作用', link: '/posts/react/react-3' },
            { text: '事件处理与表单', link: '/posts/react/react-4' },
            { text: '条件渲染与列表', link: '/posts/react/react-5' }
          ]
        },
        {
          text: '🚀 React 进阶',
          items: [
            { text: 'React 性能优化最佳实践', link: '/posts/react/react-performance-optimization' }
          ]
        }
      ],
      '/posts/ts/': [
        {
          text: '🔷 TypeScript 基础',
          items: [
            { text: '📖 专栏导读', link: '/posts/ts/' },
            { text: 'TypeScript 基本类型', link: '/posts/ts/ts-1' },
            { text: '接口与类型别名', link: '/posts/ts/ts-2' },
            { text: '泛型编程', link: '/posts/ts/ts-3' },
            { text: '高级类型操作', link: '/posts/ts/ts-4' },
            { text: '装饰器与元编程', link: '/posts/ts/ts-5' }
          ]
        },
        {
          text: '🏗️ TypeScript 工程实践',
          items: [
            { text: 'TypeScript 在前端开发中的最佳实践', link: '/posts/ts/typescript-frontend-development' }
          ]
        }
      ],
      '/posts/performance/': [
        {
          text: '🚀 性能优化',
          items: [
            { text: '📖 专栏导读', link: '/posts/performance/' },
            { text: '懒加载与按需加载', link: '/posts/performance/performance-1' },
            { text: '缓存策略与优化', link: '/posts/performance/performance-2' },
            { text: '代码分割与打包优化', link: '/posts/performance/performance-3' },
            { text: '图片优化与处理', link: '/posts/performance/performance-4' },
            { text: '网络请求优化', link: '/posts/performance/performance-5' }
          ]
        }
      ],
      '/posts/vue3/': [
        {
          text: '💚 Vue 3 核心',
          items: [
            { text: '📖 专栏导读', link: '/posts/vue3/' },
            { text: 'Vue 3 基础入门', link: '/posts/vue3/vue3-1' },
            { text: 'Composition API 深度解析', link: '/posts/vue3/vue3-2' },
            { text: '响应式系统原理', link: '/posts/vue3/vue3-3' },
            { text: '组件通信与状态管理', link: '/posts/vue3/vue3-4' },
            { text: '性能优化与最佳实践', link: '/posts/vue3/vue3-5' }
          ]
        }
      ],
      '/posts/development-tools/': [
        {
          text: '🛠️ 开发工具',
          items: [
            { text: '📖 专栏导读', link: '/posts/development-tools/' },
            { text: 'VS Code 插件开发指南', link: '/posts/development-tools/vscode-plugins-guide' }
          ]
        }
      ],
      '/posts/interview/': [
        {
          text: '💼 面试指南',
          items: [
            { text: '📖 专栏导读', link: '/posts/interview/' },
            { text: 'JavaScript 基础面试题', link: '/posts/interview/interview-1' },
            { text: 'React 面试题精选', link: '/posts/interview/interview-2' },
            { text: 'CSS 与布局面试题', link: '/posts/interview/interview-3' },
            { text: '算法与数据结构', link: '/posts/interview/interview-4' },
            { text: '系统设计面试', link: '/posts/interview/interview-5' }
          ]
        }
      ],
      // 默认侧边栏 - 当访问 /posts/ 时显示
      '/posts/': [
        {
          text: '📚 技术专栏',
          items: [
            { text: '🏗️ 前端工程化', link: '/posts/frontend-engineering/' },
            { text: '⚛️ React 专栏', link: '/posts/react/' },
            { text: '🔷 TypeScript 专栏', link: '/posts/ts/' },
            { text: '🚀 性能优化', link: '/posts/performance/' },
            { text: '💚 Vue 3 专栏', link: '/posts/vue3/' },
            { text: '🛠️ 开发工具', link: '/posts/development-tools/' },
            { text: '💼 面试指南', link: '/posts/interview/' }
          ]
        }
      ]
    },

    socialLinks: [
      { 
        icon: { 
          svg: '<img src="/image.png" alt="custom icon" style="border-radius: 50%;" />' 
        }, 
        link: '' 
      }
    ]
  }
})
