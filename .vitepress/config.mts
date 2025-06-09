import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Chenqi's Blog",
  description: "Frontend Development Blog",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Blog', link: '/posts/' }
    ],

    sidebar: [
      {
        text: 'Blog Posts',
        items: [
          { text: 'React 性能优化最佳实践', link: '/posts/react-performance-optimization' },
          { text: 'TypeScript 在前端开发中的最佳实践', link: '/posts/typescript-frontend-development' },
          { text: '现代前端构建工具对比与选择', link: '/posts/modern-frontend-build-tools' },
          { text: 'VSCode 插件推荐指南', link: '/posts/vscode-plugins-guide' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
